"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, UtensilsCrossed, Phone, Home, Utensils, Info, Mail, ShoppingBag, Instagram, Facebook, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/ThemeToggle"

const navigation = [
    { name: "Accueil", href: "/", icon: <Home className="h-5 w-5" />, subtitle: "Bienvenue chez nous" },
    { name: "Menu", href: "/menu", icon: <Utensils className="h-5 w-5" />, subtitle: "Découvrez nos saveurs" },
    { name: "Commande", href: "/commande", icon: <ShoppingBag className="h-5 w-5" />, subtitle: "Commandez en ligne" },
    { name: "À Propos", href: "/about", icon: <Info className="h-5 w-5" />, subtitle: "Notre histoire" },
    { name: "Contact", href: "/contact", icon: <Mail className="h-5 w-5" />, subtitle: "Restons en contact" },
]

const socialLinks = [
    { name: "Instagram", href: "#", icon: <Instagram className="h-5 w-5" /> },
    { name: "Facebook", href: "#", icon: <Facebook className="h-5 w-5" /> },
    { name: "WhatsApp", href: "https://wa.me/2290141585780", icon: <MessageCircle className="h-5 w-5" /> },
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
            scrolled || isOpen
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
                            "flex md:hidden items-center justify-center h-11 w-11 touch-target rounded-xl transition-all duration-300 relative z-[60]",
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
                "md:hidden fixed inset-0 z-50 transition-all duration-500 overflow-hidden",
                isOpen ? "pointer-events-auto" : "pointer-events-none"
            )}>
                {/* Backdrop */}
                <div className={cn(
                    "absolute inset-0 bg-background/98 backdrop-blur-2xl transition-opacity duration-500",
                    isOpen ? "opacity-100" : "opacity-0"
                )} />

                {/* Decorative background element */}
                <div className={cn(
                    "absolute top-[-10%] right-[-10%] w-[70%] h-[40%] bg-primary/5 rounded-full blur-[100px] transition-all duration-1000 delay-300",
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                )} />

                {/* Menu content */}
                <div className="relative h-full flex flex-col pt-20 pb-12 px-6">
                    {/* Navigation items */}
                    <div className="flex-1 overflow-y-auto pr-2 -mr-2 scrollbar-none">
                        <div className="space-y-4 w-full">
                            {navigation.map((item, idx) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "group flex items-center gap-4 p-4 rounded-2xl bg-muted/30 hover:bg-primary/5 transition-all duration-300 touch-feedback border border-transparent hover:border-primary/10",
                                        "transition-all duration-500",
                                        isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                                    )}
                                    style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background border border-border shadow-sm group-hover:scale-110 group-hover:border-primary/20 transition-all duration-300">
                                        <span className="text-primary">{item.icon}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                                            {item.name}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                            {item.subtitle}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Footer section */}
                    <div className="mt-8 space-y-8">
                        {/* CTA */}
                        <div className={cn(
                            "transition-all duration-500 delay-[600ms]",
                            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}>
                            <Link
                                href="/commande"
                                className="block w-full text-center bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                                onClick={() => setIsOpen(false)}
                            >
                                <ShoppingBag className="h-5 w-5" />
                                Passer commande
                            </Link>
                        </div>

                        {/* Social & Contact */}
                        <div className={cn(
                            "flex flex-col gap-6 transition-all duration-500 delay-[700ms]",
                            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-3">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            className="h-10 w-10 flex items-center justify-center rounded-xl bg-muted/50 text-foreground hover:bg-primary hover:text-white transition-all duration-300"
                                            aria-label={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                                <ThemeToggle className="text-foreground bg-muted/50 rounded-xl h-10 w-10 flex items-center justify-center" />
                            </div>

                            <div className="flex flex-col gap-2 p-4 rounded-xl bg-muted/20 border border-border/50">
                                <a href="tel:+2290141585780" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                                    <Phone className="h-4 w-4" />
                                    <span className="text-sm font-medium">+229 01 41 58 57 80</span>
                                </a>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <Mail className="h-4 w-4" />
                                    <span className="text-sm">contact@saveursdafrique.bj</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
