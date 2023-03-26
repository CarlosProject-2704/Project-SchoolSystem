/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/**/*.{html,js}",
      "./src/administrator/**/*.{html,js}",

   ],

   theme: {

      screens: {
         '2xl': { 'max': '1535px' },
         // => @media (max-width: 1535px) { ... }

         'xl': { 'max': '1279px' },
         // => @media (max-width: 1279px) { ... }

         'lg': { 'max': '1023px' },
         // => @media (max-width: 1023px) { ... }

         'md': { 'max': '800px' },
         // => @media (max-width: 800px) { ... }

         'sm': { 'max': '650px' },
         // => @media (max-width: 639px) { ... }
      },

      extend: {

         backgroundImage: {
            'login': "url('../img/background_login.jpg')",
         },

         colors: {
            custom: {
               1: '#E4E9F7',
               2: '#DADDEC',
               3: '#75B5C3',
               4: '#cd323c',
            },
         },

         fontFamily: {
            'Montserrat': ['Ubuntu', 'sans-serif'],
         },
      },
   },
   plugins: [],
}


// npx tailwindcss -i ./tailwind.config.css -o ./src/assets/css/index.css --watch

// npx tailwindcss -i ./tailwind.config.css -o ./src/administrator/assets/css/index.css --watch