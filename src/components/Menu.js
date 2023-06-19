import React, { useState } from 'react';
import styled from '@emotion/styled';

const Menu = ({ activeMenu, handleMenuClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (menu) => {
    setIsMenuOpen(false);
    handleMenuClick(menu);
  };

  return (
    <Container>
      <p style={{ fontWeight: 'bold' }}>Portfolio | William Quesnot</p>
      <MenuToggle onClick={toggleMenu} isOpen={isMenuOpen}>
        <span></span>
        <span></span>
        <span></span>
      </MenuToggle>
      <MenuItems isOpen={isMenuOpen}>
        <CloseButton onClick={toggleMenu}>&times;</CloseButton>
        <MenuItem>
          <a href="#competences" onClick={() => handleMenuItemClick('Competences')}>
            Compétences
          </a>
        </MenuItem>
        <MenuItem>
          <a href="#experiences" onClick={() => handleMenuItemClick('Experiences')}>
            Expériences
          </a>
        </MenuItem>
        <MenuItem>
          <a href="#projets" onClick={() => handleMenuItemClick('Projets')}>
            Projets
          </a>
        </MenuItem>
        <MenuItem>
          <a href="mailto:quesnot.william@hotmail.com" onClick={() => handleMenuItemClick('Contact')}>
            Me contacter          
          </a>
        </MenuItem>
      </MenuItems>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgb(45,45,57);
  color: #fff;
`;

const MenuToggle = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    width: 30px;
    height: 4px;
    background-color: #fff;
    margin-bottom: 6px;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    span:first-of-type {
      transform: translateY(10px) rotate(45deg);
    }
    span:nth-of-type(2) {
      opacity: 0;
    }
    span:last-of-type {
      transform: translateY(-10px) rotate(-45deg);
    }
  `}
`;

const MenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(45,45,57);
  color: #fff;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    position: static;
    width: auto;
    height: auto;
    transform: none;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 40px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-bottom: 20px;
  margin: 1em;

  a {
    color: ${({ isActive }) => (isActive ? '#ff5722' : '#fff')};
    text-decoration: none;
  }
`;

export default Menu;
