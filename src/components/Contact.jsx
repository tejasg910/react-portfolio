import React, { useState } from 'react'
import vg from "../assets/vg.png"
const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const submitHandler = () => {
        console.log(name, email, message)
    }
    return (
        <div id='contact'>
            <section>
                <form onSubmit={submitHandler} >
                    <h2>Contact me</h2>
                    <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder='Your Name' required value={name} />
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder='Your Email' required />
                    <input onChange={(e) => { setMessage(e.target.value) }} type="text" value={message} placeholder='Your Message' required />
                    <button type='submit'>Submit</button>

                </form>
            </section>

            <aside>
                <img src={vg} alt="" />
            </aside>

        </div>
    )
}

export default Contact