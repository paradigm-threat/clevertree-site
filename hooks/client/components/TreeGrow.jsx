import React from 'react'

const SCRIPT_SRC = '/js/grow-hill-tree.js'

function loadGrowScript() {
  if (typeof window === 'undefined') return
  if (window.growHillTree) return
  if (document.querySelector('script[data-ct-grow-hill-tree="1"]')) return
  const s = document.createElement('script')
  s.src = SCRIPT_SRC
  s.setAttribute('async', '')
  s.setAttribute('data-ct-grow-hill-tree', '1')
  document.head.appendChild(s)
}

function startGrow(canvas) {
  if (!canvas || canvas._ctGrowStarted) return
  canvas._ctGrowStarted = true
  loadGrowScript()

  let tries = 0
  function attempt() {
    tries += 1
    if (typeof window !== 'undefined' && window.growHillTree) {
      const reduce =
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.growHillTree(canvas, {
        reduce: reduce,
        duration: 14000,
        delay: 200,
        leafPalette: 'oak',
        habit: 0.45,
        branchiness: 0.55,
        clickable: true,
        shade: true,
      })
      return
    }
    if (tries < 40) {
      setTimeout(attempt, 100)
    }
  }
  setTimeout(attempt, 0)
}

/**
 * Compact hillside tree (same grower as clevertree.chat/forest).
 * Function + ref callback — CleverScript does not transpile React class components.
 * Click the canvas to regrow.
 */
export default function TreeGrow(props) {
  const title = (props && props.title) || 'A tree grows'
  return (
    <figure className="ct-tree-figure" aria-label={title}>
      <canvas
        className="ct-tree-canvas"
        role="img"
        aria-label={title + ' — click to regrow'}
        ref={function (el) {
          if (el) startGrow(el)
        }}
      />
      <figcaption className="ct-muted ct-tree-caption">
        Knowledge grows like a tree. Click to regrow.
      </figcaption>
    </figure>
  )
}
