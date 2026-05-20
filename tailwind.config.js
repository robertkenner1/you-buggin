/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SuperSans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        canvas: '#f7f5f1',
        ink: '#1a1a1a',
        muted: '#6b6b6b',
        hairline: '#e5e1d8',
        card: '#ffffff',
        accent: '#4a6b54',
        accentHover: '#3d5a46',
      },
      maxWidth: {
        app: '480px',
      },
      borderRadius: {
        card: '4px',
      },
    },
  },
  plugins: [],
};
