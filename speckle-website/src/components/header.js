import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import logo from '../images/logo.svg'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "transparent",
      position: "fixed",
      display: "flex",
      width: "100%",
      zIndex: 99
    }}
  >
    <HeaderContent>
      <Link to="/">
          <SpeckleLogo/>
      </Link>
      <NavBar>
        <div>
              <a style={{"textDecoration": "none"}} href={"https://www.github.com/speckleos/speckle-browser-extension"}>
                <li>Github</li>
              </a>
        </div>
        <div>
              <a style={{"textDecoration": "none"}} href={"https://www.github.com/speckleos/speckle-browser-extension"}>
                <li>Contact</li>
              </a>
        </div>
        <div>
              <a style={{"textDecoration": "none"}} href={"https://www.github.com/speckleos/speckle-browser-extension"}>
                <li>Blog</li>
              </a>
        </div>
        <div>
             <a style={{"textDecoration": "none"}} href={"https://www.twitter.com/speckleos"}>
                <li>Twitter</li>
              </a>
        </div>
      </NavBar>
      <GetStarted><h3>Get Started</h3></GetStarted>
    </HeaderContent>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const SpeckleLogo = styled.div`
background: url(${logo});
width: 104px;
height: 45px;
position: absolute;
left: 11.11%;
top: 24px;
right: 81.67%;
`

const NavBar = styled.div`
  display: flex;
  min-width: 358px;
  height: 25px;
  align-items: center;
  position: absolute;
  left: 37.57%;
  right: 37.57%;
  top: 29px;
  justify-content: space-between;

  li {
    font-size: 18px;
    font-family: Nunito;
    color: #535353;
    text-decoration: none;
    display: inline;
  }
  
  @media (max-width: 720px) {
    display: none;
   }
`

const GetStarted = styled.button`
background: #24B6E8;
box-shadow: 0 3px 10px 0 rgba(72, 178, 228, 0.204993);
border-radius: 4px;
position: absolute;
left: 76.46%;
right: 11.11%;
top: 24px;
bottom: 91.38%;
border: none;
width: 180px;
height: 45px;

@media (max-width: 956px) {
  display: none;
}

color: #FFFFFF;

h3 {
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  margin-top: 12px;
}
`

const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  justify-contents: space-between;
  height: 45px;
  align-items: center;
  z-index: 99;
`
