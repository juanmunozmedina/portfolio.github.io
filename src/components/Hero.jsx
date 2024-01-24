import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/profile.jpg' className="profile-img" width={400} height={600} alt="Juan encabezado personal" />
            <div className="hero-text">
                <h1>Hi, my name is Juan! 👋</h1>
                <p>I'm a front-end developer with over 5 years of experience in the technology sector. Currently, I live in Alicante, although I work remotely with a company located in Donostia.</p>
                <p>I specialize in web development with Drupal, and here I will showcase some of my projects. In my free time, I'm learning React and Next.js to continue improving day by day.</p>
                <div className="social-icons">
                    <a
                        href="https://github.com/juanmunozmedina"
                        aria-label="GitHub"
                        target="_blank"
                        rel="external"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://es.linkedin.com/in/juan-munoz-medina"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="external"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;