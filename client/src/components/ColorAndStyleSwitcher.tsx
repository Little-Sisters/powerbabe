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
    bottomstyle,
    setEyestyle,
    setHairstyle,
    setTopstyle,
    setBottomstyle,
    setEyeBrowStyle,
    setLipstyle
    /* Add more features as needed */
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
      case "lipstyle":
        setCurrentStyle(styleKeys[0], currentStyleColors[0]);
        break;
      case "eyebrowstyle":
        setCurrentStyle(styleKeys[0], currentStyleColors[0]);
        break;
      case "topstyle":
        setCurrentStyle(styleKeys[0], currentStyleColors[0]);
        break;
      case "bottomstyle":
        setCurrentStyle(styleKeys[0], currentStyleColors[0]);
        break;
      // Add more features as needed
      default:
        break;
    }
  }, []);

  //** */

  const setCurrentStyle = (style: string, color: string) => {
    switch (feature) {
      case "hairstyle":
        setHairstyle(style, color);
        break;
      case "eyestyle":
        setEyestyle(style, color);
        break;
      case "lipstyle":
        setLipstyle(style, color);
        break;
      case "eyebrowstyle":
        setEyeBrowStyle(style, color);
        break;
      case "topstyle":
        setTopstyle(style, color);
        break;
      case "bottomstyle":
        setBottomstyle(style, color);
        break;
      // Add more features as needed
      default:
        break;
    }
  };

  const goToNextStyle = () => {
    const nextStyleIndex = (currentStyleIndex + 1) % styleKeys.length;
    const nextStyleKey = styleKeys[nextStyleIndex];
    const nextStyleColors = stylesAndColors[nextStyleKey];

    // Check if the current color is present in the next style's colors
    const currentColor = currentStyleColors[currentColorIndex];
    const isCurrentColorInNextStyle = nextStyleColors.includes(currentColor);

    setCurrentStyleIndex(nextStyleIndex);
    setCurrentColorIndex(
      isCurrentColorInNextStyle ? nextStyleColors.indexOf(currentColor) : 0
    );
    setCurrentStyle(
      nextStyleKey,
      isCurrentColorInNextStyle ? currentColor : nextStyleColors[0]
    );
  };

  const goToPreviousStyle = () => {
    const prevStyleIndex =
      (currentStyleIndex - 1 + styleKeys.length) % styleKeys.length;
    const prevStyleKey = styleKeys[prevStyleIndex];
    const prevStyleColors = stylesAndColors[prevStyleKey];

    // Check if the current color is present in the previous style's colors
    const currentColor = currentStyleColors[currentColorIndex];
    const isCurrentColorInPrevStyle = prevStyleColors.includes(currentColor);

    setCurrentStyleIndex(prevStyleIndex);
    setCurrentColorIndex(
      isCurrentColorInPrevStyle ? prevStyleColors.indexOf(currentColor) : 0
    );
    setCurrentStyle(
      prevStyleKey,
      isCurrentColorInPrevStyle ? currentColor : prevStyleColors[0]
    );
  };

  const goToNextColor = () => {
    const colors = stylesAndColors[styleKeys[currentStyleIndex]];
    console.log(colors); // Just for debugging, to check if colors are retrieved correctly

    setCurrentColorIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % colors.length;
      return colors.includes(currentStyleColors[nextIndex]) ? nextIndex : 0;
    });

    // Calculate nextIndex again because it's needed outside of setCurrentColorIndex
    const nextIndex = (currentColorIndex + 1) % colors.length;

    setCurrentStyle(styleKeys[currentStyleIndex], colors[nextIndex]);
  };

  const goToPreviousColor = () => {
    const colors = stylesAndColors[styleKeys[currentStyleIndex]];

    setCurrentColorIndex((prevIndex) => {
      const prevIndexWrapped = (prevIndex - 1 + colors.length) % colors.length;
      return colors.includes(currentStyleColors[prevIndexWrapped])
        ? prevIndexWrapped
        : 0;
    });

    // Calculate prevIndex again because it's needed outside of setCurrentColorIndex
    const prevIndex = (currentColorIndex - 1 + colors.length) % colors.length;

    setCurrentStyle(styleKeys[currentStyleIndex], colors[prevIndex]);
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

        {/* Display the current style and color combination
         <p>Available Colors:</p>
        <div>
          {currentStyleColors.map((color, index) => (
            <span key={index}>{color + ' '}</span>
          ))}
        </div>      
        */}
      </SwitcherContentWrapper>
    </Switcher>
  );
};

const Switcher = styled.div`
  z-index: 1000;
  background: ${({ theme }) => theme.primaryLight};
  width: 250px;
  padding: .5rem;
  margin-bottom: 1rem;
  font-size: 12px;
  text-align: center;
`;
const SwitcherContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  justify-content: space-between;
`;

const PickerBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    font-size: 8px;
    padding: 3px;
  }
`;

export default ColorAndStyleSwitcher;
