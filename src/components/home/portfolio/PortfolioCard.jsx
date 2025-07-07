function PortfolioCard({ title, description, image, text }) {
    return (
        <div className="portfolio-card">
            <div className="portfolio-card__title">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <img src={image} alt={title} />
            <p className="portfolio-card__text">{text}</p>
        </div>
    )
}

export default PortfolioCard