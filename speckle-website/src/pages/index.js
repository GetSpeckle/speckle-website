import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage"
import { licenses } from '../components/licenses'
import Home from '../components/home'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ReactFullpage
      scrollOverflow={true}
      sectionsColor={[]}
      licenseKey ={`${licenses.fullpage}`}
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage-wrapper">
            <div className="section section1">
              <Home/>
            </div>
          </div>
        );
      }}
    />
  </Layout>
)

export default IndexPage


