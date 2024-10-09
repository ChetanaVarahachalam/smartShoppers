/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F2F2F2",
          "orange": "#D48D3B",
          "green": "#3E9242"
        },
        secondary: "#282828",
        "gray-200": "#EAECF0",
        "gray-300": "D0D5DD",
        "gray-500": "#667085",
        "gray-600": "#475467",
        "gray-700": "#344054",
        "gray-900": "#101828",
        "white-100": "#F4F4F4",
        "white-200": "#EDF0F8",
        "black-100": "#3D4258",
        "neutral-black": "#23263B",
        "muted-sage-green" :"#9FA8A1",
        "soft-lavender" :"#E0D6F0",
        "vibrant-coral" : "#FF7F50"
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        sm: "0px 2px 4px -1px rgba(16, 24, 40,  0.1)",
        lg : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      
      },
      maxWidth: {
        "10xl": '1440px'
      },
      fontFamily: {
        crimson: ['Crimson Text', 'serif'],
        monts: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        10: "10px"
      }
    },
  },
  plugins: [],
};