/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Footer from "./Reusable/Footer"
import NavBar from "./Reusable/NavBar"

import "./bootstrap.min.css"
import "./layout.css"

const Layout=({children})=>(
  <>
  <NavBar/>
  {children}
  <Footer/>
  </>
)



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
