
const PortfolioNav = ({ project, selected, setSelectedProject }) => {

    const handleClick = () => {
        setSelectedProject(project.id)
    }

    return (
        <li>
            <button onClick={handleClick} className={selected ? null : "secondary"}>{project.name}</button>
            <p>{selected}</p>
        </li>
    )
}

export default PortfolioNav