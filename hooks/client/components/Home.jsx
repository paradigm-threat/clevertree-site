import React from 'react'
import Section from 'hooks/client/components/Section.jsx'
import ProjectItem from 'hooks/client/components/ProjectItem.jsx'
import LibraryItem from 'hooks/client/components/LibraryItem.jsx'
import ThemeToggle from 'hooks/client/components/ThemeToggle.jsx'
import TreeGrow from 'hooks/client/components/TreeGrow.jsx'
import ChatEmbed from 'hooks/client/components/ChatEmbed.jsx'
import SongWalkerEmbed from 'hooks/client/components/SongWalkerEmbed.jsx'
import { IconGlobe, IconGithub } from 'hooks/client/components/Icons.jsx'

function ContactLink(props) {
  const href = props.href || '#'
  const label = props.label || ''
  const icon = props.icon
  const isHttp = href.indexOf('http://') === 0 || href.indexOf('https://') === 0
  const inner = (
    <>
      {icon}
      <span>{label}</span>
    </>
  )
  if (isHttp) {
    return (
      <a href={href} className="ct-chip" target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    )
  }
  return (
    <a href={href} className="ct-chip">
      {inner}
    </a>
  )
}

export default function Home(props) {
  const bio =
    props.bio ||
    'Clevertree LLC builds embeddable open-source software — standing debates, investigation mesh, and music-as-code — hosted on Relay.'
  const year = props.year || '2026'
  const chatPath = props.chatPath || '/'

  return (
    <main className="ct-page ct-page-home md:ct-page-home-landscape" id="ct-home">
      <header className="ct-hero">
        <div className="ct-hero-bar">
          <a href="/resume.md" className="ct-action-btn ct-secondary">
            Resume
          </a>
          <ThemeToggle />
        </div>
        <div className="ct-hero-inner md:ct-hero-inner-row">
          <div className="ct-hero-tree md:ct-hero-tree-side">
            <TreeGrow variant="hero" />
          </div>
          <div className="ct-hero-copy md:ct-hero-copy-side">
            <h1 id="ct-name" className="ct-name">
              Clevertree LLC
            </h1>
            <p className="ct-muted ct-title">Software Projects</p>
            <p className="ct-muted ct-bio md:ct-bio-left" id="ct-bio">
              {bio}
            </p>
            <p className="ct-muted ct-bio md:ct-bio-left" style={{ marginTop: '0.75rem' }}>
              How we build: daily anonymous stats and tip review, next-day product patches, A-team plus LLM agents at major-corp cadence—and a path to user-filed reports that triage and ship without a developer in the middle.{' '}
              <a href="https://quizgate.app/#daily-loop">QuizGate</a>
              {' · '}
              <a href="https://myproblem.app/how-we-run#daily-ops">MyProblem</a>
              {' · '}
              <a href="https://clevertree.chat/#daily-loop">Clevertree Chat</a>
            </p>
            <div className="ct-contacts md:ct-contacts-left">
              <ContactLink href="https://clevertree.net" label="clevertree.net" icon={<IconGlobe />} />
              <ContactLink href="https://github.com/clevertree" label="github.com/clevertree" icon={<IconGithub />} />
            </div>
          </div>
        </div>
      </header>

      <div className="ct-container">
        <Section title="Try the embeds">
          <p className="ct-muted" style={{ marginTop: 0, marginBottom: '1rem' }}>
            Clevertree Chat mounts on any page: the channel follows this site’s path (domain is where it’s embedded). SongWalker shows the music UI; SNESology is the same engine.
          </p>
          <div className="ct-embed-stack">
            <div className="ct-embed-panel">
              <h3 className="ct-embed-label">Clevertree Chat</h3>
              <ChatEmbed path={chatPath} />
            </div>
            <div className="ct-embed-panel">
              <h3 className="ct-embed-label">SongWalker</h3>
              <SongWalkerEmbed />
            </div>
          </div>
        </Section>

        <Section title="Key Projects">
          <div id="ct-projects" className="ct-projects md:ct-projects-md">
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

        <Section title="Published Libraries">
          <div id="ct-libraries" className="ct-libraries md:ct-libraries-md">
            <LibraryItem
              name="hook-transpiler"
              description="High-performance JSX/TSX transpiler optimized for Relay hooks and dynamic module injection."
              github="https://github.com/clevertree/hook-transpiler"
              npm="https://www.npmjs.com/package/%40clevertree/hook-transpiler"
              cargo="https://crates.io/crates/relay-hook-transpiler"
            />
            <LibraryItem
              name="jscbridge"
              description="A lightweight bridge for communicating between JavaScriptCore and native environments."
              github="https://github.com/clevertree/jscbridge"
              npm=""
              cargo=""
            />
            <LibraryItem
              name="md2jsx"
              description="Flexible Markdown to JSX converter with support for custom React components and themes."
              github="https://github.com/clevertree/md2jsx"
              npm="https://www.npmjs.com/package/%40clevertree/md2jsx"
              cargo="https://crates.io/crates/md2jsx"
            />
            <LibraryItem
              name="themed-styler"
              description="Rust-powered WASM engine for dynamic theme generation and CSS variable management."
              github="https://github.com/clevertree/themed-styler"
              npm="https://www.npmjs.com/package/%40clevertree/themed-styler"
              cargo="https://crates.io/crates/themed-styler"
            />
          </div>
        </Section>

        <footer className="ct-muted ct-footer">
          <p style={{ margin: 0 }}>© {year} Clevertree LLC. Built with CleverScript on Relay.</p>
        </footer>
      </div>
    </main>
  )
}
