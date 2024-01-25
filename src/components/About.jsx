import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>As a developer, I've always been passionate about crafting elegant and effective solutions to complex problems. I have a solid foundation in software development, with a focus on web technologies such as HTML, CSS and JavaScript. I enjoy working on the front-end of applications and am always seeking ways to optimize performance, enhance user experience and ensure the highest level of code quality.</p>
                    <p>Throughout my career, I have worked on a wide range of projects, from simple static websites to complex enterprise-level applications. I have experience working with a variety of development tools and frameworks, including Drupal, Symfony, React and Next.js. I am always eager to learn and explore new technologies. I am constantly on the lookout for opportunities to enhance my skills and knowledge.</p>
                </div>
                <div className="about-img">
                    <Image src='/images/about.jpg' className="profile-img" width={1080} height={810} alt="Juan Muñoz Medina" />
                </div>
            </div>
        </div>

    )
}

export default About;