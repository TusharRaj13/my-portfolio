import React from 'react'
import ProjectItem from './ProjectItem';
import '../styles/ProjectContainer.css'
import fc from '../static/fc.jpg';
import vc from '../static/vc.jpg';
import indi from '../static/indi.jpg';
import wc from '../static/wc.jpg';
import word from '../static/wordcamp.jpeg';

function ProjectContainer() {
    
    const projectlist = [
        {
            name:"Companion for Fortnite",
            img:fc,
            tech:"UWP C#",
            url:"https://www.microsoft.com/store/apps/9NR9PX55K522"
        },
        {
            name:"Companion for Valorant",
            img:vc,
            tech:"UWP C#",
            url:"https://www.microsoft.com/store/apps/9N0XGX7KBFNL"
        },
        {
            name:"IndiClassroom",
            img:indi,
            tech:"MEAN Stack",
            url:"https://github.com/TusharRaj13/IndiClassroom"
        },
        {
            name:"Unofficial Windows Central",
            img:wc,
            tech:"UWP C#",
            url:"https://www.microsoft.com/store/apps/9MV981LVC2RH"
        },
        {
            name:"Wordcamp Calendar",
            img:word,
            tech:"ReactJS & Redux",
            url:"https://tusharraj13.github.io/Wordcamp-React-App/"
        },
    ]
    return (
        <div >
            <div className="projectContainer">
                {projectlist.map((project, index)=>(
                    <ProjectItem key={index} value={project}/>
                ))}
            </div>
        </div>
    )
}

export default ProjectContainer
