/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#0F1522', // Background color for light
        'secondary': '#E94560', // Stand out text and headers light
        'tertiary': '#FCA311', // Breadtext in light
        'dark-primary': '#334161', // Background color - dark mode
        'dark-secondary': '#E94560', // Stand out text and headers - dark mode
        'dark-tertiary': '#FCA311', // Breadtext in light - dark mode
      
        // Additional colors for light and dark mode
        'lightest-background': '#FFFFFF',
        'lighter-background': '#F7F7F7',
        'light-background': '#D9D9D9',
        'darker-background': '#C0C0C0',
        'dark-mode-toggle-button': '#353535',
        'dark-mode-light-text': '#F7F7F7'
      }
    }
  },
  plugins: []
};