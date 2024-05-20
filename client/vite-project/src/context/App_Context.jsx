import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create the provider component
const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    // Your state here
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
