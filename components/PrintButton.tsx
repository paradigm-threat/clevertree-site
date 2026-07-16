'use client'

import React from 'react'
import { FileDown, FileText, Printer } from 'lucide-react'

export const PrintButton = () => (
    <div className="no-print flex items-center gap-2">
        <a
            href="/Ari-Asulin-Resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-md hover:shadow-lg font-semibold text-sm cursor-pointer"
            title="Download PDF Resume"
        >
            <FileDown size={16} />
            <span>PDF</span>
        </a>
        <a
            href="/Ari-Asulin-Resume.docx"
            download
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary text-secondary-foreground border hover:border-primary hover:text-primary transition-all shadow-sm font-semibold text-sm cursor-pointer"
            title="Download DOCX Resume"
        >
            <FileText size={16} />
            <span>DOCX</span>
        </a>
        <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary text-secondary-foreground border hover:border-primary hover:text-primary transition-all shadow-sm font-semibold text-sm cursor-pointer"
            title="Print / Save as PDF"
        >
            <Printer size={16} />
            <span>Print</span>
        </button>
    </div>
)
