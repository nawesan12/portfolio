import { useState } from "react"
import Link from 'next/link'
import Image from 'next/image'

export default function Layout({ children }) {
    const [isOpen, setNavOpen] = useState(false)
    const [language, setLanguage] = useState('en')
    const [scroll, setScroll] = useState(0)

    const toggleLanguage = () => {
        language === 'en' ? setLanguage('es') : setLanguage('en')
    }
    
    return(
        <>
        <header className="app-header">
            <div className="logo">
                <h2>NS Dev</h2>
            </div>
            <nav className={isOpen === true ? "navigation visible" : "navigation"}>
                <ul className="list">
                    <li className="item">
                        <Link href="/"><a href="#">Home</a></Link>
                    </li>
                    <li className="item">
                        <Link href="/about"><a href="#">About</a></Link>
                    </li>
                    <li className="item">
                        <Link href="/projects"><a href="#">Projects</a></Link>
                    </li>
                    <li className="item">
                        <Link href="/contact"><a href="#">Contact</a></Link>
                    </li>
                </ul>
            </nav>
            <div className="language-setter">
                <div className="setter" onClick={toggleLanguage}>
                    <Image alt="Language Flag" src={`/images/${language === 'en' ? 'english.png' : 'spanish.png'}`} object-fit='cover' layout='fill' />
                </div>
            </div>
            <div className="burger">

            </div>
        </header>

        <main>
            {children}
        </main>

        <footer>
            <span className="attribution">Santillan Nahuel - 2022 - Web Developer</span>
        </footer>

        <style jsx>{`
            .app-header {
                display:flex;
                height:10vh;
                width:100vw;
                justify-content:space-between;
                align-items:center;
                padding: 0 3rem;
                position:fixed;
                background:white;
                z-index:100;
                border-bottom:5px solid rgba(255, 255, 255, .2);
            }    

            .list {
                display:flex;
                align-items:center;
            }

            .item {
                list-style-type:none;
                margin:0 1rem;
            }

            a {
                padding:.5rem 1rem;
                border-bottom:2px solid black;
            }

            a:hover {
                border-bottom:2px solid #902020;
            }

            .language-setter {
                padding:.5rem 1rem;
                margin-right: 3rem;
            }

            .setter {
                height:3rem;
                width:3rem;
                position:relative;
                cursor:pointer;
            }

            .burger {
                display:none;
            }


            footer {
                width:100vw;
                height:10vh;
                display:grid;
                place-items:center;
                background:black;
                color:white;
            }
        `}</style>
        </>
    )
}