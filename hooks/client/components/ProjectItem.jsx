import React from 'react'

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
    <div className="ct-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', gap: '0.75rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: 0 }}>{name}</h3>
        {status !== '' ? (
          <span
            className={badgeClass(status)}
            style={{
              fontSize: '0.75rem',
              fontWeight: '600',
              borderRadius: '9999px',
              padding: '0.15rem 0.6rem',
              textTransform: 'lowercase',
            }}
          >
            {status}
          </span>
        ) : null}
      </div>
      <p className="ct-muted" style={{ flexGrow: 1, marginBottom: '1rem' }}>{description}</p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
        {github !== '' ? (
          <a className="ct-link" href={github} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.875rem' }}>
            GitHub
          </a>
        ) : null}
        {website !== '' ? (
          <a className="ct-link" href={website} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.875rem' }}>
            Website
          </a>
        ) : null}
      </div>
    </div>
  )
}
