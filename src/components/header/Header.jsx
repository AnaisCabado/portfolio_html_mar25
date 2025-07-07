import { Link } from "react-router-dom";

import './Header.scss';

function Header() {
    return (
        <header>
            <div className="header__title">
                <p>DONE0424</p>
                <p>FULLSTACK, UX/UI, DISEÑO GRÁFICO E ILUSTRACIÓN</p>
            </div>
            <nav>
                <ul className="header__nav">
                    <li><Link to="/">Inicio</Link></li>
                    <li><a href="#">Acerca de</a></li> {/* TODO CAMBIAR LINK */}
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header