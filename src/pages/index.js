import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { fadeUpIn, stretchFull } from 'style/snippets';
import colors from 'style/colors';
import { fade } from 'style/animations';
import outHereImg1 from 'images/outHereBg1.jpg';
import outHereImg2 from 'images/outHereBg2.jpg';
import outHereImg3 from 'images/outHereBg3.jpg';
import outHereImg4 from 'images/outHereBg4.jpg';
import Logo from 'images/logo.svg';
import AppStoreBadge from 'images/appStoreBadge.svg';
import links from 'lib/links';
import BrSm from 'components/BrSm';
import BrMd from 'components/BrMd';

const getRandomImg = () => {
  const imgs = [outHereImg1, outHereImg2, outHereImg3, outHereImg4];
  const index = Math.floor(Math.random() * imgs.length);
  console.log('get random img, index', index);
  return imgs[index];
};

const Panel = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  color: white;
  padding: 2.5%;
`;

const TextGroup = styled.div`
  width: 100%;
  max-width: 600px;
`;

const AnimatedText = styled.h1`
  letter-spacing: -2px;
  ${fadeUpIn};
  font-size: 6.5em;
`;

const FromText = AnimatedText.extend`
  font-size: 3em;
  animation-delay: 1s;
`;

const makeText = delay => AnimatedText.extend`
  animation-delay: ${delay}s;
`;

const OutText = makeText(1.3);
const HereText = makeText(2);

const Background = styled.div`
  ${stretchFull};
  background-size: cover;
  background-image: url(${props => props.img});
  background-position: center right;
  z-index: -1;
  position: fixed;
  &:after {
    content: '';
    z-index: 1;
    ${stretchFull};
    background-color: ${colors.navy};
    opacity: 1;
    animation: ${fade({ to: 0.1 })} 1s forwards 2s;
  }
`;

Background.propTypes = {
  img: PropTypes.string.isRequired
};

class ImgBackground extends React.Component {
  state = {
    img: getRandomImg()
  };

  render() {
    return <Background img={this.state.img} />;
  }
}

const TopPane = () => (
  <Panel>
    <TextGroup>
      <AnimatedText>Hello</AnimatedText>
      <FromText>from</FromText>
      <OutText>Out</OutText>
      <HereText>Here</HereText>
    </TextGroup>
    <ImgBackground />
  </Panel>
);

const Section = styled.section`
  padding: 50px 2.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const MissionText = styled.h2`
  max-width: 600px;
  font-size: 2em;
  text-align: center;
`;

const Mission = () => (
  <Section>
    <MissionText>
      We make software <BrSm />that <BrMd />
      brings people closer together <br />
      with each other, <br />
      their communities, <br />
      and the natural world.
    </MissionText>
  </Section>
);

const DownloadPane = Section.extend`
  svg {
    margin-top: 20px;
  }
  a {
    transform: scale(1.4);
    transition: transform 200ms;
    &:hover {
      transform: scale(1.5);
    }
    &:active {
      transform: scale(1.42);
    }
  }
`;

const DownloadSection = () => (
  <DownloadPane>
    <MissionText>
      Download <BrSm />our inaugural title<br />
      Out Here Archery<br />
    </MissionText>
    <a href={links.archeryAppStore}>
      <AppStoreBadge />
    </a>
  </DownloadPane>
);

const GradientBackground = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(20, 43, 120, 0),
    rgba(20, 43, 120, 1)
  );
  color: white;
`;

const Home = () => (
  <div>
    <TopPane />
    <GradientBackground>
      <Mission />
      <DownloadSection />
    </GradientBackground>
  </div>
);

export default Home;
