import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }

      '4k': '2560px',
    },
    extend: {
      colors: {
        'blue': '#0000ff', // replace with your preferred blue color
      },
      backgroundImage: {
        'gradient-l': 'linear-gradient(to right, white 50%, blue 50%)',
      },
      backgroundSize: {
        '200%': '200%',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover'],
      backgroundSize: ['hover'],
      backgroundPosition: ['hover'],
    },
  },
  plugins: [],
}
export default config
