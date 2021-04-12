// import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import styled from "styled-components"
// const query = graphql`
//   {
//     allFile {
//       nodes {
//         name
//         childImageSharp {
//           gatsbyImageData(
//             layout: FIXED
//             placeholder: BLURRED

//             width: 400
//             height: 200
//           )
//         }
//       }
//     }
//   }
// `

// const Gallery = () => {
//   const data = useStaticQuery(query)
//   const nodes = data.allFile.nodes
//   return (
//     <Wrapper>
//       {nodes.map((image, index) => {
//         const pathToImage = getImage(image)
//         return (
//           <article key={index}>
//             <GatsbyImage image={pathToImage} alt="sth" />
//             <p>{image.name}</p>
//           </article>
//         )
//       })}
//     </Wrapper>
//   )
// }

// const Wrapper = styled.section`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
// `

// export default Gallery
