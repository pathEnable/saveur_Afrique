import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero header */}
            <div className="relative bg-gradient-to-br from-foreground via-foreground/95 to-foreground text-background pt-24 md:pt-32 pb-14 md:pb-20 overflow-hidden">
                <div className="absolute inset-0 pattern-dots opacity-5" />
                <div className="hidden md:block absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2" />
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative">
                    <p className="uppercase tracking-[0.15em] md:tracking-[0.2em] text-primary text-xs font-semibold mb-3 md:mb-4">Nous trouver</p>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-4 md:mb-6">
                        Contactez-<span className="text-primary">nous</span>
                    </h1>
                    <p className="text-background/60 text-sm md:text-lg max-w-xl mx-auto">
                        Une question ? Une demande spéciale ? N&apos;hésitez pas à nous écrire ou nous appeler.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 md:py-16">
                {/* Contact cards — 2 cols mobile, 4 cols desktop */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 -mt-20 md:-mt-24 mb-10 md:mb-16 relative z-10">
                    {[
                        { icon: MapPin, label: "Adresse", value: "Quartier Albarika", sub: "Parakou, Bénin" },
                        { icon: Phone, label: "Téléphone", value: "+229 01 41 58 57 80", sub: "WhatsApp dispo" },
                        { icon: Mail, label: "Email", value: "contact@", sub: "saveursdafrique.bj" },
                        { icon: Clock, label: "Horaires", value: "Lun - Dim", sub: "11h00 - 23h00" },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-card rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-xl border border-border/50 hover:shadow-2xl md:hover:-translate-y-1 transition-all duration-300 touch-feedback">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                                <item.icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                            </div>
                            <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                            <p className="font-semibold text-foreground text-xs md:text-sm">{item.value}</p>
                            <p className="text-[10px] md:text-xs text-muted-foreground">{item.sub}</p>
                        </div>
                    ))}
                </div>

                {/* Quick actions — mobile only */}
                <div className="flex gap-3 mb-8 md:hidden">
                    <a href="tel:+2290141585780" className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3.5 rounded-full shadow-lg touch-feedback">
                        <Phone className="h-4 w-4" />
                        Appeler
                    </a>
                    <a href="https://wa.me/2290141585780" className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-3.5 rounded-full shadow-lg touch-feedback">
                        <Mail className="h-4 w-4" />
                        WhatsApp
                    </a>
                </div>

                {/* Map */}
                <div className="relative">
                    <div className="hidden md:block absolute -inset-2 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-3xl blur-xl" />
                    <div className="relative bg-card rounded-2xl overflow-hidden shadow-xl border border-border/50 h-[300px] md:h-[450px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.666141315532!2d2.6166!3d9.3333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjAnMDAuMCJOIDLCsDM3JzAwLjAiRQ!5e0!3m2!1sen!2sbj!4v1620000000000!5m2!1sen!2sbj"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="Localisation Saveurs d&apos;Afrique"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
