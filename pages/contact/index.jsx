import Head from 'next/head'
import Main from '../../components/Contact/Main'

export default function Contact() {
    return(
        <>
        <Head>

        </Head>

        <section className="contact" style={{background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)'}}>
            <Main />
        </section>
        </>
    )
}