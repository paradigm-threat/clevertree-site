import React from 'react'
import { isClientLive } from '@clevertree/style-internal'
import { IconFileDown, IconFileText, IconPrinter } from 'hooks/client/components/Icons.jsx'

/**
 * PDF/DOCX links work without JS. Print uses `relayAction="print"` → `data-relay-action`
 * (host delegation) and stays disabled until `isClientLive()` after hydrate.
 */
export default function PrintButton() {
  const live = isClientLive() === true
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
        title={live ? 'Print / Save as PDF' : 'Print available after page loads'}
        disabled={!live}
        dataRelayAction="print"
      >
        <IconPrinter />
        <span>Print</span>
      </button>
    </div>
  )
}
