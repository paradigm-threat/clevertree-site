import React from 'react'
import { IconFileDown, IconFileText, IconPrinter } from 'hooks/client/components/Icons.jsx'

export default function PrintButton() {
  return (
    <div id="ct-print-actions" className="ct-print-actions">
      <a
        href="/Ari-Asulin-Resume.pdf"
        download
        className="ct-action-btn ct-primary"
        title="Download PDF Resume"
      >
        <IconFileDown />
        <span>PDF</span>
      </a>
      <a
        href="/Ari-Asulin-Resume.docx"
        download
        className="ct-action-btn"
        title="Download DOCX Resume"
      >
        <IconFileText />
        <span>DOCX</span>
      </a>
      <button
        type="button"
        id="ct-print-button"
        className="ct-action-btn"
        title="Print / Save as PDF"
        onClick={() => {
          try {
            if (typeof document !== 'undefined') {
              // Prefer browser print when available (window may be undeclared in CleverScript IR).
              const w = globalThis
              if (w && w.print) {
                w.print()
              }
            }
          } catch (e) {
            /* print optional */
          }
        }}
      >
        <IconPrinter />
        <span>Print</span>
      </button>
    </div>
  )
}
