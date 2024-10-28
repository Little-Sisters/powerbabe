import React from 'react';
import styled from 'styled-components';
import useMediaQuery from '../hooks/useMediaQuery';

interface ShopStyleSwitcherTabsProps {
  styleSwitchers: Array<{
    feature: string;
    icon: React.ReactNode;
  }>;
  activeTab: string;
  onTabClick: (feature: string) => void;
}

const ShopTabs: React.FC<ShopStyleSwitcherTabsProps> = ({
  styleSwitchers,
  activeTab,
  onTabClick,
}) => {
  const isMobile = useMediaQuery({ breakpoint: 1051 });

  return (
    <ShopTabsWrapper>
      <ShopSwitcherTabs>
        {styleSwitchers.map(switcher => (
          <ShopTab
            key={switcher.feature}
            isActive={activeTab === switcher.feature}
            onClick={() => onTabClick(switcher.feature)}
          >
            {switcher.icon}
            {/* Display text differently on desktop */}
            {!isMobile && <ShopTabText>{switcher.feature}</ShopTabText>}
          </ShopTab>
        ))}
      </ShopSwitcherTabs>
    </ShopTabsWrapper>
  );
};

// Styled Components for ShopStyleSwitcherTabs
const ShopTabsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  @media (min-width: 1051px) {
    max-width: 5rem;
  }
`;

const ShopSwitcherTabs = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 3rem;
  background-color: #f8f9fa;
  justify-content: space-around;
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);

  @media (min-width: 1051px) {
    flex-direction: column;
    height: auto;
    max-width: 10rem;
  }
`;

const ShopTab = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ isActive }) => (isActive ? 'flex-start' : 'center')};
  gap: 10px;
  padding: 6px;
  width: calc(100% / 5);
  cursor: pointer;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.button : 'transparent'};
  color: ${({ isActive, theme }) =>
    isActive ? theme.primaryText : theme.secondaryText};
  border-radius: 5px;

  @media (min-width: 1051px) {
    flex-direction: row;
    width: 100%;
    padding: 12px;
    justify-content: flex-start;
  }
`;

const ShopTabText = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.secondaryText};
`;

export default ShopTabs;
