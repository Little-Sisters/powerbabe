import styled from "styled-components";
import { skinColors } from "../assets/bodyData";
import { eyebrowstyleData } from "../assets/eyebrowsData";
import { eyestyleData } from "../assets/eyesData";
import { hairstyleData } from "../assets/hairData";
import { lipstyleData } from "../assets/lipsData";
import { ColorAndStyleSwitcher } from "./ColorAndStyleSwitcher";
import {
  FlexContainer,
  SideContentFooter,
  SwitcherContainer,
} from "./DesktopSideContentDressupWardrobe";
import SkinColorSwitcher from "./SkinColorSwitcher";

const DesktopSideContentDressupStyle: React.FC = () => {
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
  ];

  const renderSwitchers = () => {
    return (
      <>
        <SkinColorSwitcher feature="skin" colors={skinColors} />
        {styleSwitchers.map((switcher, index) => (
          <ColorAndStyleSwitcher
            key={index}
            feature={switcher.feature}
            stylesAndColors={switcher.stylesAndColors}
          />
        ))}
      </>
    );
  };

  return (
    <FlexContainer>
      <SideSectionTitle>Style</SideSectionTitle>
      <SwitcherContainer>{renderSwitchers()}</SwitcherContainer>
      <SideContentFooter></SideContentFooter>
    </FlexContainer>
  );
};

export const SideSectionTitle = styled.h2`
  margin: 0; 
  text-align: center;
  color: #ffffff;
`;

export default DesktopSideContentDressupStyle;
