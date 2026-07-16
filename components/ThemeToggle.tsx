'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-full bg-secondary animate-pulse" />
        )
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="no-print p-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all border shadow-sm hover:shadow-md outline-none focus-visible:ring-2 ring-primary"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Sun size={20} className="transition-all" />
            ) : (
                <Moon size={20} className="transition-all" />
            )}
        </button>
    )
}
