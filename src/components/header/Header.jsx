import { useState } from "react";
import './Header.scss';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsOpen(false); // Cierra el menú al hacer clic
    };

    return (
        <header>
            <div className="header__title">
                <p>DONE0424</p>
                <p className="header__subtitle">FULLSTACK, UX/UI, DISEÑO GRÁFICO E ILUSTRACIÓN</p>
            </div>

            {/* MENÚ DESLIZANTE */}
            <nav className={`slide-menu ${isOpen ? 'open' : ''}`}>
                {/* BOTÓN HAMBURGUESA */}
                <button
                    className="burger-toggle"
                    onClick={toggleMenu}
                    aria-label="Abrir o cerrar menú"
                >
                    ☰
                </button>

                <ul className="header__nav">
                    <li onClick={() => handleNavClick("main-info")}>Inicio</li>
                    <li onClick={() => handleNavClick("biography")}>Acerca de</li>
                    <li onClick={() => handleNavClick("portfolio")}>Portfolio</li>
                    <li onClick={() => handleNavClick("contact")}>Contacto</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
