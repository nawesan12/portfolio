import Image from 'next/image'

export default function Presentation() {
    return (   
        <>
        <section className="presentation">
            <article className="titular">
                <h1>Nahuel Santillan</h1>
                <hr />
                <span>Web Developer</span>
                <hr />
                <div className="resoom">
                    <a href="/files/Santillan.pdf" download className="link">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    </svg>Resume
                    </a>
                    <a href="https://www.github.com/nawesan12" target="_blank" rel="noreferrer" className="link">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>Github
                    </a>
                    <a href="https://www.linkedin.com/in/nahuel-santillan" target="_blank" rel="noreferrer" className="link">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <line x1="8" y1="11" x2="8" y2="16" />
                        <line x1="8" y1="8" x2="8" y2="8.01" />
                        <line x1="12" y1="16" x2="12" y2="11" />
                        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                    </svg>LinkedIn
                    </a>
                </div>
            </article>
            <article className="myimage">
                <div className="image-container">
                    <Image alt="Santillan Nahuel Picture" src="/images/penguin.png" layout="fill" object-fit="cover"/>
                </div>
            </article>
        </section>
        <section className="contact-ways">

        </section>


        <style jsx>{`
            @keyframes typing {
                from {width:0%} to {width:100%}
            }

            @keyframes blink-caret {
                from, to { border-color: transparent } 50% { border-color: black; }
            }

            .presentation {
                height:95vh;
                width:100vw;
                border-radius:0 0 25% 25%;
                background:#fff;
                display:flex;
                align-items:center;
                justify-content:space-around;
            }

            h1 {
                font-size:4rem;
            }

            span {
                font-size:1.8rem;
                overflow:hidden;
                border-right:.15rem solid black;
                white-space:nowrap;
                letter-spacing:.15rem;
                animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
            }

            .titular {
                text-align:center;
            }

            .resoom {
                display:flex;
                justify-content:space-evenly;
                align-items:center;
                margin:2.5em 0;
            }

            .resoom .link {
                padding:.5rem 1rem;
                border:1px solid black;
                border-radius:1rem;
                display:flex;
                align-items:center;
                font-weight:500;
                transition:all .3s ease;
            }

            .resoom .link:hover {
                background:black;
                color:white;
                border-color:white;
            }

            .resoom .link:hover > svg {
                stroke:#fff;
            }

            .resoom svg {
                transition:all .3s ease;
                margin-right:.5rem;
            }

            hr {
                width:50%;
            }

            .myimage {
                width:70vh;
                height:70vh;
                background: linear-gradient(to bottom right, #642b73, #c6426e);
                opacity:.8;
                border-radius: 65% 35% 59% 41% / 40% 67% 33% 60%;
                border:1px dotted #000;
                display:flex;
                justify-content:center;
                align-items:center;
            }

            .image-container {
                height:90%;
                width:90%;
                position:relative;
            }

            .contact-ways {
                height:90vh;
                width:100vw;
            }

            @media screen and (max-width:1200px) {
               .presentation {
                    height:120vh;
                    padding:0;
                    flex-direction:column;
                    border-radius: 0 0 4rem 4rem;
                    justify-content:space-evenly;
                }

                .myimage {
                    height:45vh;
                    width:45vh;
                }
            }
                
        `}</style>
        </>
    )
}