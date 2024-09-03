import { useEffect, useState } from "react"

export function SectionInfo(){
    const [projectInfo, SetProjectInfo] = useState([])
    useEffect(() => {
        fetchData().then(data => {
            SetProjectInfo(data)
        })
    },[])
    async function fetchData (){
        const result = await fetch('http://172.31.36.30:4002/home/projects')
        const data = await result.json()
        return data
    }
    function Article ({ info }) {
        return(
            <section className="article-section">
                <aside className="genearl-info">
                    <header className="Topic">{info.Tema}</header>
                    <span className="Autor">{info.Integrantes}</span>
                    <span className="Tutor"><a href={`mailto:${info.email_tutor}`}>{info.Tutor}</a></span>
                </aside>

                <article>
                    <span>
                        <h4>Tipo:</h4>
                        <p>{info.Tipo}</p>
                    </span>
                    <span>
                        <h4>Objetivo General:</h4>
                        <p>{info.objetivo_general}</p>
                    </span>
                    <span>
                        <h4>Resumen</h4>
                        <p>{info.resumen}</p>
                    </span>
                    <span>
                        <h4>Mas información</h4>
                        <p><a href={info.URL} target="_blank">{info.URL}</a></p>
                    </span>
                </article>
            </section>
        )
    }
    return(
        <>
            <main>
                <h3>Proyectos implemetados en el laboratorio</h3>
                {
                   projectInfo.map(project => {
                    return(
                        <Article 
                        key={project.Id_proyecto}
                        info={project}
                        />
                    )
                   }) 
                }
            </main>
        </>
    )
}