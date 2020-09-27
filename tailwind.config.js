module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './styles/**/*.css'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        primary: '#4ec9b0',
        'primary-light': '#77d6c0',
        'primary-dark': '#13b28d',
        secondary: '#9CDCFE',
        'secondary-light': '#c9edff',
        'secondary-dark': '#55b7e8',
        cancel: '#f44242',
        'cancel-light': '#ff5b5b',
        background: '#1E1E1E',
      },
    },
  },
};
