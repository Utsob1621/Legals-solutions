 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {},
   },
   plugins: [],
 }
 module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/banner.pmg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  }
}