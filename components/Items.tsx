import React from 'react'
import { Github, ExternalLink, Library, Globe, Code, Box } from 'lucide-react'
import { Card, Badge } from './ui'

interface ProjectProps {
    name: string
    description: string
    github?: string
    website?: string
    status?: 'planned' | 'active' | 'published'
}

export const ProjectItem = ({ name, description, github, website, status }: ProjectProps) => (
    <Card className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold">{name}</h3>
            {status && (
                <Badge className={
                    status === 'planned' ? 'bg-yellow-500' :
                        status === 'active' ? 'bg-green-500' : 'bg-blue-500'
                }>
                    {status}
                </Badge>
            )}
        </div>
        <p className="text-muted-foreground flex-grow mb-4">{description}</p>
        <div className="flex gap-4 mt-auto">
            {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm hover:text-primary transition-colors">
                    <Github className="w-4 h-4 mr-1" /> GitHub
                </a>
            )}
            {website && (
                <a href={website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4 mr-1" /> Website
                </a>
            )}
        </div>
    </Card>
)

export const LibraryItem = ({ name, description, github, npm, cargo }: { name: string, description: string, github: string, npm?: string, cargo?: string }) => (
    <Card className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Library className="w-5 h-5 text-primary" />
                <span className="font-mono font-bold text-lg">{name}</span>
            </div>
            <div className="flex gap-2">
                <a href={github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-accent rounded-full transition-colors" title="GitHub">
                    <Github className="w-5 h-5" />
                </a>
                {npm && (
                    <a href={npm} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-accent rounded-full transition-colors" title="NPM">
                        <Code className="w-5 h-5" />
                    </a>
                )}
                {cargo && (
                    <a href={cargo} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-accent rounded-full transition-colors" title="Crates.io">
                        <Box className="w-5 h-5" />
                    </a>
                )}
            </div>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
)
