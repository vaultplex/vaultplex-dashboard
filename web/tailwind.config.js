const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'neon-violet': '#9400d3',
        'neon-violet-dark': '#4b0082', // Darker violet
        'neon-green': '#00ff00',       // Brighter neon green
        'neon-text': '#e0f7fa',        // Light text color for better readability
      },
      backgroundImage: {
        'neon-gradient-dark': 'linear-gradient(135deg, #2e1a30 0%,#4f1056 47%,#386845 100%)', // Dark violet to dark green
      },
    },
  },
  plugins: [require('daisyui')],
};
