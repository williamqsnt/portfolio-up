import React, { useState } from 'react';
import styled from '@emotion/styled';

const Projets = () => {
  const projetsData = [
    { id: 1, nom: 'Builder Workout (en cours)', description: 'Description du projet 1' },
    { id: 2, nom: 'E-commerce Flutter App (non déposé)', description: 'Description du projet 2' },
  ];

  const [selectedProjet, setSelectedProjet] = useState(null);

  const handleClickProjet = (projet) => {
    setSelectedProjet(projet);
  };

  return (
    <Container>
      <Title>Projets</Title>
      <ProjetsList>
        {projetsData.map((projet) => (
          <ProjetItem key={projet.id} onClick={() => handleClickProjet(projet)}>
            {projet.nom}
          </ProjetItem>
        ))}
      </ProjetsList>
      {selectedProjet && (
        <Overlay>
          <Popup>
            <ProjetTitle>{selectedProjet.nom}</ProjetTitle>
            <ProjetDescription>{selectedProjet.description}</ProjetDescription>
            <CloseButton onClick={() => setSelectedProjet(null)}>Fermer</CloseButton>
          </Popup>
        </Overlay>
      )}
    </Container>
  );
};

const Container = styled.div`
  height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjetsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProjetItem = styled.div`
  width: 350px;
  height: 250px;
  background-color: lightblue;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 300px;
    height: 150px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const Popup = styled.div`
  width: 400px;
  max-width: 90%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  z-index: 9999;
`;

const ProjetTitle = styled.h3`
  margin-top: 0;
`;

const ProjetDescription = styled.p`
  margin-bottom: 10px;
`;

const CloseButton = styled.button`
  margin-top: 10px;
`;

const Title = styled.h2`
  margin-top: 1em;
  color: white;
  font-size: 3rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export default Projets;
