"use client";

import { motion } from "framer-motion";
import { Heart, Star, Rocket, ExternalLink } from "lucide-react";

// --- Official Ko-Fi Logo (SuperTinyIcons) ---
const KofiLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Ko-Fi" role="img" viewBox="0 0 512 512" className="w-8 h-8">
        <rect width="512" height="512" rx="15%" fill="#478db1" />
        <path fill="#fff" d="M371 140H100c-18 0-20 20 -20 20v184s3 40 40 40h188c41 0 40-40 40 -40v-26h23a89 89 0 000-178m0 132h-23v-86h23a43 43 0 010 86" />
        <path fill="#f1464d" d="M286 219c-10-30-63-33-77 3-15-36-67-33-77-3-7 19-4 35 9 54s68 64 68 64 56-45 68-64 15-35 9-54" />
    </svg>
);

// --- Official Patreon Logo (SuperTinyIcons) ---
const PatreonLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Patreon" role="img" viewBox="0 0 512 512" className="w-8 h-8">
        <rect width="512" height="512" rx="15%" fill="#052d49" />
        <circle cx="310" cy="223" r="113" fill="#fff" />
        <path fill="#f96854" d="M109 410V110h56v300" />
    </svg>
);

export default function Support() {
    const supportOptions = [
        {
            name: "Patreon",
            title: "Support Rily's Journey",
            description: "Become a member to support my creative projects and get access to exclusive content.",
            cta: "Join Patreon",
            icon: PatreonLogo,
            color: "from-[#f96854] to-[#ff8e7a]",
            href: "https://patreon.com/ririlily?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_fan&utm_content=join_link",
            perks: ["Exclusive Content Sets", "Behind-the-scenes Updates"]
        },
        {
            name: "Ko-fi",
            title: "Buy Me a Coffee",
            description: "Support my work with a small treat! Every coffee helps me bring more kawaii magic to life.",
            cta: "Support on Ko-fi",
            icon: KofiLogo,
            color: "from-[#29abe2] to-[#5ec8f2]",
            href: "https://ko-fi.com/ririlily",
            perks: ["One-time Treat", "Direct Creative Support"]
        }
    ];

    return (
        <section id="support" className="relative mx-auto max-w-6xl px-4 py-24 overflow-hidden bg-bg">
            {/* Background Visuals 1:1 */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-0 w-80 h-80 bg-neon-pink/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-neon-pink/30 bg-neon-pink/10 backdrop-blur-md"
                >
                    <Rocket className="w-3.5 h-3.5 text-neon-pink" />
                    <span className="text-xs text-neon-pink font-bold tracking-[0.2em] uppercase">Support My Journey</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="font-display text-4xl md:text-5xl font-bold leading-tight text-white mb-6"
                >
                    Support the{" "}
                    <span className="bg-gradient-to-r from-neon-pink via-white to-purple-400 bg-clip-text text-transparent">
                        Rilyverse Journey
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="max-w-2xl mx-auto text-white/70 text-lg leading-relaxed"
                >
                    Your support keeps the magic alive! Join my journey on these platforms to help me create more kawaii content for you all. 💕
                </motion.p>
            </div>

            {/* Platform Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {supportOptions.map((item, index) => {
                    const PlatformIcon = item.icon;
                    return (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            whileHover={{ y: -10 }}
                            className="group relative rounded-[2.5rem] border border-white/15 bg-white/5 p-8 backdrop-blur-xl shadow-glow transition-all duration-500 hover:border-neon-pink/40"
                        >
                            <div className={`absolute -top-3 left-8 px-4 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-[10px] font-black uppercase tracking-widest shadow-lg`}>
                                {item.name}
                            </div>

                            <div className="flex flex-col h-full text-left">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="group-hover:scale-110 transition-transform duration-300">
                                        <PlatformIcon />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-white leading-tight">
                                        {item.title}
                                    </h3>
                                </div>

                                <p className="text-white/60 mb-8 leading-relaxed">
                                    {item.description}
                                </p>

                                <ul className="space-y-3 mb-10">
                                    {item.perks.map((perk) => (
                                        <li key={perk} className="flex items-center gap-3 text-sm text-white/80">
                                            <Heart className="w-3.5 h-3.5 text-neon-pink" />
                                            <span className="font-medium">{perk}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto">
                                    <motion.a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r ${item.color} text-white font-bold shadow-lg transition-all group-hover:brightness-110`}
                                    >
                                        <span>{item.cta}</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}