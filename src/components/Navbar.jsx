import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();

  // Función para saber si el link está activo y pintarlo de otro color
  const isActive = (path) => location.pathname === path 
    ? "text-indigo-600 font-bold border-b-2 border-indigo-600" 
    : "text-gray-600 hover:text-indigo-500";

  return (
    <nav className="bg-white shadow-sm mb-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Mi<span className="text-indigo-600">Portfolio</span>
            </Link>
          </div>
          <div className="flex space-x-8 items-center">
            <Link to="/" className={isActive('/')}>Sobre Mí</Link>
            <Link to="/laboral" className={isActive('/laboral')}>Proyectos Laborales</Link>
            <Link to="/freelance" className={isActive('/freelance')}>Freelance</Link>
            <Link to="/contacto" className={isActive('/contacto')}>Contacto</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}