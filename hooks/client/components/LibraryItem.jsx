import React from 'react'
import { IconGithub, IconCode, IconBox, IconLibrary } from 'hooks/client/components/Icons.jsx'

export default function LibraryItem(props) {
  const name = props.name || ''
  const description = props.description || ''
  const github = props.github || ''
  const npm = props.npm || ''
  const cargo = props.cargo || ''
  return (
    <div className="ct-card ct-lib-card">
      <div className="ct-lib-row">
        <div className="ct-lib-name">
          <span className="ct-lib-icon">
            <IconLibrary />
          </span>
          <span className="ct-lib-mono">{name}</span>
        </div>
        <div className="ct-lib-links">
          {github !== '' ? (
            <a className="ct-icon-link" href={github} target="_blank" rel="noopener noreferrer" title="GitHub">
              <IconGithub />
            </a>
          ) : null}
          {npm !== '' ? (
            <a className="ct-icon-link" href={npm} target="_blank" rel="noopener noreferrer" title="NPM">
              <IconCode />
            </a>
          ) : null}
          {cargo !== '' ? (
            <a className="ct-icon-link" href={cargo} target="_blank" rel="noopener noreferrer" title="Crates.io">
              <IconBox />
            </a>
          ) : null}
        </div>
      </div>
      <p className="ct-muted" style={{ fontSize: '0.875rem', margin: 0 }}>{description}</p>
    </div>
  )
}
