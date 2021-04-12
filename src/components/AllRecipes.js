import React from "react"
import TagsList from "./TagsLIst"
import RecipesList from "./RecipesList"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    ACR: allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        title
        prepTime
        cookTime
        id
        content {
          tags
        }
        images {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const {
    ACR: { nodes },
  } = useStaticQuery(query)
  return (
    <section>
      <RecipesList nodes={nodes} />
      <TagsList nodes={nodes} />
    </section>
  )
}

export default AllRecipes
