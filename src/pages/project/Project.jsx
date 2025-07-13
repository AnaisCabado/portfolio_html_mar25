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
                mainImg={project.mainImg}
                mainText={project.mainText}

                img1={project.img1}
                img2={project.img2}
                img3={project.img3}

                vid1={project.vid1}
                vid2={project.vid2}
                vid3={project.vid3}

                text1={project.text1}
                text2={project.text2}
                text3={project.text3}

                tools={project.tools}
            />
        </section>
    )
}

export default Project