"use client"

import { useState } from "react"
import { User, Phone, MessageSquare, CheckCircle, ArrowLeft, ShoppingBag, MapPin } from "lucide-react"

export function OrderForm() {
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
        console.log("Order Data:", formData)
        setIsSubmitted(true)
    }

    if (isSubmitted) {
        return (
            <div className="bg-card rounded-2xl p-8 md:p-12 text-center shadow-xl border border-border/50 animate-fade-in-up">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
                    <CheckCircle className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3 md:mb-4">Commande Envoyée !</h3>
                <p className="text-muted-foreground mb-2 text-base md:text-lg">
                    Merci <span className="font-semibold text-foreground">{formData.name}</span>,
                </p>
                <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">
                    Votre commande ({formData.orderType === "livraison" ? "en livraison" : "à emporter"}) a bien été reçue.
                </p>
                <p className="text-sm text-muted-foreground bg-muted/50 rounded-xl p-4 mb-6 md:mb-8">
                    📞 Nous vous contacterons au <span className="font-medium">{formData.phone}</span> pour confirmer.
                </p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 touch-target"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Passer une autre commande
                </button>
            </div>
        )
    }

    const inputClasses = "pl-11 w-full rounded-xl border border-input bg-background px-4 py-3.5 md:py-3 text-base md:text-sm transition-all duration-200 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary hover:border-primary/50"

    return (
        <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6 bg-card p-6 md:p-10 rounded-2xl shadow-xl border border-border/50">
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
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Détails de la commande</label>
                <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-4 h-4 w-4 text-muted-foreground pointer-events-none" />
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className={`${inputClasses} resize-none`}
                        placeholder="Ex: 2 Poulet Bicyclette + 1 Alloco + 2 Bissap..."
                    />
                </div>
            </div>

            <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 active:scale-[0.98] text-base md:text-lg touch-feedback"
            >
                <ShoppingBag className="h-5 w-5" />
                Envoyer la Commande
            </button>
        </form>
    )
}
