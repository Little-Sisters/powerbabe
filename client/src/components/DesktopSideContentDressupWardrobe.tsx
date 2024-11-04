import React from 'react';
import styled from 'styled-components';
import { ColorAndStyleSwitcher } from './ColorAndStyleSwitcher';
import { SideSectionTitle } from './DesktopSideContentDressupStyle';
import { useWardrobe } from '../contexts/WardrobeContext';

interface DesktopSideContentDressupWardrobeProps {
  onSave: () => void;
}

const DesktopSideContentDressupWardrobe: React.FC<
  DesktopSideContentDressupWardrobeProps
> = ({ onSave }) => {
  const { bottomStyleData, topStylesData } = useWardrobe();

  const wardrobeSwitchers = [
    { feature: 'topstyle', stylesAndColors: topStylesData },
    { feature: 'bottomstyle', stylesAndColors: bottomStyleData },
  ];

  const renderSwitchers = () => {
    return wardrobeSwitchers.map((switcher, index) => (
      <ColorAndStyleSwitcher
        key={index}
        feature={switcher.feature}
        stylesAndColors={switcher.stylesAndColors}
      />
    ));
  };

  return (
    <>
      <FlexContainer>
        <SideSectionTitle>Wardrobe</SideSectionTitle>
        <SwitcherContainer>{renderSwitchers()}</SwitcherContainer>
        <SideContentFooter>
          <NameBox>
            <p>My name!</p>
            <p> My Status is like pretty good.</p>
          </NameBox>
          <ReadyButton onClick={onSave}>Save!</ReadyButton>
        </SideContentFooter>
      </FlexContainer>
    </>
  );
};

export const SideContentFooter = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const ReadyButton = styled.button`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 4rem;
`;

export const NameBox = styled.div`
  border-radius: 5px;
  background-color: #ffffff;
  padding: 1rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
`;

export const SwitcherContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Basic box shadow */
  border-radius: 5px;
`;

export default DesktopSideContentDressupWardrobe;
