import React from 'react'

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
 * Class component — CleverScript SSR does not rely on React hooks here.
 * Click the canvas to regrow.
 */
export default class TreeGrow extends React.Component {
  constructor(props) {
    super(props)
    this.canvas = null
    this._started = false
  }

  componentDidMount() {
    this._start()
  }

  componentWillUnmount() {
    const canvas = this.canvas
    if (canvas && typeof canvas._growStop === 'function') {
      canvas._growStop()
    }
  }

  _start() {
    if (this._started || !this.canvas) return
    this._started = true
    const canvas = this.canvas
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    ensureGrowScript()
      .then(function () {
        if (!canvas || typeof window.growHillTree !== 'function') return
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
      })
      .catch(function () {
        /* decorative */
      })
  }

  render() {
    const title = (this.props && this.props.title) || 'A tree grows'
    const self = this
    return (
      <figure className="ct-tree-figure" aria-label={title}>
        <canvas
          className="ct-tree-canvas"
          role="img"
          aria-label={title + ' — click to regrow'}
          ref={function (el) {
            self.canvas = el
          }}
        />
        <figcaption className="ct-muted ct-tree-caption">
          Knowledge grows like a tree. Click to regrow.
        </figcaption>
      </figure>
    )
  }
}
