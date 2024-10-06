import React, { useState } from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GithubIcon from "@mui/icons-material/GitHub";
import { Bio } from "../../data/constants";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
  position: relative; /* Positioning for the toast */
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Toast = styled.div`
  position: absolute;
  bottom: -2rem; /* Adjust this value as needed */
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
  opacity: 0.9;
  transition: opacity 0.3s ease-in-out;
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  const [toastMessage, setToastMessage] = useState("");

  // Function to show the toast message
  const handleMouseEnter = (message) => {
    setToastMessage(message);
  };

  // Function to hide the toast message
  const handleMouseLeave = () => {
    setToastMessage("");
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Ehsan Ahmed</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon
            href={Bio.facebook}
            target="display"
            onMouseEnter={() => handleMouseEnter("Facebook")}
            onMouseLeave={handleMouseLeave}
          >
            <FacebookIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.linkedin}
            target="display"
            onMouseEnter={() => handleMouseEnter("LinkedIn")}
            onMouseLeave={handleMouseLeave}
          >
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.insta}
            target="display"
            onMouseEnter={() => handleMouseEnter("Instagram")}
            onMouseLeave={handleMouseLeave}
          >
            <InstagramIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.github}
            target="display"
            onMouseEnter={() => handleMouseEnter("Github")}
            onMouseLeave={handleMouseLeave}
          >
            <GithubIcon />
          </SocialMediaIcon>
          {toastMessage && <Toast>{toastMessage}</Toast>}{" "}
        </SocialMediaIcons>
        <Copyright>&copy; 2024 Ehsan Ahmed. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
