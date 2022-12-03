import {Fragment} from "react";
import Hero from "../components/hero/hero";
import About from "../components/about/about";

function HomePage() {
    return (
        <Fragment>
            <Hero heading='Specjaliści w elektryce i automatyce przemysłowej' />
            <About />
        </Fragment>
    )
}

export default HomePage;