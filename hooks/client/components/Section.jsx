import React from 'react'

export default function Section(props) {
  const title = props.title || ''
  const children = props.children
  return (
    <section className="ct-section" style={{ marginBottom: '3rem' }}>
      <h2
        className="ct-section-title"
        style={{
          fontSize: '1.875rem',
          fontWeight: '700',
          marginBottom: '1.5rem',
          paddingBottom: '0.5rem',
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          borderBottomColor: 'inherit',
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  )
}
