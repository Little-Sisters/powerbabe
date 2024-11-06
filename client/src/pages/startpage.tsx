import React from 'react';
import CharacterCard from '../components/CharacterCard'; // Import the CharacterCard component
import PageContentWrapper from '../components/layout/styled';

const StartPage: React.FC = () => {
  // Example character data

  return (
    <PageContentWrapper>
      {/* Add the CharacterCard here */}
      <CharacterCard />
    </PageContentWrapper>
  );
};

export default StartPage;
