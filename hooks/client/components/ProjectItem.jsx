import React from 'react'
import { IconGithubSm, IconExternal } from 'hooks/client/components/Icons.jsx'

function badgeClass(status) {
  if (status === 'active') return 'ct-badge ct-badge-active'
  if (status === 'planned') return 'ct-badge ct-badge-planned'
  if (status === 'published') return 'ct-badge ct-badge-published'
  return 'ct-badge'
}

export default function ProjectItem(props) {
  const name = props.name || ''
  const description = props.description || ''
  const github = props.github || ''
  const website = props.website || ''
  const status = props.status || ''
  return (
    <div className="ct-card ct-project-card">
      <div className="ct-card-head">
        <h3 className="ct-card-title">{name}</h3>
        {status !== '' ? (
          <span className={badgeClass(status)}>{status}</span>
        ) : null}
      </div>
      <p className="ct-muted" style={{ flexGrow: 1, marginTop: 0, marginBottom: '1rem' }}>{description}</p>
      <div className="ct-card-links">
        {github !== '' ? (
          <a className="ct-link ct-link-row" href={github} target="_blank" rel="noopener noreferrer">
            <IconGithubSm /> GitHub
          </a>
        ) : null}
        {website !== '' ? (
          <a className="ct-link ct-link-row" href={website} target="_blank" rel="noopener noreferrer">
            <IconExternal /> Website
          </a>
        ) : null}
      </div>
    </div>
  )
}
