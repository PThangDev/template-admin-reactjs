import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { FC, ReactNode } from 'react';

import customThemes from './customThemes';
import globalStyles from './globalStyles';

interface ThemeProviderProps {
  children: ReactNode;
}

const GlobalThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={customThemes}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};

export default GlobalThemeProvider;
