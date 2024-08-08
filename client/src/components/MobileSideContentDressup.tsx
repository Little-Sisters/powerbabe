import React, { useState } from 'react';
import styled from 'styled-components';
import { StylesAndColorsData } from '../assets/IStylesAndColors';
import BottomsIcon from '../assets/icons/BottomsIcon';
import SkinIcon from '../assets/icons/SkinIcon';
import TopIcon from '../assets/icons/TopIcon';
import EyeBrowIcon from '../assets/icons/eyebrowstyle';
import EyeIcon from '../assets/icons/eyestyle';
import HairIcon from '../assets/icons/hairstyle';
import LipsIcon from '../assets/icons/lipsIcon';
import { ColorAndStyleSwitcher } from './ColorAndStyleSwitcher';
import SkinColorSwitcher from './SkinColorSwitcher';
import { useWardrobe } from '../contexts/WardrobeContext';

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
  const styleSwitchers = [
    {
      feature: 'skincolor',
      stylesAndColors: skinColors, // Add skin color data if available
      icon: <SkinIcon color="#000000" />,
    },
    {
      feature: 'hairstyle',
      stylesAndColors: hairstyleData,
      icon: <HairIcon color="#000000" />,
    },
    {
      feature: 'eyestyle',
      stylesAndColors: eyestyleData,
      icon: <EyeIcon color="#000000" />,
    },
    {
      feature: 'eyebrowstyle',
      stylesAndColors: eyebrowstyleData,
      icon: <EyeBrowIcon color="#000000" />,
    },
    {
      feature: 'lipstyle',
      stylesAndColors: lipstyleData,
      icon: <LipsIcon color="#000000" />,
    },
    {
      feature: 'topstyle',
      stylesAndColors: topStylesData,
      icon: <TopIcon color="#000000" />,
    },
    {
      feature: 'bottomstyle',
      stylesAndColors: bottomStyleData,
      icon: <BottomsIcon color="#000000" />,
    },
  ];

  const [activeTab, setActiveTab] = useState(styleSwitchers[0].feature);

  const handleTabClick = (feature: string) => {
    setActiveTab(feature);
  };

  const getActiveSwitcher = () => {
    const activeSwitcher = styleSwitchers.find(
      switcher => switcher.feature === activeTab,
    );
    if (activeSwitcher) {
      if (activeSwitcher.feature === 'skincolor') {
        // Render a different kind of switcher for skin color
        return (
          <SkinColorSwitcher
            feature={activeSwitcher.feature}
            colors={activeSwitcher.stylesAndColors as string[]} // Assuming skinColors is a string array
          />
        );
      } else {
        return (
          <ColorAndStyleSwitcher
            feature={activeSwitcher.feature}
            stylesAndColors={
              activeSwitcher.stylesAndColors as StylesAndColorsData[]
            }
          />
        );
      }
    }
    return null;
  };

  return (
    <Wrapper>
      <TabsWrapper>
        <MobileSwitcherTabs>
          {styleSwitchers.map(switcher => (
            <Tab
              key={switcher.feature}
              isActive={activeTab === switcher.feature}
              onClick={() => handleTabClick(switcher.feature)}
            >
              {switcher.icon}
            </Tab>
          ))}
        </MobileSwitcherTabs>
      </TabsWrapper>
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

const TabsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

const MobileSwitcherTabs = styled.div`
  display: flex;
  max-width: 39rem;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  height: 3rem;
  justify-content: space-around;
  box-shadow:
    0px 2px 4px rgba(0, 0, 0, 0.3),
    0px 4px -4px rgba(0, 0, 0, 0.3); /* Top and bottom box shadow */
`;

const Tab = styled.div<{ isActive: boolean }>`
  width: calc(100% / 7);
  padding: 5px;
  cursor: pointer;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.button : 'transparent'};
  color: ${({ isActive }) => (isActive ? 'black' : 'white')};
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
