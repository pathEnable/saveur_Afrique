"use client"

import * as React from "react"
import Image from "next/image"
import { X, Plus, Minus, ShoppingBag, Check, Star, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/context/CartContext"

interface ProductModalProps {
    isOpen: boolean
    onClose: () => void
    product: any
}

export function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
    const { addToCart } = useCart()
    const [quantity, setQuantity] = React.useState(1)
    const [selectedExtra, setSelectedExtra] = React.useState<string[]>([])

    // Reset state when modal opens with a new product
    React.useEffect(() => {
        if (isOpen) {
            setQuantity(1)
            setSelectedExtra([])
        }
    }, [isOpen, product])

    if (!isOpen || !product) return null

    const toggleExtra = (extra: string) => {
        setSelectedExtra(prev =>
            prev.includes(extra)
                ? prev.filter(e => e !== extra)
                : [...prev, extra]
        )
    }

    const parsePrice = (priceStr: string) => {
        return parseInt(priceStr.replace(/[^0-9]/g, ""))
    }

    const handleAdd = () => {
        addToCart({
            id: `${product.name.toLowerCase().replace(/\s+/g, '-')}-${selectedExtra.join('-')}`,
            name: product.name,
            price: product.price,
            priceNumber: parsePrice(product.price),
            options: selectedExtra,
            image: product.image
        })
        onClose()
    }

    const extras = [
        { name: "Suppléments Piment", price: "+ 0 FCFA" },
        { name: "Oignons Grillés", price: "+ 200 FCFA" },
        { name: "Extra Sauce", price: "+ 300 FCFA" },
    ]

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-background/80 backdrop-blur-md animate-in fade-in duration-300"
                onClick={onClose}
            />

            <div className="relative w-full max-w-2xl bg-card border border-border rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300 flex flex-col md:flex-row max-h-[90vh]">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-background/50 backdrop-blur-md flex items-center justify-center hover:bg-background transition-colors border border-border/50"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* Left Side: Visual */}
                <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                    <Image
                        src={product.image || "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        {product.tag && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                                <Star className="h-3 w-3" />
                                {product.tag}
                            </span>
                        )}
                        <h2 className="text-2xl font-serif font-bold text-white">{product.name}</h2>
                    </div>
                </div>

                {/* Right Side: Details & Actions */}
                <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto scrollbar-none">
                    <div className="space-y-6">
                        <div>
                            <p className="text-primary font-bold text-xl mb-2">{product.price}</p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {product.description || "Un délice authentique préparé avec passion par notre chef."}
                            </p>
                        </div>

                        {/* Customization */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                Personnalisation
                                <Info className="h-3 w-3" />
                            </h3>
                            <div className="space-y-2">
                                {extras.map((extra) => (
                                    <button
                                        key={extra.name}
                                        onClick={() => toggleExtra(extra.name)}
                                        className={cn(
                                            "w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200",
                                            selectedExtra.includes(extra.name)
                                                ? "border-primary bg-primary/5 text-primary"
                                                : "border-border hover:border-primary/30"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={cn(
                                                "h-5 w-5 rounded-md border flex items-center justify-center transition-colors",
                                                selectedExtra.includes(extra.name) ? "bg-primary border-primary" : "border-border"
                                            )}>
                                                {selectedExtra.includes(extra.name) && <Check className="h-3 w-3 text-white" />}
                                            </div>
                                            <span className="text-sm font-medium">{extra.name}</span>
                                        </div>
                                        <span className="text-xs opacity-60 font-bold">{extra.price}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity & Add */}
                        <div className="pt-4 space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 bg-muted/50 p-1.5 rounded-2xl border border-border/50">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="h-10 w-10 rounded-xl bg-background flex items-center justify-center hover:text-primary transition-colors hover:shadow-sm"
                                    >
                                        <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="text-lg font-bold w-4 text-center">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="h-10 w-10 rounded-xl bg-background flex items-center justify-center hover:text-primary transition-colors hover:shadow-sm"
                                    >
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={handleAdd}
                                className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-2xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-[0.98]"
                            >
                                <ShoppingBag className="h-5 w-5" />
                                Ajouter au Panier — {product.price}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
