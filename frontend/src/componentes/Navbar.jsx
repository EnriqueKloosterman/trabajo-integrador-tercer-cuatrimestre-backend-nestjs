import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-blue-500 py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-4xl font-extrabold text-white text-opacity-90 hover:text-opacity-100 transition-colors duration-300">Mi Blog de Cocina</Link>
        <ul className="flex space-x-6 text-lg font-semibold text-white">
          <li className="relative group">
            <Link to="/" className="hover:text-lime-400">Inicio</Link>
            <div className="absolute w-0.5 h-6 bg-white group-hover:w-8 transition-all duration-300 origin-left"></div>
          </li>
          <li className="relative group">
            <Link to="/recipes" className="hover:text-lime-400">Recetas</Link>
            <div className="absolute w-0.5 h-6 bg-white group-hover:w-8 transition-all duration-300 origin-left"></div>
          </li>
          <li className="relative group">
            <Link to="/contact" className="hover:text-lime-400">Contacto</Link>
            <div className="absolute w-0.5 h-6 bg-white group-hover:w-8 transition-all duration-300 origin-left"></div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;


