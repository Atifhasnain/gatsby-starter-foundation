/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation"

import "../assets/scss/style.scss"
import Footer from "./footer"
import Theme from "../components/theme"
import Search from "../components/search"

import React from 'react';
import AdSense from 'react-adsense';

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
    siteSearchIndex {
      index
    }
  }
`

const Layout = ({ children, className, props }) => {
  const { site, siteSearchIndex } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

  return (
    <div className="primary-container">
      <Header>
        <Logo title={siteTitle} />
        <div sx={layoutStyle.nav}>
          <div sx={{ display: ["flex", "flex", "flex", "none"] }}>
            <Search searchIndex={siteSearchIndex.index} />
          </div>
          <Navigation />
        </div>
        <div sx={layoutStyle.appearance}>
          <Search searchIndex={siteSearchIndex.index} />
          <Theme />
        </div>
      </Header>
      <main className={"container " + className}>{children}</main>
      <Footer />
    </div>
  )
}

<AdSense.Google
  client='ca-pub-7292810486004926'
  slot='7806394673'
  style={{ display: 'block' }}
  layout='in-article'
  format='fluid'
/>

export default Layout

const layoutStyle = {
  appearance: {
    display: ["none", "none", "none", "flex"],
    alignItems: "center",
    gap: 4,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
}
