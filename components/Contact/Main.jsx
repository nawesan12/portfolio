import Image from 'next/image';

export default function Main() {
    return(
        <>
        <section className="titular">
            <h1>Contact</h1>
        </section>
        <section className="contact-ways">
            <div className="main">
                <h2 className="talk">{`Let's talk!`}</h2>
                <div className="list">
                    <li className="item"><a href="#" className="link">Send me an email</a></li>
                    <li className="item"><a href="#" className="link">Github</a></li>
                    <li className="item"><a href="#" className="link">LinkedIn</a></li>
                </div>
            </div>
            <div className="buzon-container">
                <Image src="/images/buzon.png" alt="Buzon" layout="fill" objectFit="cover" />
            </div>
        </section>
        <style jsx>{`
            h1 {
                font-size:4rem;
                line-height:0;
            }

            .talk {
                font-size:3rem;
                padding:0 1rem;
            }

            .titular {
                height:40vh;
                width:100vw;
                display:flex;
                padding:5vh;
                background:#fff;
                justify-content:center;
                align-items:center;
                flex-direction:column;
                border-radius:0 0 20% 20%;
            }    

            .contact-ways {
                padding:10vh 0;
                height: 40vh;
                width:50rem;
                background:#fff;
                display:flex;
                justify-content:space-evenly;
                align-items:center;
                margin:10vh auto 0;
                border-radius:4rem 4rem 0 0;
                border:2px solid black;
            }

            .list {
                margin:0;
                display:flex;
            }

            li {
                list-style-type:none;
                margin:0 .5rem;
                font-weight:500;
            }

            a {
                color:black;
                padding:.5rem .8rem;
                border:2px solid black;
                border-radius:.4rem;
                transition:all .3s ease;
            }

            a:hover {
                padding:.5rem 1.5rem;
                color:white;
                background:black;
            }

            .buzon-container {
                width:12rem;
                height:12rem;
                position:relative;
            }

            @media screen and (max-width:1200px) {
                .contact-ways {
                    height:auto;
                    max-width:100vw;
                    flex-direction:column;
                    justify-content:space-between;
                    align-items:center;
                    padding:0;
                    margin:.8vh 0;
                    border-color:transparent;
                }

                .buzon-container {
                    margin:6vh 0 0;
                }
            }
        `}</style>
        </>
    )
}