import { useState } from 'react';

import PortfolioNav from './PortfolioNav';
import ProjectSingle from './ProjectSingle';
import Projects from '../data/Projects';


const Portfolio = () => {

    const [selectedProjectID, setSelectedProject] = useState(Projects[0].id)

    const selectedProject = Projects.filter(project => selectedProjectID === project.id).at(0);

    const portfolioNavNodes = Projects.filter(project => project.active === true)
    .map((project, index) => {
        return (
            <PortfolioNav 
                key={index} 
                project={project} 
                selected={selectedProjectID === project.id}
                setSelectedProject={setSelectedProject}/>
        )
    })


    
    return (
        <main className="container">
            <nav className="container">
                <ul>
                    {portfolioNavNodes}
                </ul>
            </nav>
            <ProjectSingle project={selectedProject} />
        </main>
    )
};

export default Portfolio