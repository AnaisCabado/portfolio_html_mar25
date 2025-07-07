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

                <div className="main-info__first-text">
                    <p>Diseñadora gráfica, ilustradora y desarrolladora UX/UI y fullstack. Me apasiona transformar ideas en experiencias visuales y digitales que conecten con las personas. </p>

                    <button className='button'
                        onClick={() => {
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: 'center' });
                        }}>CONTÁCTAME</button>
                </div>
            </article>

            <article className="main-info__biography" id='biography'>
                <img src="assets/retrato-lineal.png" alt="portrait" /> {/* TODO CAMBIAR A SVG */}
                <div className="main-info__biography-text">
                    <h2>HOLA!</h2>
                    <p>Soy Done0424, una diseñadora gráfica especializada en UX/UI, en proceso de transición hacia el desarrollo frontend, con una base sólida en diseño centrado en el usuario, usabilidad y diseño visual.</p>
                    <p>Finalicé en 2024 el Máster en UX/UI en CEI Madrid, y en 2025 el BBK Bootcamp Full Stack Developer en The Bridge, lo que me ha permitido adquirir conocimientos técnicos avanzados y experiencia práctica en desarrollo web.</p>
                    <p>Como perfil híbrido, combino sensibilidad estética con habilidades técnicas para crear interfaces eficientes, accesibles y visualmente atractivas. Me apasiona el diseño de interacción, la arquitectura de información y la implementación de sistemas de diseño reutilizables. Tengo experiencia trabajando con metodologías ágiles, y valoro la colaboración en equipos multidisciplinares.</p>
                    <p>Busco formar parte de un equipo donde pueda aportar soluciones frontend de calidad, desde la empatía, el detalle y la pasión por mejorar la experiencia de usuario.</p>
                </div>
            </article>
        </section>
    )
}

export default MainInfo