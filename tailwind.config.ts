import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xs: '420px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1460px',
			'3xl': '1640px',
		},
		animation: {
			'spin-slow': 'spin 14s linear infinite',
			marquee: 'marquee 36s linear infinite',
			'pulse-dot': 'pulseDot 2s ease-in-out infinite',
		},
		keyframes: {
			spin: { to: { transform: 'rotate(360deg)' } },
			marquee: {
				from: { transform: 'translateX(0)' },
				to: { transform: 'translateX(-50%)' },
			},
			pulseDot: {
				'0%, 100%': { opacity: '1', transform: 'scale(1)' },
				'50%': { opacity: '0.4', transform: 'scale(0.8)' },
			},
		},
		backgroundImage: {
			cardBg: 'linear-gradient(331deg, rgba(20,42,76,1) 0%, rgba(60,60,105,1) 35%, rgba(76,117,175,1) 100%)',
			bannerStackBottomBg: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.75) 25%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0) 100%)'
		},
		extend: {
			fontFamily: {
				sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
				serif: ['var(--font-serif)', 'Georgia', 'serif'],
			},
			colors: {
				// Ink / paper base with the brand blue and a lime highlight
				primaryDark: "#0A0A0B",
				primaryLight: "#F2F0EB",
				primaryBlue: "#2D6BFF",
				primaryRed: '#e30217',
				lime: "#D4FF3A",
				surface: "#141416",
				surfaceRaised: "#1C1C1F",
				muted: "#8E8E93",
			},
			transitionTimingFunction: {
				expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
			},
		},
	},
	plugins: [],
};
export default config;
