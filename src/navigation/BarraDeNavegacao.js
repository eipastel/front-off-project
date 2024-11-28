import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { opcoesPadraoNavegacao } from './OpcoesPadraoNavegacao';
import PaginaRegistro from '../pages/PaginaRegistro';
import PaginaInicial from '../pages/PaginaInicial';
import PaginaLogin from '../pages/PaginaLogin';

const Tab = createBottomTabNavigator();

export default function BarraDeNavegacao() {

  return (
    <Tab.Navigator
      initialRouteName="Tela Inical"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Tela Inical" 
        component={PaginaInicial} 
        options={{ tabBarStyle: { display: 'none' }}} 
      />
      
      <Tab.Screen 
        name="Login" 
        component={PaginaLogin}
        options={({ navigation }) => opcoesPadraoNavegacao(navigation)} 
      />

      <Tab.Screen
        name="Registro"
        component={PaginaRegistro}
        options={({ navigation }) => opcoesPadraoNavegacao(navigation)}
      />

    </Tab.Navigator>
  );
}
