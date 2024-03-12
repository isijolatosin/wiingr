/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				base: "#6F0606",
				basewhite: "#FFFDFD",
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
			},
		},
	},
	plugins: [],
};
