import React from 'react';
import CharacterCard from '../components/CharacterCard'; // Import the CharacterCard component
import PageContentWrapper from '../components/layout/styled';

const StartPage: React.FC = () => {
  // Example character data
  const character = {
    name: 'Name',
    stats: {
      strength: 18,
      agility: 14,
      intelligence: 12,
    },
  };

  return (
    <PageContentWrapper>
      Startpage
      {/* Add the CharacterCard here */}
      <CharacterCard name={character.name} stats={character.stats} />
    </PageContentWrapper>
  );
};

export default StartPage;
