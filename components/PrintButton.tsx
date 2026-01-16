'use client'

import React from 'react'
import { FileDown, Printer } from 'lucide-react'

export const PrintButton = () => {
  const handlePrint = () => {
    window.print()
  }

  return (
    <button
      onClick={handlePrint}
      className="no-print flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-lg hover:shadow-xl font-bold text-lg cursor-pointer"
      title="Download as PDF / Print"
    >
      <FileDown size={20} />
      <span>Download Resume PDF</span>
    </button>
  )
}
