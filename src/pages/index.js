import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
const Home = () => {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/main.jpg"
            alt="food"
            className="hero-img"
            placeholder="blurred"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Just Recipes</h1>
              <h4>no bs, just recipes</h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  )
}

export default Home
