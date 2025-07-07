import './Footer.scss'

function Footer() {
    return (
        <footer>
            <div className="languages">
                <h2>HERRAMIENTAS Y LENGUAJES QUE UTILIZO</h2>
                <div className="languages__items">
                    <p className="button">HTML5</p>
                    <p className="button">CSS3</p>
                    <p className="button">SASS</p>
                    <p className="button">TAILWIND</p>
                    <p className="button">BOOTSTRAP</p>
                    <p className="button">ASTRO</p>

                    <p className="button">JAVASCRIPT</p>
                    <p className="button">REACT</p>

                    <p className="button">NODEJS</p>
                    <p className="button">EXPRESS</p>

                    <p className="button">MONGODB</p>
                    <p className="button">MYSQL</p>

                    <p className="button">GIT</p>
                    <p className="button">GITHUB</p>

                    <p className="button">FIGMA</p>
                    <p className="button">ADOBE XD</p>
                    <p className="button">ADOBE PHOTOSHOP</p>
                    <p className="button">ADOBE ILLUSTRATOR</p>
                </div>
            </div>
            <h2 className='footer-name'>DONE0424</h2>
        </footer>
    );
}

export default Footer