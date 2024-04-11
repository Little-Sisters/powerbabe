import { useState } from "react";
import styled from "styled-components";

interface ColorAndStyleSwitcherProps {
  stylesAndColors: Record<string, string[]>;
}

const ColorAndStyleSwitcher: React.FC<ColorAndStyleSwitcherProps> = ({
  stylesAndColors,
}) => {
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const styleKeys = Object.keys(stylesAndColors);

  const currentStyleColors = stylesAndColors[styleKeys[currentStyleIndex]];

  const goToNextStyle = () => {
    setCurrentStyleIndex((prevIndex) => (prevIndex + 1) % styleKeys.length);
    setCurrentColorIndex(0); // Reset color index when changing styles
  };

  const goToPreviousStyle = () => {
    setCurrentStyleIndex(
      (prevIndex) => (prevIndex - 1 + styleKeys.length) % styleKeys.length
    );
    setCurrentColorIndex(0); // Reset color index when changing styles
  };

  const goToNextColor = () => {
    setCurrentColorIndex(
      (prevIndex) =>
        (prevIndex + 1) % stylesAndColors[styleKeys[currentStyleIndex]].length
    );
  };

  const goToPreviousColor = () => {
    setCurrentColorIndex(
      (prevIndex) =>
        (prevIndex - 1 + stylesAndColors[styleKeys[currentStyleIndex]].length) %
        stylesAndColors[styleKeys[currentStyleIndex]].length
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
