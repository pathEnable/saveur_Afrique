"use client"

import * as React from "react"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function FloatingCart() {
    const { totalItems, totalPrice } = useCart()
    const [isVisible, setIsVisible] = React.useState(false)

    React.useEffect(() => {
        if (totalItems > 0) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [totalItems])

    if (!isVisible) return null

    return (
        <Link
            href="/commande"
            className={cn(
                "fixed bottom-24 right-6 z-40 animate-fade-in-up",
                "bg-primary text-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 transition-all hover:scale-105 active:scale-95 group"
            )}
        >
            <div className="relative">
                <ShoppingBag className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-white text-primary text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                    {totalItems}
                </span>
            </div>
            <div className="flex flex-col border-l border-white/20 pl-4 pr-2">
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">Votre Panier</span>
                <span className="font-bold tabular-nums">
                    {totalPrice.toLocaleString()} FCFA
                </span>
            </div>
        </Link>
    )
}
