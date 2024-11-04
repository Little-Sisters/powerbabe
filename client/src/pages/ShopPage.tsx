import React, { useState } from 'react';
import styled from 'styled-components';
import { shopTabsData } from '../assets/data/shoptabsData';
import { StylesAndColorsData } from '../assets/IStylesAndColors';
import { Hero } from '../components/Hero';
import PageContentWrapper from '../components/layout/styled';
import ShopCard from '../components/ShopCard';
import { ResponsiveTitleText } from '../components/ShopCategoryText';
import { useShop } from '../contexts/ShopContext';
import { useWardrobe } from '../contexts/WardrobeContext';
import ShopTabs from '../components/ShopTabs';
import ShopFilterCard from '../components/ShopFilter';

const ShopPage: React.FC = () => {
  const { SHOPstyles, updatePurchased } = useShop();
  const { addToWardrobe } = useWardrobe();
  const [selectedTab, setSelectedTab] = useState(shopTabsData[0].feature);
  const [searchValue, setSearchValue] = useState('');
  const [selectedSort, setSelectedSort] = useState<string | null>(null);

  // Handle buy button click, adding style to wardrobe
  const handleBuy = (style: StylesAndColorsData) => {
    addToWardrobe(selectedTab, style);
    updatePurchased(selectedTab, style.number);
  };

  // Get styles for selected tab
  const selectedStyles = SHOPstyles[selectedTab] || [];

  // Filter and sort styles based on search and selected sort option
  const filteredStyles = selectedStyles
    .filter(style =>
      style.title.toLowerCase().includes(searchValue.toLowerCase()),
    )
    .sort((a, b) => b.colors.length - a.colors.length); // Sort by the number of colors in descending order
  return (
    <div>
      <Hero
        title="The Mall"
        text="Welcome to the mall! Here you can browse the latest fashion."
        buttonLinks={[
          { text: 'New arrivals!', link: '/get-started', color: 'primary' },
          { text: 'Get coins!', link: '/learn-more', color: 'secondary' },
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
            <ShopTabs
              styleSwitchers={shopTabsData}
              activeTab={selectedTab}
              onTabClick={setSelectedTab}
            />
          </Sidebar>
          <MainContent>
            <ShopFilterCard
              searchValue={searchValue}
              onSearchChange={setSearchValue}
              selectedSort={selectedSort}
              onSortChange={option =>
                setSelectedSort(option ? option.value : null)
              }
            />
            <CardsContainer>
              {filteredStyles.length > 0 ? (
                filteredStyles.map(style => (
                  <ShopCard
                    key={style.number}
                    style={style}
                    onBuy={() => handleBuy(style)}
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

// Styled Components
const GridContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: 1051px) {
    grid-template-columns: 10rem 1fr;
  }
`;

const Sidebar = styled.div`
  @media (min-width: 1051px) {
    grid-column: 1;
  }
`;

const MainContent = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 1051px) {
    grid-column: 2;
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

const NoItemsMessage = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.textSecondary || '#666'};
  font-size: 1.2rem;
  padding: 2rem 0;
`;
