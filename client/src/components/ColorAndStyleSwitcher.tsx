import { useEffect, useState } from "react";
import styled from "styled-components";
import { useStyleColor } from "../contexts/styleColorContext";

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
    setUpperBodystyle
    /* Add more features as needed */
  } = useStyleColor();

  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const styleKeys = Object.keys(stylesAndColors);

  useEffect(() => {
    setCurrentStyle(styleKeys[currentStyleIndex], currentColorIndex);
  }, [currentStyleIndex, currentColorIndex]);

 const setCurrentStyle = (styleKey: string, colorIndex: number) => {
   const currentPoseStyles = stylesAndColors[styleKey];
   const currentPose = currentPoseStyles[0]; // Get the first pose
   const colors = currentPose.colors;
   const currentColor = colors[currentColorIndex];

   // Check if the current pose has the pose property defined
   if (currentPose.pose !== undefined) {
     // Set front to true if pose attribute exists, otherwise false
     const front = currentPose.pose !== undefined;

     // Handle setting style based on the pose property
     switch (feature) {
       case "topstyle":
         setUpperBodystyle(currentPose.pose.toString(), upperbodystyle.color);
         setTopstyle(styleKey, currentColor);
         break;
       case "bottomstyle":
         setLowerBodystyle(currentPose.pose.toString(), lowerbodystyle.color);
         setBottomstyle(styleKey, currentColor);
         break;
       case "hairstyle":
         setHairstyle(styleKey, currentColor, front);
         break;
       // Add more features as needed
       default:
         break;
     }
   } else {
     // Handle setting style without the pose property
     switch (feature) {
       case "hairstyle":
         setHairstyle(styleKey, currentColor, false);
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
   }

   // Check if the next style contains the current color
   const nextStyleKey = styleKeys[(currentStyleIndex + 1) % styleKeys.length];
   const nextColors = stylesAndColors[nextStyleKey][0].colors;
   const nextColorIndex = nextColors.indexOf(currentColor);

   if (nextColorIndex === -1) {
     // If the color doesn't exist in the next style, set the color index to 0
     setCurrentColorIndex(0);
   } else {
     // If the color exists in the next style, set the color index to its position
     setCurrentColorIndex(nextColorIndex);
   }
 };

  const goToNextStyle = () => {
    const nextStyleIndex = (currentStyleIndex + 1) % styleKeys.length;
    setCurrentStyleIndex(nextStyleIndex);
  };

  const goToPreviousStyle = () => {
    const prevStyleIndex =
      (currentStyleIndex - 1 + styleKeys.length) % styleKeys.length;
    setCurrentStyleIndex(prevStyleIndex);
  };

  const goToNextColor = () => {
    const colors = stylesAndColors[styleKeys[currentStyleIndex]][0].colors;
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const goToPreviousColor = () => {
    const colors = stylesAndColors[styleKeys[currentStyleIndex]][0].colors;
    setCurrentColorIndex((prevIndex) =>
      prevIndex === 0 ? colors.length - 1 : prevIndex - 1
    );
  };

  return (
    <Switcher>
      <SwitcherContentWrapper>
        <p>{feature}</p>
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
            <span>
              {
                stylesAndColors[styleKeys[currentStyleIndex]][0].colors[
                  currentColorIndex
                ]
              }
            </span>
          </div>
          <button onClick={goToNextColor}>Next Color</button>
        </PickerBox>
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
  border-radius:5px;
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
  border-radius: 5px;
  justify-content: space-between;
  button {
    font-size: 8px;
    padding: 3px;
    border-radius: 5px;
  }
`;
