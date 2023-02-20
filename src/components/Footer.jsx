import React from 'react'
import { AiOutlineArrowUp, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer id="footer">
            <div>
                <img src="https://avatars.githubusercontent.com/u/95345884?v=4" alt="Founder" />
                <h2>Tejas Giri</h2>
                <p>Motionvation is temporary but disipline lasts forever </p>
            </div>
            <aside>
                <h2>Social Media</h2>
                <article>
                    <a href="https://www.instagram.com/tejas_giri24/">
                        <AiOutlineInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/tejas-giri/">
                        <AiOutlineLinkedin />
                    </a>

                    <a href="https://twitter.com/alfacoder1">
                        <AiOutlineTwitter />
                    </a>
                    <a href="http://github.com/tejasg910">
                        <AiOutlineGithub />
                    </a>
                </article>
            </aside>
            <a href="#home"><AiOutlineArrowUp /></a>
        </footer>
    )
}

export default Footer