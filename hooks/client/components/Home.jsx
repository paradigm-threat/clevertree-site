import React from 'react'
import Section from 'hooks/client/components/Section.jsx'
import ProjectItem from 'hooks/client/components/ProjectItem.jsx'
import LibraryItem from 'hooks/client/components/LibraryItem.jsx'
import Resume from 'hooks/client/components/Resume.jsx'
import ThemeToggle from 'hooks/client/components/ThemeToggle.jsx'
import PrintButton from 'hooks/client/components/PrintButton.jsx'

function ContactLink(props) {
  const href = props.href
  const label = props.label
  const external = href.indexOf('http') === 0
  return (
    <a
      href={href}
      className="ct-secondary"
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.4rem 0.75rem',
        borderRadius: '9999px',
        fontSize: '0.875rem',
        fontWeight: '500',
        borderWidth: 1,
        borderStyle: 'solid',
        textDecoration: 'none',
      }}
    >
      {label}
    </a>
  )
}

export default function Home(props) {
  const bio = props.bio || "I'm a full-stack developer with over 18 years of industrial experience. I consider programming to be a form of art requiring a creative mind. I work well with teams and just as well autonomously. I am a US citizen born in Texas. I would like to work long-term in a position of responsibility. My ambitions include designing music software and video games and studying history."
  const year = props.year || '2026'

  return (
    <main className="ct-page" id="ct-home">
      <div className="ct-container">
        <header style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <img
                src="/logo/logo-text.png"
                alt="CleverTree logo"
                width="96"
                height="96"
                style={{ borderRadius: '0.375rem', width: '96px', height: '96px', objectFit: 'cover' }}
              />
              <div>
                <h1 id="ct-name" style={{ fontSize: '3.5rem', fontWeight: '800', letterSpacing: '-0.04em', margin: '0 0 0.35rem' }}>
                  Ari Asulin
                </h1>
                <p className="ct-muted" style={{ fontSize: '1.5rem', fontWeight: '500', margin: 0 }}>
                  Software Engineer
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <ThemeToggle />
              <PrintButton />
            </div>
          </div>

          <p className="ct-muted" id="ct-bio" style={{ fontSize: '1.125rem', lineHeight: 1.7, maxWidth: '48rem' }}>
            {bio}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.25rem' }}>
            <ContactLink href="https://clevertree.net" label="clevertree.net" />
            <ContactLink href="mailto:ari.asulin@gmail.com" label="ari.asulin@gmail.com" />
            <ContactLink href="tel:602-632-6729" label="602-632-6729" />
            <ContactLink href="https://github.com/clevertree" label="github.com/clevertree" />
          </div>
        </header>

        <Section title="Key Projects">
          <div id="ct-projects" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <ProjectItem
              name="Forgotten Future"
              description="AI-Driven Book and Game Project exploring interactive narrative through parallax scrolling and WebGL."
              github="https://github.com/clevertree/forgotten-future"
              website="https://ffga.me"
              status="active"
            />
            <ProjectItem
              name="Paradigm Threat"
              description="An investigation repository and alternate history timeline compiled from ancient testimony."
              github="https://github.com/clevertree/paradigm-threat"
              website="https://paradigmthreat.net"
              status="published"
            />
            <ProjectItem
              name="Relay"
              description="A decentralized Web3.0 stack and social network architecture (relaynet.online)."
              github="https://github.com/clevertree/relay"
              website="https://relaynet.online"
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
              website="https://gordonstonartsfair.com"
              status="published"
            />
            <ProjectItem
              name="Song Walker"
              description="Planned interactive music exploration platform and spatial audio visualizer."
              status="planned"
            />
          </div>
        </Section>

        <Section title="Published Libraries">
          <div id="ct-libraries" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
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

        <div className="resume-section">
          <Resume />
        </div>

        <footer
          className="ct-muted"
          style={{
            marginTop: '5rem',
            paddingTop: '2rem',
            borderTopWidth: 1,
            borderTopStyle: 'solid',
            textAlign: 'center',
            fontSize: '0.875rem',
          }}
        >
          <p style={{ margin: 0 }}>© {year} Ari Asulin. Built with CleverScript on Relay.</p>
        </footer>
      </div>
    </main>
  )
}
