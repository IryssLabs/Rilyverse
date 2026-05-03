import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Inter, Orbitron } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

export const metadata = {
  // metadataBase ini WAJIB diganti kalau lo udah punya domain asli
  metadataBase: new URL('http://localhost:3000'), // Default buat dev, GANTI kalau sudah sewa domain

  title: {
    default: "Rilyverse | ririlily's Creative Sanctuary",
    template: "%s | Rilyverse"
  },
  description: "Step into Rilyverse, the creative world of ririlily. Discover exclusive cosplay sets, premium merchandise, and a journey filled with kawaii magic. ✨💕",
  keywords: ["ririlily", "Rilyverse", "Cosplayer", "Kawaii Cosplay", "Anime Content Creator", "Rily-chan"],
  authors: [{ name: "ririlily" }],
  creator: "ririlily",

  openGraph: {
    title: "Rilyverse | ririlily's Creative Sanctuary",
    description: "Explore the magical world of ririlily. High-quality cosplays, exclusive merch, and more! ✨",
    url: '/', // Pake '/' aja biar otomatis ngikut domain lo nanti
    siteName: 'Rilyverse',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rilyverse - ririlily Creative World',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: "Rilyverse | ririlily's Creative Sanctuary",
    description: "Join the Rilyverse journey! Exclusive cosplays and kawaii vibes await. ✨💕",
    creator: '@ririlily_',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} scroll-smooth`}>
      <body className="bg-bg text-white antialiased font-sans">
        <Header />
        <main>
          {children}
        </main>
      
      </body>
    </html>
  )
}