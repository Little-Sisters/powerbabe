import { useEffect, useState } from "react";
import styled from "styled-components";
import { useStyleColor } from "../contexts/styleColorContext";

interface ColorAndStyleSwitcherProps {
  feature: string; // e.g., "hairstyle", "eyestyle", "topstyle"
  stylesAndColors: Record<string, string[]>;
}

const ColorAndStyleSwitcher: React.FC<ColorAndStyleSwitcherProps> = ({
  feature,
  stylesAndColors,
}) => {
  const {
    hairstyle,
    eyestyle,
    topstyle,
    setEyestyle,
    setHairstyle,
    setTopstyle /* Add more features as needed */,
  } = useStyleColor();

  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const styleKeys = Object.keys(stylesAndColors);
  const currentStyleColors = stylesAndColors[styleKeys[currentStyleIndex]];

  useEffect(() => {
    // Set initial values when component mounts
    switch (feature) {
      case "hairstyle":
        setCurrentStyle(styleKeys[0], currentStyleColors[0]);
        break;
      case "eyestyle":
        setCurrentStyle(styleKeys[0], currentStyleColors[0]);
        break;
      case "topstyle":
        setCurrentStyle(styleKeys[0], currentStyleColors[0]);
        break;
      // Add more features as needed
      default:
        break;
    }
  }, []);

  const setCurrentStyle = (style: string, color: string) => {
    switch (feature) {
      case "hairstyle":
        setHairstyle(style, color);
        break;
      case "eyestyle":
        setEyestyle(style, color);
        break;
      case "topstyle":
        setTopstyle(style, color);
        break;
      // Add more features as needed
      default:
        break;
    }
  };

  const goToNextStyle = () => {
    setCurrentStyleIndex((prevIndex) => (prevIndex + 1) % styleKeys.length);
    setCurrentColorIndex(0); // Reset color index when changing styles
    setCurrentStyle(styleKeys[currentStyleIndex], currentStyleColors[0]);
  };

  const goToPreviousStyle = () => {
    setCurrentStyleIndex(
      (prevIndex) => (prevIndex - 1 + styleKeys.length) % styleKeys.length
    );
    setCurrentColorIndex(0); // Reset color index when changing styles
    setCurrentStyle(styleKeys[currentStyleIndex], currentStyleColors[0]);
  };

  const goToNextColor = () => {
    setCurrentColorIndex(
      (prevIndex) =>
        (prevIndex + 1) % stylesAndColors[styleKeys[currentStyleIndex]].length
    );
    setCurrentStyle(
      styleKeys[currentStyleIndex],
      currentStyleColors[currentColorIndex]
    );
  };

  const goToPreviousColor = () => {
    setCurrentColorIndex(
      (prevIndex) =>
        (prevIndex - 1 + stylesAndColors[styleKeys[currentStyleIndex]].length) %
        stylesAndColors[styleKeys[currentStyleIndex]].length
    );
    setCurrentStyle(
      styleKeys[currentStyleIndex],
      currentStyleColors[currentColorIndex]
    );
  };

  return (
    <Switcher>
      <SwitcherContentWrapper>
        <p>{feature} </p>
        <PickerBox>
          <button onClick={goToPreviousStyle}>Prev Style</button>
          <div>
            <span>{styleKeys[currentStyleIndex]}</span>
          </div>
          <button onClick={goToNextStyle}>Next Style</button>
        </PickerBox>
        <PickerBox>
          <button onClick={goToPreviousColor}>Prev Color</button>
          <div>
            <span>{currentStyleColors[currentColorIndex]}</span>
          </div>
          <button onClick={goToNextColor}>Next Color</button>
        </PickerBox>

        {/* Display the current style and color combination */}
        <p>Available Colors:</p>
        <ul>
          {currentStyleColors.map((color, index) => (
            <li key={index}>{color}</li>
          ))}
        </ul>
      </SwitcherContentWrapper>
    </Switcher>
  );
};

const Switcher = styled.div`
  background: ${({ theme }) => theme.primaryLight};
  width: 250px;
  padding: 1rem;
  margin-bottom:1rem;
  text-align: center;
`;
const SwitcherContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap:1rem;
  justify-content: space-between;
`;

const PickerBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    font-size: 10px;
  }
`;

export default ColorAndStyleSwitcher;
