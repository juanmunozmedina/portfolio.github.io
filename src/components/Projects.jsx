import { projectData } from './data.jsx';

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <a target="_blank" rel="external" href={project.WebLink}>
                            <div className="project-header">
                                <i className="fa-regular fa-folder-closed folder-icon"></i>
                                <div className="small-icons">
                                    <i className="fa-solid fa-desktop"></i>
                                </div>
                            </div>
                            <h3>{project.title}</h3>
                        </a>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects;