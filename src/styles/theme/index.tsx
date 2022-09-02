import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../global';

import { defaultTheme } from './default';

export interface Theme {
  colors: {
    primary: string;
    background: string;
    black: string;
    white: string;
    greyDark: string;
    red: string;
    yellow: string;
    green: string;
    blue: string;
  },
}

interface AppThemeProps {
  children: React.ReactNode
}

function AppTheme({ children }: AppThemeProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default AppTheme;
