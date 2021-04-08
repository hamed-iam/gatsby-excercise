import React from "react"
const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; <span>JustRecipes</span> {new Date().getFullYear()} Built with{" "}
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
          Gatsby
        </a>
      </p>
    </footer>
  )
}

export default Footer
