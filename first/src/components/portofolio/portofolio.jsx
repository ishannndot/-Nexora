import React from 'react'
import "./portfolio.css"

const Portfolio = () => {
  return (
    <>
      <div className="portfolio">

        <div className="portfolio-heading">
          <h1>Our Portfolio</h1>
          <p>
            Explore some of our most impactful projects, crafted with
            innovation, creativity, and cutting-edge technology.
          </p>
        </div>

        <div className="portfolio-grid">

          <div className="portfolio-card">
            <div className="portfolio-content">
              <h1>JeevanSetu</h1>
              <h2>MERN + AI Emergency Platform</h2>
              <p>
                A real-time emergency assistance platform that connects
                users with nearby verified helpers using AI-powered
                matching and geolocation services.
              </p>
            </div>
            <img src="https://media.istockphoto.com/id/2221262933/photo/radio-controlled-car-built-at-home-kept-on-a-natural-light-and-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=-Lo5QinxRmW8HZjbueQwg14tVm52SysDJh103XyIv_c=" alt="JeevanSetu" />
          </div>

          <div className="portfolio-card">
            <div className="portfolio-content">
              <h1>AI Resume Analyzer</h1>
              <h2>React • Node • AI</h2>
              <p>
                An intelligent resume screening system that evaluates
                resumes, provides insights, and suggests improvements
                using AI-driven analysis.
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1698047681432-006d2449c631?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdW1lfGVufDB8fDB8fHww" alt="AI Resume Analyzer" />
          </div>

          <div className="portfolio-card">
            <div className="portfolio-content">
              <h1>Movie Recommendation System</h1>
              <h2>Python • Machine Learning</h2>
              <p>
                A recommendation engine that suggests personalized
                movies based on user preferences using machine learning
                and similarity algorithms.
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW92aWV8ZW58MHx8MHx8fDA%3D" alt="Movie Recommendation System" />
          </div>

          <div className="portfolio-card">
            <div className="portfolio-content">
              <h1>Business Analytics Dashboard</h1>
              <h2>React • Data Visualization</h2>
              <p>
                A modern analytics dashboard providing real-time
                insights, performance tracking, and interactive data
                visualization for businesses.
              </p>
            </div>
            <img src="https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBhbmFseXRpY3N8ZW58MHx8MHx8fDA%3D" alt="Business Analytics Dashboard" />
          </div>

        </div>

      </div>
    </>
  )
}

export default Portfolio