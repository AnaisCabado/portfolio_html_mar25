import { Link } from "react-router-dom";

import './Header.scss';

function Header() {
    return (
        <header>
            <div className="header__title">
                <p>Done0424</p>
                <p>Fullstack developing, UX/UI, graphic design and illustration</p>
            </div>
            <nav>
                <ul className="header__nav">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#">About</a></li> {/* TODO CAMBIAR LINK */}
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
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