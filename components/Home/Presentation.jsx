export default function Presentation() {
    return (   
        <>
        <section className="presentation">
            <article className="titular">
                <h1>Nahuel Santillan</h1>
                <hr />
                <span>Web Developer</span>
                <hr />
            </article>
            <article className="myimage">

            </article>
        </section>
        <section className="descriptions">
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

            hr {
                width:50%;
            }

            .myimage {
                width:35rem;
                height:35rem;
                background:purple;
                opacity:.8;
                border-radius: 65% 35% 59% 41% / 40% 67% 33% 60% ;
                display:flex;
                justify-content:center;
                align-items:center;
            }

            .descriptions {
                height:90vh;
                width:100vw;
            }

            
                
        `}</style>
        </>
    )
}