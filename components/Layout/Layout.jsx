import { useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router"

import useTranslation from 'next-translate/useTranslation'

export default function Layout({ children }) {

    const [isOpen, setNavOpen] = useState(false)
    const [language, setLanguage] = useState('en')
    const [flag, setFlag] = useState('english.png')

    const { t } = useTranslation();
    const router = useRouter();
    const { pathname, asPath } = router;

    const toggleLanguage = () => {
        language === "es" ? setLanguage('en') : 
        language === "en" ? setLanguage('fr') :
        language === "fr" ? setLanguage('es') : ""
        router.push({ pathname }, asPath, { locale: language });

        chooseFlag()
    }

    const chooseFlag = () => {
        if(language === 'es') setFlag('spanish.png')
        if(language === 'en') setFlag('english.png')
        if(language === 'fr') setFlag('french.png')
    }
   
    const hideNav = () => {
        setNavOpen(false)
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
                <h2 title="Nahuel Santillan - Web Developer">NS Dev</h2>
            </div>
            <nav className={isOpen === true ? "navigation open" : "navigation"}>
                <section className="nav_photo">
                    <div className="photo-container">
                        <Image src="/images/penguin.png" alt="Nahuel Santillan" layout="fill" objectFit="cover" />
                    </div>
                    <p>Nahuel Santillan</p>
                    <span>{t('common:webdev')}</span>
                </section>
                <div className="list">
                    <li className="item" onClick={hideNav}>
                        <Link href="/"><a className={router.pathname === "/" ? "link-active" : ""}>{t('common:home')}</a></Link>
                    </li>
                    <li className="item" onClick={hideNav}>
                        <Link href="/about"><a className={router.pathname === "/about" ? "link-active" : ""}>{t('common:about')}</a></Link>
                    </li>
                    <li className="item" onClick={hideNav}>
                        <Link href="/projects"><a className={router.pathname === "/projects" ? "link-active" : ""}>{t('common:projects')}</a></Link>
                    </li>
                    <li className="item" onClick={hideNav}>
                        <Link href="/contact"><a className={router.pathname === "/contact" ? "link-active" : ""}>{t('common:contact')}</a></Link>
                    </li>
                </div>
                <div className={isOpen === true ? "social-media visible" : "social-media"}>
                    <li className="item"><a href="" className="media">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                        </svg>    
                    </a></li>
                    <li className="item"><a href="" className="media">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                            <line x1="8" y1="11" x2="8" y2="16" />
                            <line x1="8" y1="8" x2="8" y2="8.01" />
                            <line x1="12" y1="16" x2="12" y2="11" />
                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                        </svg>
                    </a></li>
                    <li className="item"><a href="" className="media">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                    </a></li>
                </div>
            </nav>
            <div title="Switch Language / ES - EN - FR" className={isOpen === true ? "language-setter language-visible" : "language-setter"}>
                <div className="setter" onClick={toggleLanguage}>
                    <Image alt="Language Flag" src={`/images/${flag}`} object-fit='cover' layout='fill' />
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

            .nav_photo {
                display:none;
            }

            .photo-container {
                display:none;
            }

            .navigation .social-media {
                display:none;
            }

            .link-active {
                border-bottom:2px solid #902020;
            }

            @media screen and (max-width:1200px) {
                .app-header {
                    display:flex;
                    width:100vw;
                    justify-content:space-between;
                }

                .navigation {
                    transform: translateX(-100%);
                    transition: all .3s ease;
                    position:absolute;
                    top:10vh;
                    left:0;
                    background:#ffffff;
                    height:90vh;
                    max-height:90vh;
                    width:75vw;
                    flex-direction: column;
                    align-items:center;
                    justify-content:space-evenly;
                    padding-top:10vh;
                    box-shadow: 2px 2px 5px -2px #aaa;
                }

                .open {
                    transform:translateX(0%);
                }

                .item {
                    font-weight:500;
                    font-size:1.4rem;
                    margin-top:2.4rem;
                }

                .item a {
                    border-color:transparent;
                }

                .list {
                    flex-direction:column;
                }

                .nav_photo {
                    display:flex;
                    flex-direction:column;
                    width:100%;
                    align-items:center;
                    font-size:1.5rem;
                    font-weight:bold;
                    line-height:0;
                }

                .nav_photo span {
                    font-weight:400;
                    font-size:1.2rem;
                    line-height:1;
                }

                .photo-container {
                    height:5rem;
                    width:5rem;
                    position:relative;
                    display:block;
                    margin:auto;
                }

                .navigation .social-media {
                    display:flex;
                    max-width:100%;
                    width:100%;
                    justify-content:center;
                }

                .social-media .item {
                    margin: 2.5rem .5rem;
                    display:flex;
                    justify-content:center;
                    align-items:center;
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