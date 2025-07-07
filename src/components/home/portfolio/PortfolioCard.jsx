import { Link } from "react-router-dom";

function PortfolioCard({ title, description, image, text }) {
    return (
        <div className="portfolio-card">
            <div className="portfolio-card__title">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <img src={image} alt={title} className="portfolio-card__image" />
            <div className="portfolio-card__text">
                <p>{text}</p>
                <Link to="#" className="button">VER PROYECTO</Link>
            </div>
        </div>
    )
}

export default PortfolioCard