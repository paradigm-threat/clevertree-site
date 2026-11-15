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

  function ensureBrandHeadLinks() {
    try {
      if (!global.document || !global.document.head) return
      var head = global.document.head
      if (head.querySelector('link[data-ct-brand-icons="1"]')) return

      function addLink(attrs) {
        var el = global.document.createElement('link')
        for (var k in attrs) {
          if (Object.prototype.hasOwnProperty.call(attrs, k)) {
            el.setAttribute(k, attrs[k])
          }
        }
        el.setAttribute('data-ct-brand-icons', '1')
        head.appendChild(el)
      }

      addLink({ rel: 'icon', href: '/favicon.ico', sizes: 'any' })
      addLink({
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      })
      addLink({
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      })
      addLink({ rel: 'apple-touch-icon', href: '/apple-touch-icon.png' })
      addLink({ rel: 'manifest', href: '/site.webmanifest' })

      if (!head.querySelector('meta[name="theme-color"]')) {
        var theme = global.document.createElement('meta')
        theme.name = 'theme-color'
        theme.content = '#041619'
        head.appendChild(theme)
      }

      // Share card when gateway SEO has no catalog poster for `/`.
      if (!head.querySelector('meta[property="og:image"]')) {
        var og = global.document.createElement('meta')
        og.setAttribute('property', 'og:image')
        og.content = 'https://clevertree.net/logo/og.png'
        head.appendChild(og)
        var tw = global.document.createElement('meta')
        tw.setAttribute('name', 'twitter:image')
        tw.content = 'https://clevertree.net/logo/og.png'
        head.appendChild(tw)
      }
    } catch (e) {}
  }

  ensureBrandHeadLinks()

  var hosts = [
    '/hooks/client/native/TreeGrow.host.js?v=9',
    '/hooks/client/native/ChatEmbed.host.js?v=1',
    '/hooks/client/native/SongWalkerEmbed.host.js?v=1',
  ]

  function loadHost(src) {
    if (!global.document) return
    if (global.document.querySelector('script[src="' + src + '"]')) return
    // Gateway may already inject TreeGrow.host.js?v=6 in the HTML. Still load the
    // tip host (?v=9+) so hero sizing / reboot logic wins after the cached host.
    var base = src.split('?')[0]
    var forceTip =
      base.indexOf('TreeGrow.host.js') >= 0 && src.indexOf('?v=') >= 0
    if (!forceTip) {
      var existing = global.document.querySelectorAll('script[src]')
      for (var i = 0; i < existing.length; i++) {
        var s = existing[i].getAttribute('src') || ''
        if (s.indexOf(base) >= 0) return
      }
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
