import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import colors from 'style/colors';
import { media } from 'style/sizes';
import links from 'lib/links';
import Logo from 'images/logo.svg';

const FooterContainer = styled.footer`
  background-color: ${colors.navy};
  width: 100%;
  color: white;
  padding: 30px 0;
  text-align: center;
`;

const Links = styled.div`
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  ${media.medium`
    flex-flow: row;
  `};
  a {
    color: white;
    text-decoration: none;
    &:hover,
    &.active {
      text-decoration: underline;
    }
    margin: 5px 20px;
    font-family: ;
  }
`;

const Copyright = styled.div`
  margin-top: 20px;
`;

const year = new Date().getFullYear();

const LogoContainer = styled.div`
  margin-bottom: 15px;
  svg {
    fill: white;
    height: 40px;
  }
`;

const Footer = () => (
  <FooterContainer>
    <Links>
      <Link to="/" activeClassName="active" exact>
        Home
      </Link>
      <Link to="/privacy" activeClassName="active">
        Privacy
      </Link>
      <a href={links.twitter}>Twitter</a>
      <a href="mailto:hello@outhere.studio">Email</a>
    </Links>

    <Copyright>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      Out Here Studio LLC &copy; {year}
    </Copyright>
  </FooterContainer>
);

export default Footer;
