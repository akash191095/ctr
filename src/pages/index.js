import React from "react"
import { CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Calculator from "../components/Calculator"
import useTheme from "../utils/useTheme"

const IndexPage = () => {
  return (
    <ThemeProvider theme={useTheme()}>
      <CssBaseline />
      <Layout>
        <SEO title="Calculator" />
        <Calculator />
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
