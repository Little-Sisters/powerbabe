import React, { createContext, useContext, useState } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorage';

// Define interfaces for the context
interface StyleColorContextProps {
  hairstyle: { style: string; color: string; front: boolean };
  eyestyle: { style: string; color: string };
  lipstyle: { style: string; color: string };
  topstyle: { style: string; color: string };
  eyebrowstyle: { style: string; color: string };
  bottomstyle: { style: string; color: string };
  upperbodystyle: { style: string; color: string };
  lowerbodystyle: { style: string; color: string };
  headstyle: { color: string };

  temporaryHairstyle: { style: string; color: string; front: boolean };
  temporaryEyestyle: { style: string; color: string };
  temporaryLipstyle: { style: string; color: string };
  temporaryEyebrowstyle: { style: string; color: string };
  temporaryTopstyle: { style: string; color: string };
  temporaryBottomstyle: { style: string; color: string };
  temporaryUpperBodystyle: { style: string; color: string };
  temporaryLowerBodystyle: { style: string; color: string };
  temporaryHeadstyle: { color: string };
}

interface StyleColorContextActions {
  setTemporaryHairstyle: (style: string, color: string, front: boolean) => void;
  setTemporaryEyestyle: (style: string, color: string) => void;
  setTemporaryLipstyle: (style: string, color: string) => void;
  setTemporaryTopstyle: (style: string, color: string) => void;
  setTemporaryEyebrowstyle: (style: string, color: string) => void;
  setTemporaryBottomstyle: (style: string, color: string) => void;
  setTemporaryUpperBodystyle: (style: string, color: string) => void;
  setTemporaryLowerBodystyle: (style: string, color: string) => void;
  setTemporaryHeadstyle: (color: string) => void;
  saveStyles: () => void;
}

// Create context
const StyleColorContext = createContext<
  (StyleColorContextProps & StyleColorContextActions) | undefined
>(undefined);

// Custom hook to use the context
export const useStyleColor = () => {
  const context = useContext(StyleColorContext);
  if (!context) {
    throw new Error('useStyleColor must be used within a StyleColorProvider');
  }
  return context;
};

// Provider component
export const StyleColorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Saved state (persisted in local storage) with initial states as fallback
  const [hairstyle, setHairstyle] = useLocalStorageState(
    { style: '1', color: 'platinum', front: false },
    'hairstyle',
  );
  const [eyestyle, setEyestyle] = useLocalStorageState(
    { style: '1', color: 'blue' },
    'eyestyle',
  );
  const [lipstyle, setLipstyle] = useLocalStorageState(
    { style: '1', color: 'burgundy' },
    'lipstyle',
  );
  const [eyebrowstyle, setEyebrowstyle] = useLocalStorageState(
    { style: '1', color: 'brown' },
    'eyebrowstyle',
  );
  const [topstyle, setTopstyle] = useLocalStorageState(
    { style: '1', color: 'blue' },
    'topstyle',
  );
  const [bottomstyle, setBottomstyle] = useLocalStorageState(
    { style: '1', color: 'blue' },
    'bottomstyle',
  );
  const [upperbodystyle, setUpperBodystyle] = useLocalStorageState(
    { style: '1', color: 'medium' },
    'upperbodystyle',
  );
  const [lowerbodystyle, setLowerBodystyle] = useLocalStorageState(
    { style: '1', color: 'medium' },
    'lowerbodystyle',
  );
  const [headstyle, setHeadstyle] = useLocalStorageState(
    { color: 'medium' },
    'headstyle',
  );

  // Temporary states (initially set to saved values)
  const [temporaryHairstyle, setTemporaryHairstyle] = useState(hairstyle);
  const [temporaryEyestyle, setTemporaryEyestyle] = useState(eyestyle);
  const [temporaryLipstyle, setTemporaryLipstyle] = useState(lipstyle);
  const [temporaryEyebrowstyle, setTemporaryEyebrowstyle] =
    useState(eyebrowstyle);
  const [temporaryTopstyle, setTemporaryTopstyle] = useState(topstyle);
  const [temporaryBottomstyle, setTemporaryBottomstyle] = useState(bottomstyle);
  const [temporaryUpperBodystyle, setTemporaryUpperBodystyle] =
    useState(upperbodystyle);
  const [temporaryLowerBodystyle, setTemporaryLowerBodystyle] =
    useState(lowerbodystyle);
  const [temporaryHeadstyle, setTemporaryHeadstyle] = useState(headstyle);

  // Function to save temporary styles to local storage
  const saveStyles = () => {
    setHairstyle(temporaryHairstyle);
    setEyestyle(temporaryEyestyle);
    setLipstyle(temporaryLipstyle);
    setEyebrowstyle(temporaryEyebrowstyle);
    setTopstyle(temporaryTopstyle);
    setBottomstyle(temporaryBottomstyle);
    setUpperBodystyle(temporaryUpperBodystyle);
    setLowerBodystyle(temporaryLowerBodystyle);
    setHeadstyle(temporaryHeadstyle);
  };

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

    // Temporary values for immediate access
    temporaryHairstyle,
    temporaryEyestyle,
    temporaryLipstyle,
    temporaryEyebrowstyle,
    temporaryTopstyle,
    temporaryBottomstyle,
    temporaryUpperBodystyle,
    temporaryLowerBodystyle,
    temporaryHeadstyle,

    // Methods to update temporary states
    setTemporaryHairstyle: (style, color, front) =>
      setTemporaryHairstyle({ style, color, front }),
    setTemporaryEyestyle: (style, color) =>
      setTemporaryEyestyle({ style, color }),
    setTemporaryLipstyle: (style, color) =>
      setTemporaryLipstyle({ style, color }),
    setTemporaryTopstyle: (style, color) =>
      setTemporaryTopstyle({ style, color }),
    setTemporaryEyebrowstyle: (style, color) =>
      setTemporaryEyebrowstyle({ style, color }),
    setTemporaryBottomstyle: (style, color) =>
      setTemporaryBottomstyle({ style, color }),
    setTemporaryUpperBodystyle: (style, color) =>
      setTemporaryUpperBodystyle({ style, color }),
    setTemporaryLowerBodystyle: (style, color) =>
      setTemporaryLowerBodystyle({ style, color }),
    setTemporaryHeadstyle: color => setTemporaryHeadstyle({ color }),

    saveStyles,
  };

  return (
    <StyleColorContext.Provider value={values}>
      {children}
    </StyleColorContext.Provider>
  );
};
