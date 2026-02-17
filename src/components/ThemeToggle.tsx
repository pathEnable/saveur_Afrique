"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => setMounted(true), [])

    if (!mounted) {
        return (
            <button
                className={cn(
                    "relative inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
                    className
                )}
                aria-label="Changer de thème"
            >
                <span className="w-5 h-5" />
            </button>
        )
    }

    const isDark = resolvedTheme === "dark"

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={cn(
                "relative inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
                "hover:bg-primary/10 active:scale-95",
                className
            )}
            aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
        >
            <Sun
                className={cn(
                    "h-5 w-5 transition-all duration-500",
                    isDark
                        ? "rotate-0 scale-100 text-amber-400"
                        : "-rotate-90 scale-0 absolute"
                )}
            />
            <Moon
                className={cn(
                    "h-5 w-5 transition-all duration-500",
                    isDark
                        ? "rotate-90 scale-0 absolute"
                        : "rotate-0 scale-100 text-foreground"
                )}
            />
        </button>
    )
}
