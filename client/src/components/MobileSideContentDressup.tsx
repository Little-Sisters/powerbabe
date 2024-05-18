import React from "react";
import styled from "styled-components";
import { bottomstyleData } from "../assets/bottomData";
import { eyebrowstyleData } from "../assets/eyebrowsData";
import { eyestyleData } from "../assets/eyesData";
import { hairstyleData } from "../assets/hairData";
import { lipstyleData } from "../assets/lipsData";
import { topstyleData } from "../assets/topsData";
import { ColorAndStyleSwitcher } from "./ColorAndStyleSwitcher";

const MobileSideContentDressup: React.FC = () => {
  const styleSwitchers = [
    {
      feature: "hairstyle",
      stylesAndColors: hairstyleData,
    },
    {
      feature: "eyestyle",
      stylesAndColors: eyestyleData,
    },
    {
      feature: "eyebrowstyle",
      stylesAndColors: eyebrowstyleData,
    },
    {
      feature: "lipstyle",
      stylesAndColors: lipstyleData,
    },
    {
      feature: "topstyle",
      stylesAndColors: topstyleData,
    },
    {
      feature: "bottomstyle",
      stylesAndColors: bottomstyleData,
    },
  ];
  return (
    <Wrapper>
      <MobileSwitcherTabs>
        <h1>hair top bottom lips</h1>
      </MobileSwitcherTabs>
      <SwitcherWrapper>
        <ColorAndStyleSwitcher
          feature={"hair"}
          stylesAndColors={hairstyleData}
        />
      </SwitcherWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
width: 100%;
`
const SwitcherWrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`;

const MobileSwitcherTabs = styled.div`
  background-color: white;
  padding: .5rem;
`;

export default MobileSideContentDressup;
