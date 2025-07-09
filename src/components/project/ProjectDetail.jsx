function ProjectDetail({ title, description, image, text }) {
    return (
        <div className="project-detail">
            <div className="project-info" style={{ marginTop: '10em'}}> {/* TODO QUITAR ESTILO */}
                <img src={image} alt={title} loading="lazy" className="project-info__image" />
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{text}</p>
            </div>

        </div>
    )
}

export default ProjectDetail