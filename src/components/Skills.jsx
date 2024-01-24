const Skills = () => {
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <div className="grid-skills">
                <div className="skill-card html">
                    <i className="fa-brands fa-html5 html-icon"></i>
                    <p>HTML</p>
                </div>
                <div className="skill-card sass">
                    <i className="fa-brands fa-sass sass-icon"></i>
                    <p>SASS</p>
                </div>
                <div className="skill-card js">
                    <i className="fa-brands fa-js-square js-icon"></i>
                    <p>JavaScript</p>
                </div>
                <div className="skill-card react">
                    <i className="fa-brands fa-react react-icon"></i>
                    <p>React</p>
                </div>
                <div className="skill-card drupal">
                    <i className="fa-brands fa-drupal drupal-icon"></i>
                    <p>Drupal</p>
                </div>
                <div className="skill-card symfony">
                    <i className="fa-brands fa-symfony symfony-icon"></i>
                    <p>Symfony</p>
                </div>
                <div className="skill-card vscode">
                    <i className="fa-solid fa-code code-icon"></i>
                    <p>Visual Studio Code</p>
                </div>
                <div className="skill-card photoshop">
                    <i className="fa-solid fa-image image-icon"></i>
                    <p>Adobe Photoshop</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;
