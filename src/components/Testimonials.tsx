import { Star, Quote } from "lucide-react"

const testimonials = [
    {
        name: "Jean D.",
        role: "Client fidèle",
        content: "Le meilleur poulet bicyclette de Parakou ! L'ambiance est top et le service impeccable. Je recommande vivement.",
        rating: 5,
        avatar: "JD"
    },
    {
        name: "Marie A.",
        role: "Touriste",
        content: "Une superbe découverte. Les saveurs sont authentiques et le cadre est très agréable. Mention spéciale pour l'igname pilée.",
        rating: 5,
        avatar: "MA"
    },
    {
        name: "Paul K.",
        role: "Local Guide",
        content: "Un incontournable à Parakou. Idéal pour un repas en famille ou entre amis. Les prix sont très raisonnables pour la qualité.",
        rating: 4,
        avatar: "PK"
    }
]

export function Testimonials() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden">
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-10 md:mb-16">
                    <p className="uppercase tracking-[0.2em] text-primary text-xs md:text-sm font-semibold mb-3 md:mb-4">Témoignages</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 md:mb-6">
                        Ce que disent nos clients
                    </h2>
                </div>

                {/* Horizontal scroll on mobile, grid on desktop */}
                <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 scrollbar-none">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative w-[85vw] sm:w-[320px] md:w-full snap-center bg-card p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl border border-border/50 transition-all duration-500 md:hover:-translate-y-2 flex-shrink-0 flex flex-col"
                        >
                            <Quote className="absolute top-5 right-5 h-8 w-8 md:h-10 md:w-10 text-primary/10 group-hover:text-primary/20 transition-colors" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4 md:mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-4 w-4 md:h-5 md:w-5 ${i < testimonial.rating
                                            ? "text-amber-400 fill-amber-400"
                                            : "text-gray-200 fill-gray-200"
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-foreground/80 mb-6 md:mb-8 leading-relaxed text-sm md:text-[15px] flex-1">
                                &ldquo;{testimonial.content}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-md flex-shrink-0">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground text-sm md:text-base">{testimonial.name}</p>
                                    <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll hint on mobile */}
                <div className="flex justify-center gap-2 mt-4 md:hidden">
                    {testimonials.map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary/30" />
                    ))}
                </div>
            </div>
        </section>
    )
}
