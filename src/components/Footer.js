import React from 'react';
import styled from "@emotion/styled";
import linkedinlogo from '../assets/logos/linkedin-logo.png';
import emaillogo from '../assets/logos/email-logo.png';


const Footer = () => {
  return (
    <Container>
      <LogoContainer>
        <a href="https://www.linkedin.com/in/william-quesnot/" target='_blank' rel="noreferrer"><Logo src={linkedinlogo} alt="LinkedIn" /></a>
        <a href="mailto:quesnot.william@hotmail.com" target="_blank" rel="noreferrer"><Logo src={emaillogo} alt="Email" /></a>
        {/* Ajoutez ici d'autres logos si nécessaire */}
      </LogoContainer>
      <Copyright>
        © 2023 William Quesnot.
      </Copyright>
    </Container>
  );
};

const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color : white;
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 100px
  height: 100px;
`;

const Copyright = styled.p`
  font-size: 12px;
  color: #999;
`;

export default Footer;
