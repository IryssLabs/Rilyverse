/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                bg: { DEFAULT: '#0b0b12', soft: '#12121d' },
                neon: {
                    pink: '#ff60c3',     
                    purple: '#c7b9ff',
                    blue: '#9ad7ff',
                    lime: '#b6ffd2',
                },
            },
            boxShadow: {
                glow: '0 0 24px rgba(255, 96, 195, 0.35)',
            },
            backgroundImage: {
                'grid-neon': 'radial-gradient(circle at 1px 1px, rgba(255, 96, 195, 0.18) 1px, transparent 1px)',
            },
            backgroundSize: {
                grid: '24px 24px',
            },
            borderRadius: {
                xl2: '1rem',
            },
        },
    },
    plugins: [],
}