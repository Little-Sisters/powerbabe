// ShopPage.tsx
import React from 'react';
import styled from 'styled-components';
import { useShop } from '../contexts/ShopContext';
import { useWardrobe } from '../contexts/WardrobeContext';
import ShopCard from './ShopCard';

const ShopPage: React.FC = () => {
  const { SHOPtopStyles } = useShop();
  const { addToWardrobe } = useWardrobe();

  const handleBuy = (style: StylesAndColorsData) => {
    addToWardrobe('top', style);
  };

  return (
    <PageContainer>
      <Title>Shop</Title>
      <CardsContainer>
        {SHOPtopStyles.map(style => (
          <ShopCard key={style.number} style={style} onBuy={handleBuy} />
        ))}
      </CardsContainer>
    </PageContainer>
  );
};

export default ShopPage;

// Styled components for ShopPage
const PageContainer = styled.article`
  padding: 1rem;
`;

const Title = styled.h1`
  color: black;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
