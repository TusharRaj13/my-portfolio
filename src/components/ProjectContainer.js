import React from 'react'
import ProjectItem from './ProjectItem';
import '../styles/ProjectContainer.css'

function ProjectContainer() {
    const projectlist = [
        {
            id:1,
            name:"Companion for Fortnite",
            img:"../static/fc.png",
            tech:"UWP C#",
            url:""
        },
        {
            id:2,
            name:"Companion for Valorant",
            img:"../static/vc.png",
            tech:"UWP C#",
            url:""
        },
        {
            id:3,
            name:"IndiClassroom",
            img:"../static/indi.png",
            tech:"MEAN Stack",
            url:""
        },
    ]
    return (
        <div >
            <div className="projectContainer">
                {projectlist.map((project)=>(
                    <ProjectItem value={project}/>
                ))}
            </div>
        </div>
    )
}

export default ProjectContainer
