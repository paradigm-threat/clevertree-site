/**
 * Minimal park-host-common for clevertree.net.
 * Gateway always injects this when any data-relay-park-native placeholder is present.
 * Loads tip TreeGrow.host.js (web component) and exposes a no-op re-upgrade hook.
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

  if (global.document && !global.document.querySelector('script[data-ct-tree-grow-host="1"]')) {
    var s = global.document.createElement('script')
    s.src = '/hooks/client/native/TreeGrow.host.js?v=2'
    s.setAttribute('data-fb-park-native', '1')
    s.setAttribute('data-ct-tree-grow-host', '1')
    global.document.head.appendChild(s)
  }
})(typeof globalThis !== 'undefined' ? globalThis : this)
