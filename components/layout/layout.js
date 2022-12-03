import {Fragment} from "react";
import MainNavigation from './main-navigation';
import Contact from '../contact/contact';

const Layout = (props) => {

    const links = [
        {
            name: "Start",
            href: "/"
        }, {
            name: "O nas",
            href: "/#onas"
        }, {
            name: "Usługi",
            href: "/uslugi"
        }, {
            name: "Realizacje",
            href: "/realizacje"
        },

    ]

    return(
        <Fragment>
            <MainNavigation links={links}/>
            <main>{props.children}</main>
            <Contact />
        </Fragment>
    )
}

export default Layout;