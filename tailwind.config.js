/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: [ "Poppins", 'sans-serif'],
      },
      backgroundImage: {
        "myBackground": `url("/backgroundImg.jpg")`, // Replace with your image name
      },
      transitionTransform: {
        "transitionProperty": "transform"
      },
      transform: {
        "transform": "translate(0, 0)"
      },
      translateYFull: {
        "transform": "translateY(-100%)"
      }
    },
  },
  plugins: [],
}

