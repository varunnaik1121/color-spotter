import { createContext, useContext, useState } from 'react';
const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const AppContext = ({ children }) => {
  const [name, setName] = useState('varun');
  return (
    <GlobalContext.Provider value={{ name }}>{children}</GlobalContext.Provider>
  );
};
