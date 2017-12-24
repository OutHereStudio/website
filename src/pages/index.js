import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { fadeUpIn, stretchFull } from 'style/snippets';
import colors from 'style/colors';
import { fade } from 'style/animations';
import outHereImg1 from './outHereBg1.jpg';
import outHereImg2 from './outHereBg2.jpg';
import outHereImg3 from './outHereBg3.jpg';
import outHereImg4 from './outHereBg4.jpg';
import Logo from 'components/logo.svg';
import AppStoreBadge from './appStoreBadge.svg';
import links from 'lib/links';
import { media } from 'style/sizes';

const getRandomImg = () => {
  const imgs = [outHereImg1, outHereImg2, outHereImg3, outHereImg4];

  const index = Math.floor(Math.random() * imgs.length);
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

const ImgBackground = styled.div`
  ${stretchFull};
  background-image: url(${getRandomImg()});
  background-size: cover;
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

const BrSm = styled.br`
  ${media.small`
    display: none;
  `};
`;

const BrM = styled.br`
  display: none;
  ${media.small`
    display: inherit;
  `};
`;

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

const MissionPane = Section.extend`
  svg {
    margin-top: 50px;
    margin-bottom: 10px;
    height: 60px;
    fill: white;
  }
`;

const MissionText = styled.h2`
  max-width: 600px;
  font-size: 2em;
  text-align: center;
`;

const Mission = () => (
  <MissionPane>
    <MissionText>
      We make software <BrSm />that <BrM />
      brings people closer together <br />
      with each other, <br />
      their communities, <br />
      and the natural world.
    </MissionText>
  </MissionPane>
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
