import React, { useEffect, useRef } from 'react'

const SCRIPT_SRC = '/js/grow-hill-tree.js'

function ensureGrowScript() {
  if (typeof window === 'undefined') return Promise.resolve()
  if (typeof window.growHillTree === 'function') return Promise.resolve()
  const existing = document.querySelector('script[data-ct-grow-hill-tree="1"]')
  if (existing) {
    return new Promise(function (resolve, reject) {
      existing.addEventListener('load', function () { resolve() })
      existing.addEventListener('error', reject)
    })
  }
  return new Promise(function (resolve, reject) {
    const s = document.createElement('script')
    s.src = SCRIPT_SRC
    s.async = true
    s.setAttribute('data-ct-grow-hill-tree', '1')
    s.onload = function () { resolve() }
    s.onerror = reject
    document.head.appendChild(s)
  })
}

/**
 * Compact hillside tree (same grower as clevertree.chat/forest).
 * Click the canvas to regrow.
 */
export default function TreeGrow(props) {
  const canvasRef = useRef(null)
  const title = props.title || 'A tree grows'

  useEffect(function () {
    let cancelled = false
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    ensureGrowScript()
      .then(function () {
        if (cancelled || !canvasRef.current) return
        if (typeof window.growHillTree !== 'function') return
        window.growHillTree(canvasRef.current, {
          reduce: reduce,
          duration: 14000,
          delay: 200,
          leafPalette: 'oak',
          habit: 0.45,
          branchiness: 0.55,
          clickable: true,
          shade: true,
        })
      })
      .catch(function () {
        /* tree is decorative */
      })

    return function () {
      cancelled = true
      if (canvas && typeof canvas._growStop === 'function') {
        canvas._growStop()
      }
    }
  }, [])

  return (
    <figure className="ct-tree-figure" aria-label={title}>
      <canvas
        ref={canvasRef}
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
