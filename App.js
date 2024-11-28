import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import BarraDeNavegacao from './src/navigation/BarraDeNavegacao';

export default function App() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'white',
        },
      }}
    >

      <BarraDeNavegacao />

    </NavigationContainer>
  );
}

