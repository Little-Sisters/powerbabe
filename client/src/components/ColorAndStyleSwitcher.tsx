import { useEffect, useState } from "react";
import styled from "styled-components";
import { useStyleColor } from "../contexts/styleColorContext";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ButtonWithIcon from "./SwitcherButtons";
import SwitcherButton from "./SwitcherButtons";

interface ColorAndStyleSwitcherProps {
  feature: string; // e.g., "hairstyle", "eyestyle", "topstyle"
  stylesAndColors: Record<string, { colors: string[]; pose?: number }[]>;
}
export const ColorAndStyleSwitcher: React.FC<ColorAndStyleSwitcherProps> = ({
  feature,
  stylesAndColors,
}) => {
  const {
    upperbodystyle,
    lowerbodystyle,
    setEyestyle,
    setHairstyle,
    setTopstyle,
    setBottomstyle,
    setEyeBrowStyle,
    setLipstyle,
    setLowerBodystyle,
    setUpperBodystyle,
    /* Add more features as needed */
  } = useStyleColor();

  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const styleKeys = Object.keys(stylesAndColors);

  useEffect(() => {
    setCurrentStyle(styleKeys[currentStyleIndex], currentColorIndex);
  }, [currentStyleIndex, currentColorIndex]);

  const setCurrentStyle = (styleKey: string, colorIndex: number) => {
    const currentStyle = stylesAndColors[styleKey][0];
    const colors = currentStyle.colors;
    const currentColor = colors[colorIndex];

    // Updating the respective feature based on 'feature' prop
    switch (feature) {
      case "topstyle":
        setUpperBodystyle(currentStyle.pose!.toString(), upperbodystyle.color);
        setTopstyle(styleKey, currentColor);
        break;
      case "bottomstyle":
        setLowerBodystyle(currentStyle.pose!.toString(), lowerbodystyle.color);
        setBottomstyle(styleKey, currentColor);
        break;
      case "hairstyle":
        setHairstyle(styleKey, currentColor, currentStyle.pose !== undefined);
        break;
      case "eyestyle":
        setEyestyle(styleKey, currentColor);
        break;
      case "lipstyle":
        setLipstyle(styleKey, currentColor);
        break;
      case "eyebrowstyle":
        setEyeBrowStyle(styleKey, currentColor);
        break;
      default:
        break;
    }
  };

  const updateColorIndexForNewStyle = (newStyleKey: any) => {
    const currentColor =
      stylesAndColors[styleKeys[currentStyleIndex]][0].colors[
        currentColorIndex
      ];
    const newColors = stylesAndColors[newStyleKey][0].colors;
    const newColorIndex = newColors.indexOf(currentColor);
    setCurrentColorIndex(newColorIndex !== -1 ? newColorIndex : 0);
  };

  const goToNextStyle = () => {
    const nextStyleIndex = (currentStyleIndex + 1) % styleKeys.length;
    updateColorIndexForNewStyle(styleKeys[nextStyleIndex]);
    setCurrentStyleIndex(nextStyleIndex);
  };

  const goToPreviousStyle = () => {
    const prevStyleIndex =
      (currentStyleIndex - 1 + styleKeys.length) % styleKeys.length;
    updateColorIndexForNewStyle(styleKeys[prevStyleIndex]);
    setCurrentStyleIndex(prevStyleIndex);
  };
  const goToNextColor = () => {
    const colors = stylesAndColors[styleKeys[currentStyleIndex]][0].colors;
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    console.log(currentColorIndex);
  };

  const goToPreviousColor = () => {
    const colors = stylesAndColors[styleKeys[currentStyleIndex]][0].colors;
    setCurrentColorIndex(
      (prevIndex) => (prevIndex - 1 + colors.length) % colors.length
    );
  };
  return (
    <Switcher>
      <SwitcherContentWrapper>
        <p>{feature}</p>
        <PickerBox>
          <SwitcherButton onClick={goToPreviousStyle} direction='prev' />
          <div>
            <span>{styleKeys[currentStyleIndex]}</span>
          </div>
          <SwitcherButton onClick={goToNextStyle} direction='next' />
        </PickerBox>
        <PickerBox>
          <SwitcherButton onClick={goToPreviousColor} direction='prev' />
          <div>
            <span>
              {
                stylesAndColors[styleKeys[currentStyleIndex]][0].colors[
                  currentColorIndex
                ]
              }
            </span>
          </div>
          <SwitcherButton onClick={goToNextColor} direction='next' />
        </PickerBox>
        <span>
          {/* Map through the colors array for the current style and display each color */}
          {stylesAndColors[styleKeys[currentStyleIndex]][0].colors.map(
            (color, index) => (
              <span key={index} style={{ backgroundColor: color }} />
            )
          )}
        </span>
      </SwitcherContentWrapper>
    </Switcher>
  );
};

export const Switcher = styled.div`
  z-index: 1000;
  background: ${({ theme }) => theme.primaryLight};
  width: 250px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  font-size: 12px;
  text-align: center;
`;
export const SwitcherContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
`;

export const PickerBox = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  border-radius: 1rem;
  justify-content: space-between;
`;
