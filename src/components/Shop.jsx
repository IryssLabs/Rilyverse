"use client"

import { motion } from "framer-motion"
import { Heart, Star, Gift, Crown, Cherry, ShoppingBag, ShoppingCart, Wand2 } from "lucide-react"
import { useState } from "react"

export default function Shop() {
    const [email, setEmail] = useState("")
    const [isSubscribed, setIsSubscribed] = useState(false)

    // --- Native English Item Data ---
    const upcomingItems = [
        {
            icon: Crown,
            title: "Exclusive Photobook",
            description: "A curated collection of my best cosplay sets.",
            price: "Coming Soon",
            color: "from-pink-400 to-purple-400",
          
        },
        {
            icon: Heart,
            title: "Kawaii Sticker Pack",
            description: "Custom-designed stickers featuring original art.",
            price: "Coming Soon",
            color: "from-red-400 to-pink-400",
           
        },
        {
            icon: Star,
            title: "Digital Wallpapers",
            description: "Premium HD wallpapers for desktop and mobile.",
            price: "Coming Soon",
            color: "from-yellow-400 to-orange-400",
            
        },
        {
            icon: Gift,
            title: "Mystery Box",
            description: "A surprise bundle of hand-picked merchandise.",
            price: "Coming Soon",
            color: "from-purple-400 to-blue-400",
           
        },
        {
            icon: Cherry,
            title: "Keychain Collection",
            description: "Limited edition charms of your favorite characters.",
            price: "Coming Soon",
            color: "from-red-400 to-pink-400",
           
        },
        {
            icon: Wand2,
            title: "Handmade Props",
            description: "Crafted cosplay accessories and mini props.",
            price: "Coming Soon",
            color: "from-blue-400 to-teal-400",
            
        }
    ]

    const floatingDecorations = [
        { icon: ShoppingBag, delay: 0, x: "8%", y: "15%" },
        { icon: Gift, delay: 0.8, x: "92%", y: "20%" },
        { icon: Heart, delay: 1.6, x: "15%", y: "75%" },
        { icon: Star, delay: 2.4, x: "85%", y: "80%" },
        { icon: Crown, delay: 3.2, x: "90%", y: "45%" }
    ]

    const handleSubscribe = (e) => {
        e.preventDefault()
        if (email) {
            setIsSubscribed(true)
            setEmail("")
            setTimeout(() => setIsSubscribed(false), 3000)
        }
    }

    return (
        <section id="shop" className="relative mx-auto max-w-7xl px-4 py-32 overflow-hidden bg-bg">

            {/* 1. Floating Background Decorations (Strictly 1:1) */}
            <div className="absolute inset-0 pointer-events-none">
                {floatingDecorations.map(({ icon: Icon, delay, x, y }, index) => (
                    <motion.div
                        key={index}
                        className="absolute opacity-10"
                        style={{ left: x, top: y }}
                        animate={{
                            y: [0, -25, 0],
                            rotate: [0, 360],
                            scale: [1, 1.3, 1]
                        }}
                        transition={{
                            duration: 6 + (index * 0.5),
                            delay: delay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Icon className="w-14 h-14 text-neon-pink" />
                    </motion.div>
                ))}

                {/* Gradient background orbs */}
                <motion.div
                    className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-neon-pink/10 to-purple-400/10 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            <div className="relative text-center">

                {/* 2. Header Section - Strict font weights and sizes */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Announcement badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                        animate={{ boxShadow: ["0 0 20px rgba(251, 191, 36, 0.2)", "0 0 30px rgba(251, 191, 36, 0.4)", "0 0 20px rgba(251, 191, 36, 0.2)"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <motion.div animate={{ rotate: [0, 15, 0] }} transition={{ duration: 1, repeat: Infinity }}>🛍️</motion.div>
                        <span className="text-sm text-yellow-400 font-medium">Grand Opening Soon!</span>
                        <motion.div animate={{ rotate: [0, -15, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>🎀</motion.div>
                    </motion.div>

                    {/* Main title */}
                    <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white">
                        <motion.span
                            className="relative inline-block bg-gradient-to-r from-neon-pink via-pink-400 to-purple-400 bg-clip-text text-transparent"
                            whileHover={{ scale: 1.05 }}
                        >
                            Merch
                            <motion.div
                                className="absolute -top-8 -right-10"
                                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                                <ShoppingBag className="w-8 h-8 text-pink-400 opacity-80" />
                            </motion.div>
                        </motion.span>{" "}
                        <span className="text-white/90">& Digital Treasures</span>
                    </h2>

                    {/* Subtitle - Native English Copy */}
                    <motion.div
                        className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Your exclusive destination for Rily&apos;s custom merchandise and digital collectibles.{" "}
                        <motion.span
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            className="inline-block"
                        >
                            💕
                        </motion.span>
                        <br />
                        <span className="text-2xl font-semibold bg-gradient-to-r from-neon-pink to-yellow-400 bg-clip-text text-transparent">
                            Dropping Soon
                        </span>{" "}
                        <motion.span
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="inline-block text-2xl"
                        >
                            🌟
                        </motion.span>
                    </motion.div>
                </motion.div>

                {/* 3. Preview Items Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {upcomingItems.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={index}
                                className="group relative p-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:border-neon-pink/30"
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                                whileHover={{ y: -8, scale: 1.02 }}
                            >
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className="relative z-10 text-center space-y-4">
                                    <div className="flex items-center justify-center gap-3 mb-4">
                                        <motion.div
                                            className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                            whileHover={{ rotate: 5 }}
                                        >
                                            <Icon className="w-8 h-8 text-white" />
                                        </motion.div>
                                        <motion.div
                                            className="text-4xl"
                                            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                                        >
                                            {item.emoji}
                                        </motion.div>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-xl text-white mb-2 group-hover:text-neon-pink transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/60 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    <motion.div
                                        className="inline-block px-4 py-2 rounded-full bg-neon-pink/20 text-neon-pink font-medium text-sm border border-neon-pink/30"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {item.price}
                                    </motion.div>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* 4. Stay Tuned Section */}
                <motion.div
                    className="inline-block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <motion.div
                        className="rounded-3xl border-2 border-neon-pink/40 bg-gradient-to-r from-neon-pink/20 to-purple-400/20 backdrop-blur-sm px-8 py-6 shadow-2xl"
                        animate={{ boxShadow: ["0 0 30px rgba(255, 96, 195, 0.3)", "0 0 50px rgba(255, 96, 195, 0.5)", "0 0 30px rgba(255, 96, 195, 0.3)"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                    >
                        <div className="flex items-center justify-center gap-4">
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                                <Star className="w-8 h-8 text-yellow-400" />
                            </motion.div>

                            <div>
                                <div className="font-display text-3xl text-neon-pink mb-1">Stay Tuned!</div>
                                <div className="text-white/70 text-sm font-medium">Something special is coming your way very soon.</div>
                            </div>

                            <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}>
                                🎀
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}