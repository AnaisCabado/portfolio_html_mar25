import { Link } from "react-router-dom";

import './Header.scss';

function Header() {
    return (
        <header>
            <div className="header__title">
                <p>DONE0424</p>
                <p className="header__subtitle">FULLSTACK, UX/UI, DISEÑO GRÁFICO E ILUSTRACIÓN</p>
            </div>
            <nav>
                <ul className="header__nav">
                    <li onClick={() => {
                            document.getElementById("main-info")?.scrollIntoView({ behavior: "smooth", block: 'start' });
                        }}>Inicio</li>
                    <li onClick={() => {
                            document.getElementById("biography")?.scrollIntoView({ behavior: "smooth", block: 'center' });
                        }}>Acerca de</li>
                    <li onClick={() => {
                            document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth", block: 'start' });
                        }}>Portfolio</li>
                    <li onClick={() => {
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: 'center' });
                        }}>Contacto</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header