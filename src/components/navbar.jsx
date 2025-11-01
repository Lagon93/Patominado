
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/proyectos">Proyectos</Link></li>
        <li><Link to="/coordenadas">Coordenadas</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;