import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#01649D',
      },
    },
  },
  plugins: [
    tailwindcss,
    autoprefixer
  ],
};

