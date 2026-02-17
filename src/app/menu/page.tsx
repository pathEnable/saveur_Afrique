const menuItems = [
    {
        category: "Entrées & Plats Locaux",
        emoji: "🍲",
        items: [
            { name: "Igname Pilée", description: "Servie avec sauce arachide, graine ou légumes.", price: "3.000 FCFA" },
            { name: "Pâte Rouge (Amiwo)", description: "Pâte de maïs fermentée rouge avec poulet ou poisson.", price: "2.500 FCFA" },
            { name: "Wagassi Frit", description: "Fromage peulh frit, accompagné de piment.", price: "1.500 FCFA" },
            { name: "Salade Africaine", description: "Mélange de légumes frais locaux et avocat.", price: "2.000 FCFA" },
        ]
    },
    {
        category: "Grillades & Poissons",
        emoji: "🔥",
        items: [
            { name: "Poulet Bicyclette Braisé", description: "Poulet entier ou demi, mariné et grillé.", price: "4.500 / 8.000 FCFA" },
            { name: "Capitaine à la Braise", description: "Poisson frais, grillé aux épices.", price: "6.000 FCFA" },
            { name: "Brochettes de Bœuf", description: "Tendre bœuf mariné, servi par 3.", price: "2.500 FCFA" },
            { name: "Lapin Braisé", description: "Lapin entier grillé (sur commande).", price: "7.000 FCFA" },
        ]
    },
    {
        category: "Accompagnements",
        emoji: "🥗",
        items: [
            { name: "Alloco", description: "Bananes plantains frites.", price: "1.000 FCFA" },
            { name: "Attiéké", description: "Semoule de manioc fermentée.", price: "1.000 FCFA" },
            { name: "Frites de Pomme de Terre", description: "Croustillantes et dorées.", price: "1.000 FCFA" },
            { name: "Riz Blanc / Jollof", description: "Riz nature ou épicé à la tomate.", price: "1.000 FCFA" },
        ]
    },
    {
        category: "Boissons & Desserts",
        emoji: "🍹",
        items: [
            { name: "Jus de Bissap / Ananas", description: "Fait maison.", price: "500 FCFA" },
            { name: "Bière Locale (Béninoise)", description: "65cl, bien fraîche.", price: "1.000 FCFA" },
            { name: "Salade de Fruits", description: "Fruits de saison.", price: "1.500 FCFA" },
            { name: "Dèguè", description: "Couscous de mil au yaourt.", price: "1.000 FCFA" },
        ]
    }
]

export default function MenuPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero header */}
            <div className="relative bg-gradient-to-br from-foreground via-foreground/95 to-foreground text-background pt-24 md:pt-32 pb-14 md:pb-20 overflow-hidden">
                <div className="absolute inset-0 pattern-dots opacity-5" />
                <div className="hidden md:block absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2" />
                <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative">
                    <p className="uppercase tracking-[0.15em] md:tracking-[0.2em] text-primary text-xs font-semibold mb-3 md:mb-4">La carte</p>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-4 md:mb-6">
                        Notre <span className="text-primary">Menu</span>
                    </h1>
                    <p className="text-background/60 text-sm md:text-lg max-w-xl mx-auto">
                        Une sélection de saveurs authentiques pour tous les goûts.
                    </p>
                </div>
            </div>

            {/* Menu content */}
            <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-10 md:py-16">
                {menuItems.map((section, idx) => (
                    <div key={idx} className="mb-12 md:mb-16 last:mb-0">
                        <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                            <span className="text-2xl md:text-3xl">{section.emoji}</span>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-foreground">
                                {section.category}
                            </h2>
                            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                        </div>

                        <div className="grid gap-3 md:gap-4 md:grid-cols-2">
                            {section.items.map((item, itemIdx) => (
                                <div
                                    key={itemIdx}
                                    className="group p-4 md:p-5 rounded-xl border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 active:bg-primary/10 touch-feedback"
                                >
                                    <div className="flex justify-between items-start gap-3 mb-1">
                                        <h3 className="font-semibold text-base md:text-lg text-foreground group-hover:text-primary transition-colors">
                                            {item.name}
                                        </h3>
                                        <span className="font-bold text-primary whitespace-nowrap bg-primary/10 px-2.5 py-1 rounded-full text-xs md:text-sm flex-shrink-0">
                                            {item.price}
                                        </span>
                                    </div>
                                    {item.description && (
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
