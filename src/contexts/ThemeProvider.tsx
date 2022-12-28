import { createContext, FC, ReactNode, useState } from 'react';

import { Theme } from 'src/types';

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextProps {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.Light,
  changeTheme: () => {},
});

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.Light);

  const handleChangeTheme = (_theme: Theme) => {
    setTheme(_theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme: handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
