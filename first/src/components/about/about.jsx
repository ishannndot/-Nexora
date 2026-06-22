import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className="about">

      <div className="about-left">
        <img src="https://plus.unsplash.com/premium_photo-1677094310899-02303289cadf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm9ib3R8ZW58MHx8MHx8fDA%3D" alt="about-img" />
      </div>

      <div className="about-right">
        <h1>About Nexora</h1>

        <p>
          Nexora is a forward-thinking technology company dedicated to
          building innovative digital solutions for modern businesses.
          We specialize in web development, AI-powered applications,
          cloud technologies, and scalable software systems that help
          organizations grow and succeed in a rapidly evolving world.
        </p>

        <p>
          Our mission is to transform ideas into impactful products
          through creativity, technology, and exceptional user
          experiences. With a focus on quality and innovation,
          we deliver solutions that drive real business value.
        </p>
      </div>

    </div>
  )
}

export default About