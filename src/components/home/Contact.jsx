import { Link } from "react-router-dom";

import './Contact.scss';

function Contact() {
    return (
        <section id="contact">
            <h2>¿TE HAS QUEDADO CON GANAS DE SABER MÁS?</h2>

            <form action="procesar.php" method="post" className="contact__form">
                <input type="text" name="name" placeholder="Nombre" />
                <input type="email" name="email" placeholder="Email" />
                <textarea name="message" placeholder="Mensaje"></textarea>
                <button type="submit" className="button">ENVIAR</button>
            </form>
        </section>
    )
}

export default Contact