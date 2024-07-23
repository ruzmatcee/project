/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
        container: {
            padding: {
                DEFAULT: '0.5rem',
                xs: '0rem',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
            'xs': '540px',
            '3xl': '1780px',

        },
        fontFamily: {
            playwrite: ['"Trade Winds", system-ui'],
          },
    },
},
plugins: [
    require('flowbite/plugin')
]

}