import React, { useRef } from 'react'
import { animate, motion } from "framer-motion"
import Typewriter from 'typewriter-effect'
import { BsArrowUpRight, BsChevronBarDown } from "react-icons/bs"
import me from "../assets/logo.png"
const Home = () => {

    const clientCount = useRef(null)
    const clientProjectsCount = useRef(null)


    const animationClientCount = () => {
        animate(0, 100, {
            duration: 1,
            onUpdate: (v) => { clientCount.current.textContent = v.toFixed() }

        })
    }

    const animaitonClientProject = () => {
        animate(0, 500, {
            duration: 1,
            onUpdate: (v) => { clientProjectsCount.current.textContent = v.toFixed() }

        })
    }

    const animations = {
        h1: {
            initial: { x: "-100%", opacity: 0 },
            whileInView: { x: 0, opacity: 1 }
        },
        button: {
            initial: { y: "-100%", opacity: 0 },
            whileInView: { y: 0, opacity: 1 }
        }
    }
    return (
        <div id="home">
            <section>
                <div>
                    <motion.h1 {...animations.h1} >Hi, I am <br /> Tejas Giri</motion.h1>

                    <Typewriter options={{ strings: ["A developer", "A designer", "A creator"], autoStart: true, loop: true, wrapperClassName: "typewriterpara" }} />

                    <div>
                        <a href="mailto:tejasgiri910@gmail.com">
                            Hire Me
                        </a>
                        <a href="#work">
                            projects <BsArrowUpRight />
                        </a>
                    </div>
                    <article>
                        <p>+ <motion.span whileInView={animationClientCount} ref={clientCount}>100</motion.span></p>
                        <span>Clients worldwide</span>
                    </article>

                    <aside>
                        <article>
                            <p>+ <motion.span ref={clientProjectsCount} whileInView={animaitonClientProject}>500</motion.span></p>
                            <span>Projects made</span>
                        </article>
                        <article data-special>
                            <p>Contact</p>
                            <span>tejasgiri910@gmail.com</span>
                        </article>
                    </aside>
                </div>
            </section >

            <section>
                <img src={me} alt="Tejas Giri" />
            </section>
            <BsChevronBarDown />

        </div >
    )
}

export default Home