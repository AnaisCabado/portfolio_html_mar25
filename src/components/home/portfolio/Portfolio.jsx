import { useState } from "react";
import PortfolioCard from "./PortfolioCard.jsx";
import { develop, design, illustration } from "../../../utils/data/portfolio.js";

import './Portfolio.scss';

function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("develop");

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <section id="portfolio">
            <h2>MIS ÚLTIMOS TRABAJOS</h2>

            <article className="portfolio__categories-mobile">
                <div className="portfolio-title-mobile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                    </svg>
                    <h3>DESARROLLO</h3>
                </div>
                <div className="portfolio-cards develop-cards">
                    {develop.map((item, index) => (
                        <PortfolioCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>

                <div className="portfolio-title-mobile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-vector-pen" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
                        <path fillRule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z" />
                    </svg>
                    <h3>DISEÑO GRÁFICO</h3>
                </div>
                <div className="portfolio-cards design-cards">
                    {design.map((item, index) => (
                        <PortfolioCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>

                <div className="portfolio-title-mobile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-brush" viewBox="0 0 16 16">
                        <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04M4.705 11.912a1.2 1.2 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.4 3.4 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3 3 0 0 0 .126-.75zm1.44.026c.12-.04.277-.1.458-.183a5.1 5.1 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005zm3.582-3.043.002.001h-.002z" />
                    </svg>
                    <h3>ILUSTRACIÓN</h3>
                </div>
                <div className="portfolio-cards illustration-cards">
                    {/* Puedes reemplazar esto por data real de ilustración */}
                    {illustration.map((item, index) => (
                        <PortfolioCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>
            </article>

            <article className="portfolio__categories" style={{ display: "none" }}>
                <div className="portfolio-titles">
                    <div
                        className={`portfolio-title ${activeCategory === "develop" ? "active" : ""}`}
                        onClick={() => handleCategoryClick("develop")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                        </svg>
                        <h3>DESARROLLO</h3>
                    </div>

                    <div
                        className={`portfolio-title ${activeCategory === "design" ? "active" : ""}`}
                        onClick={() => handleCategoryClick("design")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-vector-pen" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
                            <path fillRule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z" />
                        </svg>
                        <h3>DISEÑO GRÁFICO</h3>
                    </div>

                    <div
                        className={`portfolio-title ${activeCategory === "illustration" ? "active" : ""}`}
                        onClick={() => handleCategoryClick("illustration")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-brush" viewBox="0 0 16 16">
                            <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04M4.705 11.912a1.2 1.2 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.4 3.4 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3 3 0 0 0 .126-.75zm1.44.026c.12-.04.277-.1.458-.183a5.1 5.1 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005zm3.582-3.043.002.001h-.002z" />
                        </svg>
                        <h3>ILUSTRACIÓN</h3>
                    </div>
                </div>

                {activeCategory === "develop" && (
                    <div className="portfolio-cards develop-cards">
                        {develop.map((item, index) => (
                            <PortfolioCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                text={item.text}
                            />
                        ))}
                    </div>
                )}

                {activeCategory === "design" && (
                    <div className="portfolio-cards design-cards">
                        {design.map((item, index) => (
                            <PortfolioCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                text={item.text}
                            />
                        ))}
                    </div>
                )}

                {activeCategory === "illustration" && (
                    <div className="portfolio-cards illustration-cards">
                        {/* Puedes reemplazar esto por data real de ilustración */}
                        {illustration.map((item, index) => (
                            <PortfolioCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                text={item.text}
                            />
                        ))}
                    </div>
                )}
            </article>
        </section>
    );
}

export default Portfolio;
