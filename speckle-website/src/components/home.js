import React from "react"
import styled from "styled-components"
import main from "../images/main.svg"
import chrome from "../images/download_chrome.svg"
import brave from "../images/download_brave.svg"
import firefox from  "../images/download_firefox.svg"
import Flickity from 'react-flickity-component'
import './flickity.css'
import screen1 from "../images/Screen1.svg"
import screen2 from "../images/Screen2.svg"
import screen3 from "../images/Screen3.svg"
import screen4 from "../images/Screen4.svg"
import screen5 from "../images/Screen5.svg"

const flickityOptions = {
  initialIndex: 0
}

const textList = [
  "Manage assets across all Polkadot and Substrate-compatible chains",
  "Discover, curate and select the chains you want to use",
  "Actively participate in governance processes across the network",
  "Participate in the security of the network by staking your DOTS",
  "Easy and effortless to setup in 3 simple steps"
  ]

class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state  = {
      index: 0
    }
  }

  render() {
    return (
      <Main>
        <Container>
          <Header>Your Web 3 wallet and browser built for Polkadot</Header>
          <SubHeader>Explore Polkadot and the decentralized web with this multi-purpose browser extension. Manage
            assets, discover parachains and interact with dApps all from your browser!</SubHeader>
          <Vendors>
            <a href="https://www.google.com">
              <Chrome/>
            </a>
            <a href="https://www.brave.com">
              <Brave/>
            </a>
            <a href="https://www.firefox.com">
              <FireFox/>
            </a>
          </Vendors>
        </Container>
        <Carousel
          className={'carousel'} // default ''
          elementType={'div'} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          <img src={`${screen1}`}/>
          <img src={`${screen2}`}/>
          <img src={`${screen3}`}/>
          <img src={`${screen4}`}/>
          <img src={`${screen5}`}/>
        </Carousel>

      </Main>
    )
  }
}

export default Home

const Main = styled.div`
background: url(${main}) no-repeat center;
position: absolute;
width: 1122px;
height: 657px;
left: 12%;
top: 93px;
@media (max-width: 720px) {
    background: white;
    display: flex;
}
`

const Header = styled.h2`
font-family: Nunito;
font-style: normal;
font-weight: 800;
font-size: 32px;
line-height: 43px;
/* or 134% */
text-align: center;
letter-spacing: 1.6px;

color: #30383B;
`

const SubHeader = styled.p`
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 26px;
text-align: center;

color: #535353;
`

const Container = styled.div`
width: 550px;
height: 286px;
margin-top: 172px;
margin-left: 158px;
`

const Chrome = styled.div`
  background: url(${chrome});
  width: 180px;
  height: 80px;
`

const Brave = styled.div`
  background: url(${brave}) no-repeat;
  width: 180px;
  height: 80px;
`

const FireFox = styled.div`
  background: url(${firefox});
  width: 180px;
  height: 80px;
`

const Vendors = styled.div`
  display: flex;
  width: 550px;
  height: 58px;
  justify-contents: space-between;
`

const Carousel = styled(Flickity)`
width: 443px;
height: 573px;
position: absolute !important;
left: 63.5%;
right: 22.92%;
top: 10.62%;
z-index: 80;
`
