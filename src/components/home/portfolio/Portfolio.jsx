import PortfolioCard from "./PortfolioCard.jsx";
import { projects } from "../../../utils/data/projects.js";

import '../../../pages/home/Home.scss'

function Portfolio() {
    return (
        <section id="portfolio">
            <h2>MIS ÚLTIMOS TRABAJOS</h2>
            <div className="portfolio-cards">
                {projects.map((project, index) => (
                    <PortfolioCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        text={project.text}
                    />
                ))}
            </div>
        </section>
    )
}

export default Portfolio