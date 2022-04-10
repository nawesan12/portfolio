import Head from 'next/head'
import Main from '../../components/Projects/Main'

export default function Projects() {
    return(
        <>
        <Head>
            <title>Projects - Nahuel Santillan</title>
            <meta name="description" content="Nahuel Santillan is a web developer located in Argentina. Come to check his projects!" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="projects" style={{background:'linear-gradient(to right, #9d50bb, #6e48aa)'}}>
            <Main />
        </section>
        </>
    )
}