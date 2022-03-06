import Image from "next/image"
import skills from './skills.json'
import useTranslation from 'next-translate/useTranslation'

export default function Main() {

    const { t } = useTranslation()

    return (
        <>
            <section className="presentation">
                <h1>{t('about:title')}</h1>
                <div className="image-and-name">
                    <div className="image-container">
                        <Image title="Nahuel Santillan" alt="Nahuel Santillan" src="/images/penguin.png" layout="fill" objectFit="cover" priority/>
                    </div>
                    <div className="info">
                        <h2>{`${t('about:iam')} Nahuel Santillan`}</h2>
                        <p className="description">{t('about:description')}</p>
                    </div>
                </div>
                <section className="code-skills">
                    <h2>{t('about:skills')}</h2>
                    <div className="list">
                        {
                            skills.map((e, index) => (
                                <li key={index}>
                                    <div className="language-container">
                                        <Image src={e.icon} alt="" layout="fill" objectFit="cover" title={e.language}/>
                                    </div>
                                    <p className="language">{e.language}</p>
                                </li>
                            ))
                        }
                    </div>
                </section>
            </section>
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity:0; }
                    to { opacity:1; }
                }

                h1 {
                    font-size:3rem;
                }

                .presentation {
                    padding:12vh 0;
                    display:flex;
                    flex-direction:column;
                    margin:auto;
                    align-items:center;
                    width:70vw;
                    background:#fff;
                }

                .image-and-name {
                    width:100%;
                    display:flex;
                    align-items:center;
                    animation: .3s fadeIn linear;
                }

                .info {
                    width:30rem;
                    font-size:1.2rem;
                    opacity:.8;
                }

                .image-container {
                    height:20rem;
                    width:20rem;
                    position:relative;
                    border-radius:37% 63% 31% 69% / 60% 30% 70% 40%;
                    background:linear-gradient(to top right, #ff6e7f, #bfe9ff);
                    margin-right:3.5rem;
                }    

                .list {
                    display:flex;
                    width:60vw;
                    flex-wrap:wrap;
                    justify-content:center;                   
                }

                .list li {
                    list-style-type:none;
                    font-size:1.2rem;
                    margin: 0 2.5rem 1rem;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    animation: .3s fadeIn linear;
                }

                .code-skills {
                    text-align:center;
                    margin:10vh 0 0;
                }

                .code-skills h2 {
                    font-size:2rem;
                }

                .language-container {
                    height:5rem;
                    width:5rem;
                    position:relative;
                }

                @media screen and (max-width:1200px) {
                    .presentation {
                        width:100vw;
                        text-align:center;
                    }

                    .code-skills {
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                    }

                    .image-and-name {
                        flex-direction:column;
                        align-items:center;
                    }

                    .image-container {
                        display:block;
                        margin:auto;
                    }

                    .description {
                        width:90vw;
                        margin:0 auto -5vh;
                        font-size:1.5rem;
                    }

                    h2 {
                        transform:scale(1.2)  
                    }

                    .list {
                        display:flex;
                        justify-content:center;
                        width:100vw;
                    }

                    .list li {
                        margin:.5rem 1.5rem;
                    }

                    .language-container {
                        height:8rem;
                        width:8rem;
                    }
                }
            `}</style>
        </>
    )
}