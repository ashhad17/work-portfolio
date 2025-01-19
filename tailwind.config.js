export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0891b2',
        secondary: '#164e63',
        dark: {
          DEFAULT: '#1f2937',
          light: '#374151'
        }
      }
    }
  },
  plugins: []
}