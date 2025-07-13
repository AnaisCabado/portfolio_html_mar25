import { Link } from "react-router-dom";

function PortfolioCard({ title, description, image, text }) {
    return (
        <div className="portfolio-card">
            <img src={image} alt={title} loading="lazy" /* TODO AÑADIR LOADING LAZY A TODAS LAS IMG */ className="portfolio-card__image" />

            <div className="portfolio-card__info">
                <h3>{title}</h3>
                <p>{description}</p>
                <p className="portfolio-card__main-text">{text}</p>
            </div>

            <Link to={`/project/${title.toLowerCase().replaceAll(' ', '-')}`} className="button">VER PROYECTO</Link>
        </div>
    )
}

export default PortfolioCard