/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      extend: {
        colors: {
          mainBlue: '#4338ca',
          mainLightBlue: '#6366f1',
          mainPink: '#E9674D',
          brightPink: '#F43F5E',
          lightPink: '#FFE4E6',
          mustard: '#F59E0B',
          lightYellow: '#FEF3C7',
          brightGreen: '#10B981',
          lightGreen: '#D1FAE5',
          gray: {
            500: '#6B7280',
            600: '#52525B',
            900: '#18181B'
          },
          almostWhite: '#f8f8f8',
          strokeColour: '#E2E8F0',
          subBlue: '#C7D2FE',
          bgDashboard: '#F6F7FB'
        }
      },
    },
  },
  plugins: [],
}
