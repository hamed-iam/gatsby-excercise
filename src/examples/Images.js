import React from "react"
import styled from "styled-components"
import big from "../assets/big.jpg"
const Images = () => {
  return (
    <Wrapper>
      <img src={big} alt="sth" />
      <h2>Gatsby Immage</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    width: 200px;
  }
`

export default Images
