import { Link } from "react-router-dom";

function PortfolioCard({ title, description, image, text }) {
    return (
        <div className="portfolio-card">
            <img src={image} alt={title} loading="lazy" /* TODO AÑADIR LOADING LAZY A TODAS LAS IMG */ className="portfolio-card__image" />

            <div className="portfolio-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{text}</p>
            </div>

            <Link to="#" className="button">VER PROYECTO</Link>
        </div>
    )
}

export default PortfolioCard