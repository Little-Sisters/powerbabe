import React, { useState } from 'react';
import styled from 'styled-components';
import { shopTabsData } from '../assets/data/shoptabsData';
import { StylesAndColorsData } from '../assets/IStylesAndColors';
import { Hero } from '../components/Hero';
import PageContentWrapper from '../components/layout/styled';
import ShopCard from '../components/ShopCard';
import { ResponsiveTitleText } from '../components/ShopCategoryText';
import StyleSwitcherTabs from '../components/StyleSwitcherIconTabs';
import { useShop } from '../contexts/ShopContext';
import { useWardrobe } from '../contexts/WardrobeContext';

const ShopPage: React.FC = () => {
  const { SHOPstyles, updatePurchased } = useShop();
  const { addToWardrobe } = useWardrobe();
  const [selectedTab, setSelectedTab] = useState(shopTabsData[0].feature);

  const handleBuy = (style: StylesAndColorsData) => {
    addToWardrobe(selectedTab, style);
    updatePurchased(selectedTab, style.number);
  };

  const selectedStyles = SHOPstyles[selectedTab] || [];

  return (
    <div>
      <Hero
        title="The Mall"
        text="Welcome to the mall! Here you can browse the latest fashion."
        buttonLinks={[
          { text: 'New arrivals!', link: '/get-started' },
          { text: 'Get coins!', link: '/learn-more' },
        ]}
        backgroundImage="./backgrounds/room1.png"
      />
      <PageContentWrapper>
        <ResponsiveTitleText
          title="Tops"
          text="Here is some amazing text that describes the content."
        />
        <GridContainer>
          <Sidebar>
            <StyleSwitcherTabs
              styleSwitchers={shopTabsData}
              activeTab={selectedTab}
              onTabClick={setSelectedTab}
              shopMode={true}
            />
          </Sidebar>
          <MainContent>
            <div>Searchfield and sorting dropdown.</div>
            <div>filter pills div</div>
            <CardsContainer>
              {selectedStyles.length > 0 ? (
                selectedStyles.map(style => (
                  <ShopCard
                    key={style.number}
                    style={style}
                    onBuy={handleBuy}
                  />
                ))
              ) : (
                <NoItemsMessage>
                  No items available in this category
                </NoItemsMessage>
              )}
            </CardsContainer>
          </MainContent>
        </GridContainer>
      </PageContentWrapper>
    </div>
  );
};

export default ShopPage;

// GridContainer.tsx
const GridContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: 1051px) {
    grid-template-columns: 10rem 1fr; /* Sidebar and main content */
  }
`;

// Sidebar.tsx
const Sidebar = styled.div`
  @media (min-width: 1051px) {
    grid-column: 1;
  }
`;

// MainContent.tsx
const MainContent = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 1051px) {
    grid-column: 2;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Start with 2 columns */
  gap: 1rem;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr); /* Remains 2 columns */
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* 3 columns for medium screens */
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr); /* 4 columns for large screens */
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(
      5,
      1fr
    ); /* 5 columns for extra-large screens */
  }
`;

// NoItemsMessage.tsx
const NoItemsMessage = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.textSecondary || '#666'};
  font-size: 1.2rem;
  padding: 2rem 0;
`;
