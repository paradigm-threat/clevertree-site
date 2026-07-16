import React from 'react'

export default function PrintButton() {
  return (
    <div id="ct-print-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <a
        href="/Ari-Asulin-Resume.pdf"
        download
        className="ct-primary"
        title="Download PDF Resume"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.65rem 1rem',
          borderRadius: '9999px',
          fontWeight: '600',
          fontSize: '0.875rem',
          textDecoration: 'none',
        }}
      >
        PDF
      </a>
      <a
        href="/Ari-Asulin-Resume.docx"
        download
        className="ct-secondary"
        title="Download DOCX Resume"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.65rem 1rem',
          borderRadius: '9999px',
          fontWeight: '600',
          fontSize: '0.875rem',
          textDecoration: 'none',
          borderWidth: 1,
          borderStyle: 'solid',
        }}
      >
        DOCX
      </a>
      <a
        href="#ct-resume"
        id="ct-print-button"
        className="ct-secondary"
        title="Jump to resume (use browser Print for PDF)"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.65rem 1rem',
          borderRadius: '9999px',
          fontWeight: '600',
          fontSize: '0.875rem',
          borderWidth: 1,
          borderStyle: 'solid',
          textDecoration: 'none',
        }}
      >
        Print
      </a>
    </div>
  )
}
