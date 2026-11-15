import React from 'react'
import { isClientLive } from '@clevertree/style-internal'

const SCRIPT_SRC = '/js/grow-hill-tree.js'
const CANVAS_ID = 'ct-tree-grow'

function loadGrowScript(g) {
  if (!g || !g.document) return
  if (g.growHillTree) return
  const doc = g.document
  if (doc.querySelector('script[data-ct-grow-hill-tree="1"]')) return
  const s = doc.createElement('script')
  s.src = SCRIPT_SRC
  s.setAttribute('data-ct-grow-hill-tree', '1')
  doc.head.appendChild(s)
}

function runGrow(canvas, g) {
  let reduce = false
  try {
    reduce =
      g.matchMedia &&
      g.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch (e) {
    reduce = false
  }
  g.growHillTree(canvas, {
    reduce: reduce,
    duration: 14000,
    delay: 200,
    leafPalette: 'oak',
    habit: 0.45,
    branchiness: 0.55,
    clickable: true,
    shade: true,
  })
}

function tryGrow(canvas, g, triesLeft) {
  if (!canvas || !g) return
  if (g.growHillTree) {
    runGrow(canvas, g)
    return
  }
  if (triesLeft > 0 && g.setTimeout) {
    g.setTimeout(() => {
      tryGrow(canvas, g, triesLeft - 1)
    }, 100)
  }
}

function startGrow(canvas, g) {
  if (!canvas || !g || canvas._ctGrowStarted) return
  canvas._ctGrowStarted = true
  loadGrowScript(g)
  tryGrow(canvas, g, 40)
}

function scheduleGrow() {
  try {
    const g = globalThis
    if (!g || !g.document || !g.setTimeout) return
    g.setTimeout(() => {
      const el = g.document.getElementById(CANVAS_ID)
      if (el) startGrow(el, g)
    }, 0)
  } catch (e) {
    /* decorative */
  }
}

/**
 * Compact hillside tree (same grower as clevertree.chat/forest).
 * CleverScript SSR constraints: no window/document, no class, no JSX function refs,
 * no recursive const arrows. Click the canvas to regrow.
 */
export default function TreeGrow() {
  // CleverScript throws on missing props fields — no optional props.title.
  const title = 'A tree grows'
  if (isClientLive() === true) {
    scheduleGrow()
  }
  return (
    <figure className="ct-tree-figure" aria-label={title}>
      <canvas
        id={CANVAS_ID}
        className="ct-tree-canvas"
        role="img"
        aria-label={title + ' — click to regrow'}
      />
      <figcaption className="ct-muted ct-tree-caption">
        Knowledge grows like a tree. Click to regrow.
      </figcaption>
    </figure>
  )
}
