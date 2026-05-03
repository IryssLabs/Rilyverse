"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Star, Camera, Gift, Crown, Zap } from "lucide-react"
import { useEffect, useState } from "react"

// --- deterministic pseudo-random (SSR-safe) ---
// Kita jaga logic ini tetap sama persis untuk animasi yang stabil
const prand = (seed) => {
    const x = Math.sin(seed) * 10000
    return x - Math.floor(x) // 0..1
}

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1,
            })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    const floatingIcons = [
        { Icon: Heart, color: "text-pink-400", delay: 0.0, x: "10%", y: "20%" },
        { Icon: Star, color: "text-yellow-400", delay: 0.5, x: "85%", y: "15%" },
        { Icon: Crown, color: "text-neon-pink", delay: 1.0, x: "15%", y: "70%" },
        { Icon: Gift, color: "text-blue-400", delay: 1.5, x: "80%", y: "75%" },
        { Icon: Zap, color: "text-green-400", delay: 2.5, x: "5%", y: "50%" },
    ]

    return (
        <section className="relative mx-auto max-w-6xl px-4 pt-24 pb-32 overflow-hidden">
            {/* floating bg icons (deterministic durations) */}
            <div className="absolute inset-0 pointer-events-none">
                {floatingIcons.map(({ Icon, color, delay, x, y }, i) => (
                    <motion.div
                        key={i}
                        className={`absolute ${color} opacity-20`}
                        style={{ left: x, top: y }}
                        animate={{ y: [0, -20, 0], rotate: [0, 360], scale: [1, 1.2, 1] }}
                        transition={{
                            duration: 4 + prand(i * 97) * 2,
                            delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        initial={false}
                    >
                        <Icon className="w-8 h-8" />
                    </motion.div>
                ))}

                {/* gradient orbs */}
                <motion.div
                    className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-neon-pink/20 to-purple-400/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    initial={false}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-pink-400/20 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    initial={false}
                />
            </div>

            <div className="relative flex flex-col items-center gap-10 md:flex-row md:gap-16">
                {/* text */}
                <div className="relative z-10 text-center md:text-left overflow-visible">
                    {/* greeting */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-neon-pink/30 bg-neon-pink/10 backdrop-blur-sm"
                    >
                        <Heart className="w-4 h-4 text-neon-pink animate-pulse" />
                        <span className="text-sm text-neon-pink font-medium">Konnichiwa! Welcome~</span>
                        <Star className="w-4 h-4 text-yellow-400" />
                    </motion.div>

                    {/* title: ririverse */}
                    <motion.h1
                        className=" font-display text-5xl md:text-7xl font-bold tracking-wide leading-[1.12] md:leading-[1.06] pb-2 overflow-visible "
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.span
                            className=" relative inline-block bg-gradient-to-r from-neon-pink via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x "
                            whileHover={{ scale: 1.05 }}
                            initial={false}
                        >
                            Rirlyverse

                            {/* crown above text */}
                            <motion.div
                                className="absolute -top-8 left-1/2 -translate-x-1/2 pointer-events-none"
                                animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                initial={false}
                            >
                                <Crown className="w-8 h-8 text-yellow-400 opacity-80" />
                            </motion.div>
                        </motion.span>
                    </motion.h1>

                    {/* subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-6"
                    >
                        <div className="text-white/85 text-lg md:text-xl max-w-xl leading-relaxed">
                           Hey there~~!! Welcome to <span className="text-neon-pink font-semibold">Rilyverse</span>, Ririlily's little digital world. Come check out my cute cosplays, special creations, and exclusive merch — all with that super kawaii vibe that'll totally melt your heart. 💕🐰{" "}
                            <motion.span
                                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                className="inline-block"
                                initial={false}
                            >
                                🌸
                            </motion.span>
                        </div>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        className="mt-10 flex flex-wrap justify-center md:justify-start gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.a
                            href="#gallery"
                            className="group relative rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm md:text-base backdrop-blur-sm overflow-hidden shadow-[0_0_24px_rgba(255,96,195,0.35)] hover:shadow-[0_0_40px_rgba(255,96,195,0.5)] transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative flex items-center gap-2">
                                <Camera className="w-4 h-4 group-hover:text-neon-pink transition-colors duration-300" />
                                <span className="group-hover:text-neon-pink transition-colors duration-300">See Gallery</span>
                                <motion.div className="opacity-0 group-hover:opacity-100" animate={{ x: [0, 3, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                                    <Zap className="w-3 h-3 text-yellow-400" />
                                </motion.div>
                            </div>
                        </motion.a>

                        <motion.a
                            href="#shop"
                            className="group relative rounded-xl bg-gradient-to-r from-neon-pink to-pink-400 px-6 py-3 text-sm md:text-base text-black font-semibold overflow-hidden shadow-glow hover:shadow-[0_0_40px_rgba(255,96,195,0.8)] transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative flex items-center gap-2">
                                <Gift className="w-4 h-4 group-hover:animate-bounce" />
                                <span>Get Merchandise</span>
                                <motion.div animate={{ rotate: [0, 15, 0] }} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }} initial={false}>
                                    <Heart className="w-4 h-4" />
                                </motion.div>
                            </div>
                        </motion.a>
                    </motion.div>

                    {/* cute stats */}
                    <motion.div
                        className="mt-12 flex flex-wrap justify-center md:justify-start gap-6 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        {[
                            { icon: Heart, label: "94.4K+ Fans", color: "text-pink-400" },
                            { icon: Star, label: "100+ Cosplays", color: "text-yellow-400" },
                            { icon: Crown, label: "Premium Quality", color: "text-purple-400" },
                        ].map(({ icon: Icon, label, color }) => (
                            <motion.div key={label} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300" whileHover={{ scale: 1.1 }}>
                                <Icon className={`w-4 h-4 ${color} animate-pulse`} />
                                <span>{label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* IMAGE SECTION */}
                <motion.div
                    className="relative z-0 group flex-1 md:max-w-[40%] lg:max-w-[35%] w-full flex justify-center"
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 -z-10 rounded-[2.5rem] blur-3xl bg-gradient-to-r from-neon-pink/40 via-purple-400/30 to-pink-400/40 group-hover:from-neon-pink/60 group-hover:via-purple-400/50 group-hover:to-pink-400/60 transition-all duration-500" />

                    {/* Subtle Glow Ring */}
                    <div className="absolute -inset-4 pointer-events-none">
                        {[...Array(4)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute"
                                style={{
                                    top: `${50 - 50 * Math.cos((i * Math.PI) / 2)}%`,
                                    left: `${50 + 50 * Math.sin((i * Math.PI) / 2)}%`,
                                    transform: 'translate(-50%, -50%)'
                                }}
                                animate={{ scale: [0.8, 1, 0.8], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                            >
                                <div className="w-2 h-2 rounded-full bg-neon-pink/40" />
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative">
                        <Image
                            src="/images/rily-hero.jpg"
                            alt="ririlily "
                            width={400}
                            height={500}
                            className="rounded-[2.5rem] border-2 border-white/20 shadow-2xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm group-hover:border-neon-pink/50 transition-all duration-500 object-cover"
                            priority
                        />

                        {/* Heart Badge */}
                        <motion.div
                            className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <div className="bg-neon-pink/20 backdrop-blur-sm rounded-full p-2 border border-neon-pink/30 shadow-glow">
                                <Heart className="w-6 h-6 text-neon-pink fill-current" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* scroll hint */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                initial={false}
            >
                <div className="flex flex-col items-center gap-2 text-white/40">
                    <span className="text-xs">Scroll untuk melihat lebih banyak</span>
                    <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} initial={false}>
                        ↓
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}