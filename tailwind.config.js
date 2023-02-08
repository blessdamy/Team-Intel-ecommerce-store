/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      // transparent: 'transparent',
      // current: 'currentColor',
      'primary': 'rgba(222, 219, 219, 0.4)',
      'dark-green': '#0D7D47',
      'cream-like': '#FAFAFA',
      'nude-like': '#DEDBDB',
      'line-color': 'rgba(113, 113, 113, 0.58)' 
    },

    fontSize: {
      '9': '2.25rem',
      '4': '1rem',
      '6': '1.5rem',
      '3.75': '0.938rem',
    },

    lineHeight: {
      '10.5': '2.625rem',
      '4.75': '1.188rem',
      '7.25': '1.813rem',
      
    },

    borderRadius: {
      '2.5': '0.625rem',
      '1.25': '0.313rem',
    },
    
    extend: {
      width: {
        '154.75': '38.688rem',
        '138.75': '34.688rem',
        '50.75': '12.688rem',
        '117': '29.25rem',
        '79.25': '19.813rem',
        '101': '25.25rem',
        '67.25': '16.813rem',
        '33.25': '8.313rem',
        '28.25': '7.063rem',
      },

      height: {
        '105': '26.25rem',
        '171.25': '42.813rem',
        '303.75': '75.938rem',
        '14.5': '3.625rem',
        '17.75': '4.438rem',
      },

      margin: {
        '26': '6.5rem',
        '13': '3.25rem',
        '14.75': '3.688rem',
        '14': '3.5rem',
        '28.25': '7.063rem',
        '12.5': '3.125rem',
        '7': '1.75rem',
        '11.5': '2.875rem',
        '13.25': '3.313rem',
        '8.25': '2.063rem',
        '10.75': '2.688rem',
        '10.5': '2.625rem',
        '13.75': '3.438rem',
        '8.75': '2.188rem',
        '7.75': '1.938rem',
        '5.25': '1.313rem',
        '9.25': '2.313rem',
        '7.25': '1.813rem',
        '19.5': '4.875rem',
        '17.75': '4.438rem',
        '37.5': '9.375rem',
        '39.5': '9.875rem',
        '63.5': '15.875rem',
        '6.25': '1.563rem',
       
        
      }

      
    },

    fontFamily: {
      Roboto: ["'Roboto', sans-serif"],
      Inter: ["'Inter', sans-serif"],
    },

    padding: {
      '17': '4.25rem',
    },

    
  },
  plugins: [],
}
