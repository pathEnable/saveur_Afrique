import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-[100svh] flex items-center justify-center text-center text-white overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
                <div className="absolute inset-0 opacity-5 pattern-dots" />
            </div>

            {/* Decorative blobs — hidden on mobile for perf */}
            <div className="hidden md:block absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="hidden md:block absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

            <div className="relative z-10 px-5 sm:px-6 lg:px-8 max-w-5xl w-full animate-fade-in-up">
                {/* Tagline */}
                <p className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary text-xs md:text-sm font-semibold mb-4 md:mb-6">
                    Restaurant &bull; Parakou, Bénin
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-bold tracking-tight mb-5 md:mb-8 leading-[1.1]">
                    Saveurs{" "}
                    <span className="text-primary">d&apos;Afrique</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
                    Une expérience culinaire unique mêlant tradition africaine et modernité, au cœur de Parakou.
                </p>

                {/* CTA Buttons — stacked on mobile */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                    <Link
                        href="/commande"
                        className="group relative bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 md:px-10 rounded-full transition-all duration-300 text-base md:text-lg shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 touch-feedback w-full sm:w-auto text-center"
                    >
                        <span className="relative z-10">Commander maintenant</span>
                        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    <Link
                        href="/menu"
                        className="group bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold py-4 px-8 md:px-10 rounded-full transition-all duration-300 text-base md:text-lg hover:-translate-y-1 touch-feedback w-full sm:w-auto text-center"
                    >
                        Découvrir le Menu
                    </Link>
                </div>
            </div>

            {/* Scroll indicator — hidden on mobile */}
            <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
                <ChevronDown className="h-7 w-7 text-white/50" />
            </div>
        </section>
    )
}
