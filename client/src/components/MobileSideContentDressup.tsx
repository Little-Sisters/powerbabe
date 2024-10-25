import React, { useState } from 'react';
import styled from 'styled-components';
import { useWardrobe } from '../contexts/WardrobeContext';
import { styleSwitchersData } from '../assets/data/iconTabsData';
import StyleSwitcherTabs from './StyleSwitcherIconTabs';
import SkinColorSwitcher from './SkinColorSwitcher';
import { ColorAndStyleSwitcher } from './ColorAndStyleSwitcher';

const MobileSideContentDressup: React.FC = () => {
  const {
    hairstyleData,
    eyestyleData,
    eyebrowstyleData,
    lipstyleData,
    skinColors,
    bottomStyleData,
    topStylesData,
  } = useWardrobe();

  const styleSwitchers = styleSwitchersData(
    skinColors,
    hairstyleData,
    eyestyleData,
    eyebrowstyleData,
    lipstyleData,
    topStylesData,
    bottomStyleData,
  );

  const [activeTab, setActiveTab] = useState(styleSwitchers[0].feature);

  const getActiveSwitcher = () => {
    const activeSwitcher = styleSwitchers.find(
      switcher => switcher.feature === activeTab,
    );
    if (activeSwitcher) {
      if (activeSwitcher.feature === 'skincolor') {
        return (
          <SkinColorSwitcher
            feature={activeSwitcher.feature}
            colors={activeSwitcher.stylesAndColors as string[]}
          />
        );
      } else {
        return (
          <ColorAndStyleSwitcher
            feature={activeSwitcher.feature}
            stylesAndColors={activeSwitcher.stylesAndColors}
          />
        );
      }
    }
    return null;
  };

  return (
    <Wrapper>
      <StyleSwitcherTabs
        styleSwitchers={styleSwitchers}
        activeTab={activeTab}
        onTabClick={setActiveTab}
      />
      <SwitcherInside>
        <SwitcherWrapper>{getActiveSwitcher()}</SwitcherWrapper>
      </SwitcherInside>
    </Wrapper>
  );
};
// Assuming you have styled-components or similar
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const SwitcherInside = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.card},
    ${({ theme }) => theme.primaryLight}
  );
`;
const SwitcherWrapper = styled.div`
  width: 100%;
  max-width: 39rem;
  height: 100%;
`;

export default MobileSideContentDressup;
