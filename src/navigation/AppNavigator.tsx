import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppContent from '../AppContent';
import IntroduccionHFScreen from '../screens/IntroduccionHFScreen';
import ConceptosTecnicosScreen from '../screens/ConceptosTecnicosScreen';
import OperatividadScreen from '../screens/OperatividadScreen';
import PostmanScreen from '../screens/PostmanScreen';
import FillgunScreen from '../screens/FillgunScreen';
import FallasScreen from '../screens/FallasScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={AppContent} />
        <Stack.Screen name="IntroduccionHF" component={IntroduccionHFScreen} />
        <Stack.Screen name="ConceptosTecnicos" component={ConceptosTecnicosScreen} />
        <Stack.Screen name="Operatividad" component={OperatividadScreen} />
        <Stack.Screen name="Postman" component={PostmanScreen} />
        <Stack.Screen name="Fillgun" component={FillgunScreen} />
        <Stack.Screen name="Fallas" component={FallasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
