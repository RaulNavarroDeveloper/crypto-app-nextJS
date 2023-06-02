/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", './public/index.html',], // Procesa todos los archivos HTML y JS en la carpeta src
  theme: {
    extend: {
      colors: {
        primary: '#FF0000', // Agrega un color personalizado llamado primary
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'], // Agrega una fuente personalizada llamada Inter
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Agrega el complemento de formulario de Tailwind
    // // Otros complementos de Tailwind aquí
  ],
};

