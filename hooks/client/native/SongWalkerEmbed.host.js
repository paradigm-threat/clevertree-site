/**
 * Web host + custom element for ct-songwalker-embed — iframe SongWalker UI.
 * CleverScript stub: hooks/client/components/SongWalkerEmbed.jsx
 * SNESology is the same software — footnote link only.
 *
 * Frame size is set inline: themed-styler only emits selectors present in SSR,
 * and the iframe is created after upgrade, so .ct-songwalker-frame CSS is dropped.
 */
(function (global) {
  'use strict'

  var TAG = 'ct-songwalker-embed'
  var NATIVE = 'ct-songwalker-embed'
  var SRC = 'https://songwalker.net'
  var FRAME_H = '28rem'

  function styleFrame(frame) {
    if (!frame) return
    frame.style.display = 'block'
    frame.style.boxSizing = 'border-box'
    frame.style.width = '100%'
    frame.style.height = FRAME_H
    frame.style.minHeight = FRAME_H
    frame.style.border = '1px solid rgba(183, 255, 0, 0.28)'
    frame.style.borderRadius = '0.5rem'
    frame.style.background = '#041619'
  }

  function styleHost(el) {
    if (!el) return
    el.style.display = 'flex'
    el.style.flexDirection = 'column'
    el.style.gap = '0.5rem'
    el.style.width = '100%'
  }

  function fillHost(el) {
    while (el.firstChild) el.removeChild(el.firstChild)
    el.className = 'ct-songwalker-embed'
    styleHost(el)

    var frame = global.document.createElement('iframe')
    frame.className = 'ct-songwalker-frame'
    frame.src = SRC
    frame.title = 'SongWalker'
    frame.loading = 'lazy'
    frame.setAttribute('referrerpolicy', 'no-referrer-when-downgrade')
    frame.setAttribute('allow', 'autoplay; clipboard-write')
    styleFrame(frame)
    el.appendChild(frame)

    var foot = global.document.createElement('p')
    foot.className = 'ct-muted ct-embed-footnote'
    foot.style.margin = '0'
    foot.style.fontSize = '0.875rem'
    var a1 = global.document.createElement('a')
    a1.href = SRC
    a1.target = '_blank'
    a1.rel = 'noopener noreferrer'
    a1.textContent = 'songwalker.net'
    foot.appendChild(a1)
    foot.appendChild(global.document.createTextNode(' · Also: '))
    var a2 = global.document.createElement('a')
    a2.href = 'https://snesology.org'
    a2.target = '_blank'
    a2.rel = 'noopener noreferrer'
    a2.textContent = 'SNESology'
    foot.appendChild(a2)
    foot.appendChild(global.document.createTextNode(' (same software)'))
    el.appendChild(foot)
  }

  function bootHost(el) {
    if (!el) return
    if (el.getAttribute('data-ct-songwalker-upgraded') === '1') {
      var frame = el.querySelector('iframe.ct-songwalker-frame, iframe')
      if (frame && frame.clientHeight >= 200) return
      // Tip host: resize a tiny default iframe left by a cached host.
      if (frame) {
        styleFrame(frame)
        styleHost(el)
        return
      }
    }
    el.setAttribute('data-ct-songwalker-upgraded', '1')
    el.setAttribute('data-relay-park-native', NATIVE)
    fillHost(el)
  }

  function buildSongWalkerEmbed(props) {
    var el = global.document.createElement(TAG)
    el.className = 'ct-songwalker-embed'
    el.setAttribute('data-relay-park-native', NATIVE)
    if (props) {
      var cls = props.className || props['class']
      if (cls) el.className = String(cls)
      var label = props['aria-label'] || props.ariaLabel
      if (label) el.setAttribute('aria-label', String(label))
    }
    if (!el.getAttribute('aria-label')) {
      el.setAttribute('aria-label', 'SongWalker editor')
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
        if (
          host.getAttribute('data-ct-songwalker-upgraded') === '1' &&
          host.querySelector('iframe') &&
          host.querySelector('iframe').clientHeight >= 200
        ) {
          continue
        }
        var built = buildSongWalkerEmbed({
          className: host.className,
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
      reg(NATIVE, buildSongWalkerEmbed)
      reg(TAG, buildSongWalkerEmbed)
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
