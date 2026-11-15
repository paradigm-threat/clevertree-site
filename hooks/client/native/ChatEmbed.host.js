/**
 * Web host + custom element for ct-chat-embed — Clevertree Chat board.
 * CleverScript stub: hooks/client/components/ChatEmbed.jsx
 * Domain = embedding host; data-path sets subpath only.
 */
(function (global) {
  'use strict'

  var TAG = 'ct-chat-embed'
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

  function remountBoards() {
    if (
      typeof global.ClevertreeBoard === 'object' &&
      typeof global.ClevertreeBoard.boot === 'function'
    ) {
      try {
        global.ClevertreeBoard.boot()
      } catch (e) {}
    }
  }

  function ensureJs(done) {
    if (!global.document) {
      if (done) done()
      return
    }
    if (global.__ctBoardSnippetReady) {
      remountBoards()
      if (done) done()
      return
    }
    var existing = global.document.querySelector('script[data-ct-clevertree-board="1"]')
    if (existing) {
      if (existing.getAttribute('data-ready') === '1') {
        global.__ctBoardSnippetReady = true
        remountBoards()
        if (done) done()
        return
      }
      existing.addEventListener('load', function () {
        global.__ctBoardSnippetReady = true
        remountBoards()
        if (done) done()
      })
      return
    }
    var s = global.document.createElement('script')
    s.src = JS_SRC
    s.setAttribute('data-ct-clevertree-board', '1')
    s.onload = function () {
      s.setAttribute('data-ready', '1')
      global.__ctBoardSnippetReady = true
      remountBoards()
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
    if (!el) return
    if (el.getAttribute('data-ct-chat-upgraded') === '1') {
      // Tip host may load after a cached host already marked upgraded with no board.
      if (el.querySelector('.ct-app,[data-live]')) return
      if (el.querySelector('[data-clevertree-board] .ct-app')) return
    }
    el.setAttribute('data-ct-chat-upgraded', '1')
    el.setAttribute('data-relay-park-native', NATIVE)
    configureBoard(el)
    ensureCss()
    ensureJs(function () {
      addFallback(el)
    })
  }

  function buildChatEmbed(props) {
    var el = global.document.createElement(TAG)
    el.className = 'ct-chat-embed'
    el.setAttribute('data-relay-park-native', NATIVE)
    el.setAttribute('data-page-scope', 'path')
    var path = '/'
    if (props) {
      if (props.path != null) path = String(props.path)
      else if (props['data-path'] != null) path = String(props['data-path'])
      var cls = props.className || props['class']
      if (cls) el.className = String(cls)
      var label = props['aria-label'] || props.ariaLabel
      if (label) el.setAttribute('aria-label', String(label))
    }
    el.setAttribute('data-path', normalizePath(path))
    if (!el.getAttribute('aria-label')) {
      el.setAttribute('aria-label', 'Clevertree Chat debate board')
    }
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
        var host = nodes[i]
        if (host.tagName && host.tagName.toLowerCase() === TAG) {
          bootHost(host)
          continue
        }
        if (host.getAttribute('data-ct-chat-upgraded') === '1' && host.querySelector('.ct-app')) {
          continue
        }
        var built = buildChatEmbed({
          className: host.className,
          'data-path': host.getAttribute('data-path') || '/',
          'aria-label': host.getAttribute('aria-label'),
        })
        host.replaceWith(built)
      }
    } catch (e) {}
  }

  function defineElement() {
    if (!global.customElements) return
    if (global.customElements.get(TAG)) return
    global.customElements.define(
      TAG,
      class extends global.HTMLElement {
        connectedCallback() {
          bootHost(this)
        }
      },
    )
  }

  function register() {
    defineElement()
    var reg = global.__relayRegisterParkNative
    if (typeof reg === 'function') {
      reg(NATIVE, buildChatEmbed)
      reg(TAG, buildChatEmbed)
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
