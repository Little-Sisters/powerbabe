import React from 'react';
import styled from 'styled-components';

interface StyleSwitcherTabsProps {
  styleSwitchers: Array<{
    feature: string;
    icon: React.ReactNode;
  }>;
  activeTab: string;
  onTabClick: (feature: string) => void;
}

const StyleSwitcherTabs: React.FC<StyleSwitcherTabsProps> = ({
  styleSwitchers,
  activeTab,
  onTabClick,
}) => {
  return (
    <TabsWrapper>
      <MobileSwitcherTabs>
        {styleSwitchers.map(switcher => (
          <Tab
            key={switcher.feature}
            isActive={activeTab === switcher.feature}
            onClick={() => onTabClick(switcher.feature)}
          >
            {switcher.icon}
          </Tab>
        ))}
      </MobileSwitcherTabs>
    </TabsWrapper>
  );
};

// Styled Components
const TabsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  @media (min-width: 1051px) {
    max-width: 4rem;
    border-radius: 5px;
  }
`;

const MobileSwitcherTabs = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 39rem;
  height: 3rem;
  justify-content: space-around;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  box-shadow:
    0px 2px 4px rgba(0, 0, 0, 0.3),
    0px 4px -4px rgba(0, 0, 0, 0.3);

  @media (min-width: 1051px) {
    flex-direction: column;
    height: auto;
    max-width: 8rem;
  }
`;

const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* Adds space between icon and text */
  width: calc(100% / 7);
  padding: 5px;
  cursor: pointer;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.button : 'transparent'};
  color: ${({ isActive }) => (isActive ? 'black' : 'white')};
  text-align: center;

  @media (min-width: 1051px) {
    width: 100%;
    padding: 10px;
    flex-direction: row;
  }
`;

export default StyleSwitcherTabs;
