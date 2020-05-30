// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Typography } from "@material-ui/core"

const Header = ({ siteTitle }) => (
  <header
    // TODO: add header
    style={
      {
        // background: `rebeccapurple`,
        // marginBottom: `1.45rem`,
      }
    }
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Typography variant="h6" component="p">
        V2 Main
      </Typography>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
