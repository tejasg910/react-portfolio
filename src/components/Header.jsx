import React from 'react'
import { AiOutlineMenu } from "react-icons/ai"
const Header = ({ setMenuOpen, menuOpen }) => {
    return (
        <>
            <nav>
                <NavContent />
            </nav>
            <button className='navBtn' onClick={() => { setMenuOpen(!menuOpen) }}><AiOutlineMenu /></button>
        </>
    )
}

export const NavContent = () => {
    return (<>
        <h2>Tejas Giri</h2>
        <div>
            <a href="#home">Home</a>
            <a href="#work">Work</a>

            <a href="#services">Services</a>
            <a href="#testimonials">Testimonials</a>
        </div>
        <a href="mailto:tejasgiri910@gmail.com">
            <button>Email</button>
        </a>
    </>)
}
export const HeaderPhone = ({ menuOpen }) => {
    return (
        <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
            <NavContent />
        </div>
    )
}
export default Header