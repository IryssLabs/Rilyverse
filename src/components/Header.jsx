"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Heart, Star, ShoppingCart, Coffee, Mail } from "lucide-react"

export default function Header() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setOpen(false)
        }
        const onScroll = () => setScrolled(window.scrollY > 20)

        window.addEventListener("resize", onResize)
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("resize", onResize)
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    const navItems = [
        { href: "#about", label: "About", icon: Heart },
        { href: "#support", label: "Support", icon: Coffee }, 
        { href: "#shop", label: "Shop", icon: ShoppingCart }, 
        { href: "#contact", label: "Contact", icon: Mail },    
    ]

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                ? "border-b border-neon-pink/30 bg-bg/90 backdrop-blur-xl shadow-lg shadow-neon-pink/5"
                : "border-b border-white/10 bg-bg/70 backdrop-blur"
                }`}
        >
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                {/* Brand: rilyverse */}
                <Link
                    href="/"
                    className="group relative font-display text-2xl tracking-widest transition-all duration-300 hover:scale-105"
                    aria-label="rilyverse — Home"
                >
                    <div className="absolute -top-1 -right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Star className="h-3 w-3 text-yellow-400" />
                    </div>

                    <span className="relative">
                        <span className="bg-gradient-to-r from-neon-pink via-pink-400 to-neon-pink bg-clip-text text-transparent animate-gradient-x">
                            Rilyverse
                        </span>

                        <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-neon-pink to-purple-400 transition-all duration-500 ease-out group-hover:w-full" />
                    </span>

                    <Heart className="absolute -top-1 -left-6 h-3 w-3 text-neon-pink/60 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:animate-bounce" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-1 text-sm md:flex">
                    {navItems.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="group relative rounded-full px-4 py-2 transition-all duration-300 hover:scale-105 hover:bg-neon-pink/10"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-pink/0 via-neon-pink/5 to-purple-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <div className="relative flex items-center gap-2">
                                    <Icon className="h-4 w-4 text-neon-pink opacity-0 transition-all duration-300 group-hover:animate-pulse group-hover:opacity-100" />
                                    <span className="transition-colors duration-300 group-hover:text-neon-pink">
                                        {item.label}
                                    </span>
                                </div>

                                <div className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-neon-pink opacity-0 transition-all duration-300 group-hover:animate-ping group-hover:opacity-100" />
                            </Link>
                        )
                    })}
                </nav>

                {/* Mobile Button & Menu sama seperti asli */}
                <button
                    className={`relative inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm transition-all duration-300 md:hidden ${open ? "border-neon-pink/50 bg-neon-pink/10 shadow-lg shadow-neon-pink/20" : "border-white/15 bg-white/5 hover:border-neon-pink/30 hover:bg-white/10"} border`}
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-label="Toggle menu"
                >
                    <div className="flex flex-col items-center justify-center space-y-1">
                        <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${open ? "translate-y-1.5 rotate-45 bg-neon-pink" : ""}`} />
                        <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
                        <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${open ? "-translate-y-1.5 -rotate-45 bg-neon-pink" : ""}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Navigation (sama seperti asli, tetap copy) */}
            <div className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="border-t border-neon-pink/20 bg-gradient-to-b from-bg/95 to-bg/98 px-4 pb-6 pt-4 backdrop-blur-xl">
                    <div className="flex flex-col gap-2">
                        {navItems.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="group flex items-center gap-3 rounded-lg px-4 py-3 text-base transition-all duration-300 hover:translate-x-2 hover:bg-neon-pink/10"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <Icon className="h-4 w-4 text-neon-pink/60 transition-all duration-300 group-hover:scale-110 group-hover:text-neon-pink" />
                                    <span className="transition-colors duration-300 group-hover:text-neon-pink">{item.label}</span>
                                    <Star className="ml-auto h-3 w-3 text-neon-pink/40 opacity-0 transition-all duration-300 group-hover:animate-spin group-hover:opacity-100" />
                                </a>
                            )
                        })}
                    </div>
                    <div className="mt-4 flex justify-center gap-2">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-1 w-1 animate-pulse rounded-full bg-neon-pink/60" style={{ animationDelay: `${i * 200}ms` }} />
                        ))}
                    </div>
                </div>
            </div>
        </header>
    )
}