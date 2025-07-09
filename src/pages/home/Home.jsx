import MainInfo from "../../components/home/MainInfo";
import Portfolio from "../../components/home/portfolio/Portfolio";
import Contact from "../../components/home/Contact";

function Home() {
    return (
        <section id="home">
            <MainInfo/>
            <Portfolio/>
            <Contact/>
        </section>
    )
}

export default Home