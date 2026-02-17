import Link from "next/link"
import { Facebook, Instagram, Twitter, UtensilsCrossed, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-foreground text-background/80 relative overflow-hidden safe-bottom">
            <div className="hidden md:block absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto pt-14 md:pt-20 pb-8 px-5 sm:px-6 lg:px-8 relative">
                {/* Main grid — 1 col mobile, 2 cols tablet, 4 cols desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 md:mb-16">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2.5 mb-5">
                            <UtensilsCrossed className="h-6 w-6 text-primary" />
                            <span className="text-lg md:text-xl font-serif font-bold text-background">Saveurs d&apos;Afrique</span>
                        </div>
                        <p className="text-sm leading-relaxed text-background/60 mb-6 max-w-xs">
                            Une expérience culinaire authentique au cœur de Parakou. Venez découvrir nos plats traditionnels et internationaux.
                        </p>
                        <div className="flex gap-3">
                            {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-11 h-11 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 touch-target">
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-background uppercase tracking-wider mb-5">Navigation</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Accueil", href: "/" },
                                { name: "Notre Menu", href: "/menu" },
                                { name: "Commande", href: "/commande" },
                                { name: "À Propos", href: "/about" },
                                { name: "Contact", href: "/contact" },
                            ].map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-background/60 hover:text-primary transition-colors duration-300 touch-target justify-start py-1">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-background uppercase tracking-wider mb-5">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-background/60">Quartier Albarika, Parakou, Bénin</span>
                            </li>
                            <li>
                                <a href="tel:+22960000000" className="flex items-start gap-3 hover:text-primary transition-colors touch-feedback">
                                    <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-background/60">+229 60 00 00 00</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:contact@saveursdafrique.bj" className="flex items-start gap-3 hover:text-primary transition-colors touch-feedback">
                                    <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-background/60">contact@saveursdafrique.bj</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-sm font-semibold text-background uppercase tracking-wider mb-5">Horaires</h3>
                        <ul className="space-y-3 text-sm text-background/60">
                            <li className="flex justify-between gap-4">
                                <span>Lundi - Vendredi</span>
                                <span className="text-background/80 font-medium">11h - 23h</span>
                            </li>
                            <li className="flex justify-between gap-4">
                                <span>Samedi</span>
                                <span className="text-background/80 font-medium">10h - 00h</span>
                            </li>
                            <li className="flex justify-between gap-4">
                                <span>Dimanche</span>
                                <span className="text-background/80 font-medium">10h - 22h</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <Link
                                href="/commande"
                                className="inline-block bg-primary hover:bg-primary/90 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 touch-feedback"
                            >
                                Commander maintenant
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-background/10 pt-6 md:pt-8 text-center">
                    <p className="text-xs md:text-sm text-background/40">
                        &copy; {new Date().getFullYear()} Saveurs d&apos;Afrique. Tous droits réservés. Fait avec ❤️ à Parakou.
                    </p>
                </div>
            </div>
        </footer>
    )
}
