import Link from "next/link"
import { Facebook, Instagram, Twitter, UtensilsCrossed, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-foreground text-background/80 relative overflow-hidden safe-bottom">
            <div className="hidden md:block absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto pt-14 md:pt-20 pb-8 px-5 sm:px-6 lg:px-8 relative">
                {/* Main grid — 2 columns on mobile, 4 on desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 mb-12 md:mb-16 text-left">
                    {/* Brand — Spans 2 columns on mobile */}
                    <div className="col-span-2 lg:col-span-1 flex flex-col items-start">
                        <div className="flex items-center gap-2.5 mb-5 justify-start">
                            <UtensilsCrossed className="h-6 w-6 text-primary" />
                            <span className="text-lg md:text-xl font-serif font-bold text-background">Saveurs d&apos;Afrique</span>
                        </div>
                        <p className="text-sm leading-relaxed text-background/60 mb-6 max-w-xs">
                            Une expérience culinaire authentique au cœur de Parakou. Venez découvrir nos plats traditionnels et internationaux.
                        </p>
                        <div className="flex gap-3 justify-start">
                            {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 touch-target">
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-start">
                        <h3 className="text-sm font-semibold text-background uppercase tracking-wider mb-5">Navigation</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Accueil", href: "/" },
                                { name: "Menu", href: "/menu" },
                                { name: "Commande", href: "/commande" },
                                { name: "À Propos", href: "/about" },
                                { name: "Contact", href: "/contact" },
                            ].map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-background/60 hover:text-primary transition-colors duration-300 py-1 block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hours */}
                    <div className="flex flex-col items-start">
                        <h3 className="text-sm font-semibold text-background uppercase tracking-wider mb-5">Horaires</h3>
                        <ul className="space-y-3 text-sm text-background/60 w-full">
                            <li>
                                <p className="text-background/40 text-[10px] uppercase tracking-wider mb-0.5">Lun - Ven</p>
                                <p className="text-background/80 font-medium">11h - 23h</p>
                            </li>
                            <li>
                                <p className="text-background/40 text-[10px] uppercase tracking-wider mb-0.5">Samedi</p>
                                <p className="text-background/80 font-medium">10h - 00h</p>
                            </li>
                            <li>
                                <p className="text-background/40 text-[10px] uppercase tracking-wider mb-0.5">Dimanche</p>
                                <p className="text-background/80 font-medium">10h - 22h</p>
                            </li>
                        </ul>
                    </div>

                    {/* Contact — Spans 2 columns on mobile */}
                    <div className="col-span-2 lg:col-span-1 flex flex-col items-start border-t border-background/5 pt-8 lg:border-0 lg:pt-0">
                        <h3 className="text-sm font-semibold text-background uppercase tracking-wider mb-5">Contact</h3>
                        <ul className="space-y-4 w-full">
                            <li className="flex items-start gap-3 justify-start">
                                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-background/60">Quartier Albarika, Parakou, Bénin</span>
                            </li>
                            <li className="flex justify-start">
                                <a href="tel:+22960000000" className="flex items-start gap-3 hover:text-primary transition-colors">
                                    <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-background/60">+229 60 00 00 00</span>
                                </a>
                            </li>
                            <li className="flex justify-center lg:justify-start">
                                <Link
                                    href="/commande"
                                    className="inline-block bg-primary hover:bg-primary/90 text-white text-xs font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 w-full text-center lg:w-auto mt-2"
                                >
                                    Commander en ligne
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-background/10 pt-8 pb-4 text-center">
                    <p className="text-xs md:text-sm text-background/40 px-4">
                        &copy; {new Date().getFullYear()} Saveurs d&apos;Afrique. Tous droits réservés. Fait avec ❤️ à Parakou.
                    </p>
                </div>
            </div>
        </footer>
    )
}
