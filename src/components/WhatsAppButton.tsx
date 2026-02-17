"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/22960000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group fixed bottom-5 right-5 z-50 flex items-center safe-bottom"
            aria-label="Contacter sur WhatsApp"
        >
            {/* Tooltip — desktop only */}
            <span className="hidden md:block mr-3 bg-foreground text-background text-sm font-medium px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap">
                Écrivez-nous !
            </span>
            {/* Button */}
            <div className="relative">
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20" />
                <div className="relative bg-green-500 hover:bg-green-600 text-white p-3.5 md:p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/30 touch-feedback">
                    <MessageCircle className="h-6 w-6" />
                </div>
            </div>
        </a>
    )
}
