import React from "react";
import { ColorAndStyleSwitcher } from "../components/ColorAndStyleSwitcher";
import { hairstyleData } from "../assets/hairData";
import { eyestyleData } from "../assets/eyesData";
import { eyebrowstyleData } from "../assets/eyebrowsData";
import { lipstyleData } from "../assets/lipsData";
import { topstyleData } from "../assets/topsData";
import { bottomstyleData } from "../assets/bottomData";
import SkinColorSwitcher from "./SkinColorSwitcher";
import { skinColors } from "../assets/bodyData";
import styled from "styled-components";


const DesktopSideContentDressup: React.FC = () => {
  const styleSwitchers = [
    { feature: "hairstyle", stylesAndColors: hairstyleData },
    { feature: "eyestyle", stylesAndColors: eyestyleData },
    { feature: "eyebrowstyle", stylesAndColors: eyebrowstyleData },
    { feature: "lipstyle", stylesAndColors: lipstyleData },
    { feature: "topstyle", stylesAndColors: topstyleData },
    { feature: "bottomstyle", stylesAndColors: bottomstyleData },
  ];

  return (
    <>
      <SwitcherBox>
        <SkinColorSwitcher feature="skin" colors={skinColors} />
        {styleSwitchers.map((switcher, index) => (
          <ColorAndStyleSwitcher
            key={index}
            feature={switcher.feature}
            stylesAndColors={switcher.stylesAndColors}
          />
        ))}
      </SwitcherBox>
    </>
  );
};

const SwitcherBox = styled.div`
padding: 1rem;
width: 100%;
height: 100%;
background-color: ${({ theme }) => theme.background};;
`;

export default DesktopSideContentDressup;
