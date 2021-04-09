import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby unicorn plaid shaman 90's.</h2>
            <p>
              Lo-fi williamsburg kickstarter meditation. Fam leggings freegan
              everyday carry gochujang shabby chic PBR&B. Schlitz ethical
              pinterest four dollar toast cold-pressed.
            </p>
            <p>
              Tacos cold-pressed taiyaki shabby chic iPhone, fingerstache health
              goth mustache vexillologist cardigan mixtape craft beer.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/about.jpg"
            alt="about"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
