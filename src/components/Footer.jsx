"use client";

import {
    Instagram,
    AtSign,
} from "lucide-react";

export default function Footer() {

    // --- Social Links (Correct handle: @ririlily_) ---
    const socialLinks = [
        {
            name: "Instagram",
            icon: Instagram,
            href: "https://www.instagram.com/ririlily_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            hoverClass: "hover:text-[#E4405F] hover:border-[#E4405F]/50 hover:bg-[#E4405F]/10",
        },
        {
            name: "Threads",
            icon: AtSign,
            href: "https://www.threads.net/@ririlily_",
            hoverClass: "hover:text-white hover:border-white/50 hover:bg-white/10",
        },
    ];


    return (
        <footer className="relative mt-20 overflow-hidden bg-bg">
            {/* Subtle top border accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />

            <div className="relative mx-auto max-w-6xl px-4 py-12">
                {/* Simple Footer Content */}
                <div className="text-center">
                    {/* Header */}
                    <div className="mb-6">
                        <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
                            Thanks for visiting{" "}
                            <span className="bg-gradient-to-r from-neon-pink to-purple-400 bg-clip-text text-transparent font-bold">
                                Rilyverse
                            </span>
                        </h3>
                        <p className="text-white/60 text-sm">
                            Follow the journey on social media
                        </p>
                    </div>

                    {/* Social Links - Minimal */}
                    <div className="flex justify-center gap-3 my-6">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`rounded-full border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${social.hoverClass}`}
                                    aria-label={`${social.name} @ririlily_`}
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            );
                        })}
                    </div>

                    {/* Copyright */}
                    <p className="text-white/40 text-xs">
                        © {new Date().getFullYear()} Rilyverse. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}