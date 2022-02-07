import Image from 'next/image'

export default function Project(props) {
    return(
        <>
        <article className="project">
            <div className="thumbnail">
                <Image src={props.thumbnail} alt={props.title} layout="fill" objectFit="cover" />
            </div>
            <h3>{props.title}</h3>
            <div className="info">
                <p>{props.description}</p>
                <div className='list'>
                    <li><a href={`https://github.com/nawesan12/${props.repository}`} target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg></a></li>
                    <li><a href={props.deploy} target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
                            <line x1="10" y1="14" x2="20" y2="4" />
                            <polyline points="15 4 20 4 20 9" />
                        </svg></a></li>
                </div>
            </div>
        </article>

        <style jsx>{`
                .project {
                    width:20rem;
                    height:15rem;
                    background:white;
                    margin:2rem;
                    border-radius:.3rem;
                    display:flex;
                    flex-direction:column;

                }

                .thumbnail {
                    width:100%;
                    height:50%;
                    position:relative;
                }

                h3 {
                    text-transform:capitalize;
                    margin:.5rem 1rem;
                }

                .info {
                    display:flex;
                    justify-content:space-around;
                }

                p {
                    padding:.5rem;
                    width:70%;
                    opacity:.8;
                }

                .list {
                    padding:.5rem;
                }

                li {
                    list-style-type: none;
                }

                .icon-tabler-brand-github {
                    border:2px solid black;
                    border-radius:.3rem;
                }

                @media screen and (max-width:1200px) {
                    .project {
                        min-width:90vw;
                        height:40vh;
                    }

                    svg {
                        height:40px;
                        width:40px;
                    }

                    p {
                        font-size:1.2rem;
                    }

                    h3 {
                        font-size:1.5rem;
                    }
                }
        `}</style>
        </>
    )
}