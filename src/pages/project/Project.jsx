import ProjectDetail from "../../components/project/ProjectDetail";
import { useParams } from "react-router-dom";
import { develop, design, illustration } from "../../utils/data/projectDetail";

function Project() {
    const { projectTitle } = useParams();

    const project = develop.find((item) => item.title.toUpperCase().replaceAll('-', ' ') === projectTitle.toUpperCase().replaceAll('-', ' '))
        || design.find((item) => item.title.toUpperCase().replaceAll('-', ' ') === projectTitle.toUpperCase().replaceAll('-', ' '))
        || illustration.find((item) => item.title.toUpperCase().replaceAll('-', ' ') === projectTitle.toUpperCase().replaceAll('-', ' '));

    return (
        <section id="project">
            <ProjectDetail
                key={project.index}
                title={project.title}
                description={project.description}
                image={project.image}
                text={project.text}
            />
        </section>
    )
}

export default Project