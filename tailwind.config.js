/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#0F1522', // Stand out text and headers light
        'secondary': '#E94560', // Breadtext in light
        'light': '#FCA311', // Background color for light
        'dark-primary': 'rgb(209, 213, 219)', //  out text and headers in dark
        'dark-secondary': 'rgb(107, 114, 128)', // Breadtext in dark
        'dark': '#24292f', // Background color in dark
      
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