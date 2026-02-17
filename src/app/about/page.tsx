import Image from "next/image"
import { Leaf, Award, Heart } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero header */}
            <div className="relative bg-gradient-to-br from-foreground via-foreground/95 to-foreground text-background pt-24 md:pt-32 pb-14 md:pb-20 overflow-hidden">
                <div className="absolute inset-0 pattern-dots opacity-5" />
                <div className="hidden md:block absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2" />
                <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative">
                    <p className="uppercase tracking-[0.15em] md:tracking-[0.2em] text-primary text-xs font-semibold mb-3 md:mb-4">Notre histoire</p>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-4 md:mb-6">
                        À Propos de <span className="text-primary">Nous</span>
                    </h1>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-10 md:py-16">
                {/* Intro */}
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 md:mb-12 text-center max-w-2xl mx-auto">
                    Bienvenue chez <strong className="text-foreground">Saveurs d&apos;Afrique</strong>, votre destination gastronomique au cœur de Parakou.
                </p>

                {/* Image */}
                <div className="relative mb-10 md:mb-16">
                    <div className="hidden md:block absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-3xl blur-xl" />
                    <div className="relative h-56 sm:h-72 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl md:shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop"
                            alt="Notre restaurant"
                            fill
                            sizes="(max-width: 768px) 100vw, 800px"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Values cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
                    {[
                        { icon: Award, title: "Notre Mission", color: "text-primary", bg: "bg-primary/10", description: "Offrir une expérience culinaire inoubliable en mettant en valeur la richesse de la cuisine béninoise et africaine." },
                        { icon: Leaf, title: "Qualité Avant Tout", color: "text-secondary", bg: "bg-secondary/10", description: "Nous travaillons avec les producteurs locaux du Borgou pour des ingrédients frais et de saison." },
                        { icon: Heart, title: "Hospitalité Africaine", color: "text-red-500", bg: "bg-red-50", description: "Vous n&apos;êtes pas seulement un client, vous êtes notre invité. Service chaleureux et attentionné." },
                    ].map((value, idx) => (
                        <div key={idx} className="group bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border/50 hover:shadow-xl md:hover:-translate-y-2 transition-all duration-500 touch-feedback">
                            <div className={`w-12 h-12 md:w-14 md:h-14 ${value.bg} rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform`}>
                                <value.icon className={`h-6 w-6 md:h-7 md:w-7 ${value.color}`} />
                            </div>
                            <h2 className="text-lg md:text-xl font-serif font-bold text-foreground mb-3 md:mb-4">{value.title}</h2>
                            <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
                        </div>
                    ))}
                </div>

                {/* Story section */}
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 md:p-12 border border-primary/10">
                    <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4 md:mb-6">Notre Histoire</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                        <p>
                            Fondé en 2018, Saveurs d&apos;Afrique est né de la passion d&apos;un chef local pour partager les trésors culinaires du Bénin avec le monde. Ce qui a commencé comme un petit maquis de quartier est devenu l&apos;un des restaurants les plus appréciés de Parakou.
                        </p>
                        <p>
                            Nos viandes sont sélectionnées avec soin et nos épices sont préparées maison pour garantir des saveurs authentiques. Que vous soyez amateur de grillades épicées ou de douceurs sucrées, notre chef saura éveiller vos papilles.
                        </p>
                        <p>
                            Chez Saveurs d&apos;Afrique, chaque repas est une célébration de la culture béninoise, dans la pure tradition de l&apos;hospitalité légendaire du Bénin.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
