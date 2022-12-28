import { CssBaseline, GlobalStyles, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { FC, ReactNode } from 'react';

import customThemes from './customThemes';
import globalStyles from './globalStyles';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <MuiThemeProvider theme={customThemes}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
