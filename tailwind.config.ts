import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.45rem' }],
      xl: ['1.25rem', { lineHeight: '1.6rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }]
    },
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
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' }
        }
      },
      animation: {
        blink: 'blink 1s linear infinite',
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
