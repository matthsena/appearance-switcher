import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar, useColorScheme } from 'react-native';

const lightTheme = {
  colors: {
    primary: '#ff9800',
    font: '#000',
    background: '#FFF',
  },
};

const darkTheme = {
  colors: {
    primary: '#6200ee',
    font: '#FFF',
    background: '#000',
  },
};

export default function Theme({ children }: { children: JSX.Element }) {
  const appearanceMode = useColorScheme();

  return (
    <ThemeProvider theme={appearanceMode === 'dark' ? darkTheme : lightTheme}>
      <StatusBar
        barStyle={appearanceMode === 'dark' ? 'light-content' : 'dark-content'}
      />
      {children}
    </ThemeProvider>
  );
}
