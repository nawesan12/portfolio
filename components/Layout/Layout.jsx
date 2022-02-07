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
            <div className="burger" onClick={() => setNavOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="45" height="45" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </div>
            <div className="logo">
                <h2>NS Dev</h2>
            </div>
            <nav className={isOpen === true ? "navigation visible" : "navigation"}>
                <div className="list">
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
                </div>
            </nav>
            <div className={isOpen === true ? "language-setter language-visible" : "language-setter"}>
                <div className="setter" onClick={toggleLanguage}>
                    <Image alt="Language Flag" src={`/images/${language === 'en' ? 'english.png' : 'spanish.png'}`} object-fit='cover' layout='fill' />
                </div>
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
                cursor:pointer;
            }

            footer {
                width:100vw;
                height:10vh;
                display:grid;
                place-items:center;
                background:black;
                color:white;
            }

            @media screen and (max-width:1200px) {
                .app-header {
                    display:flex;
                    width:100vw;
                    justify-content:space-between;
                }

                .navigation {
                    display:none;
                    transition: all .4s ease;
                    position:absolute;
                    top:10vh;
                    left:0;
                    background:#ffffff;
                    border-radius:1rem;
                    border:1px solid black;
                    box-shadow:2px 2px 5px #ccc;
                    height:15rem;
                    align-items:center;
                    justify-content:space-evenly;
                    margin:1rem;
                    right:0;
                }

                .item {
                    font-weight:500;
                    font-size:1.4rem;
                }

                .item a {
                    border-color:transparent;
                }

                .list {
                    height:100%;
                    flex-direction:column;
                    justify-content:space-evenly;
                }

                .burger {
                    display:block;
                }

                .language-setter {
                    margin:0;
                }

                .visible {
                    display:flex;
                }

                .hidden {
                    display:none;
                }
            }
        `}</style>
        </>
    )
}