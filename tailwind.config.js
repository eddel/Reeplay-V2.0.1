/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './Screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './navigator/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        _black: '#000',
        red: '#FF1313',
        grey_100: '#E5E5E5',
        grey_200: '#C4C4C4',
        grey_600: '#565D6D',
        grey_700: '#9095A1',
        grey_white: '#C4C4C4',
        dark_grey: '#757474',
        light_blue: '#565D6D',
        grey_white_90: '#C4C4C4E5',
        dark_gold: '#7B6114',
        green: '#00E3A3',
        yellow: '#FFCC00',
        grey_900: '#383838',
        grey_800: '#848282',
      },
      fontFamily: {
        LEXEND_400: 'Lexned-Regular',
        LEXEND_500: 'Lexned-Medium',
        LEXEND_600: 'Lexned-SemiBold',
        LEXEND_700: 'Lexned-Bold',
        MANROPE_400: 'Manrope-Regular',
        MANROPE_500: 'Manrope-Medium',
        MANROPE_600: 'Manrope-SemiBold',
        MANROPE_700: 'Manrope-Bold',
        ROBOTO_400: 'Roboto-Regular',
        ROBOTO_500: 'Roboto-Medium',
        ROBOTO_700: 'Roboto-Bold',
      },
    },
  },
  plugins: [],
};
