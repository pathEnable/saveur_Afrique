import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const dishes = [
    {
        name: "Poulet Bicyclette",
        description: "Poulet local grillé aux épices du pays, servi avec alloco ou igname.",
        price: "4.500 FCFA",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=800&auto=format&fit=crop",
        tag: "🔥 Populaire"
    },
    {
        name: "Igname Pilée",
        description: "Igname pilée traditionnelle accompagnée de sauce arachide ou graine.",
        price: "3.000 FCFA",
        image: "https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?q=80&w=800&auto=format&fit=crop",
        tag: "🏡 Traditionnel"
    },
    {
        name: "Capitaine à la Braise",
        description: "Poisson capitaine frais grillé, servi avec légumes sautés.",
        price: "6.000 FCFA",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
        tag: "👨‍🍳 Chef"
    }
]

export function MenuPreview() {
    return (
        <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
            <div className="hidden md:block absolute inset-0 pattern-dots opacity-30" />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-10 md:mb-16">
                    <p className="uppercase tracking-[0.2em] text-primary text-xs md:text-sm font-semibold mb-3 md:mb-4">Notre carte</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 md:mb-6">
                        Nos Spécialités
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
                        Découvrez nos plats signatures préparés avec passion et des ingrédients locaux frais.
                    </p>
                </div>

                {/* Cards — horizontal scrolling on mobile, grid on desktop */}
                <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 scrollbar-none">
                    {dishes.map((dish, index) => (
                        <div
                            key={index}
                            className="group w-[85vw] sm:w-[320px] md:w-full snap-center bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 md:hover:-translate-y-2 touch-feedback flex-shrink-0"
                        >
                            <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                                <Image
                                    src={dish.image}
                                    alt={dish.name}
                                    fill
                                    sizes="(max-width: 768px) 280px, 33vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                {/* Tag */}
                                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                                    {dish.tag}
                                </div>
                                {/* Price */}
                                <div className="absolute bottom-3 right-3 glass text-foreground text-sm font-bold px-4 py-2 rounded-xl shadow-md">
                                    {dish.price}
                                </div>
                            </div>
                            <div className="p-5 md:p-6">
                                <h3 className="text-lg md:text-xl font-serif font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                                    {dish.name}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{dish.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll hint on mobile */}
                <div className="flex justify-center gap-2 mt-4 md:hidden">
                    {dishes.map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary/30" />
                    ))}
                </div>

                <div className="text-center mt-10 md:mt-16">
                    <Link
                        href="/menu"
                        className="group inline-flex items-center gap-3 bg-foreground text-background hover:bg-primary font-semibold py-4 px-8 md:px-10 rounded-full transition-all duration-300 text-base md:text-lg hover:shadow-xl hover:shadow-primary/25 md:hover:-translate-y-1 touch-feedback w-full sm:w-auto justify-center"
                    >
                        Découvrir tout le menu
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
