import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark:{
          1:'#1C1F2E',
          2:'#161925',
        },
      },
      backgroundImage:{
        hero_one: "url('https://media4.giphy.com/media/10QZvWwBUQbpqE/giphy.gif')",
        hero_two: "url('https://media1.giphy.com/media/SExu1NjbmGALSv5Bm2/200w.gif?cid=6c09b9527h2ku0dkcdu4bks12ffzplk99mcflh0k1rkchy9t&ep=v1_gifs_search&rid=200w.gif&ct=g')"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config