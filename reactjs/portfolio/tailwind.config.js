/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        'normal': 400,
        'semibold': 500,
        'bold': 700,
        'extrabold': 800,
      },
    },
  },
  plugins: [],
});

