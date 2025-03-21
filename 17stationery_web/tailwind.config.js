/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Background: "#FDF6E3", // (Soft Cream)
        Primary: "#FF6B6B" , //(Coral Red)
        Accent: "#9A40A0", // (Purple)
        Text:" #333333", // (Charcoal Black)
        Yellow : "#FFEE58 " // yellow
      },
    },
  },
  plugins: [],
}

