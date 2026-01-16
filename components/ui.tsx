import React from 'react'

export const Section = ({ title, children, className = "" }: { title: string, children: React.ReactNode, className?: string }) => (
  <section className={`mb-12 ${className}`}>
    <h2 className="text-3xl font-bold mb-6 border-b pb-2">{title}</h2>
    {children}
  </section>
)

export const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-card text-card-foreground rounded-lg border shadow-sm p-6 ${className}`}>
    {children}
  </div>
)

export const Badge = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground ${className}`}>
    {children}
  </span>
)
