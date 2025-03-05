/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class', // Esto permite alternar manualmente las clases dark
    theme: {
      extend: {
        sans: ['Inter', 'sans-serif'], 
      },
    },
    plugins: [],
  }