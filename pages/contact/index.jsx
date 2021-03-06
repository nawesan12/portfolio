import Head from 'next/head'
import Main from '../../components/Contact/Main'

export default function Contact() {
    return(
        <>
        <Head>
            <title>Contact - Nahuel Santillan</title>
            <meta name="description" content="Nahuel Santillan is a web developer located in Argentina. Contact him!" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="contact" style={{background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)'}}>
            <Main />
        </section>
        </>
    )
}