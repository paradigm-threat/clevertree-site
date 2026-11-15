/**
 * Web host for ct-songwalker-embed — iframe SongWalker UI; SNESology link only.
 */
(function (global) {
  'use strict'

  var NATIVE = 'ct-songwalker-embed'
  var SRC = 'https://songwalker.net'

  function fillHost(el) {
    while (el.firstChild) el.removeChild(el.firstChild)
    el.className = 'ct-songwalker-embed'

    var frame = global.document.createElement('iframe')
    frame.className = 'ct-songwalker-frame'
    frame.src = SRC
    frame.title = 'SongWalker'
    frame.loading = 'lazy'
    frame.setAttribute('referrerpolicy', 'no-referrer-when-downgrade')
    el.appendChild(frame)

    var foot = global.document.createElement('p')
    foot.className = 'ct-muted ct-embed-footnote'
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
    if (!el || el.getAttribute('data-ct-songwalker-upgraded') === '1') return
    el.setAttribute('data-ct-songwalker-upgraded', '1')
    el.setAttribute('data-relay-park-native', NATIVE)
    fillHost(el)
  }

  function buildSongWalkerEmbed() {
    var el = global.document.createElement('div')
    el.className = 'ct-songwalker-embed'
    el.setAttribute('data-relay-park-native', NATIVE)
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
      reg(NATIVE, buildSongWalkerEmbed)
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
