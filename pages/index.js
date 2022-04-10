import Head from 'next/head'

import Presentation from '../components/Home/Presentation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nahuel Santillan - Web Developer</title>
        <meta name="description" content="Nahuel Santillan is a web developer located in Argentina. Come to check his profile and skills!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="home" style={{background: 'linear-gradient(to top right, #902020, #3d72b4)'}}>
        <Presentation />
      </section>
    </>
  )
}
