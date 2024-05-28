import React, { createContext, useContext } from 'react';
import { StylesAndColorsData } from '../assets/IStylesAndColors';
import { SHOPtopstyleData } from '../assets/topsData';
import { useLocalStorageState } from '../hooks/useLocalStorage';

interface ShopContextProps {
  SHOPtopStyles: StylesAndColorsData[];
  updatePurchased: (number: string) => void;
}

const ShopContext = createContext<ShopContextProps | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [SHOPtopStyles, setSHOPTopStyles] = useLocalStorageState<
    StylesAndColorsData[]
  >(SHOPtopstyleData, 'topStyles');

  const updatePurchased = (number: string) => {
    setSHOPTopStyles(prevStyles =>
      prevStyles.map(style =>
        style.number === number ? { ...style, purchased: true } : style,
      ),
    );
  };

  return (
    <ShopContext.Provider value={{ SHOPtopStyles, updatePurchased }}>
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
