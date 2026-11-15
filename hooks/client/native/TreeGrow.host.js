/**
 * Web host + custom element for ct-tree-grow (portfolio hillside tree).
 * CleverScript stub: hooks/client/components/TreeGrow.jsx
 * Grower: /js/grow-hill-tree.js (no other platforms yet).
 */
(function (global) {
  'use strict'

  var GROW_SRC = '/js/grow-hill-tree.js'
  var TAG = 'ct-tree-grow'
  var NATIVE = 'ct-tree-grow'

  function loadGrowScript(done) {
    if (typeof global.growHillTree === 'function') {
      done()
      return
    }
    if (global.document.querySelector('script[data-ct-grow-hill-tree="1"]')) {
      var n = 0
      var t = global.setInterval(function () {
        n += 1
        if (typeof global.growHillTree === 'function' || n > 50) {
          global.clearInterval(t)
          done()
        }
      }, 100)
      return
    }
    var s = global.document.createElement('script')
    s.src = GROW_SRC
    s.setAttribute('data-ct-grow-hill-tree', '1')
    s.onload = function () {
      done()
    }
    s.onerror = function () {
      done()
    }
    global.document.head.appendChild(s)
  }

  function readReduce() {
    try {
      return !!(
        global.matchMedia &&
        global.matchMedia('(prefers-reduced-motion: reduce)').matches
      )
    } catch (e) {
      return false
    }
  }

  function startGrow(canvas) {
    if (!canvas || canvas._ctGrowStarted) return
    if (typeof global.growHillTree !== 'function') return
    canvas._ctGrowStarted = true
    global.growHillTree(canvas, {
      reduce: readReduce(),
      duration: 14000,
      delay: 200,
      leafPalette: 'aspen',
      habit: 0.45,
      branchiness: 0.55,
      clickable: true,
      shade: true,
    })
  }

  function sizeKind(host) {
    var size = (host && host.getAttribute('data-size')) || ''
    if (size === 'logo' || size === 'hero' || size === 'figure') return size
    var cls = String((host && host.className) || '')
    if (cls.indexOf('ct-tree-logo') >= 0) return 'logo'
    if (cls.indexOf('ct-tree-hero') >= 0) return 'hero'
    return 'figure'
  }

  function ensureCanvas(host) {
    // Figure is flex + align-items:center (shrink-wrap). Use a real px box so
    // growHillTree does not measure a ~0-width host.
    var kind = sizeKind(host)
    var parent = host.parentElement
    var pw = parent && parent.clientWidth ? parent.clientWidth : 0
    var box = 360
    var height = 220
    if (kind === 'logo') {
      box = 120
      height = 120
    } else if (kind === 'hero') {
      box = pw > 80 ? Math.min(pw, 340) : 300
      height = 280
    } else {
      box = pw > 80 ? Math.min(pw, 400) : 360
      height = 220
    }
    host.style.display = 'block'
    host.style.boxSizing = 'border-box'
    host.style.width = box + 'px'
    host.style.maxWidth = '100%'
    host.style.height = height + 'px'
    if (kind === 'logo') {
      host.style.minWidth = '96px'
      host.style.flexShrink = '0'
    }
    if (kind === 'hero') {
      host.style.marginLeft = 'auto'
      host.style.marginRight = 'auto'
      host.style.flexShrink = '0'
    }
    var canvas = host.querySelector('canvas')
    if (!canvas) {
      canvas = global.document.createElement('canvas')
      canvas.setAttribute('role', 'img')
      var label = host.getAttribute('aria-label') || 'A tree grows — click to regrow'
      canvas.setAttribute('aria-label', label)
      host.appendChild(canvas)
    }
    canvas.style.display = 'block'
    canvas.style.width = '100%'
    canvas.style.height = height + 'px'
    return canvas
  }

  function bootHost(host) {
    if (!host) return
    var canvas = ensureCanvas(host)
    if (canvas._ctGrowStarted && canvas.width > 40) return
    canvas._ctGrowStarted = false
    host.setAttribute('data-ct-tree-upgraded', '1')
    loadGrowScript(function () {
      var run = function () {
        startGrow(canvas)
      }
      if (global.requestAnimationFrame) {
        global.requestAnimationFrame(function () {
          global.requestAnimationFrame(run)
        })
      } else {
        global.setTimeout(run, 0)
      }
    })
  }

  function buildTreeGrow(props) {
    var el = global.document.createElement(TAG)
    if (props) {
      var cls = props.className || props['class']
      if (cls) el.className = String(cls)
      var label = props['aria-label'] || props.ariaLabel
      if (label) el.setAttribute('aria-label', String(label))
      var size = props['data-size'] || props.size
      if (size) el.setAttribute('data-size', String(size))
    }
    el.setAttribute('data-relay-park-native', NATIVE)
    // connectedCallback will boot; also kick immediately for replaceChildren paths
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
        if (host.getAttribute('data-ct-tree-upgraded') === '1') continue
        var built = buildTreeGrow({
          className: host.className,
          'aria-label': host.getAttribute('aria-label'),
          'data-size': host.getAttribute('data-size'),
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
        disconnectedCallback() {
          var canvas = this.querySelector('canvas')
          if (canvas && typeof canvas._growStop === 'function') {
            try {
              canvas._growStop()
            } catch (e) {}
          }
        }
      },
    )
  }

  function register() {
    defineElement()
    var reg = global.__relayRegisterParkNative
    if (typeof reg === 'function') {
      reg(NATIVE, buildTreeGrow)
      reg(TAG, buildTreeGrow)
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
