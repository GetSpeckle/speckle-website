import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from '../components/home'

const IndexPage = () => {
    return (
      <Layout>
        <SEO title="Home"/>
        <div className="section section1">
          <Home/>
        </div>
      </Layout>
    )
}

export default IndexPage


