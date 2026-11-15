/**
 * Classic park-native boot for the portfolio hillside tree.
 * Runs outside CleverScript so hydrate timing cannot skip the animation.
 */
(function () {
  var SCRIPT_SRC = '/js/grow-hill-tree.js'
  var CANVAS_ID = 'ct-tree-grow'
  var started = false

  function loadGrowScript(done) {
    if (typeof window.growHillTree === 'function') {
      done()
      return
    }
    if (document.querySelector('script[data-ct-grow-hill-tree="1"]')) {
      var n = 0
      var t = setInterval(function () {
        n += 1
        if (typeof window.growHillTree === 'function' || n > 50) {
          clearInterval(t)
          done()
        }
      }, 100)
      return
    }
    var s = document.createElement('script')
    s.src = SCRIPT_SRC
    s.setAttribute('data-ct-grow-hill-tree', '1')
    s.onload = function () { done() }
    s.onerror = function () { done() }
    document.head.appendChild(s)
  }

  function boot() {
    var canvas = document.getElementById(CANVAS_ID)
    if (!canvas) return false
    if (canvas._ctGrowStarted) return true
    if (typeof window.growHillTree !== 'function') return false
    canvas._ctGrowStarted = true
    started = true
    var reduce = false
    try {
      reduce =
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    } catch (e) {
      reduce = false
    }
    window.growHillTree(canvas, {
      reduce: reduce,
      duration: 14000,
      delay: 200,
      leafPalette: 'oak',
      habit: 0.45,
      branchiness: 0.55,
      clickable: true,
      shade: true
    })
    return true
  }

  function tick(left) {
    if (boot()) return
    if (left <= 0) return
    setTimeout(function () { tick(left - 1) }, 100)
  }

  function start() {
    loadGrowScript(function () {
      tick(80)
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start)
  } else {
    start()
  }
})()
