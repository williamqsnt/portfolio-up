import React from 'react';
import styled from '@emotion/styled';

const Accueil = () => {
  return (
    <Container>
      <Text>WILLIAM QUESNOT</Text>
      <h3>Développeur</h3>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction : column;
  height: 80vh;
  background-color : rgb(45,45,57);
  color: #fff;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

const Text = styled.h1`
  font-size: 48px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export default Accueil;
