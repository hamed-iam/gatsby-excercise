import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"
const Tags = ({
  data: {
    ACR: { nodes },
  },
}) => {
  const newTags = setupTags(nodes)
  console.log(newTags)
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            return (
              <Link to={`/${text}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>({value})</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    ACR: allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
