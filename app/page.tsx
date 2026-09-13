import React from 'react'
import Image from 'next/image'
import { Github, Mail, Globe } from 'lucide-react'
import { Section } from '@/components/ui'
import { ProjectItem, LibraryItem } from '@/components/Items'
import { Resume } from '@/components/Resume'
import { PrintButton } from '@/components/PrintButton'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <div className="container mx-auto px-4 py-16 max-w-5xl page-content">
                {/* Header/Bio Section */}
                <header className="mb-20 flex flex-col md:flex-row items-center gap-12 relative">
                    <div className="flex-1 space-y-6">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                            <div className="flex items-center justify-center md:justify-start gap-6">
                                <Image src="/logo/logo-text.png" alt="CleverTree logo" width={96} height={96} className="rounded-md" />
                                <div className="space-y-2 text-center md:text-left">
                                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter">
                                        Ari Asulin
                                    </h1>
                                    <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                                        Software Engineer
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-center md:justify-end items-center gap-3">
                                <ThemeToggle />
                                <PrintButton />
                            </div>
                        </div>

                        <p className="text-lg leading-relaxed text-muted-foreground text-center md:text-left">
                            I build free, high-performance open-source software. I&apos;m a full-stack engineer with 18+ years of industry experience — equally at home in teams and working independently. Programming is a craft that rewards a creative mind. My work spans Relay, music tools, and interactive narrative.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <ContactLink icon={<Globe size={18} />} href="https://clevertree.net" label="clevertree.net" />
                            <ContactLink icon={<Mail size={18} />} href="mailto:ari.asulin@gmail.com" label="ari.asulin@gmail.com" />
                            <ContactLink icon={<Github size={18} />} href="https://github.com/clevertree" label="github.com/clevertree" />
                        </div>
                    </div>
                </header>

                {/* Projects Section */}
                <Section title="Key Projects" className="print-section">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ProjectItem
                            name="Forgotten Future"
                            description="AI-driven interactive book and game exploring narrative through parallax scrolling and WebGL."
                            github="https://github.com/clevertree/forgotten-future"
                            website="https://forgottenfuturebook.com"
                            status="active"
                        />
                        <ProjectItem
                            name="Relay"
                            description="Git-backed distributed hosting and social stack — content, search, and SSR across a mesh of peers."
                            github="https://github.com/clevertree/relay"
                            website="https://relaygateway.net"
                            status="active"
                        />
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
                        <ProjectItem
                            name="SongWalker"
                            description="Music programming language with a Rust/WASM synthesis engine — write music as code, render in the browser or as a VST3 plugin."
                            github="https://github.com/clevertree/songwalker-core"
                            website="https://songwalker.net"
                            status="active"
                        />
                    </div>
                </Section>

                {/* Libraries Section */}
                <Section title="Published Libraries" className="print-section">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <LibraryItem
                            name="hook-transpiler"
                            description="High-performance JSX/TSX transpiler optimized for Relay hooks and dynamic module injection."
                            github="https://github.com/clevertree/hook-transpiler"
                            npm="https://www.npmjs.com/package/@clevertree/hook-transpiler"
                            cargo="https://crates.io/crates/relay-hook-transpiler"
                        />
                        <LibraryItem
                            name="jscbridge"
                            description="A lightweight bridge for communicating between JavaScriptCore and native environments."
                            github="https://github.com/clevertree/jscbridge"
                        />
                        <LibraryItem
                            name="md2jsx"
                            description="Flexible Markdown to JSX converter with support for custom React components and themes."
                            github="https://github.com/clevertree/md2jsx"
                            npm="https://www.npmjs.com/package/@clevertree/md2jsx"
                            cargo="https://crates.io/crates/md2jsx"
                        />
                        <LibraryItem
                            name="themed-styler"
                            description="Rust-powered WASM engine for dynamic theme generation and CSS variable management."
                            github="https://github.com/clevertree/themed-styler"
                            npm="https://www.npmjs.com/package/@clevertree/themed-styler"
                            cargo="https://crates.io/crates/themed-styler"
                        />
                    </div>
                </Section>

                {/* Resume Section */}
                <div className="resume-section">
                    <Resume />
                </div>

                {/* Footer */}
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
