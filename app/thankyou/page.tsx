import React from 'react'
import { Github, Globe, Mail } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'
import Link from 'next/link'

/**
 * Legacy Next.js preview only — live /thankyou is CleverScript (hooks/client/).
 */
export default function ThankYouRoute() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-16 max-w-3xl page-content">
        <header className="mb-12 space-y-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
                Thank you
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter">You&apos;re in</h1>
            </div>
            <div className="flex justify-center md:justify-end items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground border text-sm font-semibold"
              >
                Clevertree LLC
              </Link>
              <ThemeToggle />
            </div>
          </div>

          <p className="text-lg leading-relaxed text-muted-foreground">
            Thanks for trying Clevertree. Your download or signup is confirmed — we appreciate you
            checking out what we&apos;re building.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href="https://clevertree.chat"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Clevertree Chat
            </a>
            <a
              href="https://myproblem.app"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground border text-sm font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit myproblem.app
            </a>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <ContactLink icon={<Globe size={18} />} href="https://clevertree.net" label="clevertree.net" />
            <ContactLink
              icon={<Mail size={18} />}
              href="mailto:clevertreellc@gmail.com"
              label="clevertreellc@gmail.com"
            />
            <ContactLink icon={<Github size={18} />} href="https://github.com/clevertree" label="github.com/clevertree" />
          </div>

          <p className="text-sm text-muted-foreground">
            Questions? Reach us at {'*@clevertree.net'} or{' '}
            <a className="underline" href="mailto:clevertreellc@gmail.com">
              {'clevertreellc@gmail.com'}
            </a>
            .
          </p>
        </header>

        <footer className="mt-20 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Clevertree LLC. Built with CleverScript on Relay.</p>
        </footer>
      </div>
    </main>
  )
}

function ContactLink({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-sm font-medium border"
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {icon}
      <span>{label}</span>
    </a>
  )
}
