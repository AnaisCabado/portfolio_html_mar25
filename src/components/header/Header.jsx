import { Link } from "react-router-dom";

import './Header.scss';

function Header() {
    return (
        <header>
            <div className="header__title">
                <p>Done0424</p>
                <p>Fullstack, UX/UI, diseño gráfico e ilustración</p>
            </div>
            <nav>
                <ul className="header__nav">
                    <li><Link to="/">Inicio</Link></li>
                    <li><a href="#">Acerca de</a></li> {/* TODO CAMBIAR LINK */}
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            <ul className="header__languages">
                <li>Eusk</li>
                <li>Cast</li>
                <li>Eng</li>
            </ul>
        </header>
    )
}

export default Header