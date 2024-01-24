// components/Navbar.jsx

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Juan Muñoz Medina
        </Link>
      </div>
      <a target="_blank" href="https://drive.google.com/file/d/19eXlaKOL0EcrxSf6MIBiAlCHtqwvVbl4/view?usp=drive_link" className="cta-btn">CV</a>
    </div>
  )
}

export default Navbar;