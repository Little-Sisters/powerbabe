import styled from "styled-components";
import { ColorAndStyleSwitcher } from "../components/ColorAndStyleSwitcher";
import { ImageComponent } from "../components/ImageComponent";
import SkinColorSwitcher from "../components/SkinColorSwitcher";
import { useStyleColor } from "../contexts/styleColorContext";
import { bottomstyleData } from "../assets/bottomData";
import { topstyleData } from "../assets/topsData";
import { lipstyleData } from "../assets/lipsData";
import { eyebrowstyleData } from "../assets/eyebrowsData";
import { eyestyleData } from "../assets/eyesData";
import { hairstyleData } from "../assets/hairData";
import { skinColors } from "../assets/bodyData";
import { useEffect } from "react";


function DressingRoomPage() {
  const {
    hairstyle,
    headstyle,
    eyestyle,
    topstyle,
    bottomstyle,
    eyebrowstyle,
    upperbodystyle,
    lowerbodystyle,
    lipstyle,
    setHairstyle,
    setEyestyle,
    setLipstyle,
    setTopstyle,
    setBottomstyle,
    setEyeBrowStyle,
    setUpperBodystyle,
    setLowerBodystyle,
    setHeadstyle,
  } = useStyleColor();

  useEffect(() => {
    setHairstyle(hairstyle.style, hairstyle.color, hairstyle.front);
    setEyestyle(eyestyle.style, eyestyle.color);
    setLipstyle(lipstyle.style, lipstyle.color);
    setTopstyle(topstyle.style, topstyle.color);
    setBottomstyle(bottomstyle.style, bottomstyle.color);
    setEyeBrowStyle(eyebrowstyle.style, eyebrowstyle.color);
    setUpperBodystyle(upperbodystyle.style, upperbodystyle.color);
    setLowerBodystyle(lowerbodystyle.style, lowerbodystyle.color);
    setHeadstyle(headstyle.color);
  }, []);

  const imageComponents = [
    {
      style: hairstyle.style,
      color: hairstyle.color,
      part: "hair",
      zIndex: 9,
      front: hairstyle.front,
    },
    { style: eyestyle.style, color: eyestyle.color, part: "eyes", zIndex: 20 },
    {
      style: eyebrowstyle.style,
      color: eyebrowstyle.color,
      part: "eyebrows",
      zIndex: 7,
    },
    { style: lipstyle.style, color: lipstyle.color, part: "lips", zIndex: 7 },
    { style: topstyle.style, color: topstyle.color, part: "top", zIndex: 21 },
    {
      style: bottomstyle.style,
      color: bottomstyle.color,
      part: "bottoms",
      zIndex: 11,
    },
    {
      style: upperbodystyle.style,
      color: upperbodystyle.color,
      part: "upperbody",
      zIndex: 12,
    },
    {
      style: lowerbodystyle.style,
      color: lowerbodystyle.color,
      part: "lowerbody",
      zIndex: 10,
    },
    {
      style: upperbodystyle.style,
      color: upperbodystyle.color,
      part: "head",
      zIndex: 6,
    },
  ];

  const styleSwitchers = [
    { feature: "hairstyle", stylesAndColors: hairstyleData },
    { feature: "eyestyle", stylesAndColors: eyestyleData },
    { feature: "eyebrowstyle", stylesAndColors: eyebrowstyleData },
    { feature: "lipstyle", stylesAndColors: lipstyleData },
    { feature: "topstyle", stylesAndColors: topstyleData },
    { feature: "bottomstyle", stylesAndColors: bottomstyleData },
  ];

  return (
    <DressingRoomContainer>
      <MainSection>
        {imageComponents.map((component, index) => (
          <ImageComponent
            key={index}
            style={component.style}
            color={component.color}
            part={component.part}
            zIndex={component.zIndex}
            front={component.front}
          />
        ))}
      </MainSection>
      <SideSection>
        <SkinColorSwitcher feature="skin" colors={skinColors} />
        {styleSwitchers.map((switcher, index) => (
          <ColorAndStyleSwitcher
            key={index}
            feature={switcher.feature}
            stylesAndColors={switcher.stylesAndColors}
          />
        ))}
      </SideSection>
    </DressingRoomContainer>
  );
}


const DressingRoomContainer = styled.section`
  display: flex;
  color: #000000;
  height: auto;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
  }
`;

const MainSection = styled.div`
  flex: 1;
  position: relative;
  background-color: #5c5c5c;
  background-size: cover;
  width: 100%;
  height: auto;
  background-position: bottom;
  @media (max-width: 767px) {
    width: 100%;
    height: 400px;
  }
`;

const SideSection = styled.div`
  width: 380px;
  padding: 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.background};
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    flex-direction: row;
  }
`;

export default DressingRoomPage;
