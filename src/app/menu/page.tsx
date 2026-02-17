"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Flame, Star, Leaf, Clock, ChevronRight, Plus, ShoppingCart, Filter, Sparkles } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { ProductModal } from "@/components/ProductModal"

const menuItems = [
    {
        category: "Entrées & Plats Locaux",
        id: "locaux",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "Igname Pilée", description: "Servie avec sauce arachide, graine ou légumes bio.", price: "3.000 FCFA", tag: "Tradition", icon: <Star className="h-3 w-3" />, isSignature: true, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop" },
            { name: "Pâte Rouge (Amiwo)", description: "Maïs fermenté rouge, poulet fermier ou poisson braisé.", price: "2.500 FCFA", tag: "Populaire", icon: <Flame className="h-3 w-3 text-orange-500" />, isSignature: true, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop" },
            { name: "Wagassi Frit", description: "Fromage peulh doré, épices locales et piment vert.", price: "1.500 FCFA", tag: "Classique" },
            { name: "Salade Africaine", description: "Mélange croquant de crudités et avocat de saison.", price: "2.000 FCFA", tag: "Veggie", icon: <Leaf className="h-3 w-3 text-green-500" /> },
        ]
    },
    {
        category: "Grillades & Poissons",
        id: "grillades",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "Poulet Bicyclette Braisé", description: "Mariné 24h aux épices secrètes du chef.", price: "8.000 FCFA", tag: "Signature", icon: <Star className="h-3 w-3" />, isSignature: true, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop" },
            { name: "Capitaine à la Braise", description: "Poisson frais du jour grillé au feu de bois.", price: "6.000 FCFA", tag: "Frais" },
            { name: "Brochettes de Bœuf", description: "Tendre bœuf mariné, servi avec piment sec.", price: "2.500 FCFA", tag: "Incontournable" },
            { name: "Lapin Braisé", description: "Une spécialité raffinée (sur commande).", price: "7.000 FCFA", tag: "Spécialité", icon: <Clock className="h-3 w-3" /> },
        ]
    },
    {
        category: "Accompagnements",
        id: "accompagnements",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "Alloco", description: "Bananes plantains mûres, dorées à souhait.", price: "1.000 FCFA" },
            { name: "Attiéké", description: "Semoule de manioc fine, origine Côte d'Ivoire.", price: "1.000 FCFA" },
            { name: "Frites de Patate Douce", description: "Croustillantes et naturellement sucrées.", price: "1.000 FCFA" },
            { name: "Riz Jollof", description: "Riz épicé à la tomate, façon West Africa.", price: "1.000 FCFA" },
        ]
    },
    {
        category: "Boissons & Douceurs",
        id: "boissons",
        image: "https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "Bissap Maison", description: "Infusion de fleurs d'hibiscus et menthe fraîche.", price: "500 FCFA" },
            { name: "Jus d'Ananas Pur", description: "Ananas pain de sucre de Cotonou sanz sucre ajouté.", price: "500 FCFA" },
            { name: "Dèguè au Lait", description: "Moulé de mil au yaourt crémeux traditionnel.", price: "1.000 FCFA", tag: "Doux" },
        ]
    }
]

const filters = [
    { id: "all", name: "Tout", icon: <Sparkles className="h-3 w-3" /> },
    { id: "Tradition", name: "Tradition", icon: <Star className="h-3 w-3" /> },
    { id: "Populaire", name: "Populaire", icon: <Flame className="h-3 w-3" /> },
    { id: "Veggie", name: "Végétarien", icon: <Leaf className="h-3 w-3" /> },
]

