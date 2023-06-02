import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 pt-10 sm:mt-10">
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-middle">
        {/* Column 1 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          {/*Logo*/}
          <div className="text-white">LOGO</div>
        </div>

        {/* Column 2 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          {/* Title */}
          <h3 className="text-white mb-6 p-0">Enlaces</h3>

          {/* Links */}
          <a
            href="#"
            className="my-3 block text-white hover:text-gray-500 text-sm font-medium duration-500"
          >
            Enlace 1
          </a>
          <a
            href="#"
            className="my-3 block text-white hover:text-gray-500 text-sm font-medium duration-500"
          >
            Enlace 2
          </a>
          <a
            href="#"
            className="my-3 block text-white hover:text-gray-500 text-sm font-medium duration-500"
          >
            Enlace 3
          </a>
        </div>

        {/* Column 3 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          {/* Title */}
          <h3 className="text-white mb-6">Acerca de Nosotros</h3>

          {/* Text */}
          <p className="my-3 block text-white text-sm font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            tristique et urna eu bibendum. Sed cursus semper diam quis
            imperdiet.
          </p>
        </div>

        {/* Column 4 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          {/* Title */}
          <h3 className="text-white mb-6">Contáctanos</h3>

          {/* Links */}
          <div className="my-3">
            <p className="text-white text-sm font-medium duration-700">
              1234 Calle Falsa
            </p>
          </div>
          <div className="my-3">
            <p className="text-white text-sm font-medium duration-700">
              +1 (555) 555-5555
            </p>
          </div>
          <div className="my-3">
            <p className="text-white text-sm font-medium duration-700">
              correo@ejemplo.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
        <div className="flex pb-5 ps-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl md:items-center md:justify-evenly">
          <div className="">
            © 2023 CryptoApp Todos los derechos reservados.
          </div>
          <div className="flex flex-row space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Cookies
            </a>
          </div>
      </div>
    </footer>
  );
}
