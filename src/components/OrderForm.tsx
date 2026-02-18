"use client"

import { useState } from "react"
import Image from "next/image"
import { User, Phone, MessageSquare, CheckCircle, ArrowLeft, ShoppingBag, MapPin, Trash2, Plus, Minus, Utensils, Info } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function OrderForm() {
    const { items, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart()
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        orderType: "livraison",
        message: ""
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Format WhatsApp message
        const orderDetails = items.map(item => `- ${item.quantity}x ${item.name} (${item.price})`).join("\n")
        const total = totalPrice.toLocaleString()

        const waMessage = `Bonjour Saveurs d'Afrique ! 👋
Je souhaite passer une commande :

*Détails de la commande :*
${orderDetails}

*Total :* ${total} FCFA

*Type :* ${formData.orderType === "livraison" ? "🚗 Livraison" : "🛍️ À emporter"}
*Nom :* ${formData.name}
*Téléphone :* ${formData.phone}
${formData.orderType === "livraison" ? `*Adresse :* ${formData.address}` : ""}
${formData.message ? `\n*Note :* ${formData.message}` : ""}

Merci !`

        const encodedMessage = encodeURIComponent(waMessage)
        const waUrl = `https://wa.me/2290141585780?text=${encodedMessage}` // Replace with actual number

        window.open(waUrl, "_blank")
        setIsSubmitted(true)
        // clearCart() // We keep the cart in state for the success page's "Resend" button
    }

    if (items.length === 0 && !isSubmitted) {
        return (
            <div className="bg-card rounded-2xl p-12 text-center shadow-xl border border-border/50 animate-fade-in-up">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingBag className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Votre panier est vide</h3>
                <p className="text-muted-foreground mb-8">
                    Découvrez notre délicieuse carte et commencez à ajouter vos plats préférés.
                </p>
                <Link
                    href="/menu"
                    className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                >
                    Voir le Menu
                </Link>
            </div>
        )
    }

    if (isSubmitted) {
        // Prepare the URL again for the "Send again" button
        const orderDetails = items.length > 0 ? items.map(item => `- ${item.quantity}x ${item.name} (${item.price})`).join("\n") : "Détails non disponibles"
        const total = totalPrice.toLocaleString()
        const waMessage = `*RE-ENVOI DE COMMANDE* (Ignorez si déjà reçu) 👋\n\n*Détails :*\n${orderDetails}\n\n*Total :* ${total} FCFA\n*Nom :* ${formData.name}\n*Téléphone :* ${formData.phone}`
        const waUrl = `https://wa.me/2290141585780?text=${encodeURIComponent(waMessage)}`

        return (
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border border-border/50 animate-fade-in-up relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-muted">
                    <div className="h-full bg-primary w-1/3 animate-pulse" />
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            En cours de traitement
                        </div>

                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                            C&apos;est en route, <span className="text-primary">{formData.name}</span> !
                        </h3>
                        <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-4 mb-8">
                            <p className="text-amber-700 dark:text-amber-400 text-sm font-medium flex items-start gap-3">
                                <Info className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                <span>
                                    **Important :** N&apos;oubliez pas d&apos;**envoyer** le message dans WhatsApp qui vient de s&apos;ouvrir. Sans l&apos;envoi du message, nous ne recevrons pas votre commande.
                                </span>
                            </p>
                        </div>

                        {/* Emergency Button */}
                        <div className="mb-10 p-6 bg-muted/30 rounded-[2rem] border border-border/50 text-center md:text-left">
                            <p className="text-sm text-muted-foreground mb-4 font-medium">Le message ne s&apos;est pas ouvert ou vous avez oublié de l&apos;envoyer ?</p>
                            <a
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-all active:scale-95"
                            >
                                <MessageSquare className="h-5 w-5" />
                                Renvoyer sur WhatsApp
                            </a>
                        </div>

                        {/* Tracking Timeline */}
                        <div className="space-y-8 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-0.5 before:bg-muted mb-10">
                            {[
                                { status: "confirmé", title: "Commande Envoyée", desc: "Message WhatsApp transmis", icon: CheckCircle, active: true, done: true },
                                { status: "cuisine", title: "Préparation en Cuisine", desc: "Le chef prépare vos plats", icon: Utensils, active: true, done: false },
                                { status: "livraison", title: "Livraison / Retrait", desc: "Arrivée prévue dans 30-45 min", icon: ShoppingBag, active: false, done: false },
                            ].map((step, idx) => (
                                <div key={idx} className={cn(
                                    "relative pl-12 transition-all duration-500",
                                    step.active ? "opacity-100" : "opacity-40"
                                )}>
                                    <div className={cn(
                                        "absolute left-0 top-0 w-9 h-9 rounded-full flex items-center justify-center border-2 z-10 transition-colors duration-500",
                                        step.done ? "bg-primary border-primary text-white" :
                                            step.active ? "bg-background border-primary text-primary" : "bg-background border-muted text-muted-foreground"
                                    )}>
                                        <step.icon className="h-4 w-4" />
                                    </div>
                                    <h4 className={cn("font-bold text-lg", step.active ? "text-foreground" : "text-muted-foreground")}>
                                        {step.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/"
                            onClick={() => {
                                setIsSubmitted(false)
                                clearCart()
                            }}
                            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300 group"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            Retourner à l&apos;accueil
                        </Link>
                    </div>

                    <div className="w-full md:w-72 space-y-4">
                        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop"
                                alt="Bon appétit"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                <p className="text-white font-serif italic text-lg tracking-wide">
                                    &quot;Le goût de l&apos;authenticité.&quot;
                                </p>
                            </div>
                        </div>
                        <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10 text-center">
                            <p className="text-xs text-primary font-medium mb-1">Besoin d&apos;aide ?</p>
                            <p className="text-sm font-bold">+229 01 41 58 57 80</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const inputClasses = "pl-11 w-full rounded-xl border border-input bg-background px-4 py-3.5 md:py-3 text-base md:text-sm transition-all duration-200 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary hover:border-primary/50"

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Col: Cart Summary */}
            <div className="lg:col-span-1 space-y-6">
                <div className="bg-card p-6 rounded-2xl shadow-xl border border-border/50">
                    <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-2">
                        <ShoppingBag className="h-5 w-5 text-primary" />
                        Mon Panier
                    </h3>

                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-none">
                        {items.map((item) => (
                            <div key={item.id} className="flex gap-4 p-3 rounded-xl bg-muted/30 group">
                                <div className="flex-1">
                                    <h4 className="font-bold text-sm text-foreground mb-0.5 line-clamp-1">{item.name}</h4>
                                    <p className="text-xs text-primary font-semibold">{item.price}</p>

                                    <div className="flex items-center gap-3 mt-2">
                                        <div className="flex items-center bg-background rounded-lg border border-border">
                                            <button
                                                type="button"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-1 hover:text-primary transition-colors touch-target"
                                            >
                                                <Minus className="h-3 w-3" />
                                            </button>
                                            <span className="text-xs font-bold w-6 text-center">{item.quantity}</span>
                                            <button
                                                type="button"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-1 hover:text-primary transition-colors touch-target"
                                            >
                                                <Plus className="h-3 w-3" />
                                            </button>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-muted-foreground hover:text-red-500 transition-colors p-1"
                                        >
                                            <Trash2 className="h-3 w-3" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-border space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Sous-total</span>
                            <span className="font-semibold">{totalPrice.toLocaleString()} FCFA</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Livraison</span>
                            <span className="text-green-600 font-medium">À calculer</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold border-t border-border pt-4">
                            <span>Total</span>
                            <span className="text-primary">{totalPrice.toLocaleString()} FCFA</span>
                        </div>
                    </div>
                </div>

                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                    <p className="text-xs text-primary/80 leading-relaxed italic text-center">
                        💡 Les frais de livraison sont calculés selon votre quartier à Parakou.
                    </p>
                </div>
            </div>

            {/* Right Col: Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-5 md:space-y-6 bg-card p-6 md:p-10 rounded-2xl shadow-xl border border-border/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Nom complet</label>
                        <div className="relative">
                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className={inputClasses}
                                placeholder="Votre nom"
                                autoComplete="name"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">Téléphone</label>
                        <div className="relative">
                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className={inputClasses}
                                placeholder="+229 ..."
                                autoComplete="tel"
                            />
                        </div>
                    </div>
                </div>

                {/* Order type */}
                <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">Type de commande</label>
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { value: "livraison", label: "🚗 Livraison", desc: "À votre adresse" },
                            { value: "emporter", label: "🛍️ À emporter", desc: "Récupérer sur place" },
                        ].map(option => (
                            <label
                                key={option.value}
                                className={`relative flex flex-col items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 touch-feedback ${formData.orderType === option.value
                                    ? "border-primary bg-primary/5 shadow-md"
                                    : "border-border hover:border-primary/30"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="orderType"
                                    value={option.value}
                                    checked={formData.orderType === option.value}
                                    onChange={handleChange}
                                    className="sr-only"
                                />
                                <span className="text-lg mb-1">{option.label}</span>
                                <span className="text-xs text-muted-foreground">{option.desc}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Address — only for delivery */}
                {formData.orderType === "livraison" && (
                    <div className="animate-fade-in-up">
                        <label htmlFor="address" className="block text-sm font-semibold text-foreground mb-2">Adresse de livraison</label>
                        <div className="relative">
                            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                            <input
                                type="text"
                                id="address"
                                name="address"
                                required
                                value={formData.address}
                                onChange={handleChange}
                                className={inputClasses}
                                placeholder="Quartier, rue, repère..."
                                autoComplete="street-address"
                            />
                        </div>
                    </div>
                )}

                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Note supplémentaire (Optionnel)</label>
                    <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-4 h-4 w-4 text-muted-foreground pointer-events-none" />
                        <textarea
                            id="message"
                            name="message"
                            rows={3}
                            value={formData.message}
                            onChange={handleChange}
                            className={`${inputClasses} resize-none`}
                            placeholder="Ex: Pas trop de piment, etc."
                        />
                    </div>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 active:scale-[0.98] text-base md:text-lg touch-feedback"
                    >
                        <ShoppingBag className="h-6 w-6" />
                        Confirmer et Commander sur WhatsApp
                    </button>
                    <p className="text-center text-[10px] text-muted-foreground mt-4">
                        En cliquant, vous ouvrirez WhatsApp pour finaliser la commande avec notre équipe.
                    </p>
                </div>
            </form>
        </div>
    )
}
