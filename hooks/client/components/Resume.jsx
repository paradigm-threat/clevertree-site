import React from 'react'
import Section from 'hooks/client/components/Section.jsx'

const AT = '@'
const JYNX_EMAIL = 'Jynx.Younan' + '@' + 'phoenix.edu'
const MIKE_EMAIL = 'mikemcdonald' + '@' + 'harkins.com'

function SkillGroup(props) {
  const title = props.title
  const skills = props.skills || []
  const chips = []
  for (let i = 0; i < skills.length; i++) {
    const skill = skills[i]
    chips.push(
      <span
        key={skill}
        className="ct-secondary"
        style={{
          borderWidth: 1,
          borderStyle: 'solid',
          padding: '0.15rem 0.5rem',
          borderRadius: '0.375rem',
          fontSize: '0.75rem',
          fontWeight: '500',
        }}
      >
        {skill}
      </span>
    )
  }
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <p style={{ fontWeight: '700', marginBottom: '0.5rem', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.8 }}>
        {title}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {chips}
      </div>
    </div>
  )
}

function ExperienceItem(props) {
  return (
    <div style={{ borderLeftWidth: 2, borderLeftStyle: 'solid', paddingLeft: '1rem', marginBottom: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
        <h4 style={{ fontWeight: '700', fontSize: '1.125rem', margin: 0 }}>{props.title}</h4>
        <span className="ct-secondary" style={{ fontSize: '0.7rem', fontFamily: 'ui-monospace, monospace', padding: '0.15rem 0.5rem', borderRadius: '0.25rem', borderWidth: 1, borderStyle: 'solid' }}>
          {props.duration}
        </span>
      </div>
      <div className="ct-muted" style={{ fontSize: '0.75rem', marginBottom: '0.75rem' }}>
        <strong>{props.company}</strong> — {props.location}
      </div>
      <p className="ct-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{props.description}</p>
    </div>
  )
}

function EducationItem(props) {
  return (
    <div style={{ borderBottomWidth: 1, borderBottomStyle: 'solid', paddingBottom: '1rem', marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
        <h4 style={{ fontWeight: '700', fontSize: '1.125rem', margin: 0 }}>{props.school}</h4>
        <span className="ct-secondary" style={{ fontSize: '0.7rem', fontFamily: 'ui-monospace, monospace', padding: '0.15rem 0.5rem', borderRadius: '0.25rem', borderWidth: 1, borderStyle: 'solid' }}>
          {props.duration}
        </span>
      </div>
      <p style={{ fontWeight: '600', fontSize: '0.875rem', margin: '0.25rem 0' }}>{props.degree}</p>
      <p className="ct-muted" style={{ fontSize: '0.75rem', margin: 0 }}>{props.location}</p>
    </div>
  )
}

export default function Resume() {
  return (
    <Section title="Resume">
      <div id="ct-resume" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', fontSize: '0.875rem' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>Experience</h3>
          <ExperienceItem
            title="Software Contractor (Engineer II)"
            company="University of Phoenix"
            location="Phoenix, AZ"
            duration="June 2021 - Present"
            description="Developed applications and web pages for UofPhx, collaborating cross-functionally with stakeholders to communicate timelines and translate technical requirements into actionable tasks. Designed and implemented ReactJS components in AEM and NextJS. Partnered with QA and product teams to track ticket resolution and ensure delivery milestones were met. Guided team members on best practices while managing tech debt. Maintained AWS infrastructure and monitored user experience via FullStory, SpeechMiner, and ContentSquare."
          />
          <ExperienceItem
            title="Software Contractor"
            company="Harkins Theatres"
            location="Scottsdale, AZ"
            duration="June 2017 - June 2021"
            description="Developed Harkins.com website and mobile apps. Served as the technical liaison between IT and marketing teams, aligning stakeholder expectations with engineering capacity. Implemented features using NodeJS, PHP, MySQL, jQuery, and REST. Identified and resolved blockers to maintain stability during high-traffic events and security incidents. Managed migrations from Windows to LAMP and deployed React Native apps to Play and Apple stores."
          />
          <ExperienceItem
            title="Software Contractor"
            company="Simon Payments"
            location="Florida (Remote)"
            duration="Aug 2016 – Dec 2018"
            description="Redesigned entire payment processor in PHP including a front-end UI generating forms on the fly. Integrated APIs for processing bank transactions. Developed modules for payment, payout, and financial systems. Maintained encrypted storage, scheduling, and automation."
          />
          <ExperienceItem
            title="Originator and Software Engineer"
            company="Originate and NewAer"
            location="San Francisco, CA"
            duration="Aug 2013 – Dec 2014"
            description="Built apps for Android, iOS, WinRT, and Windows 8 desktop. Investigated proximity-based social networking technologies."
          />
          <ExperienceItem
            title="Head of Information Technology"
            company="Etelegate"
            location="Scottsdale, AZ"
            duration="May 2005 – Oct 2012"
            description="Lead Developer and IT Head for a payment processor. Set realistic development milestones, communicated project status to non-technical stakeholders in clear terms, and steered the team across a 6-year roadmap. Accountable for team output and cross-department deliverables. Built financial systems, account management, and real-time data integrations with global banking."
          />

          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', marginTop: '2rem' }}>Education</h3>
          <EducationItem
            school="Arizona State University"
            location="Tempe, Arizona"
            degree="B.S. in Computer Science"
            duration="2002 - 2008"
          />
          <EducationItem
            school="University of Arizona"
            location="Tucson, Arizona"
            degree="Computer Science (Transferred to ASU)"
            duration="2001 - 2002"
          />

          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', marginTop: '2rem' }}>Professional References</h3>
          <div className="ct-card" style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontWeight: '700', fontSize: '1.125rem', margin: '0 0 0.25rem' }}>Jynx Younan</h4>
            <p className="ct-muted" style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: '600', margin: '0 0 0.5rem' }}>
              Agile People Leader {AT} University of Phoenix
            </p>
            <p className="ct-muted" style={{ fontSize: '0.75rem', margin: 0 }}>{JYNX_EMAIL} · 602-557-1090</p>
          </div>
          <div className="ct-card">
            <h4 style={{ fontWeight: '700', fontSize: '1.125rem', margin: '0 0 0.25rem' }}>Mike McDonald</h4>
            <p className="ct-muted" style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: '600', margin: '0 0 0.5rem' }}>
              Software Architect {AT} Harkins Theatres
            </p>
            <p className="ct-muted" style={{ fontSize: '0.75rem', margin: '0 0 0.75rem' }}>{MIKE_EMAIL} · 615-995-0639</p>
            <blockquote className="ct-muted" style={{ fontStyle: 'italic', borderLeftWidth: 4, borderLeftStyle: 'solid', paddingLeft: '1rem', margin: 0, lineHeight: 1.6 }}>
              "Ari is the real deal and I can't imagine a company hiring him as a developer and being dissatisfied with his work. He turned a non-functional site into a functional one. In a high-stress environment he kept his cool and was able to meet all requirements asked of him."
            </blockquote>
          </div>
        </div>

        <div>
          <div className="ct-card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottomWidth: 1, borderBottomStyle: 'solid' }}>
              Technical Arsenal
            </h3>
            <SkillGroup title="Programming" skills={[
              'JavaScript/TypeScript', 'ReactJS', 'React Native', 'NodeJS', 'HTML5 & CSS3',
              'PHP', '.NET & C#', 'SQL', 'Android/iOS Dev', 'CI/CD', 'API Design (REST/GraphQL)'
            ]} />
            <SkillGroup title="AI & Agents" skills={[
              'GitHub Copilot (all models)', 'Prompt Engineering', 'Per-repo Copilot Instructions',
              'Agentic Data Scraping & Cross-referencing', 'Document & Summary Generation',
              'Meeting Transcript Automation', 'Agent-driven Infrastructure Monitoring',
              'Context-aware Jira Ticket Management'
            ]} />
            <SkillGroup title="Leadership" skills={[
              'Stakeholder Communication', 'Mentoring & Coaching', 'Sprint Planning',
              'Cross-team Coordination', 'QA & Ticket Ownership', 'Feedback Culture'
            ]} />
            <SkillGroup title="Administration" skills={[
              'Linux SysAdmin', 'Nginx / Apache', 'SSL Certs', 'AEM', 'AWS Lambda & EC2'
            ]} />
            <SkillGroup title="Tools" skills={[
              'Git', 'SSH', 'Bash', 'JetBrains IDEs', 'VS Code', 'Gimp', 'Kdenlive', 'OBS Studio', 'NVDA'
            ]} />
            <SkillGroup title="Media" skills={[
              'Video Editing', 'Image Creation', 'Music Composition', 'Production'
            ]} />
            <div>
              <p style={{ fontWeight: '700', marginBottom: '0.5rem', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.8 }}>
                Certifications
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
                <li style={{ fontSize: '0.75rem', fontWeight: '500', marginBottom: '0.25rem' }}>AWS Certified Cloud Practitioner</li>
                <li style={{ fontSize: '0.75rem', fontWeight: '500' }}>AWS Certified Developer</li>
              </ul>
            </div>
          </div>
          <div className="ct-card ct-secondary">
            <h3 style={{ fontWeight: '700', marginBottom: '0.75rem', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Philosophy
            </h3>
            <p className="ct-muted" style={{ fontSize: '0.75rem', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
              Great teams thrive when communication is honest, goals are realistic, and every member feels supported. I aim to be the kind of lead who removes blockers, translates complexity, and keeps the team moving — without losing sight of the bigger picture.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
