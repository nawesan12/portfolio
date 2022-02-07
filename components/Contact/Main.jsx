export default function Main() {
    return(
        <>
        <section className="titular">
            <h1>Contact</h1>
        </section>
        <style jsx>{`
            h1 {
                font-size:4rem;
            }

            .titular {
                height:40vh;
                width:100vw;
                display:flex;
                padding:5vh;
                background:#fff;
                justify-content:center;
                border-radius:0 0 20% 20%;
            }    
        `}</style>
        </>
    )
}