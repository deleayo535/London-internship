/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xsm: '0.85rem',
        sxm: '1rem',
        sm: '1.125rem',
        smmd: '1.25rem',
        smx: '1.4rem',
        base: '1.65rem',
        base2: '2rem',
        lg: '2.5rem',
        xlg: '2.75rem',
        xlgx: '3.12rem',
        xl: '3.5rem',
        xlx: '4.25rem',
        xxl: '5rem',
        xxlg: '6.5rem',
    },
    },
  },
  plugins: [],
}

