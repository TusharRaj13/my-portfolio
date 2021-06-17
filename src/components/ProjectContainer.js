import React, { useEffect } from 'react'
import ProjectItem from './ProjectItem';
import '../styles/ProjectContainer.css'
import fc from '../static/fc.jpg';
import vc from '../static/vc.jpg';
import indi from '../static/indi.jpg';
import wc from '../static/wc.jpg';

function ProjectContainer() {
    useEffect(()=>{
        fetch('https://cricketapi.platform.iplt20.com/tournaments/22399/standings')
        .then(res => res.json()).then(json => {
            console.log(json);
        })
    }, [])
    const projectlist = [
        {
            id:1,
            name:"Companion for Fortnite",
            img:fc,
            tech:"UWP C#",
            url:"https://www.microsoft.com/store/apps/9NR9PX55K522"
        },
        {
            id:2,
            name:"Companion for Valorant",
            img:vc,
            tech:"UWP C#",
            url:"https://www.microsoft.com/store/apps/9N0XGX7KBFNL"
        },
        {
            id:3,
            name:"IndiClassroom",
            img:indi,
            tech:"MEAN Stack",
            url:"https://github.com/TusharRaj13/IndiClassroom"
        },
        {
            id:4,
            name:"Unofficial Windows Central",
            img:wc,
            tech:"UWP C#",
            url:"https://www.microsoft.com/store/apps/9MV981LVC2RH"
        },
    ]
    return (
        <div >
            <div className="projectContainer">
                {projectlist.map((project)=>(
                    <ProjectItem key={project.id} value={project}/>
                ))}
            </div>
        </div>
    )
}

export default ProjectContainer
