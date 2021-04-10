import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
        author
        person {
          name
          age
        }
        simpleData
        complexData {
          name
          age
        }
      }
    }
  }
`

const FetchData = () => {
  const data = useStaticQuery(getData)
  return (
    <div>
      <h2>{data.site.info.person.name}</h2>
      <div>
        {data.site.info.complexData.map((data, index) => {
          return (
            <div key={index}>
              <h4>{data.name}</h4>
              <p>{data.age}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default FetchData
