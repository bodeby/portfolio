/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(33, 36, 42)', // Stand out text and headers light
        'secondary': 'rgb(55, 59, 69)', // Breadtext in light
        'light': 'rgb(240, 240, 240)', // Background color for light
        'dark-primary': 'rgb(209, 213, 219)', //  out text and headers in dark
        'dark-secondary': 'rgb(107, 114, 128)', // Breadtext in dark
        'dark': 'rgb(19, 21, 25)', // Background color in dark
      
        // Additional colors for light and dark mode
        'lightest-background': '#FFFFFF',
        'lighter-background': '#F7F7F7',
        'light-background': '#D9D9D9',
        'darker-background': '#C0C0C0',
        'dark-mode-toggle-button': '#353535',
        'dark-mode-light-text': '#F7F7F7',
        'pop': '#E94560',
      }
    }
  },
  plugins: []
};