import React from 'react'
import { Github, Mail, Globe } from 'lucide-react'
import { Section } from '@/components/ui'
import { ProjectItem } from '@/components/Items'
import { Resume } from '@/components/Resume'
import { PrintButton } from '@/components/PrintButton'
import { ThemeToggle } from '@/components/ThemeToggle'
import Link from 'next/link'

export default function ResumeRoute() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <div className="container mx-auto px-4 py-16 max-w-5xl page-content">
                <header className="mb-20 space-y-6">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div className="space-y-2 text-center md:text-left">
                            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter">
                                Ari Asulin
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                                Software Engineer
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-end items-center gap-3">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground border text-sm font-semibold"
                            >
                                Clevertree LLC
                            </Link>
                            <ThemeToggle />
                            <PrintButton />
                        </div>
                    </div>

                    <p className="text-lg leading-relaxed text-muted-foreground text-center md:text-left">
                        I build free, high-performance open-source software. I&apos;m a full-stack engineer with 18+ years of industry experience — equally at home in teams and working independently. Programming is a craft that rewards a creative mind. Right now I&apos;m focused on MyProblem and Clevertree Chat, with Relay and Paradigm Threat as the ongoing mesh and investigation stack.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <ContactLink icon={<Globe size={18} />} href="https://clevertree.net" label="clevertree.net" />
                        <ContactLink icon={<Mail size={18} />} href="mailto:ari.asulin@gmail.com" label="ari.asulin@gmail.com" />
                        <ContactLink icon={<Github size={18} />} href="https://github.com/clevertree" label="github.com/clevertree" />
                    </div>
                </header>

                <Section title="Client sites" className="print-section">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ProjectItem
                            name="Skinner Family Dental"
                            description="Professional dental practice website featuring patient portals and appointment integration."
                            website="https://skinnerfamilydental.com"
                            status="published"
                        />
                        <ProjectItem
                            name="Gordonston Arts Fair"
                            description="Annual arts community hub for Savannah's historic Gordonston neighborhood."
                            website="https://gordonstonartfair.com"
                            status="published"
                        />
                    </div>
                </Section>

                <div className="resume-section">
                    <Resume />
                </div>

                <footer className="mt-20 pt-8 border-t text-center text-muted-foreground text-sm print-section">
                    <p>© {new Date().getFullYear()} Ari Asulin. Built with CleverScript on Relay.</p>
                </footer>
            </div>
        </main>
    )
}

function ContactLink({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) {
    return (
        <a
            href={href}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-sm font-medium border"
            target={href.startsWith('http') ? "_blank" : undefined}
            rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
        >
            {icon}
            <span>{label}</span>
        </a>
    )
}
