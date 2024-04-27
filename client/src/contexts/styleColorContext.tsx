import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorage";

interface StyleColorContextProps {
  hairstyle: { style: string; color: string , front:boolean };
  eyestyle: { style: string; color: string };
  lipstyle: { style: string; color: string };
  topstyle: { style: string; color: string };
  eyebrowstyle: { style: string; color: string };
  bottomstyle: { style: string; color: string };
  upperbodystyle: { style: string; color: string };
  lowerbodystyle: { style: string; color: string };
  headstyle: { color: string };
  // Add more features as needed
}

interface StyleColorContextActions {
  setHairstyle: (style: string, color: string, front:boolean) => void;
  setEyestyle: (style: string, color: string) => void;
  setLipstyle: (style: string, color: string) => void;
  setTopstyle: (style: string, color: string) => void;
  setEyeBrowStyle: (style: string, color: string) => void;
  setBottomstyle: (style: string, color: string) => void;
  setUpperBodystyle: (style: string, color: string) => void;
  setLowerBodystyle: (style: string, color: string) => void;
  setHeadstyle: (color: string) => void;
  // Add more setter functions as needed
}

const StyleColorContext = createContext<
  (StyleColorContextProps & StyleColorContextActions) | undefined
>(undefined);

export const useStyleColor = () => {
  const context = useContext(StyleColorContext);
  if (!context) {
    throw new Error("useStyleColor must be used within a StyleColorProvider");
  }
  return context;
};

export const StyleColorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [hairstyle, setHairstyle] = useLocalStorageState(
    {
      style: "1",
      color: "platinum",
      front: false,
    },
    "hairstyle"
  );
  const [eyestyle, setEyestyle] = useLocalStorageState(
    { style: "1", color: "blue" },
    "eyestyle"
  );
  const [lipstyle, setLipstyle] = useLocalStorageState(
    { style: "1", color: "burgundy" },
    "lipstyle"
  );
  const [eyebrowstyle, setEyeBrowstyle] = useLocalStorageState(
    { style: "1", color: "brown" },
    "eyebrowstyle"
  );
  const [topstyle, setTopstyle] = useLocalStorageState(
    { style: "1", color: "blue" },
    "topstyle"
  );
  const [bottomstyle, setBottomstyle] = useLocalStorageState(
    { style: "1", color: "blue" },
    "bottomstyle"
  );
  const [upperbodystyle, setUpperBodystyle] = useLocalStorageState(
    { style: "1", color: "medium" },
    "upperbodystyle"
  );
  const [lowerbodystyle, setLowerBodystyle] = useLocalStorageState(
    { style: "1", color: "medium" },
    "lowerbodystyle"
  );
  const [headstyle, setHeadstyle] = useLocalStorageState(
    { color: "medium" },
    "headstyle"
  );


  // Initialize other features as needed

  const values: StyleColorContextProps & StyleColorContextActions = {
    hairstyle,
    eyestyle,
    lipstyle,
    topstyle,
    eyebrowstyle,
    bottomstyle,
    upperbodystyle,
    lowerbodystyle,
    headstyle,
    setHairstyle: (style, color, front) =>
      setHairstyle({ style, color, front }),
    setEyestyle: (style, color) => setEyestyle({ style, color }),
    setLipstyle: (style, color) => setLipstyle({ style, color }),
    setEyeBrowStyle: (style, color) => setEyeBrowstyle({ style, color }),
    setTopstyle: (style, color) => setTopstyle({ style, color }),
    setBottomstyle: (style, color) => setBottomstyle({ style, color }),
    setUpperBodystyle: (style, color) => setUpperBodystyle({ style, color }),
    setLowerBodystyle: (style, color) => setLowerBodystyle({ style, color }),
    setHeadstyle: (color) => setHeadstyle({ color }),
    // Add more setter functions as needed
  };

  return (
    <StyleColorContext.Provider value={values}>
      {children}
    </StyleColorContext.Provider>
  );
};