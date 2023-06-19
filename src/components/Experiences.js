import React, { useState } from 'react';
import styled from '@emotion/styled';
import githublogo from '../assets/logos/github-logo.svg';
import websitelogo from '../assets/logos/website-logo.svg';

const experiencesData = [
  {
    id: 1,
    title: 'Riddle',
    description: 'Travail sur un Logiciel SaaS, qui a pour objectif d\'aider les entreprises à gérer les leads que Riddle leurs délivrent. Utilisation de Docker, Requête d\'API via Postman. Ajout de fonctionnalités pour les utilisateurs, tels que un bouton "démo" permettant de générer 10 faux leads à partir de la librairie Faker sur Symfony. Test de qualité, montée en charge et correction de bugs existants. ',
    technologies: ['React', 'Symfony', 'API Platform'],
    githubLink: 'https://github.com/tomherbin/riddlead-front/tree/dev-demo',
    websiteLink: 'https://www.riddle.fr'
  },
  {
    id: 2,
    title: 'Axians - VINCI Energies',
    description: 'Création from scratch d\'un site web. Permettant à des particuliers de pouvoir louer une salle équipée d\'équipements audiovisuels. Réalisation d\'une maquette respectant la charte graphique de l\'entreprise sur Adobe XD. Choix personnel de l\'utilisation du framework NextJS. Également intégration du CMS Contentful pour permettre à l\'entreprise de pouvoir changer les informations de leurs services. ',
    technologies: ["Next.js", "CMS Contentful"],
    githubLink: 'https://github.com/williamqsnt/stage-axians-nextjs-contentful',
    websiteLink: 'https://www.axians.com'
  }
];

const Experiences = () => {
  const [activeExperience, setActiveExperience] = useState(null);

  const handleClickExperience = (experienceId) => {
    setActiveExperience(experienceId);
  };

  return (
    <Container>
      <Title>Expériences profesionnelles</Title>
      <Content>
        <ExperiencesList>
          {experiencesData.map((experience) => (
            <ExperienceItem
              key={experience.id}
              isActive={activeExperience === experience.id}
              onClick={() => handleClickExperience(experience.id)}
            >
              {experience.title}
            </ExperienceItem>
          ))}
        </ExperiencesList>

        <Spacer />

        <ExperienceDetails>
          {activeExperience ? (
            <div>
              <h3>{experiencesData.find((experience) => experience.id === activeExperience).title}</h3>
              <TechnologiesList>
                {experiencesData.find((experience) => experience.id === activeExperience).technologies.map((technology) => (
                  <TechnologyBadge key={technology}>{technology}</TechnologyBadge>
                ))}
              </TechnologiesList>
              <Description>{experiencesData.find((experience) => experience.id === activeExperience).description}</Description>
             
              <Links>
                <a href={experiencesData.find((experience) => experience.id === activeExperience).githubLink} target="_blank" rel="noopener noreferrer"><img src={githublogo} alt="github logo" width={40}/></a>
                <a href={experiencesData.find((experience) => experience.id === activeExperience).websiteLink} target="_blank" rel="noopener noreferrer"><img src={websitelogo} alt="website logo" width={45}/></a>
              </Links>
            </div>
          ) : (
            <p>Sélectionnez une expérience pour afficher les détails.</p>
          )}
        </ExperienceDetails>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h2`
  margin-top: 0;
  color : white;
  font-size: 3rem;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top : 2em;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ExperiencesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 300px;
  font-family : studiofeixen-variable,studiofeixen,Arial,Helvetica,sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExperienceItem = styled.li`
  padding: 10px;
  font-size : 1.5em;
  font-weight : bold;
  color: ${({ isActive }) => (isActive ? 'lightblue' : 'white')};
  &:hover {
    color: lightblue;
  }
`;

const ExperienceDetails = styled.div`
background-color : white;
color : black;
padding : 1.5em;
border-radius : 20px; 
  margin-left: 20px;
  max-width: 400px;
  word-wrap: break-word;
  text-align : center;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
  }

  h3{
    font-size : 1.5em;
  }
`;

const Spacer = styled.div`
  width: 20px;
  @media (max-width: 768px) {
    height: 20px;
  }
`;

const TechnologiesList = styled.div`
  display: flex;
  margin-top: 10px;
`;

const TechnologyBadge = styled.div`
  background-color: lightblue;
  font-weight : bold;
  color: rgb(45, 45, 57);
  padding: 5px 10px;
  border-radius: 20px;
  margin-right: 5px;
`;

const Description = styled.p`
  margin-top: 10px;
  white-space: pre-wrap;
`;

const Links = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  a {
    margin-right: 10px;
    text-decoration: none;
  }
`;

export default Experiences;
