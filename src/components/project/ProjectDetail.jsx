import './ProjectDetail.scss'

function ProjectDetail({ title, description, mainImg, mainText, img1, img2, img3, vid1, vid2, vid3, text1, text2, text3, tools }) {
    return (
        <div className="project-detail">
            <div className="project-detail__banner">
                <div className="project-detail__banner__img">
                    <img src={mainImg} alt={title} loading="lazy" />
                </div>
            </div>
            <div className="project-detail__content">
                <div className="project-detail__info">
                    <h1 className="project-detail__title">{title}</h1>
                    <p>{description}</p>
                </div>

                <p className='main-text'>{mainText}</p>

                <div className="project-detail__part1">
                    {img1 ? (
                        <img src={img1} alt={title} loading="lazy" />
                    ) : vid1 ? (
                        <video src={vid1} controls autoPlay loop className="project-info__video" />
                    ) : null}

                    <p className="project-detail__text1">{text1}</p>
                </div>

                {img2 ? (
                    <img src={img2} alt={title} loading="lazy" />
                ) : vid2 ? (
                    <video src={vid2} controls autoPlay loop className="project-info__video" />
                ) : null}

                <p className="project-detail__text2">{text2}</p>

                {img3 ? (
                    <img src={img3} alt={title} loading="lazy" />
                ) : vid3 ? (
                    <video src={vid3} controls autoPlay loop className="project-info__video" />
                ) : null}

                <p className="project-detail__text3">{text3}</p>

                <p className='project-detail__tools'>{tools}</p>
            </div>

        </div>
    )
}

export default ProjectDetail