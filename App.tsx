/**
 * Sample React Native App with React Native Paper
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { PaperProvider, MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    // Primary colors
    primary: '#1976d2',
    primaryContainer: '#007cf8',
    onPrimary: '#ffffff',
    onPrimaryContainer: '#ffffff',
    
    // Secondary colors
    secondary: '#03dac6',
    secondaryContainer: '#018786',
    onSecondary: '#000000',
    onSecondaryContainer: '#ffffff',
    
    // Surface colors
    surface: '#ffffff',
    surfaceVariant: '#f8f9fa',
    onSurface: '#1a1c1e',
    onSurfaceVariant: '#44474e',
    
    // Background colors
    background: '#f8f9fa',
    onBackground: '#1a1c1e',
    
    // Card colors
    elevation: {
      level0: 'transparent',
      level1: '#ffffff',
      level2: '#ffffff',
      level3: '#ffffff',
      level4: '#ffffff',
      level5: '#ffffff',
    },
    
    // Outline
    outline: '#d0d5dd',
    outlineVariant: '#eef2f6',
  },
};

const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    // Primary colors
    primary: '#64b5f6',
    primaryContainer: '#1565c0',
    onPrimary: '#002f6c',
    onPrimaryContainer: '#ffffff',
    
    // Secondary colors
    secondary: '#80deea',
    secondaryContainer: '#00838f',
    onSecondary: '#003e47',
    onSecondaryContainer: '#ffffff',
    
    // Surface colors
    surface: '#1e1e1e',
    surfaceVariant: '#2c2c2c',
    onSurface: '#e4e4e4',
    onSurfaceVariant: '#c4c6cd',
    
    // Background colors
    background: '#121212',
    onBackground: '#e4e4e4',
    
    // Card colors
    elevation: {
      level0: 'transparent',
      level1: '#2c2c2c',
      level2: '#343434',
      level3: '#3a3a3a',
      level4: '#3f3f3f',
      level5: '#454545',
    },
    
    // Outline
    outline: '#3a3a3a',
    outlineVariant: '#2c2c2c',
  },
};

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppNavigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
