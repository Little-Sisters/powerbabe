// ShopPage.tsx
import React from 'react';
import styled from 'styled-components';
import { StylesAndColorsData } from '../assets/IStylesAndColors';
import ShopCard from '../components/ShopCard';
import { useShop } from '../contexts/ShopContext';
import { useWardrobe } from '../contexts/WardrobeContext';
import PageContentWrapper from '../components/layout/styled';

const ShopPage: React.FC = () => {
  const { SHOPtopStyles, updatePurchased } = useShop();
  const { addToWardrobe } = useWardrobe();

  const handleBuy = (style: StylesAndColorsData) => {
    addToWardrobe('top', style);
    updatePurchased(style.number);
  };

  console.log('shopstyles:', SHOPtopStyles);

  return (
    <PageContentWrapper>
      <TitleBox>
        <PageTitle>Shop</PageTitle>
      </TitleBox>
      <CardsContainer>
        {SHOPtopStyles.map(style => (
          <ShopCard key={style.number} style={style} onBuy={handleBuy} />
        ))}
      </CardsContainer>
    </PageContentWrapper>
  );
};

export default ShopPage;

// Styled components for ShopPage

export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 1.5rem;
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  padding: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  width: 100%;
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
