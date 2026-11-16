import React from 'react'
import ThemeToggle from 'hooks/client/components/ThemeToggle.jsx'
import { IconGlobe, IconMail, IconGithub } from 'hooks/client/components/Icons.jsx'

function ContactLink(props) {
  const href = props.href || '#'
  const label = props.label || ''
  const icon = props.icon
  const isHttp = href.indexOf('http://') === 0 || href.indexOf('https://') === 0
  const isMail = href.indexOf('mailto:') === 0
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
  if (isMail) {
    return (
      <a href={href} className="ct-chip">
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

/**
 * Conversion confirmation for Google Ads (download / try / contact).
 * Uses a static brand mark (no park-native TreeGrow) so SSR stays light.
 */
export default function ThankYouPage(props) {
  const year = props.year || '2026'

  return (
    <main className="ct-page ct-page-home md:ct-page-home-landscape" id="ct-thankyou">
      <header className="ct-hero ct-thankyou-hero">
        <div className="ct-hero-bar">
          <a href="/" className="ct-action-btn ct-secondary">
            Clevertree LLC
          </a>
          <ThemeToggle />
        </div>
        <div className="ct-hero-inner md:ct-hero-inner-row">
          <div className="ct-hero-tree md:ct-hero-tree-side">
            <img
              className="ct-brand-mark ct-thankyou-mark"
              src="/logo/tree-transparent-256.png"
              alt="Clevertree"
              width="220"
              height="220"
            />
          </div>
          <div className="ct-hero-copy md:ct-hero-copy-side">
            <p className="ct-muted ct-title">Thank you</p>
            <h1 id="ct-name" className="ct-name">
              You&apos;re in
            </h1>
            <p className="ct-muted ct-bio md:ct-bio-left" id="ct-bio">
              Thanks for trying Clevertree. Your download or signup is confirmed — we appreciate you
              checking out what we&apos;re building.
            </p>
            <div className="ct-actions ct-thankyou-actions md:ct-contacts-left">
              <a
                href="https://clevertree.chat"
                className="ct-action-btn ct-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Clevertree Chat
              </a>
              <a
                href="https://myproblem.app"
                className="ct-action-btn ct-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit myproblem.app
              </a>
            </div>
            <div className="ct-contacts md:ct-contacts-left">
              <ContactLink href="https://clevertree.net" label="clevertree.net" icon={<IconGlobe />} />
              <ContactLink
                href="mailto:clevertreellc@gmail.com"
                label="clevertreellc@gmail.com"
                icon={<IconMail />}
              />
              <ContactLink
                href="https://github.com/clevertree"
                label="github.com/clevertree"
                icon={<IconGithub />}
              />
            </div>
            <p className="ct-muted ct-thankyou-note md:ct-bio-left">
              Questions? Reach us at *@clevertree.net or{' '}
              <a href="mailto:clevertreellc@gmail.com" className="ct-link ct-thankyou-mail">
                clevertreellc@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </header>

      <div className="ct-container">
        <footer className="ct-muted ct-footer">
          <p style={{ margin: 0 }}>© {year} Clevertree LLC. Built with CleverScript on Relay.</p>
        </footer>
      </div>
    </main>
  )
}
