import {Fragment} from "react";
import '../styles/globals.css'
import type {AppProps} from 'next/app'

import Navbar from '../components/navbar/Navbar';

export default function App({Component, pageProps}: AppProps) {

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

    return (
        <Fragment>
            <Navbar links={links}/>
            <Component {...pageProps} />
        </Fragment>
    )
}
