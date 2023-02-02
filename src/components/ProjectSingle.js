import TechIconList from './TechIconList';

const ProjectSingle = ({ project }) => {

    const paragraphNodes = project.description.map((paragraph, index) => {
        return (
            <p key={index}>
                {paragraph}
            </p>
        )
    })

    return (
        <>
            <h3>
                {project.name}
                <span> - </span>
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
            </h3>
            <TechIconList tech={project.tech} />
            <div align="center" className="project-screenshot">
                <img src={project.image} width="100%"/>
            </div>
            {paragraphNodes}
        </>
    )
}

export default ProjectSingle;