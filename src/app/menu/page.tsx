"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Flame, Star, Leaf, Clock, ChevronRight, Plus, ShoppingCart, Filter, Sparkles } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { ProductModal } from "@/components/ProductModal"

const foodExtras = [
    { name: "Suppléments Piment", price: "+ 0 FCFA" },
    { name: "Oignons Grillés", price: "+ 200 FCFA" },
    { name: "Extra Sauce", price: "+ 300 FCFA" },
]

const drinkExtras = [
    { name: "Glaçons Supplémentaires", price: "+ 0 FCFA" },
    { name: "Tranche de Citron", price: "+ 100 FCFA" },
    { name: "Sans Sucre", price: "+ 0 FCFA" },
]

interface MenuItem {
    name: string
    description: string
    price: string
    oldPrice?: string
    tag?: string
    icon?: React.ReactNode
    isSignature?: boolean
    image?: string
    extras?: { name: string; price: string }[]
}

interface MenuCategory {
    category: string
    id: string
    image: string
    items: MenuItem[]
}

const menuItems: MenuCategory[] = [
    {
        category: "Entrées & Plats Locaux",
        id: "locaux",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "Igname Pilée", description: "Servie avec sauce arachide, graine ou légumes bio.", price: "3.000 FCFA", tag: "Tradition", icon: <Star className="h-3 w-3" />, isSignature: true, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop", extras: foodExtras },
            { name: "Pâte Rouge (Amiwo)", description: "Maïs fermenté rouge, poulet fermier ou poisson braisé.", price: "2.500 FCFA", tag: "Populaire", icon: <Flame className="h-3 w-3 text-orange-500" />, isSignature: true, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop", extras: foodExtras },
            { name: "Wagassi Frit", description: "Fromage peulh doré, épices locales et piment vert.", price: "1.500 FCFA", tag: "Classique", image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=800&auto=format&fit=crop", extras: foodExtras },
            { name: "Salade Africaine", description: "Mélange croquant de crudités et avocat de saison.", price: "2.000 FCFA", tag: "Veggie", icon: <Leaf className="h-3 w-3 text-green-500" />, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop", extras: [{ name: "Extra Avocat", price: "+ 500 FCFA" }] },
        ]
    },
    {
        category: "Grillades & Poissons",
        id: "grillades",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "Poulet Bicyclette Braisé", description: "Mariné 24h aux épices secrètes du chef.", price: "6.400 FCFA", oldPrice: "8.000 FCFA", tag: "PROMO -20%", icon: <Flame className="h-3 w-3 text-white" />, isSignature: true, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop", extras: foodExtras },
            { name: "Capitaine à la Braise", description: "Poisson frais du jour grillé au feu de bois.", price: "6.000 FCFA", tag: "Frais", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop", extras: foodExtras },
            { name: "Brochettes de Bœuf", description: "Tendre bœuf mariné, servi avec piment sec.", price: "2.500 FCFA", tag: "Incontournable", image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop", extras: foodExtras },
            { name: "Lapin Braisé", description: "Une spécialité raffinée (sur commande).", price: "7.000 FCFA", tag: "Spécialité", icon: <Clock className="h-3 w-3" />, image: "https://images.unsplash.com/photo-1587593817645-425da8eddec2?q=80&w=800&auto=format&fit=crop", extras: foodExtras },
        ]
    },
    {
        category: "Accompagnements",
        id: "accompagnements",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "Alloco", description: "Bananes plantains mûres, dorées à souhait.", price: "1.000 FCFA", image: "https://images.unsplash.com/photo-1598514983318-2911fac99399?q=80&w=800&auto=format&fit=crop", extras: [{ name: "Piment Vert", price: "+ 0 FCFA" }] },
            { name: "Attiéké", description: "Semoule de manioc fine, origine Côte d'Ivoire.", price: "1.000 FCFA", image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=800&auto=format&fit=crop", extras: [{ name: "Huile de Palme", price: "+ 100 FCFA" }] },
            { name: "Frites de Patate Douce", description: "Croustillantes et naturellement sucrées.", price: "1.000 FCFA", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop" },
            { name: "Riz Jollof", description: "Riz épicé à la tomate, façon West Africa.", price: "1.000 FCFA", image: "https://images.unsplash.com/photo-1512058560374-3a7b5b5f4485?q=80&w=800&auto=format&fit=crop", extras: [{ name: "Œuf Bouilli", price: "+ 200 FCFA" }] },
        ]
    },
    {
        category: "Boissons & Douceurs",
        id: "boissons",
        image: "https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "Bissap Maison", description: "Infusion de fleurs d'hibiscus et menthe fraîche.", price: "500 FCFA", image: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop", extras: drinkExtras },
            { name: "Jus d'Ananas Pure", description: "Ananas pain de sucre de Cotonou sanz sucre ajouté.", price: "500 FCFA", image: "https://images.unsplash.com/photo-1589733593533-9366367756f1?q=80&w=800&auto=format&fit=crop", extras: drinkExtras },
            { name: "Dèguè au Lait", description: "Moulé de mil au yaourt crémeux traditionnel.", price: "1.000 FCFA", tag: "Doux", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop", extras: [{ name: "Extra Lait Couconcentré", price: "+ 200 FCFA" }] },
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
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-8">
                            {section.items.map((item, itemIdx) => (
                                <div
                                    key={itemIdx}
                                    onClick={() => setSelectedProduct(item)}
                                    className="group relative flex flex-col sm:flex-row overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-card/40 border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 touch-feedback animate-in fade-in slide-in-from-bottom-8 cursor-pointer"
                                    style={{ animationDelay: `${itemIdx * 50}ms` }}
                                >
                                    {/* Item Image */}
                                    <div className="relative w-full sm:w-48 h-32 sm:h-auto flex-shrink-0">
                                        <Image
                                            src={item.image || "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop"}
                                            alt={item.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent sm:bg-gradient-to-r" />
                                    </div>

                                    {/* Item Content */}
                                    <div className="flex-1 p-3 sm:p-8 flex flex-col justify-between">
                                        <div className="space-y-1.5 sm:space-y-3">
                                            <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
                                                <div className="space-y-0.5 sm:space-y-1">
                                                    {item.tag && (
                                                        <span className="inline-flex items-center gap-1 text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                                                            {item.icon}
                                                            {item.tag}
                                                        </span>
                                                    )}
                                                    <h3 className="text-sm sm:text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1 sm:line-clamp-none">
                                                        {item.name}
                                                    </h3>
                                                </div>
                                                <div className="text-left sm:text-right flex flex-col items-start sm:items-end">
                                                    {item.oldPrice && (
                                                        <span className="block text-[9px] sm:text-xs text-muted-foreground line-through opacity-60">
                                                            {item.oldPrice}
                                                        </span>
                                                    )}
                                                    <span className="text-xs sm:text-xl font-bold text-primary tabular-nums">
                                                        {item.price}
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="hidden sm:block text-sm text-muted-foreground leading-relaxed italic line-clamp-2">
                                                {item.description}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2 pt-2 sm:pt-4">
                                            <div className="h-px flex-1 bg-border/50 group-hover:bg-primary/20 transition-colors" />
                                            <div className="h-7 w-7 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-muted group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all duration-500 shadow-sm group-hover:shadow-primary/30">
                                                <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
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