export default function MenuPage() {
    const { addToCart } = useCart()
    const [activeCategory, setActiveCategory] = React.useState(menuItems[0].id)
    const [activeFilter, setActiveFilter] = React.useState("all")
    const [isSticky, setIsSticky] = React.useState(false)
    const [selectedProduct, setSelectedProduct] = React.useState<any>(null)

    // Helper to extract number from price string (e.g. "3.000 FCFA" -> 3000)
    const parsePrice = (priceStr: string) => {
        return parseInt(priceStr.replace(/[^0-9]/g, ""))
    }

    const handleAddToCart = (item: any) => {
        addToCart({
            id: item.name.toLowerCase().replace(/\s+/g, '-'),
            name: item.name,
            price: item.price,
            priceNumber: parsePrice(item.price),
        })
    }

    // Signatures for the top section
    const signatureItems = menuItems.flatMap(cat => cat.items.filter(item => item.isSignature))

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY
            setIsSticky(scrollPos > 400)

            // Update active category based on scroll position
            for (const section of menuItems) {
                const element = document.getElementById(section.id)
                if (element) {
                    const offset = element.offsetTop - 200
                    const height = element.offsetHeight
                    if (scrollPos >= offset && scrollPos < offset + height) {
                        setActiveCategory(section.id)
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const offset = element.offsetTop - 140
            window.scrollTo({ top: offset, behavior: "smooth" })
        }
    }

    const filteredMenuItems = menuItems.map(category => ({
        ...category,
        items: category.items.filter(item =>
            activeFilter === "all" || item.tag === activeFilter
        )
    })).filter(category => category.items.length > 0)

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop"
                    alt="Menu Background"
                    fill
                    className="object-cover opacity-60 scale-105 animate-slow-zoom"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/20 to-background" />

                <div className="relative text-center z-10 px-5 animate-fade-in-up">
                    <p className="uppercase tracking-[0.3em] text-primary text-xs md:text-sm font-bold mb-4">L&apos;art Culinaire</p>
                    <h1 className="text-4xl md:text-8xl font-serif font-bold text-foreground mb-4">
                        La <span className="italic text-primary">Carte</span>
                    </h1>
                    <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base mb-6">
                        Des saveurs authentiques cuisinées avec passion et héritage.
                    </p>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
                </div>
            </div>

            {/* Signatures du Chef Section */}
            <div className="max-w-7xl mx-auto px-5 -mt-16 md:-mt-24 relative z-20 mb-20">
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-10 w-10 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                        <Star className="h-5 w-5" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-serif font-bold tracking-tight">Signatures du Chef</h2>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">L&apos;excellence Saveurs d&apos;Afrique</p>
                    </div>
                </div>

                <div className="flex gap-6 overflow-x-auto pb-8 pt-4 scrollbar-none -mx-5 px-5 md:mx-0 md:px-0">
                    {signatureItems.map((item, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedProduct(item)}
                            className="flex-shrink-0 w-[280px] md:w-[350px] group cursor-pointer"
                        >
                            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-primary/10">
                                <Image
                                    src={item.image || ""}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/90 text-white text-[10px] font-bold uppercase tracking-wider mb-3">
                                        <Sparkles className="h-3 w-3" />
                                        Incontournable
                                    </span>
                                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{item.name}</h3>
                                    <div className="flex justify-between items-center">
                                        <p className="text-primary font-bold">{item.price}</p>
                                        <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Plus className="h-5 w-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sticky Navigation & Filtering */}
            <div className={cn(
                "sticky top-16 z-40 w-full transition-all duration-500 border-b border-primary/10",
                isSticky ? "bg-background/90 backdrop-blur-2xl py-3 shadow-sm" : "bg-transparent py-6"
            )}>
                <div className="max-w-7xl mx-auto px-5 space-y-4">
                    {/* Categories */}
                    <div className="flex items-center gap-6 overflow-x-auto scrollbar-none justify-start md:justify-center">
                        {menuItems.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={cn(
                                    "whitespace-nowrap pb-1 text-sm font-medium transition-all relative px-2",
                                    activeCategory === section.id
                                        ? "text-primary scale-110"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {section.category}
                                {activeCategory === section.id && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-in fade-in slide-in-from-bottom-1" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Quick Filters */}
                    <div className="flex items-center gap-2 overflow-x-auto scrollbar-none justify-start md:justify-center">
                        <div className="flex items-center gap-2 p-1.5 bg-muted/30 rounded-full border border-border/50">
                            {filters.map((filter) => (
                                <button
                                    key={filter.id}
                                    onClick={() => setActiveFilter(filter.id)}
                                    className={cn(
                                        "flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap",
                                        activeFilter === filter.id
                                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                                            : "text-muted-foreground hover:bg-background hover:text-foreground"
                                    )}
                                >
                                    {filter.icon}
                                    {filter.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Content */}
            <div className="max-w-6xl mx-auto px-5 py-20 mb-32">
                {filteredMenuItems.map((section, sectionIdx) => (
                    <section
                        key={section.id}
                        id={section.id}
                        className="mb-32 last:mb-0 scroll-mt-48"
                    >
                        {/* Section Title with Accent */}
                        <div className="relative mb-16 animate-in fade-in duration-700">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="h-px w-12 bg-primary/30" />
                                <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">{sectionIdx + 1}. Chapitre</span>
                                <span className="h-px w-full bg-primary/10" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                                {section.category}
                            </h2>
                        </div>

                        {/* Items Grid - Dynamic Columns */}
                        <div className="grid gap-8 md:grid-cols-2">
                            {section.items.map((item, itemIdx) => (
                                <div
                                    key={itemIdx}
                                    onClick={() => setSelectedProduct(item)}
                                    className="group relative p-8 rounded-[2.5rem] bg-card/40 border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 touch-feedback animate-in fade-in slide-in-from-bottom-8 cursor-pointer overflow-hidden"
                                    style={{ animationDelay: `${itemIdx * 50}ms` }}
                                >
                                    {/* Glass reflection */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:bg-primary/10 transition-colors" />

                                    <div className="relative space-y-4">
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-2">
                                                {item.tag && (
                                                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full">
                                                        {item.icon}
                                                        {item.tag}
                                                    </span>
                                                )}
                                                <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors pr-8">
                                                    {item.name}
                                                </h3>
                                            </div>
                                            <div className="pt-1">
                                                <span className="text-xl font-bold text-primary tabular-nums">
                                                    {item.price}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm pb-4">
                                            {item.description}
                                        </p>

                                        <div className="flex items-center gap-3 pt-2">
                                            <div className="h-px flex-1 bg-border/50 group-hover:bg-primary/20 transition-colors" />
                                            <div className="h-12 w-12 rounded-2xl bg-muted group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all duration-500 shadow-sm group-hover:shadow-primary/30 group-hover:rotate-6">
                                                <Plus className="h-6 w-6" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            {/* Product Customizer Modal */}
            <ProductModal
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                product={selectedProduct}
            />
        </div>
    )
}
