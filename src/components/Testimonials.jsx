import React from 'react'

const Testimonials = () => {
    return (
        <div id='testimonials'>
            <h2>Testimonials</h2>
            <section>
                <TestimonialCard name={"Vishal"} feedback={"you are good in web development"} />
                <TestimonialCard name={"Satish"} feedback={"I am thankfull that I got developer like you"} />
                <TestimonialCard name={"Pradeep"} feedback={"The best freelancer ever"} />

            </section>
        </div>
    )
}

const TestimonialCard = ({ name, feedback }) => (
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonials