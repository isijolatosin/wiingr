/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				brand: "#6F0606",
				brandwhite: "#FFFDFD",
				highlight: "#FCEDEF",
				black: "#0A0A0A",
				brandFade: "rgba(111, 6, 6, 0.50)",
				brandFadeLighter: "rgba(111, 6, 6, 0.30)",
				brandTone: "rgba(111, 6, 6, 0.60)",
				lines: "#757575",
				linesLight: "rgba(117, 117, 117, 0.5)",
				linesLighter: "rgba(117, 117, 117, 0.2)",
				linesFaint: "rgba(117, 117, 117, 0.05)",
				basewhitelight: "rgba(255,253,253, 0.9)",
				basewhitelighter: "rgba(255,253,253, 0.8)",
				error: "#D0421B",
				deepGrey: "#111418",
				teal: "#0d9488",
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				arima: ["Arima Madurai", "sans-serif"],
			},
			fontSize: {
				sm: "0.8rem",
				base: "1rem",
				xl: "1.25rem",
				"2xl": "1.563rem",
				"3xl": "1.953rem",
				"4xl": "2.441rem",
				"5xl": "3.052rem",
			},
			listStyleType: {
				circle: "circle",
				disc: "disc",
				none: "none",
				roman: "upper-roman",
				square: "square",
			},
			maxWidth: {
				"max-content-width": "1140px",
			},
			screens: {
				sm: "640px",
				// => @media (min-width: 640px) { ... }

				md: "768px",
				// => @media (min-width: 768px) { ... }

				lg: "1024px",
				// => @media (min-width: 1024px) { ... }

				xl: "1280px",
				// => @media (min-width: 1280px) { ... }

				"2xl": "1536px",
				// => @media (min-width: 1536px) { ... }
			},
			spacing: {
				1: "8px",
				2: "12px",
				3: "16px",
				4: "24px",
				5: "32px",
				6: "48px",
				"8xl": "96rem",
				"9xl": "128rem",
			},
		},
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("tailwindcss-children"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/typography"),
	],
};
