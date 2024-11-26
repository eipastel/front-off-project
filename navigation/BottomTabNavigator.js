import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import PaginaLogin from '../pages/PaginaLogin';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Login" component={PaginaLogin} />
    </Tab.Navigator>
  );
}
