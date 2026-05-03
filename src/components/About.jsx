"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles, Star, Camera, Crown, Wand2 } from "lucide-react"
import Image from "next/image";

export default function About() {
    const nickname = "Riri"
    const otherNames = ["Ririlily", "Riri-chan"]

    const favorites = [
        { label: "Udon", emoji: "🍜" },
        { label: "Ice Cream", emoji: "🍨" },
        { label: "Chocolate", emoji: "🍫" },
        { label: "Beach Vibes", emoji: "🏖️" },
        { label: "Nature", emoji: "🌿" },
        { label: "Pets", emoji: "🐾" },
        { label: "Florals", emoji: "🌸" },
        { label: "Gaming", emoji: "🎮" },
    ]

    const colors = [
        { name: "Neon Pink", swatch: "#ff60c3" },
        { name: "Sky Blue", swatch: "#9ad7ff" },
        { name: "Obsidian", swatch: "#000000" },
        { name: "Amethyst", swatch: "#c7b9ff" },
    ]

    // Sparkles positions matching tsx exactly
    const sideSparkles = [
        { left: "6%", top: "10%" },
        { left: "84%", top: "14%" },
        { left: "10%", top: "82%" },
        { left: "88%", top: "74%" },
        { left: "50%", top: "4%" },
        { left: "94%", top: "38%" },
    ]

    return (
        <section id="about" className="relative mx-auto max-w-6xl px-4 py-24 overflow-hidden">
            {/* floating cute deco matching tsx animation */}
            <div className="pointer-events-none absolute inset-0">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute opacity-25"
                        style={{ left: `${(i * 13) % 100}%`, top: `${(i * 19) % 100}%` }}
                        animate={{ y: [0, -12, 0], rotate: [0, 360], scale: [1, 1.1, 1] }}
                        transition={{ duration: 6 + (i % 3), delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {i % 3 === 0 && <Heart className="h-5 w-5 text-neon-pink" />}
                        {i % 3 === 1 && <Sparkles className="h-5 w-5 text-pink-200" />}
                        {i % 3 === 2 && <Star className="h-5 w-5 text-pink-300" />}
                    </motion.div>
                ))}
            </div>

            <div className="relative grid items-start gap-10 lg:grid-cols-2">
                {/* TEXT SECTION (Kiri) */}
                <div className="space-y-7">
                    {/* Greeting Badge - Strict font weight */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 rounded-full border border-neon-pink/30 bg-neon-pink/10 px-4 py-2 backdrop-blur-sm"
                    >
                        <span className="text-neon-pink text-sm font-medium">Hey there! Nice to meet you!</span>
                        <span className="animate-bounce">✨</span>
                    </motion.div>

                    {/* Heading - Strict size matching tsx */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-display text-4xl md:text-5xl font-bold leading-tight"
                    >
                        About{" "}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-neon-pink via-pink-400 to-purple-400 bg-clip-text text-transparent">
                                {nickname}
                            </span>
                            <Sparkles className="absolute -top-5 -right-6 h-6 w-6 text-neon-pink animate-pulse" />
                        </span>
                    </motion.h2>

                    {/* Paragraph - Native English Copy */}
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg leading-relaxed text-white/85"
                    >
                        Hey! I&apos;m <span className="text-neon-pink font-semibold">Ririlily</span>, though most people just call me <span className="text-neon-pink font-semibold">{nickname}</span>. I&apos;m a total anime lover 💕 who can&apos;t resist a bowl of warm Udon or a sweet treat. Whether I&apos;m soaking up beach vibes or getting lost in nature, I&apos;m always looking for that next spark of inspiration. <span className="text-neon-pink font-semibold text-white/90 italic">Rilyverse</span> is my creative sanctuary where I share my journey and cozy vibes with all of you. Let&apos;s make some magic together! 🐰
                    </motion.p>

                    {/* Nickname Chips */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="flex flex-wrap items-center gap-2"
                    >
                        <span className="text-sm text-white/60">Call me:</span>
                        {otherNames.map((n) => (
                            <span
                                key={n}
                                className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-white/85 hover:bg-white/10 transition-all duration-300"
                            >
                                {n}
                            </span>
                        ))}
                    </motion.div>

                    {/* Favorites */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-3"
                    >
                        <div className="flex items-center gap-2 text-white/70">
                            <Star className="h-4 w-4 text-neon-pink" />
                            <span className="text-sm font-medium">Favorite Things:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {favorites.map((f, i) => (
                                <motion.span
                                    key={f.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/85 hover:bg-white/10"
                                >
                                    <span>{f.emoji}</span>
                                    <span>{f.label}</span>
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* CHARACTER CARD (Kanan) - Strict shadow & border */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="relative"
                >
                    {/* Pink glow matching tsx intensity */}
                    <div className="absolute -inset-6 -z-10 rounded-3xl blur-3xl bg-gradient-to-tr from-neon-pink/30 via-pink-300/20 to-purple-300/20" />

                    {/* Sparkles around card */}
                    <div className="pointer-events-none absolute -inset-2">
                        {sideSparkles.map((p, i) => (
                            <motion.div
                                key={i}
                                className="absolute"
                                style={{ left: p.left, top: p.top }}
                                animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.2 }}
                            >
                                {i % 2 === 0 ? (
                                    <Sparkles className="w-4 h-4 text-neon-pink" />
                                ) : (
                                    <Star className="w-4 h-4 text-pink-300" />
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Main Card with Glassmorphism */}
                    <div className="group relative overflow-visible rounded-3xl border border-white/15 bg-white/5 p-5 md:p-6 backdrop-blur-xl shadow-[0_0_36px_rgba(255,96,195,0.25)]">
                        {/* Top Badges */}
                        <div className="absolute -top-3 left-4 inline-flex items-center gap-2 rounded-full border border-neon-pink/30 bg-neon-pink/15 px-3 py-1 text-xs text-neon-pink backdrop-blur">
                            <Crown className="h-3.5 w-3.5" />
                            Cosplayer
                        </div>
                        <div className="absolute -top-3 right-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
                            <Camera className="h-3.5 w-3.5 text-pink-200" />
                            Rilyverse
                        </div>

                        <div className="flex flex-col items-center justify-center pt-8 pb-4">
                            {/* Avatar Photo */}
                            <motion.div
                                className="relative mb-4"
                                whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 15 } }}
                            >
                                <div className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-neon-pink to-purple-400 blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                                <Image
                                    src="/images/riri.jpg"
                                    alt="Ririlily Profile"
                                    width={160}
                                    height={160}
                                    className="relative h-40 w-40 rounded-full object-cover border-4 border-white/50 shadow-lg"
                                />
                                <motion.div
                                    className="absolute -bottom-2 -right-2 bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30 shadow-lg"
                                    animate={{ rotate: [0, 15, -10, 5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Wand2 className="h-6 w-6 text-neon-pink" />
                                </motion.div>
                            </motion.div>

                            <h3 className="font-display text-3xl font-bold bg-gradient-to-r from-neon-pink via-white to-purple-400 bg-clip-text text-transparent">
                                Ririlily
                            </h3>
                            <p className="text-sm text-white/70 mt-1">
                                Your Kawaii Companion
                            </p>

                            {/* Traits Section */}
                            <div className="flex flex-wrap justify-center gap-2 mt-5 text-xs text-white/80">
                                <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1">
                                    <Heart className="h-3 w-3 text-pink-400" />
                                    <span>Positive Energy</span>
                                </div>
                                <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1">
                                    <Sparkles className="h-3 w-3 text-yellow-300" />
                                    <span>Creative Soul</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats Row matching tsx size */}
                        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                            {[
                                { icon: Heart, label: "Fans", value: "94.4k +" },
                                { icon: Star, label: "Cosplay", value: "100+" },
                                { icon: Camera, label: "Events", value: "50+" },
                            ].map(({ icon: Icon, label, value }) => (
                                <div key={label} className="rounded-xl border border-white/15 bg-white/5 px-3 py-3 transition-colors hover:bg-white/10">
                                    <div className="flex items-center justify-center gap-1">
                                        <Icon className="h-4 w-4 text-neon-pink" />
                                        <span className="text-xs text-white/70">{label}</span>
                                    </div>
                                    <div className="mt-1 font-display text-lg font-semibold">{value}</div>
                                </div>
                            ))}
                        </div>

                        {/* Quote */}
                        <div className="mt-4 rounded-xl border border-white/15 bg-white/5 p-4 text-sm text-center text-white/80">
                            “Spreading joy through creativity. Let&apos;s make <span className="text-neon-pink font-semibold">Rilyverse</span> a place where magic happens!”
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}