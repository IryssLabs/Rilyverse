"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Instagram,
    Heart,
    Star,
    AtSign,
} from "lucide-react";

export default function Contact() {
    const [hovered, setHovered] = useState(null);

    // --- Social Media Data (Native English & Corrected Rily Branding) ---
    const socials = [
        {
            name: "Instagram",
            href: "https://www.instagram.com/ririlily_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            icon: Instagram,
            hoverClass: "hover:text-[#E4405F] hover:border-[#E4405F]/50 hover:bg-[#E4405F]/10",
        },
        {
            name: "Threads",
            href: "https://www.threads.net/@ririlily_",
            icon: AtSign,
            hoverClass: "hover:text-white hover:border-white/50 hover:bg-white/10",
        },
    ];

    const chips = [
        { text: "Brand Campaigns", emoji: "🎀" },
        { text: "Guest Appearances", emoji: "🎤" },
        { text: "Creative Photoshoots", emoji: "📸" },
        { text: "Merch Collaborations", emoji: "🎁" },
        { text: "Voice Projects", emoji: "🎙️" },
    ];

    return (
        <section
            id="contact"
            className="relative mx-auto max-w-5xl px-4 py-28 text-center bg-bg"
        >
            {/* Subtle background accent */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-neon-pink/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-purple-500/5 rounded-full blur-[80px]" />
            </div>

            {/* 2. Main Contact Card - Strict 1:1 weight & sizing */}
            <div className="relative mx-auto max-w-3xl rounded-3xl border border-white/15 bg-white/5 p-8 md:p-12 backdrop-blur-xl shadow-[0_0_36px_rgba(255,96,195,0.25)]">

                {/* Subtle corner accent */}
                <div className="absolute top-4 right-4 opacity-40">
                    <Star className="h-5 w-5 text-neon-pink" />
                </div>

                {/* Heading - Native English Copy */}
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                    <span className="text-white/90">Let's build magic in</span>{" "}
                    <span className="relative inline-block">
                        <span className="bg-gradient-to-r from-neon-pink to-purple-400 bg-clip-text text-transparent">
                            Rilyverse
                        </span>
                        <span className="ml-2 inline-block">💌</span>
                        <span className="pointer-events-none absolute -bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full shimmer-bar" />
                    </span>
                </h2>

                {/* Subtitle - Native English Copy */}
                <p className="mt-3 text-white/85 max-w-xl mx-auto leading-relaxed">
                    Looking for a fresh <span className="text-neon-pink font-medium">campaign</span>,
                    event <span className="text-neon-pink font-medium">guest</span>, or a creative
                    collab? Send over your brief—Rily is ready to create something
                    <span className="text-neon-pink font-medium italic"> sweet, professional, and memorable</span>.
                </p>

                {/* Service Chips - text-sm size */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {chips.map((c, i) => (
                        <span
                            key={c.text}
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/85 hover:bg-white/10 transition-all duration-300"
                            style={{ animationDelay: `${i * 40}ms` }}
                        >
                            <span>{c.emoji}</span>
                            <span>{c.text}</span>
                        </span>
                    ))}
                </div>

                {/* Email Business CTA - Launching Soon */}
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 opacity-80">
                    <div className="mb-3 flex items-center justify-center gap-2 text-white/70">
                        <Mail size={16} className="text-neon-pink/70" />
                        <span className="text-sm font-medium">Business Inquiries</span>
                    </div>
                    <div className="relative inline-block w-full max-w-xs cursor-not-allowed rounded-full border-2 border-dashed border-white/20 bg-white/5 p-4 text-lg font-semibold text-white/60 shadow-inner">
                        <div className="flex items-center justify-center gap-3">
                            <Mail size={18} className="text-white/50" />
                            <span>Contact Form Coming Soon</span>
                        </div>
                    </div>
                </div>

                {/* Social Media Links - Both IG and Threads */}
                <div className="mt-10">
                    <p className="mb-4 flex items-center justify-center gap-2 text-sm text-white/60 font-medium">
                        <Heart className="h-4 w-4 text-neon-pink animate-pulse" />
                        Find me on socials
                        <Heart className="h-4 w-4 text-neon-pink animate-pulse" />
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {socials.map(({ name, href, icon: Icon, hoverClass }, idx) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setHovered(name)}
                                onMouseLeave={() => setHovered(null)}
                                className={`group/social relative rounded-full border border-white/20 bg-white/5 p-4 backdrop-blur-sm transition-all hover:scale-110 ${hoverClass}`}
                                aria-label={`${name} @ririlily_`}
                            >
                                <div className="absolute inset-0 rounded-full bg-current/10 opacity-0 blur-sm transition-opacity group-hover/social:opacity-100" />
                                <Icon className="relative z-10 h-6 w-6" />
                                {/* Tooltip with correct handle */}
                                {hovered === name && (
                                    <div className="animate-fade-in absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-2.5 py-1 text-xs text-white">
                                        @ririlily_
                                        <div className="absolute left-1/2 top-full -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80" />
                                    </div>
                                )}
                            </a>
                        ))}
                    </div>
                </div>

            </div>

            {/* 3. Original Animations matching .tsx Style Block */}
            <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translate(-50%, -6px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-fade-in { animation: fade-in 160ms ease-out both; }
      `}</style>
        </section>
    );
}