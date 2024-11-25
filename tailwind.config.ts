import defaultTheme from 'tailwindcss/defaultTheme';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nextui } = require('@nextui-org/react');
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    spacing: {
      ...defaultTheme.spacing,
      '0px': '0px',
      '1px': '1px',
      '2px': '2px',
      '4px': '4px',
      '8px': '8px',
      '16px': '16px',
      '24px': '24px',
      '30px': '30px',
      '32px': '32px',
      '40px': '40px',
      '48px': '48px',
      '60px': '60px',
      '64px': '64px',
      '80px': '80px',
      '96px': '96px',
      '100px': '100px',
    },
    screens: {
      // sm: '640px',
      // md: '768px',
      // lg: '1024px',
      // xl: '1280px',
      '1280': '1280px',
      '1024': '1024px',
      '768': '768px',
      '600': '600px',
      '390': '390px',
      '400': '400px',
      '410': '410px',
      '430': '430px',
      '1440': '1440px',
    },
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, #9BC3EF 0%, #337ABD 100%)',
      },
      colors: {
        mc1: '#FAFAFD',
        mc2: '#EEEEFB',
        mc3: '#E2E2F8',
        textColor: '#305FAC',
        subTextColor: '#213459',
        gray700: '#626279',
        gray600: '#7A7A92',
        gray500: '#9292AC',
        gray400: '#ACACC5',
        gray300: '#C7C7DF',
        mainColor: '#4C51C6',
        blue700: '#77ABDB',
        icon: '#FD830D',
        warning: '#BA1A1A',
        mainSurface: '#FFFFFF',
        red: '#ED3525',
        while: '#FFF',
        azure900: '#213459',
        azure600: '#305FAC',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    nextui(),
    plugin(function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        '.text-shadow-sm': {
          'text-shadow': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          'text-shadow': '2px 2px 4px  rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          'text-shadow': '3px 3px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-none': {
          'text-shadow': 'none',
        },
        '.text-shadow': {
          'text-shadow': '0px 4px 16px rgba(0, 0, 0, 0.16)',
        },
      });
    }),
  ],
};
