import { OrderForm } from "@/components/OrderForm"
import { Clock, Utensils, ShoppingBag } from "lucide-react"

export default function CommandePage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero header */}
            <div className="relative bg-gradient-to-br from-foreground via-foreground/95 to-foreground text-background pt-24 md:pt-32 pb-14 md:pb-20 overflow-hidden">
                <div className="absolute inset-0 pattern-dots opacity-5" />
                <div className="hidden md:block absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
                <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative">
                    <p className="uppercase tracking-[0.15em] md:tracking-[0.2em] text-primary text-xs font-semibold mb-3 md:mb-4">Commande</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 md:mb-6">
                        Passez votre <span className="text-primary">commande</span>
                    </h1>
                    <p className="text-background/60 text-sm md:text-lg max-w-xl mx-auto">
                        Commandez vos plats préférés chez Saveurs d&apos;Afrique et régalez-vous !
                    </p>
                </div>
            </div>

            {/* Info cards */}
            <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 -mt-6 md:-mt-8 mb-8 md:mb-12 relative z-10">
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                    {[
                        { icon: Clock, label: "Ouvert", value: "11h - 23h" },
                        { icon: ShoppingBag, label: "Livraison", value: "Disponible" },
                        { icon: Utensils, label: "Sur place", value: "Aussi" },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-card rounded-xl p-3 md:p-4 text-center shadow-lg border border-border/50">
                            <item.icon className="h-4 w-4 md:h-5 md:w-5 text-primary mx-auto mb-1.5 md:mb-2" />
                            <p className="text-[10px] md:text-xs text-muted-foreground">{item.label}</p>
                            <p className="font-semibold text-foreground text-xs md:text-sm">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Form */}
            <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 pb-16 md:pb-24">
                <OrderForm />
            </div>
        </div>
    )
}
