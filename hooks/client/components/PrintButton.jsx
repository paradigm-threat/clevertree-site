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
      <button
        type="button"
        id="ct-print-button"
        className="ct-secondary"
        title="Print / Save as PDF"
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
          cursor: 'pointer',
        }}
        onClick={() => {
          try {
            if (window && window.print) {
              window.print()
            }
          } catch (e) {
            /* print unavailable during SSR */
          }
        }}
      >
        Print
      </button>
    </div>
  )
}
