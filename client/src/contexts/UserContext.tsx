import React, { createContext, useContext, useState } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorage';
import { useStyleColor } from './styleColorContext';

// Define interfaces for the context
interface UserContextProps {
  username: string;
  characterName: string;
  ranking: number;
  myStatus: string;
  styles: {
    hairstyle: { style: string; color: string; front: boolean };
    eyestyle: { style: string; color: string };
    lipstyle: { style: string; color: string };
    topstyle: { style: string; color: string };
    eyebrowstyle: { style: string; color: string };
    bottomstyle: { style: string; color: string };
    upperbodystyle: { style: string; color: string };
    lowerbodystyle: { style: string; color: string };
    headstyle: { color: string };
  }; // Using styles directly from StyleColorContext
}

interface UserContextActions {
  setUsername: (username: string) => void;
  setCharacterName: (characterName: string) => void;
  setRanking: (ranking: number) => void;
  setStatus: (characterName: string) => void;
}

// Create context
const UserContext = createContext<
  (UserContextProps & UserContextActions) | undefined
>(undefined);

// Custom hook to use the context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// Provider component
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Using useState for non-style user data
  const [username, setUsername] = useLocalStorageState(
    'username',
    'defaultUser',
  );
  const [myStatus, setStatus] = useLocalStorageState('status', '...');
  const [characterName, setCharacterName] = useState('defaultCharacter');
  const [ranking, setRanking] = useState(100);

  // Accessing styles from StyleColorContext using useStyleColor hook
  const {
    hairstyle,
    eyestyle,
    lipstyle,
    eyebrowstyle,
    topstyle,
    bottomstyle,
    upperbodystyle,
    lowerbodystyle,
    headstyle,
  } = useStyleColor();

  const values: UserContextProps & UserContextActions = {
    username,
    myStatus,
    characterName,
    ranking,
    styles: {
      hairstyle,
      eyestyle,
      lipstyle,
      eyebrowstyle,
      topstyle,
      bottomstyle,
      upperbodystyle,
      lowerbodystyle,
      headstyle,
    },

    setUsername,
    setCharacterName,
    setRanking,
    setStatus,
    // If needed, you can add methods to update styles as well
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
