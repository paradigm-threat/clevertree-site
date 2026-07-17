import React from 'react'

export default function Section(props) {
  const title = props.title || ''
  const children = props.children
  return (
    <section className="ct-section">
      <h2 className="ct-section-title">{title}</h2>
      {children}
    </section>
  )
}
