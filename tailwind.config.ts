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
			'spin-slow': 'spin 8s linear infinite',
		},
		backgroundImage: {
			cardBg: 'linear-gradient(331deg, rgba(20,42,76,1) 0%, rgba(60,60,105,1) 35%, rgba(76,117,175,1) 100%)',
			bannerStackBottomBg: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.75) 25%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0) 100%)'
			// bannerLogoLeft: 'linear-gradient(90deg, rgba(rgba(10,11,25,100) 0%, rgba(rgba(10,11,25,80) 50%, rgba(rgba(10,11,25,50) 100%)',
			// bannerLogoRight: 'linear-gradient(90deg, rgba(178,178,178,1) 0%, rgba(133,133,133,1) 50%, rgba(95,95,95,1) 100%)',
		},
		extend: {
			colors: {
				primaryDark: "#0A0B19",
				primaryLight: "#F4F4F4",
				primaryBlue: "#0067FF",
				primaryRed: '#e30217',
			},
		},
	},
	plugins: [],
};
export default config;
