import ProjectsData from './ProjectsData.json'
import Project from './Project'

export default function Main() {
    return(
        <>
        <section className="titular">
            <h1>Projects</h1>
        </section>
        <section className="projects-container">
            {
                ProjectsData.map((e, index) => (
                    <Project 
                        key={index}
                        title={e.title}
                        description={e.description}
                        thumbnail={e.thumbnail}
                        languages={e.languages}
                        deploy={e.deploy}
                        repository={e.repository}
                    />
                ))
            }
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

            .projects-container {
                display:flex;
                align-items:center;
                justify-content:center;
                width:70vw;
                margin:auto;
                flex-wrap: wrap;
            }

            @media screen and (max-width:1200px) {
                .titular {
                    border-radius:0 0 4rem 4rem;
                }
            }
        `}</style>
        </>
    )
}