import React from 'react'
import '../styles/ProjectItem.css'

function ProjectItem(props) {
    // console.log(props)
    return (        
        <div className="projectItem">
            <h1>{props.value.name}</h1>
        </div>
    )
}

export default ProjectItem
