import { useState } from "react";
import styled from "styled-components";
import { useStyleColor } from "../contexts/eyeContext";


interface ColorAndStyleSwitcherProps {
  feature: string; // e.g., "hairstyle", "eyestyle", "topstyle"
  stylesAndColors: Record<string, string[]>;
}

const ColorAndStyleSwitcher: React.FC<ColorAndStyleSwitcherProps> = ({
  feature,
  stylesAndColors,
}) => {
  const { hairstyle, eyestyle, topstyle, setEyestyle, setHairstyle, setTopstyle /* Add more features as needed */ } =
    useStyleColor();

  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const styleKeys = Object.keys(stylesAndColors);
  const currentStyleColors = stylesAndColors[styleKeys[currentStyleIndex]];

  const setCurrentStyle = (style: string, color: string) => {
    switch (feature) {
      case "hairstyle":
        setHairstyle({ style, color });
        break;
      case "eyestyle":
        setEyestyle({ style, color });
        break;
      case "topstyle":
        setTopstyle({ style, color });
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
    <div>
      <div>
        <h2>Current Style: {styleKeys[currentStyleIndex]}</h2>
        <button onClick={goToPreviousStyle}>Previous Style</button>
        <button onClick={goToNextStyle}>Next Style</button>
        <h2>Current Color: {currentStyleColors[currentColorIndex]}</h2>
        <button onClick={goToPreviousColor}>Previous Color</button>
        <button onClick={goToNextColor}>Next Color</button>
        {/* Display the current style and color combination */}
        <h2>Available Colors:</h2>
        <ul>
          {currentStyleColors.map((color, index) => (
            <li key={index}>{color}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ColorAndStyleSwitcher;
