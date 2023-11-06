/** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,jsx}'],
//   darkMde: 'class',
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,jsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,jsx}',
  ],
  darkMde: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
});

// sas
