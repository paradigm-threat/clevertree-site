import React from 'react'
import { Github, Globe } from 'lucide-react'
import { Section } from '@/components/ui'
import { ProjectItem, LibraryItem } from '@/components/Items'
import { ThemeToggle } from '@/components/ThemeToggle'
import Link from 'next/link'

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <div className="container mx-auto px-4 py-16 max-w-5xl page-content">
                <header className="mb-20 space-y-6">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div className="flex items-center justify-center md:justify-start gap-6">
                            <div
                                className="rounded-md bg-secondary border shrink-0"
                                style={{ width: 120, height: 120 }}
                                aria-hidden
                            />
                            <div className="space-y-2 text-center md:text-left">
                                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter">
                                    Clevertree LLC
                                </h1>
                                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                                    Software Projects
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-end items-center gap-3">
                            <Link
                                href="/resume.md"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground border text-sm font-semibold"
                            >
                                Resume
                            </Link>
                            <ThemeToggle />
                        </div>
                    </div>

                    <p className="text-lg leading-relaxed text-muted-foreground text-center md:text-left">
                        Clevertree LLC builds embeddable open-source software — standing debates, investigation mesh, and music-as-code — hosted on Relay.
                    </p>
                    <p className="text-base leading-relaxed text-muted-foreground text-center md:text-left">
                        How we build: daily anonymous stats and tip review, next-day product patches, A-team plus LLM agents at major-corp cadence—and a path to user-filed reports that triage and ship without a developer in the middle. Details on{" "}
                        <a className="underline" href="https://quizgate.app/#daily-loop">QuizGate</a>,{" "}
                        <a className="underline" href="https://myproblem.app/how-we-run#daily-ops">MyProblem</a>, and{" "}
                        <a className="underline" href="https://clevertree.chat/#daily-loop">Clevertree Chat</a>.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <ContactLink icon={<Globe size={18} />} href="https://clevertree.net" label="clevertree.net" />
                        <ContactLink icon={<Github size={18} />} href="https://github.com/clevertree" label="github.com/clevertree" />
                    </div>
                </header>

                <Section title="Try the embeds" className="print-section">
                    <p className="text-muted-foreground mb-4">
                        Live CleverScript path mounts park-native Clevertree Chat (path = channel; domain = this site) and SongWalker. Open{' '}
                        <a className="underline" href="https://clevertree.net/?embed=1">clevertree.net</a> for the interactive boards.
                    </p>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-bold text-lg mb-2">Clevertree Chat</h3>
                            <a
                                className="text-sm underline"
                                href="https://clevertree.chat"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Open Clevertree Chat
                            </a>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">SongWalker</h3>
                            <iframe
                                className="w-full rounded-md border bg-card"
                                style={{ height: '28rem' }}
                                src="https://songwalker.net"
                                title="SongWalker"
                                loading="lazy"
                            />
                            <p className="text-sm text-muted-foreground mt-2">
                                <a href="https://songwalker.net" target="_blank" rel="noopener noreferrer">songwalker.net</a>
                                {' · '}
                                Also:{' '}
                                <a href="https://snesology.org" target="_blank" rel="noopener noreferrer">SNESology</a>
                                {' '}(same software)
                            </p>
                        </div>
                    </div>
                </Section>

                <Section title="Key Projects" className="print-section">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ProjectItem
                            name="QuizGate"
                            description="Android-first Hard quiz unlock — learning earns screen time; first-access + math packs; anonymous day-batch loop for next-day curriculum patches. Forever free, no ads or IAP."
                            github="https://gitlab.com/clevertree/quizgate"
                            website="https://quizgate.app"
                            status="active"
                        />
                        <ProjectItem
                            name="MyProblem"
                            description="Case intake and investigation tooling — photos, tickets, and batch AI workers that keep private dossiers separate from public handoffs."
                            github="https://github.com/paradigm-threat/myproblem"
                            website="https://myproblem.app"
                            status="active"
                        />
                        <ProjectItem
                            name="Clevertree Chat"
                            description="Standing debates on a page: people post original points; batch SI files perspectives, pairs counters, and keeps the map fair — no winners, no sides."
                            github="https://github.com/paradigm-threat/clevertree-chat"
                            website="https://clevertree.chat"
                            status="active"
                        />
                        <ProjectItem
                            name="Paradigm Threat"
                            description="Investigation files, chronology, and park UI for alternate history — the corpus Relay and Clevertree Chat organize in public."
                            github="https://github.com/paradigm-threat/paradigm-threat-files"
                            website="https://paradigmthreat.net"
                            status="active"
                        />
                        <ProjectItem
                            name="Relay"
                            description="Git-backed distributed hosting and social stack — content, search, and SSR across a mesh of peers."
                            github="https://github.com/clevertree/relay"
                            website="https://relaygateway.net"
                            status="active"
                        />
                    </div>
                </Section>

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

                <footer className="mt-20 pt-8 border-t text-center text-muted-foreground text-sm print-section">
                    <p>© {new Date().getFullYear()} Clevertree LLC. Built with CleverScript on Relay.</p>
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
