/**
 * Web host for ct-chat-embed — wires Clevertree Chat snippet to the host page path.
 * Domain comes from location (where the board is embedded); data-path sets subpath only.
 */
(function (global) {
  'use strict'

  var NATIVE = 'ct-chat-embed'
  var API_BASE = 'https://api.clevertree.chat'
  var CSS_HREF = API_BASE + '/fronts/snippet/clevertree-board.css'
  var JS_SRC = API_BASE + '/fronts/snippet/clevertree-board.js'

  function normalizePath(raw) {
    var p = String(raw || '/').split('?')[0].split('#')[0]
    if (!p || p.charAt(0) !== '/') p = '/' + p
    if (p.length > 1 && p.charAt(p.length - 1) === '/') p = p.slice(0, -1)
    if (p === '/index.md' || p === '/index.html') return '/'
    if (p.length > 4 && p.slice(-3) === '.md') p = p.slice(0, -3)
    return p || '/'
  }

  function embedOrigin() {
    try {
      if (global.location && global.location.origin) {
        var o = String(global.location.origin)
        if (o.indexOf('http') === 0) return o
      }
    } catch (e) {}
    return 'https://clevertree.net'
  }

  function pageUrl(path) {
    var origin = embedOrigin()
    var p = normalizePath(path)
    if (p === '/') return origin + '/'
    return origin + p
  }

  function ensureCss() {
    if (!global.document) return
    if (global.document.querySelector('link[data-ct-clevertree-board-css="1"]')) return
    var link = global.document.createElement('link')
    link.rel = 'stylesheet'
    link.href = CSS_HREF
    link.setAttribute('data-ct-clevertree-board-css', '1')
    global.document.head.appendChild(link)
  }

  function ensureJs(done) {
    if (!global.document) {
      if (done) done()
      return
    }
    var existing = global.document.querySelector('script[data-ct-clevertree-board="1"]')
    if (existing) {
      if (existing.getAttribute('data-ready') === '1') {
        // Re-run snippet IIFE so newly configured boards mount (skips _boardMounted).
        var again = global.document.createElement('script')
        again.src = JS_SRC + '?remount=' + String(Date.now())
        again.onload = function () {
          if (done) done()
        }
        again.onerror = function () {
          if (done) done()
        }
        global.document.head.appendChild(again)
        return
      }
      existing.addEventListener('load', function () {
        if (done) done()
      })
      return
    }
    var s = global.document.createElement('script')
    s.src = JS_SRC
    s.setAttribute('data-ct-clevertree-board', '1')
    s.onload = function () {
      s.setAttribute('data-ready', '1')
      if (done) done()
    }
    s.onerror = function () {
      if (done) done()
    }
    global.document.head.appendChild(s)
  }

  function configureBoard(el) {
    if (!el) return
    var path = el.getAttribute('data-path') || '/'
    var url = pageUrl(path)
    el.setAttribute('data-clevertree-board', '')
    el.setAttribute('data-api', 'chat')
    el.setAttribute('data-api-base', API_BASE)
    el.setAttribute('data-url', url)
    el.setAttribute('data-page-scope', 'path')
    // Never invent a foreign domain — strip if a caller tried.
    try {
      var parsed = new global.URL(url)
      var hostOrigin = embedOrigin()
      if (parsed.origin !== hostOrigin) {
        el.setAttribute('data-url', hostOrigin + normalizePath(parsed.pathname))
      }
    } catch (e) {}
  }

  function addFallback(el) {
    if (!el || el.querySelector('.ct-chat-embed-fallback')) return
    var path = normalizePath(el.getAttribute('data-path') || '/')
    var url = pageUrl(path)
    var p = global.document.createElement('p')
    p.className = 'ct-muted ct-chat-embed-fallback'
    p.style.marginTop = '0.75rem'
    var a = global.document.createElement('a')
    a.href = 'https://clevertree.chat/w/' + encodeURIComponent(url.replace(/^https?:\/\//, ''))
    a.target = '_blank'
    a.rel = 'noopener noreferrer'
    a.textContent = 'Open this page’s debate'
    p.appendChild(a)
    el.appendChild(p)
  }

  function bootHost(el) {
    if (!el || el.getAttribute('data-ct-chat-upgraded') === '1') return
    el.setAttribute('data-ct-chat-upgraded', '1')
    configureBoard(el)
    ensureCss()
    ensureJs(function () {
      addFallback(el)
    })
  }

  function buildChatEmbed(props) {
    var el = global.document.createElement('div')
    el.className = 'ct-chat-embed'
    el.setAttribute('data-relay-park-native', NATIVE)
    el.setAttribute('data-page-scope', 'path')
    var path = '/'
    if (props) {
      if (props.path != null) path = String(props.path)
      else if (props['data-path'] != null) path = String(props['data-path'])
      var cls = props.className || props['class']
      if (cls) el.className = String(cls)
    }
    el.setAttribute('data-path', normalizePath(path))
    global.setTimeout(function () {
      bootHost(el)
    }, 0)
    return el
  }

  function upgradePlaceholders() {
    try {
      var nodes = global.document.querySelectorAll(
        '[data-relay-park-native="' + NATIVE + '"]',
      )
      for (var i = 0; i < nodes.length; i++) {
        bootHost(nodes[i])
      }
    } catch (e) {}
  }

  function register() {
    var reg = global.__relayRegisterParkNative
    if (typeof reg === 'function') {
      reg(NATIVE, buildChatEmbed)
    }
    upgradePlaceholders()
  }

  function boot() {
    register()
    var n = 0
    var t = global.setInterval(function () {
      register()
      n += 1
      if (typeof global.__relayRegisterParkNative === 'function' || n > 80) {
        global.clearInterval(t)
      }
    }, 50)
    var sched = global.__fbScheduleParkNativeReupgrade
    if (typeof sched === 'function') {
      sched(function () {
        register()
      })
    }
  }

  if (typeof global.document !== 'undefined') {
    if (global.document.readyState === 'loading') {
      global.document.addEventListener('DOMContentLoaded', boot)
    } else {
      boot()
    }
  } else {
    register()
  }
})(typeof globalThis !== 'undefined' ? globalThis : this)
