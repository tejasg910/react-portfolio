import React, { useState } from 'react'
import vg from "../assets/vg.png"
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../firebase"

const Contact = () => {
    const [disableBtn, setDisableBtn] = useState(
        false
    )
    const [input, setInput] = useState({ name: "", email: "", message: "" })
    const animations = {
        form: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            }
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
            transition: {
                delay: 0.5
            }
        },
    }
    const submitHandler = async (e) => {
        e.preventDefault()
        setDisableBtn(true)
        try {
            await addDoc(collection(db, "contacts"), { name: input.name, email: input.email, message: input.message })
            toast.success(`Message sent to ${input.email}`)
            setInput({ name: "", email: "", message: "" })
            setDisableBtn(false)

        } catch (error) {
            toast.error("Error")
            console.log(error)
            setDisableBtn(false)

        }

    }



    const changeHandler = (e) => {


        setInput((prev) => {

            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    return (
        <div id='contact'>
            <section>
                <motion.form {...animations.form} onSubmit={submitHandler} >
                    <h2>Contact me</h2>
                    <input type="text" onChange={changeHandler} placeholder='Your Name' name='name' required value={input.name} />
                    <input type="email" name='email' onChange={changeHandler} value={input.email} placeholder='Your Email' required />
                    <input onChange={changeHandler} name="message" type="text" value={input.message} placeholder='Your Message' required />
                    <motion.button disabled={disableBtn} className={disableBtn ? "disableBtn" : ""} {...animations.button} type='submit'>Submit</motion.button>

                </motion.form>
            </section>

            <aside>
                <img src={vg} alt="" />
            </aside>

        </div>
    )
}

export default Contact