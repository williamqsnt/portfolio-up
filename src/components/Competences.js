import React from 'react';
import styled from '@emotion/styled';
import reactlogo from '../assets/logos/reactjs-logo.svg'
import uiuxlogo from '../assets/logos/uiuxlogo.svg'
import flutterlogo from '../assets/logos/flutter-logo.svg'

const Competences = () => {
  return (
    <Container>
      <Title>Compétences</Title>
      <SkillsContainer>
        <Skill>
        
          <SkillName><img src={reactlogo} alt="logo react" width={50} /><h3 style={{marginLeft : '0.5em'}}>Front End Developer, <span style={{borderBottom : '2px solid lightblue'}}> ReactJS</span></h3></SkillName>
          <SkillDescription>
            Passionnée par le développement web et spécialisé par la technologie ReactJS.
          </SkillDescription>
        </Skill>
        <Skill>
        
          <SkillName><img src={uiuxlogo} alt="ui/ux design logo" width={40} />UI/UX <span style={{borderBottom : '2px solid red'}}>Design</span></SkillName>
          <SkillDescription>Passionée par l'UI/UX Design, une bonne conception d'interface facilite la navigation, la compréhension des fonctionnalités et l'accomplissement des tâches, ce qui améliore l'expérience globale de l'utilisateur.</SkillDescription>
        </Skill>
        <Skill>
          <SkillName><img src={flutterlogo} alt="flutter logo" width={40} /><h3 style={{marginLeft : '0.5em'}}>Flutter Developer</h3></SkillName>
          <SkillDescription>Quelques expériences dans le développement mobile cross-platform avec le framework Flutter. </SkillDescription>
        </Skill>
      </SkillsContainer>
    </Container>
  );
};

export default Competences;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Skill = styled.div`
  width: 200px;
  height: 200px;
    border : 2px solid lightgrey;
  margin: 20px;
  padding: 2em;
`;

const SkillName = styled.div`
  font-size: 1.4em;
  font-weight: bold;
  margin-bottom: 10px;
  display : flex;
  align-items : center;
  justify-content : space-between;
`;

const SkillDescription = styled.div`
  font-size: 14px;
`;
