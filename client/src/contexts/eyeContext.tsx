import React, { ReactNode, createContext, useContext, useState } from "react";

export interface EyeStyleContextProps {
  currentStyleIndex: number;
  setCurrentStyleIndex: React.Dispatch<React.SetStateAction<number>>;
  currentColorIndex: number;
  setCurrentColorIndex: React.Dispatch<React.SetStateAction<number>>;
  goToNextStyle: () => void;
  goToPreviousStyle: () => void;
  goToNextColor: () => void;
  goToPreviousColor: () => void;
  currentStyleColors: string[];
}

const EyeStyleContext = createContext<EyeStyleContextProps | undefined>(
  undefined
);

export const useEyeStyle = () => {
  const context = useContext(EyeStyleContext);
  if (!context) {
    throw new Error("useEyeStyle must be used within an EyeStyleProvider");
  }
  return context;
};

export const EyeStyleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const eyeStylesAndColors: Record<string, string[]> = {
    style1: ["blue", "green", "brown", "magenta"],
    style2: ["red", "yellow", "purple", "blue"],
    style3: ["cyan", "magenta", "orange", "red"],
  };

  const goToNextStyle = () => {
    const nextStyleIndex = (currentStyleIndex + 1) % eyeStyles.length;
    const nextStyleColors = eyeStylesAndColors[eyeStyles[nextStyleIndex]];

    // Check if the current color exists in the colors of the next style
    const currentColor = currentStyleColors[currentColorIndex];
    const nextColorIndex = nextStyleColors.indexOf(currentColor);

    if (nextColorIndex !== -1) {
      // If the color exists in the next style, set the current color index to that color
      setCurrentStyleIndex(nextStyleIndex);
      setCurrentColorIndex(nextColorIndex);
    } else {
      // If the color does not exist in the next style, just change the style
      setCurrentStyleIndex(nextStyleIndex);
      setCurrentColorIndex(0); // Reset color index when changing styles
    }
  };

 const goToPreviousStyle = () => {
   const previousStyleIndex =
     (currentStyleIndex - 1 + eyeStyles.length) % eyeStyles.length;
   const previousStyleColors =
     eyeStylesAndColors[eyeStyles[previousStyleIndex]];

   // Check if the current color exists in the colors of the previous style
   const currentColor = currentStyleColors[currentColorIndex];
   const previousColorIndex = previousStyleColors.indexOf(currentColor);

   if (previousColorIndex !== -1) {
     // If the color exists in the previous style, set the current color index to that color
     setCurrentStyleIndex(previousStyleIndex);
     setCurrentColorIndex(previousColorIndex);
   } else {
     // If the color does not exist in the previous style, just change the style
     setCurrentStyleIndex(previousStyleIndex);
     setCurrentColorIndex(0); // Reset color index when changing styles
   }
 };

  const goToNextColor = () => {
    setCurrentColorIndex(
      (prevIndex) => (prevIndex + 1) % currentStyleColors!.length
    );
  };

  const goToPreviousColor = () => {
    setCurrentColorIndex(
      (prevIndex) =>
        (prevIndex - 1 + currentStyleColors!.length) %
        currentStyleColors!.length
    );
  };

  const currentStyleColors = eyeStylesAndColors[eyeStyles[currentStyleIndex]];

  const values: EyeStyleContextProps = {
    currentStyleIndex,
    setCurrentStyleIndex,
    currentColorIndex,
    setCurrentColorIndex,
    goToNextStyle,
    goToPreviousStyle,
    goToNextColor,
    goToPreviousColor,
    currentStyleColors
  };

  return (
    <EyeStyleContext.Provider value={values}>
      {children}
    </EyeStyleContext.Provider>
  );
};

export const eyeStyles = ["style1", "style2", "style3"] as const;
