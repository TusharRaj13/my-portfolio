import React from 'react'
import '../styles/ProjectItem.css'
// import tt from '../static/fc.png'

function ProjectItem(props) {
    // console.log(props)
    return (
        <div className="projectItem" key={props.id}>
            {/* <h1>{props.value.name}</h1> */}
            <div>
                <div className="projectCard">
                    <img src={props.value.img} alt="project demo" />
                </div>
                <div className="projectInfo">
                    <div className="projectText">
                        <h3 className="boldText">{props.value.name}</h3>
                        <p className="highlightText downText">{props.value.tech}</p>
                    </div>
                    <div className="projectButton">
                        <br/>
                        <a target="_blank" rel="noreferrer" href={props.value.url} className="btn">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
