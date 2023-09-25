/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src**/*.{js,ts,jsx,tsx}"
	],
  theme: {
	  extend: {
		  colors: {
			  "custom-black": "#0B0B0B",
			  "custom-red": "#FF444A",
		  },
	  },
  },
  plugins: [],
}

