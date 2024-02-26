/** @type {import('tailwindcss').Config} */
import img from './src/assets/image/ai-imgbg.webp'
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundSize:{
        BgSize:"100% 100%",
      },
      boxShadow: {
        cardshodow: "0px 3px 8px 0px rgba(2, 205, 207, 0.16)",
      },
      backgroundImage: {
        "bg-hero": "url('../src/assets/image/bg-hero-img.webp')",
        "bg-sec": "url('../src/assets/image/ai-imgbg.webp')",
        bgscroll: "url('../src/assets/image/scroll_bg.webp')",
        footerbg: "url('../src/assets/image/footer-img.webp')",
        poligunbg: "url('../src/assets/image/poligan-img.webp')",
      },
    },
  },
  plugins: [],
};
