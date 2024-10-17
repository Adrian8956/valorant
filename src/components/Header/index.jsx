import { Link, useLocation } from "react-router-dom";
import './header.css';

function Header() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <header className="header-container">
            <Link 
                to="/" 
                className={isActive("/") ? "active-link" : ""}>
                Agentes
            </Link>
            <Link 
                to="/mapas" 
                className={isActive("/mapas") ? "active-link" : ""}>
                Mapas
            </Link>
            <Link 
                to="/armas" 
                className={isActive("/armas") ? "active-link" : ""}>
                Armas
            </Link>
            <Link 
                to="/ranques" 
                className={isActive("/ranques") ? "active-link" : ""}>
                Ranques
            </Link>
        </header>
    );
}

export default Header;
