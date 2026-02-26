/**
 * Generates public/Ari-Asulin-Resume.docx and then uses LibreOffice
 * to convert it to public/Ari-Asulin-Resume.pdf
 *
 * Run:  node scripts/generate-resume.mjs
 */

import {
    Document, Packer, Paragraph, TextRun,
    BorderStyle, TabStopType, TabStopPosition,
    UnderlineType, ExternalHyperlink,
} from 'docx'
import { writeFileSync } from 'fs'
import { execSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PUBLIC_DIR = path.join(__dirname, '..', 'public')

// ─── Palette ────────────────────────────────────────────────────────────────
const PRIMARY = '2563EB'   // blue-600
const MUTED = '6B7280'   // gray-500
const BLACK = '111827'
const WHITE = 'FFFFFF'

// ─── Helpers ────────────────────────────────────────────────────────────────
const bold = (text, opts = {}) => new TextRun({ text, bold: true, ...opts })
const muted = (text, opts = {}) => new TextRun({ text, color: MUTED, size: 18, ...opts })
const primary = (text, opts = {}) => new TextRun({ text, color: PRIMARY, bold: true, ...opts })
const link = (text, url) => new ExternalHyperlink({
    link: url,
    children: [new TextRun({ text, color: PRIMARY, underline: { type: UnderlineType.SINGLE }, size: 18 })],
})

const hRule = () => new Paragraph({
    border: { bottom: { color: 'D1D5DB', space: 1, value: BorderStyle.SINGLE, size: 6 } },
    spacing: { before: 60, after: 60 },
})

const sectionHeading = (title) => new Paragraph({
    spacing: { before: 280, after: 60 },
    border: { bottom: { color: PRIMARY, space: 1, value: BorderStyle.SINGLE, size: 10 } },
    children: [
        new TextRun({ text: title.toUpperCase(), bold: true, color: PRIMARY, size: 24, characterSpacing: 40 }),
    ],
})

const experienceItem = ({ title, company, location, duration, description }) => [
    new Paragraph({
        spacing: { before: 180, after: 20 },
        tabStops: [{ type: TabStopType.RIGHT, position: 9360 }],
        children: [
            bold(title, { size: 22, color: BLACK }),
            new TextRun({ text: '\t' }),
            new TextRun({ text: duration, color: MUTED, size: 17, italics: true }),
        ],
    }),
    new Paragraph({
        spacing: { before: 0, after: 40 },
        children: [
            primary(company, { size: 18 }),
            muted('  ·  '),
            muted(location),
        ],
    }),
    new Paragraph({
        spacing: { before: 0, after: 60 },
        children: [new TextRun({ text: description, size: 18, color: MUTED })],
    }),
]

const skillPill = (label) => new TextRun({ text: `  ${label}  `, size: 16, color: MUTED })

const skillRow = (title, skills) => new Paragraph({
    spacing: { before: 60, after: 20 },
    children: [
        new TextRun({ text: `${title}: `, bold: true, size: 17, color: BLACK }),
        ...skills.map((s, i) => [
            new TextRun({ text: s, size: 17, color: MUTED }),
            i < skills.length - 1 ? new TextRun({ text: '  ·  ', color: 'D1D5DB', size: 17 }) : null,
        ]).flat().filter(Boolean),
    ],
})

// ─── Document ────────────────────────────────────────────────────────────────
const doc = new Document({
    creator: 'Ari Asulin',
    title: 'Ari Asulin – Resume',
    description: 'Software Engineer',
    styles: {
        default: {
            document: {
                run: { font: 'Calibri', size: 20, color: BLACK },
                paragraph: { spacing: { line: 276 } },
            },
        },
    },
    sections: [{
        properties: {
            page: {
                margin: { top: 720, bottom: 720, left: 900, right: 900 },
            },
        },
        children: [
            // ── Name & Title ──────────────────────────────────────────────
            new Paragraph({
                spacing: { before: 0, after: 40 },
                children: [
                    new TextRun({ text: 'Ari Asulin', bold: true, size: 52, color: BLACK }),
                ],
            }),
            new Paragraph({
                spacing: { before: 0, after: 80 },
                children: [
                    new TextRun({ text: 'Software Engineer', size: 24, color: MUTED }),
                ],
            }),

            // ── Contact row ───────────────────────────────────────────────
            new Paragraph({
                spacing: { before: 0, after: 160 },
                children: [
                    link('clevertree.net', 'https://clevertree.net'),
                    muted('   ·   '),
                    link('ari.asulin@gmail.com', 'mailto:ari.asulin@gmail.com'),
                    muted('   ·   '),
                    new TextRun({ text: '602-632-6729', size: 18, color: MUTED }),
                    muted('   ·   '),
                    link('github.com/clevertree', 'https://github.com/clevertree'),
                ],
            }),

            // ── Summary ───────────────────────────────────────────────────
            new Paragraph({
                spacing: { before: 0, after: 160 },
                children: [
                    new TextRun({
                        text: 'Full-stack developer with 18+ years of experience building production applications across web, mobile, and cloud platforms. Known for translating complex technical requirements into clear plans, bridging communication between engineering and stakeholders, and steering teams through delivery with honesty and accountability.',
                        size: 19,
                        color: MUTED,
                        italics: true,
                    }),
                ],
            }),

            hRule(),

            // ── Experience ────────────────────────────────────────────────
            sectionHeading('Experience'),

            ...experienceItem({
                title: 'Software Contractor (Engineer II)',
                company: 'University of Phoenix',
                location: 'Phoenix, AZ',
                duration: 'June 2021 – Present',
                description: 'Developed applications and web pages for UofPhx, collaborating cross-functionally with stakeholders to communicate timelines and translate technical requirements into actionable tasks. Designed and implemented ReactJS components in AEM & NextJS. Partnered with QA and product teams to track ticket resolution and ensure delivery milestones were met. Guided team members on best practices while managing tech debt. Maintained AWS infrastructure and monitored user experience via FullStory, SpeechMiner, and ContentSquare.',
            }),

            ...experienceItem({
                title: 'Software Contractor',
                company: 'Harkins Theatres',
                location: 'Scottsdale, AZ',
                duration: 'June 2017 – June 2021',
                description: 'Developed Harkins.com website and mobile apps. Served as the technical liaison between IT and marketing teams, aligning stakeholder expectations with engineering capacity. Implemented features using NodeJS, PHP, MySQL, jQuery, and REST. Identified and resolved blockers to maintain stability during high-traffic events and security incidents. Managed migrations from Windows to LAMP and deployed React Native apps to Play and Apple stores.',
            }),

            ...experienceItem({
                title: 'Software Contractor',
                company: 'Simon Payments',
                location: 'Florida (Remote)',
                duration: 'Aug 2016 – Dec 2018',
                description: 'Redesigned entire payment processor in PHP including a front-end UI generating forms on the fly. Integrated APIs for processing bank transactions. Developed modules for payment, payout, and financial systems. Maintained encrypted storage, scheduling, and automation.',
            }),

            ...experienceItem({
                title: 'Originator and Software Engineer',
                company: 'Originate and NewAer',
                location: 'San Francisco, CA',
                duration: 'Aug 2013 – Dec 2014',
                description: 'Built apps for Android, iOS, WinRT, and Windows 8 desktop. Investigated proximity-based social networking technologies.',
            }),

            ...experienceItem({
                title: 'Head of Information Technology',
                company: 'Etelegate',
                location: 'Scottsdale, AZ',
                duration: 'May 2005 – Oct 2012',
                description: 'Lead Developer and IT Head for a payment processor. Set realistic development milestones, communicated project status to non-technical stakeholders in clear terms, and steered the team across a 6-year roadmap. Accountable for team output and cross-department deliverables. Built financial systems, account management, and real-time data integrations with global banking.',
            }),

            // ── Education ─────────────────────────────────────────────────
            sectionHeading('Education'),

            new Paragraph({
                spacing: { before: 160, after: 20 },
                tabStops: [{ type: TabStopType.RIGHT, position: 9360 }],
                children: [
                    bold('Arizona State University', { size: 22 }),
                    new TextRun({ text: '\t' }),
                    muted('2002 – 2008', { italics: true }),
                ],
            }),
            new Paragraph({
                spacing: { before: 0, after: 80 },
                children: [
                    primary('B.S. in Computer Science', { size: 18 }),
                    muted('  ·  Tempe, Arizona'),
                ],
            }),

            new Paragraph({
                spacing: { before: 80, after: 20 },
                tabStops: [{ type: TabStopType.RIGHT, position: 9360 }],
                children: [
                    bold('University of Arizona', { size: 22 }),
                    new TextRun({ text: '\t' }),
                    muted('2001 – 2002', { italics: true }),
                ],
            }),
            new Paragraph({
                spacing: { before: 0, after: 80 },
                children: [
                    primary('Computer Science (Transferred to ASU)', { size: 18 }),
                    muted('  ·  Tucson, Arizona'),
                ],
            }),

            // ── Skills ────────────────────────────────────────────────────
            sectionHeading('Skills & Certifications'),

            skillRow('AI & Agents', ['GitHub Copilot (all models)', 'Prompt Engineering', 'Per-repo Copilot Instructions', 'Agentic Data Scraping & Cross-referencing', 'Document & Summary Generation', 'Meeting Transcript Automation', 'Agent-driven Infrastructure Monitoring', 'Context-aware Jira Ticket Management']),
            skillRow('Leadership', ['Stakeholder Communication', 'Mentoring & Coaching', 'Sprint Planning', 'Cross-team Coordination', 'QA & Ticket Ownership', 'Feedback Culture']),
            skillRow('Programming', ['JavaScript/TypeScript', 'ReactJS', 'React Native', 'NodeJS', 'HTML5 & CSS3', 'PHP', '.NET & C#', 'SQL', 'Android/iOS Dev', 'CI/CD', 'API Design']),
            skillRow('Infrastructure', ['AWS Lambda & EC2', 'Linux SysAdmin', 'Nginx / Apache', 'AEM', 'SSL Certs']),
            skillRow('Tools', ['Git', 'SSH', 'Bash', 'JetBrains IDEs', 'VS Code']),

            new Paragraph({
                spacing: { before: 100, after: 20 },
                children: [
                    bold('Certifications: ', { size: 17 }),
                    new TextRun({ text: 'AWS Certified Cloud Practitioner  ·  AWS Certified Developer', size: 17, color: MUTED }),
                ],
            }),

            // ── References ────────────────────────────────────────────────
            sectionHeading('Professional References'),

            new Paragraph({
                spacing: { before: 160, after: 20 },
                children: [
                    bold('Jynx Younan', { size: 20 }),
                    new TextRun({ text: '  —  Agile People Leader @ University of Phoenix', size: 18, color: MUTED }),
                ],
            }),
            new Paragraph({
                spacing: { before: 0, after: 80 },
                children: [
                    link('Jynx.Younan@phoenix.edu', 'mailto:Jynx.Younan@phoenix.edu'),
                    muted('   ·   '),
                    new TextRun({ text: '602-557-1090', size: 18, color: MUTED }),
                ],
            }),

            new Paragraph({
                spacing: { before: 80, after: 20 },
                children: [
                    bold('Mike McDonald', { size: 20 }),
                    new TextRun({ text: '  —  Software Architect @ Harkins Theatres', size: 18, color: MUTED }),
                ],
            }),
            new Paragraph({
                spacing: { before: 0, after: 40 },
                children: [
                    link('mikemcdonald@harkins.com', 'mailto:mikemcdonald@harkins.com'),
                    muted('   ·   '),
                    new TextRun({ text: '615-995-0639', size: 18, color: MUTED }),
                ],
            }),
            new Paragraph({
                spacing: { before: 60, after: 0 },
                children: [
                    new TextRun({
                        text: '"Ari is the real deal and I can\'t imagine a company hiring him as a developer and being dissatisfied with his work. He turned a non-functional site into a functional one. In a high-stress environment he kept his cool and was able to meet all requirements asked of him."',
                        size: 17,
                        italics: true,
                        color: MUTED,
                    }),
                ],
            }),
        ],
    }],
})

// ─── Write DOCX ──────────────────────────────────────────────────────────────
const docxPath = path.join(PUBLIC_DIR, 'Ari-Asulin-Resume.docx')
const buffer = await Packer.toBuffer(doc)
writeFileSync(docxPath, buffer)
console.log(`✅  DOCX written: ${docxPath}`)

// ─── Convert to PDF via LibreOffice ──────────────────────────────────────────
console.log('⏳  Converting to PDF via LibreOffice…')
try {
    execSync(`libreoffice --headless --convert-to pdf --outdir "${PUBLIC_DIR}" "${docxPath}"`, {
        stdio: 'inherit',
    })
    console.log(`✅  PDF written: ${path.join(PUBLIC_DIR, 'Ari-Asulin-Resume.pdf')}`)
} catch (e) {
    console.error('❌  LibreOffice conversion failed:', e.message)
    process.exit(1)
}
