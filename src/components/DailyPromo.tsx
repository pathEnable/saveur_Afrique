"use client"

import * as React from "react"
import { Timer, Sparkles, ArrowRight, Flame, X } from "lucide-react"
import Link from "next/link"

export function DailyPromo() {
    const [timeLeft, setTimeLeft] = React.useState({ hours: 5, minutes: 42, seconds: 10 })
    const [isVisible, setIsVisible] = React.useState(false) // Start hidden to avoid hydration flash

    React.useEffect(() => {
        // Mode TEST : On affiche toujours la modale
        setIsVisible(true)

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
                if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
                return prev
            })
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const handleClose = () => {
        setIsVisible(false)
        // sessionStorage.setItem("dailyPromoHidden", "true")
    }

    if (!isVisible) return null

    return (
        <div className="fixed inset-0 z-[160] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-500">
            {/* Backdrop with light transparency and blur */}
            <div
                className="absolute inset-0 bg-black/30 backdrop-blur-md"
                onClick={handleClose}
            />

            <div className="relative w-full max-w-4xl bg-card border border-border/50 rounded-[3rem] shadow-2xl shadow-black/10 overflow-hidden animate-in zoom-in-95 duration-500">
                {/* Close Button - refined and discrete */}
                <button
                    onClick={handleClose}
                    className="absolute top-6 right-6 z-20 h-10 w-10 rounded-full bg-muted/50 backdrop-blur-sm flex items-center justify-center text-foreground/40 hover:text-foreground hover:bg-muted transition-all active:scale-90 border border-border/50"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* Subtle Background glow instead of vivid orange */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                <div className="relative p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Side: Content */}
                    <div className="flex-1 text-center lg:text-left space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] border border-primary/10">
                            <Sparkles className="h-4 w-4" />
                            Annonce Spéciale
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-[1.1] tracking-tight">
                                <span className="text-primary/80 italic font-medium">Offre Flash</span><br />
                                -20% aujourd&apos;hui
                            </h2>
                            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                                Découvrez les saveurs authentiques de notre <span className="text-foreground font-semibold">Poulet Bicyclette Braisé</span>. Une tradition revisitée avec finesse.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                            <Link
                                href="/menu"
                                onClick={handleClose}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary text-white font-bold py-4 px-10 rounded-2xl shadow-lg shadow-primary/10 transition-all hover:translate-y-[-2px] active:translate-y-0 text-lg"
                            >
                                J&apos;EN PROFITE
                                <ArrowRight className="h-5 w-5" />
                            </Link>

                            <div className="flex items-center gap-4 bg-muted/30 px-8 py-4 rounded-2xl border border-border/50">
                                <Timer className="h-5 w-5 text-primary/60 animate-pulse" />
                                <div className="flex items-center gap-2 font-mono text-xl md:text-2xl font-bold text-foreground/80 tabular-nums tracking-tighter">
                                    <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                                    <span className="opacity-20">:</span>
                                    <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                                    <span className="opacity-20">:</span>
                                    <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Refined Badge */}
                    <div className="relative flex-shrink-0 hidden sm:block">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                            {/* Animated subtle rings */}
                            <div className="absolute inset-4 border border-dashed border-primary/10 rounded-full animate-[spin_40s_linear_infinite]" />

                            <div className="relative bg-card border border-border/50 text-foreground w-56 h-56 md:w-72 md:h-72 rounded-[3.5rem] flex flex-col items-center justify-center shadow-xl -rotate-6 transition-all duration-700 hover:rotate-0 hover:scale-[1.02]">
                                <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                                    <Flame className="h-24 w-24 text-primary" />
                                </div>
                                <span className="text-sm font-bold uppercase tracking-[0.4em] text-primary/60 mb-2">Réduction</span>
                                <span className="text-7xl md:text-9xl font-serif font-black tracking-tighter text-foreground">-20%</span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.5em] mt-4 opacity-20">Exclusive</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
