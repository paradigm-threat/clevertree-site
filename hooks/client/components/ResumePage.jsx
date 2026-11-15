import React from 'react'
import Section from 'hooks/client/components/Section.jsx'
import ProjectItem from 'hooks/client/components/ProjectItem.jsx'
import Resume from 'hooks/client/components/Resume.jsx'
import ThemeToggle from 'hooks/client/components/ThemeToggle.jsx'
import PrintButton from 'hooks/client/components/PrintButton.jsx'
import ChatEmbed from 'hooks/client/components/ChatEmbed.jsx'
import { IconGlobe, IconMail, IconGithub } from 'hooks/client/components/Icons.jsx'

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

export default function ResumePage(props) {
  const bio =
    props.bio ||
    "I build free, high-performance open-source software. I'm a full-stack engineer with 18+ years of industry experience — equally at home in teams and working independently. Programming is a craft that rewards a creative mind. Right now I'm focused on MyProblem and Clevertree Chat, with Relay and Paradigm Threat as the ongoing mesh and investigation stack."
  const year = props.year || '2026'
  const chatPath = props.chatPath || '/resume'

  return (
    <main className="ct-page" id="ct-resume-page">
      <div className="ct-container">
        <header className="ct-header">
          <div className="ct-header-top md:ct-header-top-row">
            <div className="ct-identity">
              <div className="ct-identity-text md:ct-identity-text-left">
                <h1 id="ct-name" className="ct-name">
                  Ari Asulin
                </h1>
                <p className="ct-muted ct-title">Software Engineer</p>
              </div>
            </div>
            <div className="ct-actions">
              <a href="/" className="ct-action-btn ct-secondary">
                Clevertree LLC
              </a>
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
            <ContactLink href="https://github.com/clevertree" label="github.com/clevertree" icon={<IconGithub />} />
          </div>
        </header>

        <Section title="Client sites">
          <div id="ct-client-projects" className="ct-projects md:ct-projects-md">
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
              website="https://gordonstonartfair.com"
              status="published"
            />
          </div>
        </Section>

        <Resume />

        <Section title="Discuss this page">
          <p className="ct-muted" style={{ marginTop: 0, marginBottom: '1rem' }}>
            Clevertree Chat for this resume path — domain is this site; channel follows the page path.
          </p>
          <ChatEmbed path={chatPath} />
        </Section>

        <footer className="ct-muted ct-footer">
          <p style={{ margin: 0 }}>© {year} Ari Asulin. Built with CleverScript on Relay.</p>
        </footer>
      </div>
    </main>
  )
}
