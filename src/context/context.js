import { createContext, useContext, useState } from 'react';
import { data } from '../data/data';
const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const AppContext = ({ children }) => {
  const [isMainMenu, setIsMainMenu] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(data[0]);

  return (
    <GlobalContext.Provider
      value={{
        isMainMenu,
        setIsMainMenu,
        isOpen,
        setIsOpen,
        selectedLevel,
        setSelectedLevel,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
