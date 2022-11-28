import {Fragment} from "react";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";

function HomePage() {
    return (
        <Fragment>
            <Hero heading='Specjaliści w elektryce i automatyce przemysłowej' />
            <About />
        </Fragment>
    )
}

export default HomePage;