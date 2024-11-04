import React from 'react';
import styled from 'styled-components';
import Character from './Character'; // Assume you have a Character component

interface CharacterCardProps {
  name: string;
  stats: {
    strength: number;
    agility: number;
    intelligence: number;
  };
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, stats }) => {
  return (
    <CardWrapper>
      <CharacterInfo>
        <CharacterName>{name}</CharacterName>
        <StatsList>
          <StatItem>Points: {stats.strength}</StatItem>
          <StatItem>Ranking: {stats.agility}</StatItem>
          <StatItem>Intelligence: {stats.intelligence}</StatItem>
        </StatsList>
      </CharacterInfo>
      <CharacterContainer>
        <Character showTemporary={false} />
      </CharacterContainer>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  height: 25rem;
  width: 100%;
  gap: 1rem;
  @media (min-width: 768px) {
    width: 25rem;
  }
`;
const CharacterContainer = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
`;

const CharacterInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  text-align: left;
  flex-direction: column;
  width: 50%;
`;

const CharacterName = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

const StatsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StatItem = styled.li`
  margin: 0.25rem 0;
  font-size: 1rem;
`;

export default CharacterCard;
