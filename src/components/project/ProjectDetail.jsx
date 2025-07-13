import './ProjectDetail.scss'

function ProjectDetail({ title, description, mainImg, mainText, img1, img2, img3, vid1, vid2, vid3, text1, text2, text3, tools }) {
    return (
        <div className="project-detail">
            <div className="project-detail__banner">
                <img src={mainImg} alt={title} loading="lazy" className="project-detail__banner__img" />
                <div className="project-detail__banner__info">
                    <h1 className="project-detail__banner__title">{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
            <div className="project-detail__content">
                <p className='main-text'>{mainText}</p>

                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />

                <video src={vid1} controls autoplay className="project-info__video"></video>
                <video src={vid2} controls autoplay className="project-info__video"></video>
                <video src={vid3} controls autoplay className="project-info__video"></video>

                <p>{text1}</p>
                <p>{text2}</p>
                <p>{text3}</p>

                <p>{tools}</p>
            </div>

        </div>
    )
}

export default ProjectDetail