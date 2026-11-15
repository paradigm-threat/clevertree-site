/**
 * Park-native boot for clevertree.net.
 * Gateway injects this as park-host-common.js when data-relay-park-native is present.
 * CleverScript shells stay in hooks/client/components; embeds upgrade via *.host.js.
 */
(function (global) {
  'use strict'
  if (typeof global.__fbScheduleParkNativeReupgrade !== 'function') {
    global.__fbScheduleParkNativeReupgrade = function (fn) {
      if (typeof fn === 'function') {
        try {
          fn()
        } catch (e) {}
        if (global.document && global.document.addEventListener) {
          global.document.addEventListener('relay-soft-hydrate', function () {
            try {
              fn()
            } catch (e2) {}
          })
        }
      }
    }
  }

  var hosts = [
    '/hooks/client/native/TreeGrow.host.js?v=7',
    '/hooks/client/native/ChatEmbed.host.js?v=1',
    '/hooks/client/native/SongWalkerEmbed.host.js?v=1',
  ]

  function loadHost(src) {
    if (!global.document) return
    if (global.document.querySelector('script[src="' + src + '"]')) return
    // Also match without query for TreeGrow mirrors
    var base = src.split('?')[0]
    var existing = global.document.querySelectorAll('script[src]')
    for (var i = 0; i < existing.length; i++) {
      var s = existing[i].getAttribute('src') || ''
      if (s.indexOf(base) >= 0) return
    }
    var el = global.document.createElement('script')
    el.src = src
    el.async = false
    el.setAttribute('data-ct-park-host', '1')
    global.document.head.appendChild(el)
  }

  for (var h = 0; h < hosts.length; h++) {
    loadHost(hosts[h])
  }
})(typeof globalThis !== 'undefined' ? globalThis : this)
