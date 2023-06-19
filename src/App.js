import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import './index.css';
import Menu from './components/Menu';
import Accueil from './components/Accueil';
import Competences from './components/Competences';
import Experiences from './components/Experiences';
import Projets from './components/Projets';
import Footer from './components/Footer';

function App() {
  const [activeMenu, setActiveMenu] = useState('Accueil');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseMove = (event) => {
    setCursorPos({ x: event.clientX, y: event.clientY });
  };

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <Container>
      <div
        className={`cursor ${isClicked ? 'clicked' : ''}`}
        style={{ top: cursorPos.y, left: cursorPos.x }}
      ></div>
      <Menu activeMenu={activeMenu} handleMenuClick={handleMenuClick} />
      <Content>
        <Section id="accueil">
          <Accueil />
        </Section>
        <Section id="competences">
          <Competences />
        </Section>
        <Section id="experiences">
          <Experiences />
        </Section>
        <Section id="projets">
          <Projets />
        </Section>
        <Section id="contact">
         
        </Section>
        <Section>
          <Footer />
        </Section>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  background-color: rgb(45, 45, 57);
  color: #fff;

  html {
    cursor: none;
  }

  .cursor.clicked {
    transform: translate(-50%, -50%) scale(1.2);
    transition: 0.5s;
  }

  .cursor {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
  }

  .cursor::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
  }
`;

const Content = styled.section``;

const Section = styled.section`
  @media (max-width: 768px) {
    margin: 30px 0;
  }
`;

export default App;
