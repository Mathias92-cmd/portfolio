/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "15px",
			screens: {
				xl: "1200px",
				lg: "960px",
				md: "768px",
				sm: "640px",
			},
			fontFamily: {
				primary: "var(--font-jetbrainsMono)",
			}
		},
		extend: {
			colors: {
				primary:  "#1c1c22",
				accent: {
					DEFAULT: "#00e187",
					hover: "#00e187",
				},
			},
			keyframes: {
				"accordion-down": {
					from: { height: "8"},
					to: { height: "var(--radix-accordion-content-height)"},
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)"},
					to: { height: "8"},
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};