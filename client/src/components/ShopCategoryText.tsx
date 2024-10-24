import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  text: string;
}

export const ResponsiveTitleText: React.FC<Props> = ({ title, text }) => {
  return (
    <Container>
      <ContentContainer>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </ContentContainer>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
  width: 100%;
  @media (min-width: 768px) {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row; /* Default layout for smaller screens */
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1.5rem;

  @media (min-width: 768px) {
    /* For larger screens: Stack content vertically and center */
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 1rem;
  @media (min-width: 768px) {
    font-size: 1.75rem;
    margin-right: 0;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;
