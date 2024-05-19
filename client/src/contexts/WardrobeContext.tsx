// WardrobeContext.tsx
import React, { createContext, useContext } from "react";
import { StylesAndColorsData } from "../assets/IStylesAndColors";
import { skinColors } from "../assets/bodyData";
import { bottomstyleData } from "../assets/bottomData";
import { eyebrowstyleData } from "../assets/eyebrowsData";
import { eyestyleData } from "../assets/eyesData";
import { hairstyleData } from "../assets/hairData";
import { lipstyleData } from "../assets/lipsData";
import { topstyleData } from "../assets/topsData";
import { useLocalStorageState } from "../hooks/useLocalStorage";


interface WardrobeContextProps {
  hairstyleData: StylesAndColorsData[];
  eyestyleData: StylesAndColorsData[];
  eyebrowstyleData: StylesAndColorsData[];
  lipstyleData: StylesAndColorsData[];
  skinColors: string[];
  bottomStyleData: StylesAndColorsData[];
  topStylesData: StylesAndColorsData[];
  addToWardrobe: (type: string, item: StylesAndColorsData) => void;
}

const WardrobeContext = createContext<WardrobeContextProps | undefined>(
  undefined
);

export const WardrobeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [hairStyles, setHairStyles] = useLocalStorageState<
    StylesAndColorsData[]
  >(hairstyleData, "hairStyles");
  const [eyeStyles, setEyeStyles] = useLocalStorageState<StylesAndColorsData[]>(
    eyestyleData,
    "eyeStyles"
  );
  const [eyebrowStyles, setEyebrowStyles] = useLocalStorageState<
    StylesAndColorsData[]
  >(eyebrowstyleData, "eyebrowStyles");
  const [lipStyles, setLipStyles] = useLocalStorageState<StylesAndColorsData[]>(
    lipstyleData,
    "lipStyles"
  );
  const [bottomStyles, setBottomStyles] = useLocalStorageState<
    StylesAndColorsData[]
  >(bottomstyleData, "bottomStyles");
  const [topStyles, setTopStyles] = useLocalStorageState<StylesAndColorsData[]>(
    topstyleData,
    "topStyles"
  );
  const [skinColorOptions] = useLocalStorageState<string[]>(
    skinColors,
    "skinColors"
  );

  const addToWardrobe = (type: string, item: StylesAndColorsData) => {
    item.purchased = true;
    switch (type) {
      case "hair":
        setHairStyles([...hairStyles, item]);
        break;
      case "eyes":
        setEyeStyles([...eyeStyles, item]);
        break;
      case "eyebrows":
        setEyebrowStyles([...eyebrowStyles, item]);
        break;
      case "lips":
        setLipStyles([...lipStyles, item]);
        break;
      case "bottom":
        setBottomStyles([...bottomStyles, item]);
        break;
      case "top":
        setTopStyles([...topStyles, item]);
        break;
      default:
        break;
    }
  };

  return (
    <WardrobeContext.Provider
      value={{
        hairstyleData: hairStyles,
        eyestyleData: eyeStyles,
        eyebrowstyleData: eyebrowStyles,
        lipstyleData: lipStyles,
        skinColors: skinColorOptions,
        bottomStyleData: bottomStyles,
        topStylesData: topStyles,
        addToWardrobe,
      }}
    >
      {children}
    </WardrobeContext.Provider>
  );
};

export const useWardrobe = (): WardrobeContextProps => {
  const context = useContext(WardrobeContext);
  if (!context) {
    throw new Error("useWardrobe must be used within a WardrobeProvider");
  }
  return context;
};