import React from "react"
import { CssBaseline } from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/Home"
const IndexPage = () => {
  return (
      <Layout>
      <CssBaseline />
        <SEO title="Home" />
        <Home />
      </Layout>
  )
}

export default IndexPage
