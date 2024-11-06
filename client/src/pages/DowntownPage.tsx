import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import Character from '../components/Character'; // Import the new Character component
import PageContentWrapper from '../components/layout/styled';

// Mock data for characters
const characters = [
  { id: 'character1', name: 'Hero1' },
  { id: 'character2', name: 'Hero2' },
];

const loggedInHeroId = 'character1'; // Hero1 is the logged-in player's hero

const DowntownPage: React.FC = () => {
  // State to track each character's current card position
  const [characterPositions, setCharacterPositions] = useState<{
    [key: string]: number;
  }>({
    character1: 0, // initial position of Hero1
    character2: 4, // initial position of Hero2
  });

  const handleCardClick = (cardIndex: number) => {
    // Only allow the logged-in hero to be moved
    const occupiedPositions = Object.values(characterPositions);

    // Check if the selected card is already occupied
    if (!occupiedPositions.includes(cardIndex)) {
      setCharacterPositions(prevPositions => ({
        ...prevPositions,
        [loggedInHeroId]: cardIndex, // Move only Hero1 to the clicked position
      }));
    }
  };

  return (
    <PageContentWrapper>
      <DowntownGrid>
        <Sidebar>
          <SidebarCard>
            <button>Create game</button>
          </SidebarCard>
          <SidebarCard>Join Game</SidebarCard>
          <SidebarCard>Ongoing games</SidebarCard>
        </Sidebar>
        <MainImage>
          {Array.from({ length: 6 }).map((_, cardIndex) => (
            <ImageCard
              key={cardIndex}
              onClick={() => handleCardClick(cardIndex)}
            >
              {characters.map(character =>
                characterPositions[character.id] === cardIndex ? (
                  <CharacterWrapper
                    key={character.id}
                    animate={{
                      scale: [1, 1.2, 1], // Optional scale effect
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 150,
                      damping: 20,
                    }}
                    // Only allow clicks on the logged-in hero for movement
                    style={{
                      pointerEvents:
                        character.id === loggedInHeroId ? 'auto' : 'none',
                    }}
                  >
                    {/* Render Character component with relevant props */}
                    <Character showTemporary={false} />
                  </CharacterWrapper>
                ) : null,
              )}
            </ImageCard>
          ))}
        </MainImage>
      </DowntownGrid>
    </PageContentWrapper>
  );
};

export default DowntownPage;

// Styled Components
const DowntownGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1rem;
  height: calc(100vh - 3rem);
  padding: 1rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    height: auto;
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    order: 2;
    margin-top: 1rem;
  }
`;

const SidebarCard = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MainImage = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, minmax(100px, 1fr));
  gap: 1rem;
  background-image: url('./backgrounds/yard.png');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    height: 35rem;
  }
`;

const ImageCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #333;
  cursor: pointer;
`;

const CharacterWrapper = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 50%;
  cursor: pointer;
`;
