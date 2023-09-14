import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-blue-500 py-4 mt-3 rounded-md">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-4xl font-extrabold text-white text-opacity-90 hover:text-opacity-100 transition-colors duration-300">Mi Blog de Cocina</Link>
        <ul className="flex space-x-6 text-lg font-semibold text-white">
          <li>
            <Link to="/" className="hover:text-violet-400">Inicio</Link>
          </li>
          <li>
            <Link to="/recipes" className="hover:text-violet-400">Recetas</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-violet-400">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
