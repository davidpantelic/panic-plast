/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        suse: ['SUSE', 'sans-serif']
      },
      colors: {
        'brand-black': '#081107',
        'brand-grey-1': '#4A4A4A',
        'brand-grey-2': '#D3D3D3',
        // 'brand-green': '#4CAF50',
        'brand-green': '#acbc90',
        'brand-yellow': '#FFF8DC'
      },
      transitionDuration: {
        DEFAULT: '500ms'
      }
    }
  },
  plugins: []
}
