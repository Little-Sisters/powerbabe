// ShopPage.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { StylesAndColorsData } from '../assets/IStylesAndColors';
import PageContentWrapper from '../components/layout/styled';
import ShopCard from '../components/ShopCard';
import { useShop } from '../contexts/ShopContext';
import { useWardrobe } from '../contexts/WardrobeContext';

const ShopPage: React.FC = () => {
  const { SHOPstyles, updatePurchased } = useShop();
  const { addToWardrobe } = useWardrobe();
  const [selectedTab, setSelectedTab] = useState<'tops' | 'hair' | 'bottoms'>(
    'tops',
  ); // Add more tabs as needed

  const handleBuy = (style: StylesAndColorsData) => {
    addToWardrobe(selectedTab, style);
    updatePurchased(selectedTab, style.number);
  };

  return (
    <PageContentWrapper>
      <TitleBox>
        <PageTitle>Shop</PageTitle>
      </TitleBox>
      <Tabs>
        <Tab
          onClick={() => setSelectedTab('tops')}
          active={selectedTab === 'tops'}
        >
          Tops
        </Tab>
        <Tab
          onClick={() => setSelectedTab('hair')}
          active={selectedTab === 'hair'}
        >
          Hair
        </Tab>
        {/* Add more tabs as needed */}
      </Tabs>
      <button className="btn-primary">Primary Button</button>
      <button className="btn-secondary">Secondary Button</button>
      <CardsContainer>
        {SHOPstyles[selectedTab].map(style => (
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

export const Tabs = styled.div`
  display: flex;
  justify-content: row;
  margin-bottom: 1.5rem;
`;

export const Tab = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${({ active, theme }) =>
    active ? theme.primary : theme.primaryLight};
  color: ${({ active, theme }) => (active ? theme.background : theme.text)};
  border: none;
  border-bottom: ${({ active, theme }) =>
    active ? `2px solid ${theme.primary}` : 'none'};
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
  }
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
