import React, { createContext, useContext } from 'react';
import { StylesAndColorsData } from '../assets/IStylesAndColors';
import { SHOPtopstyleData } from '../assets/topsData';
import { SHOPHairStyleData } from '../assets/hairData';
import { useLocalStorageState } from '../hooks/useLocalStorage';

interface ShopContextProps {
  SHOPstyles: Record<string, StylesAndColorsData[]>;
  updatePurchased: (category: string, number: string) => void;
}

const ShopContext = createContext<ShopContextProps | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [SHOPstyles, setSHOPStyles] = useLocalStorageState<
    Record<string, StylesAndColorsData[]>
  >(
    {
      tops: SHOPtopstyleData,
      hair: SHOPHairStyleData,
      // Add other categories here like bottoms, eyes, lips, etc.
    },
    'SHOPstyles',
  );

  const updatePurchased = (category: string, number: string) => {
    setSHOPStyles(prevStyles => ({
      ...prevStyles,
      [category]: prevStyles[category].map(style =>
        style.number === number ? { ...style, purchased: true } : style,
      ),
    }));
  };

  return (
    <ShopContext.Provider value={{ SHOPstyles, updatePurchased }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = (): ShopContextProps => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
