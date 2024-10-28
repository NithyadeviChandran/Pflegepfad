import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue:'#16365c',
        customBlue75:'#112943',
        customBlue50:'#0b1b2e',
        customBlue25:'#060e17'
      },
      fontFamily: {
        rem: ['REM', 'sans-serif'],
      },
    },
  },
  plugins: [
    tailwindcss,
    autoprefixer
  ],
};

