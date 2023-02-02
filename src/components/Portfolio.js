import { isBindExpression } from '@babel/types';
import { useState } from 'react';

import PortfolioNav from './PortfolioNav';

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            name: 'Project 1'
        },
        {
            id: 2,
            name: 'Project 2'
        },
        {
            id: 3,
            name: 'Project 3'
        }
    ]

    const [selectedProject, setSelectedProject] = useState(projects[0].id)



    const portfolioNavNodes = projects.map((project, index) => {
        return (
            <PortfolioNav 
                key={index} 
                project={project} 
                selected={selectedProject === project.id}
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
            <h2>Portfolio Under Construction...</h2>
        </main>
    )
};

export default Portfolio