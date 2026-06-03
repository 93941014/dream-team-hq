/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#E8A0BF",
        "primary-dark": "#D4839F",
        "primary-light": "#F2C6D8",
        accent: "#D4A574",
        "accent-dark": "#C18D5A",
        warm: "#FDF8F7",
        "text-primary": "#2D2D2D",
        "text-secondary": "#8E8E93",
        "text-muted": "#B0B0B0",
        card: "#FFFFFF",
        border: "#F0E6E3",
        success: "#7BC67E",
        warning: "#F5C26B",
        danger: "#E8837A",
        overlay: "rgba(0,0,0,0.4)",
      },
      fontFamily: {
        sans: ["System"],
        mono: ["SpaceMono"],
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};
