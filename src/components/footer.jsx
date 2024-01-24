// components/Footer.jsx

const Footer = () => {
    return (
      <>
        <hr/>
        <div className="footer-container">
          <p>
            © {new Date().getFullYear()} Juan Muñoz Medina
          </p>
          <div className="social_icons">
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
      </>
    )
}

export default Footer;