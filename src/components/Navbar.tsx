"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, UtensilsCrossed, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/ThemeToggle"

const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Commande", href: "/commande" },
    { name: "À Propos", href: "/about" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Lock body scroll when mobile menu is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => { document.body.style.overflow = "" }
    }, [isOpen])

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
            scrolled
                ? "glass shadow-lg border-b border-primary/10"
                : "bg-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-5 lg:px-8">
                <div className="flex justify-between h-16 md:h-20 items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group relative z-[60]">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/30 transition-all" />
                            <UtensilsCrossed className={cn(
                                "h-7 w-7 md:h-8 md:w-8 relative z-10 transition-colors duration-300",
                                isOpen ? "text-primary" : scrolled ? "text-primary" : "text-white"
                            )} />
                        </div>
                        <span className={cn(
                            "text-xl md:text-2xl font-serif font-bold transition-colors duration-300",
                            isOpen ? "text-foreground" : scrolled ? "text-foreground" : "text-white"
                        )}>
                            Saveurs d&apos;Afrique
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10",
                                    scrolled
                                        ? "text-foreground hover:text-primary"
                                        : "text-white/90 hover:text-white hover:bg-white/10"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/commande"
                            className="ml-3 bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0 touch-feedback"
                        >
                            Commander
                        </Link>
                        <ThemeToggle className={cn(
                            scrolled ? "text-foreground" : "text-white"
                        )} />
                    </div>

                    {/* Mobile hamburger — 44px min touch target */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={cn(
                            "md:hidden touch-target rounded-xl transition-all duration-300 relative z-[60]",
                            isOpen
                                ? "text-foreground"
                                : scrolled
                                    ? "text-foreground hover:bg-muted"
                                    : "text-white hover:bg-white/10"
                        )}
                        aria-label="Menu"
                    >
                        <div className="relative w-6 h-6">
                            <X className={cn(
                                "absolute inset-0 h-6 w-6 transition-all duration-300",
                                isOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
                            )} />
                            <Menu className={cn(
                                "absolute inset-0 h-6 w-6 transition-all duration-300",
                                isOpen ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"
                            )} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile fullscreen menu */}
            <div className={cn(
                "md:hidden fixed inset-0 z-50 transition-all duration-500",
                isOpen ? "pointer-events-auto" : "pointer-events-none"
            )}>
                {/* Backdrop */}
                <div className={cn(
                    "absolute inset-0 bg-background/95 backdrop-blur-xl transition-opacity duration-500",
                    isOpen ? "opacity-100" : "opacity-0"
                )} />

                {/* Menu content */}
                <div className={cn(
                    "relative h-full flex flex-col justify-center items-center px-8 transition-all duration-500",
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                )}>
                    <div className="space-y-2 w-full max-w-sm stagger-children">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block text-center text-2xl font-serif font-semibold text-foreground hover:text-primary py-4 rounded-2xl hover:bg-primary/5 transition-all duration-300 touch-feedback"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className={cn(
                        "mt-8 w-full max-w-sm transition-all duration-500 delay-300",
                        isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}>
                        <Link
                            href="/commande"
                            className="block text-center bg-primary text-white py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all touch-feedback"
                            onClick={() => setIsOpen(false)}
                        >
                            🛒 Passer commande
                        </Link>
                    </div>

                    {/* Phone shortcut */}
                    <a
                        href="tel:+22960000000"
                        className={cn(
                            "mt-4 flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-500 delay-[400ms]",
                            isOpen ? "opacity-100" : "opacity-0"
                        )}
                    >
                        <Phone className="h-4 w-4" />
                        <span className="text-sm font-medium">+229 60 00 00 00</span>
                    </a>

                    {/* Theme toggle */}
                    <div className={cn(
                        "mt-4 transition-all duration-500 delay-[500ms]",
                        isOpen ? "opacity-100" : "opacity-0"
                    )}>
                        <ThemeToggle className="text-foreground" />
                    </div>
                </div>
            </div>
        </nav>
    )
}
