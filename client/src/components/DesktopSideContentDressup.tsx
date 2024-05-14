import React, { useState } from "react";
import { GiAngryEyes } from "react-icons/gi";
import { ImEye } from "react-icons/im";
import { IoBody } from "react-icons/io5";
import { LuScanFace } from "react-icons/lu";
import { PiDressBold, PiPantsBold, PiTShirtBold } from "react-icons/pi";
import { SlUserFemale } from "react-icons/sl";
import { TbEyeClosed } from "react-icons/tb";
import styled from "styled-components";
import { skinColors } from "../assets/bodyData";
import { bottomstyleData } from "../assets/bottomData";
import { eyebrowstyleData } from "../assets/eyebrowsData";
import { eyestyleData } from "../assets/eyesData";
import { hairstyleData } from "../assets/hairData";
import { lipstyleData } from "../assets/lipsData";
import { topstyleData } from "../assets/topsData";
import { ColorAndStyleSwitcher } from "../components/ColorAndStyleSwitcher";
import SkinColorSwitcher from "./SkinColorSwitcher";

const DesktopSideContentDressup: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("style"); // Default to "style"

  const styleSwitchers = [
    {
      feature: "hairstyle",
      stylesAndColors: hairstyleData,
      icon: <SlUserFemale />,
    },
    {
      feature: "eyestyle",
      stylesAndColors: eyestyleData,
      icon: <ImEye />,
    },
    {
      feature: "eyebrowstyle",
      stylesAndColors: eyebrowstyleData,
      icon: <GiAngryEyes />,
    },
    {
      feature: "lipstyle",
      stylesAndColors: lipstyleData,
      icon: <LuScanFace />,
    },
  ];

  const wardrobeSwitchers = [
    {
      feature: "topstyle",
      stylesAndColors: topstyleData,
      icon: <PiTShirtBold />,
    },
    {
      feature: "bottomstyle",
      stylesAndColors: bottomstyleData,
      icon: <PiPantsBold />,
    },
  ];

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const renderSwitchers = () => {
    if (selectedTab === "style") {
      return (
        <>
          <SwitcherBox>
            <IconBox>
              <IoBody />
            </IconBox>
            <SkinColorSwitcher feature="skin" colors={skinColors} />
          </SwitcherBox>
          {styleSwitchers.map((switcher, index) => (
            <SwitcherBox>
              <IconBox>{switcher.icon}</IconBox>
              <ColorAndStyleSwitcher
                key={index}
                feature={switcher.feature}
                stylesAndColors={switcher.stylesAndColors}
              />
            </SwitcherBox>
          ))}
        </>
      );
    } else {
      return wardrobeSwitchers.map((switcher, index) => (
        <SwitcherBox>
          <IconBox>{switcher.icon}</IconBox>
          <ColorAndStyleSwitcher
            key={index}
            feature={switcher.feature}
            stylesAndColors={switcher.stylesAndColors}
          />
        </SwitcherBox>
      ));
    }
  };

  return (
    <>
      <FlexContainer>
        <Tabs>
          <Tab
            onClick={() => handleTabChange("style")}
            active={selectedTab === "style"}
          >
            <TbEyeClosed />
            <span>Style</span>
          </Tab>
          <Tab
            onClick={() => handleTabChange("wardrobe")}
            active={selectedTab === "wardrobe"}
          >
            <PiDressBold />
            <span>Wardrobe</span>
          </Tab>
        </Tabs>
        <SwitcherContainer>{renderSwitchers()}</SwitcherContainer>
        <Footer>
          <NameBox>
            <p>My name!</p>
            <p> My Status is like pretty good.</p>
          </NameBox>
          <ReadyButton>Ready!</ReadyButton>
        </Footer>
      </FlexContainer>
    </>
  );
};

const Tabs = styled.div`
  display: flex;

`;

interface TabProps {
  active?: boolean;
}

const Tab = styled.div<TabProps>`
  cursor: pointer;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  width: 50%;
  background-color: ${({ active, theme }) =>
    active ? theme.button : "transparent"};
  color: ${({ active }) => (active ? "white" : "black")};
  gap: 1rem;
`;

const Footer = styled.div`
  display: flex;
  padding-top: 1rem;
  gap:1rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const ReadyButton = styled.button`
  border-radius: 50%;
  height: 5rem;
  width: 5.5rem;
`;


const NameBox = styled.div`
  border-radius: 5px;
  background-color: #ffffff;
  padding: 1rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const SwitcherContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.background};
`;

const SwitcherBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;
const IconBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    font-size: 1.7rem;
  }
`;

export default DesktopSideContentDressup;
