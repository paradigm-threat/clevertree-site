import React from 'react'

export default function LibraryItem(props) {
  const name = props.name || ''
  const description = props.description || ''
  const github = props.github
  const npm = props.npm
  const cargo = props.cargo
  return (
    <div className="ct-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
        <span style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontWeight: '700', fontSize: '1.125rem' }}>
          {name}
        </span>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {github ? (
            <a className="ct-link" href={github} target="_blank" rel="noopener noreferrer" title="GitHub">
              GH
            </a>
          ) : null}
          {npm ? (
            <a className="ct-link" href={npm} target="_blank" rel="noopener noreferrer" title="NPM">
              npm
            </a>
          ) : null}
          {cargo ? (
            <a className="ct-link" href={cargo} target="_blank" rel="noopener noreferrer" title="Crates.io">
              crates
            </a>
          ) : null}
        </div>
      </div>
      <p className="ct-muted" style={{ fontSize: '0.875rem', margin: 0 }}>{description}</p>
    </div>
  )
}
