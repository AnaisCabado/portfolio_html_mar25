import './MainInfo.scss'

function MainInfo() {
    return (
        <section id="main-info">
            <article className="main-info__details">
                <div className="main-info__title">
                    <p className="main-info__title-name">DONE0424</p>
                    <div className="main-info__title-work">
                        <p>DISEÑO &</p>
                        <p>DESARROLLO</p>
                    </div>
                </div>

                {/* TODO REVISAR */}
                <div className="main-info__first-text">
                    <p>Diseñadora gráfica, ilustradora y desarrolladora UX/UI y fullstack. Me apasiona transformar ideas en experiencias visuales y digitales que conecten con las personas. </p>

                    <button className='button'>CONTÁCTAME</button>
                </div>
            </article>

            <article className="main-info__biography"> {/* TODO REVISAR */}
                <img src="assets/retrato-lineal.png" alt="portrait" /> {/* TODO CAMBIAR A SVG */}
                <div className="main-info__biography-text">
                    <p>Hola! Soy Done0424, diseñadora gráfica, ilustradora y desarrolladora UX/UI y fullstack. Me apasiona transformar ideas en experiencias visuales y digitales que conectan con las personas. </p>
                    <p>Con una sólida base en el diseño gráfico y la ilustración, combino creatividad y funcionalidad para crear productos digitales intuitivos, accesibles y visualmente impactantes. Como desarrolladora fullstack, tengo la capacidad de dar vida a mis diseños desde la lógica del código hasta los detalles visuales, integrando estética y tecnología en cada proyecto.</p>
                    <p>Me gusta trabajar desde la empatía, observando y entendiendo a los usuarios para ofrecer soluciones que no solo se vean bien, sino que también funcionen y se sientan bien.</p>
                </div>
            </article>
        </section>
    )
}

export default MainInfo