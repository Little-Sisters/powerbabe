import { createContext, useContext, useState } from "react";

interface StyleColorContextProps {
  hairstyle: { style: string; color: string };
  eyestyle: { style: string; color: string };
  topstyle: { style: string; color: string };
  // Add more features as needed
}

interface StyleColorContextActions {
  setHairstyle: (style: string, color: string) => void;
  setEyestyle: (style: string, color: string) => void;
  setTopstyle: (style: string, color: string) => void;
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
  const [hairstyle, setHairstyle] = useState({ style: "", color: "" });
  const [eyestyle, setEyestyle] = useState({ style: "", color: "" });
  const [topstyle, setTopstyle] = useState({ style: "", color: "" });
  // Initialize other features as needed

  const values: StyleColorContextProps & StyleColorContextActions = {
    hairstyle,
    eyestyle,
    topstyle,
    setHairstyle: (style, color) => setHairstyle({ style, color }),
    setEyestyle: (style, color) => setEyestyle({ style, color }),
    setTopstyle: (style, color) => setTopstyle({ style, color }),
    // Add more setter functions as needed
  };

  return (
    <StyleColorContext.Provider value={values}>
      {children}
    </StyleColorContext.Provider>
  );
};
