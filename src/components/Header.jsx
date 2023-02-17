import React from 'react'

const Header = () => {
    return (
        <nav>
            <NavContent />
        </nav>
    )
}

const NavContent = () => {
    return (<>
        <h2>Tejas Giri</h2>
        <div>
            <a href="#home">Home</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#services">Services</a>
            <a href="#testimonials">Testimonials</a>
        </div>
        <a href="mailto:tejasgiri910@gmail.com">
            <button>Email</button>
        </a>
    </>)
}

export default Header