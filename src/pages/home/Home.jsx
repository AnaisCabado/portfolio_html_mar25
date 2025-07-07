import MainInfo from "../../components/home/MainInfo";
import Portfolio from "../../components/home/portfolio/Portfolio";
import Contact from "../../components/home/Contact";

function Home() {
    return (
        <div id="home">
            <MainInfo/>
            <Portfolio/>
            <Contact/>
        </div>
    )
}

export default Home