import React from 'react'
import Section from 'hooks/client/components/Section.jsx'
import ProjectItem from 'hooks/client/components/ProjectItem.jsx'
import LibraryItem from 'hooks/client/components/LibraryItem.jsx'
import Resume from 'hooks/client/components/Resume.jsx'
import ThemeToggle from 'hooks/client/components/ThemeToggle.jsx'
import PrintButton from 'hooks/client/components/PrintButton.jsx'
import { IconGlobe, IconMail, IconPhone, IconGithub } from 'hooks/client/components/Icons.jsx'

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
      <a
        href={href}
        className="ct-chip"
        target="_blank"
        rel="noopener noreferrer"
      >
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
  const bio = props.bio || "I'm a full-stack developer with over 18 years of industrial experience. I consider programming to be a form of art requiring a creative mind. I work well with teams and just as well autonomously. I am a US citizen born in Texas. I would like to work long-term in a position of responsibility. My ambitions include designing music software and video games and studying history."
  const year = props.year || '2026'

  return (
    <main className="ct-page" id="ct-home">
      <div className="ct-container">
        <header className="ct-header">
          <div className="ct-header-top md:ct-header-top-row">
            <div className="ct-identity">
              <img
                src="/logo/logo-text.png"
                alt="CleverTree logo"
                width="96"
                height="96"
                style={{ borderRadius: '0.375rem', width: '96px', height: '104px', objectFit: 'fill' }}
              />
              <div className="ct-identity-text md:ct-identity-text-left">
                <h1 id="ct-name" className="ct-name">
                  Ari Asulin
                </h1>
                <p className="ct-muted ct-title">
                  Software Engineer
                </p>
              </div>
            </div>
            <div className="ct-actions">
              <ThemeToggle />
              <PrintButton />
            </div>
          </div>

          <p className="ct-muted ct-bio md:ct-bio-left" id="ct-bio">
            {bio}
          </p>

          <div className="ct-contacts md:ct-contacts-left">
            <ContactLink href="https://clevertree.net" label="clevertree.net" icon={<IconGlobe />} />
            <ContactLink href="mailto:ari.asulin@gmail.com" label="ari.asulin@gmail.com" icon={<IconMail />} />
            <ContactLink href="tel:602-632-6729" label="602-632-6729" icon={<IconPhone />} />
            <ContactLink href="https://github.com/clevertree" label="github.com/clevertree" icon={<IconGithub />} />
          </div>
        </header>

        <Section title="Key Projects">
          <div id="ct-projects" className="ct-projects md:ct-projects-md">
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
              github=""
              website="https://skinnerfamilydental.com"
              status="published"
            />
            <ProjectItem
              name="Gordonston Arts Fair"
              description="Annual arts community hub for Savannah's historic Gordonston neighborhood."
              github=""
              website="https://gordonstonartsfair.com"
              status="published"
            />
            <ProjectItem
              name="Song Walker"
              description="Planned interactive music exploration platform and spatial audio visualizer."
              github=""
              website=""
              status="planned"
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

        <div className="resume-section">
          <Resume />
        </div>

        <footer className="ct-muted ct-footer">
          <p style={{ margin: 0 }}>© {year} Ari Asulin. Built with CleverScript on Relay.</p>
        </footer>
      </div>
    </main>
  )
}
