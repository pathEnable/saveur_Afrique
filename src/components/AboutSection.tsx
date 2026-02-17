import Image from "next/image"
import Link from "next/link"
import { Leaf, Flame, Heart } from "lucide-react"

export function AboutSection() {
    return (
        <section className="py-16 md:py-24 bg-background relative overflow-hidden">
            {/* Decorative — hidden on mobile */}
            <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
            <div className="hidden md:block absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="hidden md:block absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-2xl blur-xl" />
                        <div className="relative h-[280px] sm:h-[360px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl md:shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=800&auto=format&fit=crop"
                                alt="Intérieur du restaurant"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            {/* Badge */}
                            <div className="absolute bottom-4 left-4 glass rounded-xl px-4 py-2.5 shadow-lg">
                                <p className="text-sm font-semibold text-foreground">🍽️ Depuis 2018</p>
                                <p className="text-xs text-muted-foreground">Au cœur de Parakou</p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2">
                        <p className="uppercase tracking-[0.2em] text-primary text-xs md:text-sm font-semibold mb-3 md:mb-4">Notre histoire</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-5 md:mb-8 leading-tight">
                            Une passion pour les <span className="text-primary">saveurs authentiques</span>
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                            Fondé avec la passion de partager les trésors culinaires de l&apos;Afrique, notre restaurant à Parakou est bien plus qu&apos;un simple lieu de restauration. C&apos;est un voyage gustatif où chaque plat raconte une histoire.
                        </p>

                        {/* Values — vertical on mobile, horizontal on desktop */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-8">
                            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-primary/5 border border-primary/10 touch-feedback">
                                <Leaf className="h-5 w-5 text-secondary flex-shrink-0" />
                                <span className="text-sm font-medium text-foreground">Ingrédients locaux</span>
                            </div>
                            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-primary/5 border border-primary/10 touch-feedback">
                                <Flame className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-sm font-medium text-foreground">Cuisson au feu</span>
                            </div>
                            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-primary/5 border border-primary/10 touch-feedback">
                                <Heart className="h-5 w-5 text-red-500 flex-shrink-0" />
                                <span className="text-sm font-medium text-foreground">Fait avec amour</span>
                            </div>
                        </div>

                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300 group touch-target"
                        >
                            En savoir plus sur nous
                            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
