import '../styles/globals.css'
import type {AppProps} from 'next/app'

// @ts-ignore
import Layout from '../components/layout/layout';
import {NotificationContextProvider} from "../store/notification-context";
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {

    return (
        <NotificationContextProvider>
            <Layout>
                <Head>
                    <title>Elthor.pl</title>
                </Head>
                <Component {...pageProps} />
            </Layout>
        </NotificationContextProvider>
    )
}
