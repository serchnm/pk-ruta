import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [currentPath, setPath] = useState(window.location.pathname);

  // eslint-disable-next-line
  useEffect(() => {
    const handler = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);
    return () => {
      window.removeEventListener('popstate', handler);
    }
  // eslint-disable-next-line
  },[]);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setPath(to);
  }

  return (
    <NavigationContext.Provider value={{currentPath, navigate}}>
      {children}
    </NavigationContext.Provider>
  )
}

export { NavigationProvider };
export default NavigationContext;