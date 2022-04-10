import Head from 'next/head'
import Main from '../../components/About/Main'

export default function About() {
    return(
        <>
        <Head>
            <title>About - Nahuel Santillan</title>
            <meta name="description" content="Nahuel Santillan is a web developer located in Argentina." />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Main />
        </>
    )
}