import React from "react";
import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            name: "Reach the Mother",
            description: "A 3D platformer game where the player must navigate a crumbling lab to reach safety.  ",
            tech: "Unity, C#",
            link: "https://github.com/gtamb/plant-horror",
            itchio: "https://gtamb.itch.io/reach-the-mother"
        },
        {
            name: "Personal Portfolio Website",
            description: "A responsive website to showcase my skills",
            tech: "React, CSS, React router",
            link: "https://github.com/gtamb/personal-website-ws"
        },
        {
            name: "Witch Trials in Holsworthy: Visual Novel",
            description: "A visual novel choices matter game about the witch trials.",
            tech: "Ren'Py, Python",
            link: "https://github.com/gtamb/WitchTrials",
            itchio: "https://gtamb.itch.io/witch-trials-in-holsworthy"
        },
        {
            name: "OrcaJam 2024 Game: Big Balls in Space", 
            description: "A 3D space game developed in a team for Orca Jam 2024", 
            tech: "Unity, C#", 
            link: "https://github.com/AAllsopp/Orca2024", 
            itchio: "https://arianaraine.itch.io/big-balls-in-outer-space"         
        },
        {
            name: "Mad Mountain Mayhem",
            description: "A 3D platformer Alice in Wonderland themed game developed in a team for a Microdential program.",
            tech: "Unity, C#, Blender",
            link: "https://github.com/ssianen/MadMountainMayhem", 
            itchio: "https://thedoors.itch.io/mad-mountain-mayhem"
        },
        {
            name: "TCP Analysis Tool", 
            description: "A program that analyzes TCP packets based on a give cap file.", 
            tech: "Python", 
            link:"https://github.com/gtamb/TCP-Analysis"
        }, 
        {
            name: "Web Server Collection Tool",
            description: "A program that collects data about web servers.", 
            tech: "Python", 
            link: "https://github.com/gtamb/WebServerCollection"

        }, 
        {
            
        }

    ];
    return (
    <div className="projects-container">
        <div className="projects-content">
            {projects.map((project, index)=> (
                <div key= {index} className="project-card">
                    <h2><strong>{project.name}</strong></h2>
                    <p>{project.description}</p>
                    <p className="tech"><em>{project.tech}</em></p>
                    <div className={`links ${project.itchio ? "two" : "single"}`}>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-link"
                            >
                                View on Github
                            </a>
                        )}
                        {project.itchio && (
                            <a
                                href={project.itchio}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="itchio-link"
                            >
                                Play on itch.io
                            </a>
                        )}
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
    );
};

export default Projects;