/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(269.75deg, #110400 0.94%, #2D1100 98.96%)',
        // 'custom-gradient1': 'linear-gradient(269.75deg, #E4A7AE 0.94%, #35A2FF 98.96%)',
      },
      
    },
  },
  plugins: [],
};
