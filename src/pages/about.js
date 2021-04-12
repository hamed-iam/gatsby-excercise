import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import RecipesList from "../components/RecipesList"
import { Link, graphql } from "gatsby"
const About = ({
  data: {
    ACR: { nodes },
  },
}) => {
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
        <section className="featured-recipes">
          <h5>Check These Out !!</h5>
          <RecipesList nodes={nodes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    ACR: allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        title
        prepTime
        cookTime
        id
        images {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default About
