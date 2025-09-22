import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import AppContent from '../AppContent';
import IntroduccionHFScreen from '../screens/IntroduccionHFScreen';
import ConceptosTecnicosScreen from '../screens/ConceptosTecnicosScreen';
import OperatividadScreen from '../screens/OperatividadScreen';
import EncendidoScreen from '../screens/EncendidoScreen';
import PostmanScreen from '../screens/PostmanScreen';
import FillgunScreen from '../screens/FillgunScreen';
import FallasScreen from '../screens/FallasScreen';

const Drawer = createDrawerNavigator();
const OperatividadStack = createStackNavigator();

function OperatividadStackNavigator() {
  return (
    <OperatividadStack.Navigator screenOptions={{ headerShown: false }}>
      <OperatividadStack.Screen
        name="OperatividadHome"
        component={OperatividadScreen}
      />
      <OperatividadStack.Screen name="Encendido" component={EncendidoScreen} />
    </OperatividadStack.Navigator>
  );
}

function CustomDrawerContent(props: any) {
  const { navigation } = props;
  const [operatividadOpen, setOperatividadOpen] = React.useState(false);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Home" onPress={() => { navigation.navigate('Home'); setOperatividadOpen(false); navigation.closeDrawer(); }} />
      <DrawerItem
        label="Introducción HF"
        onPress={() => { navigation.navigate('IntroduccionHF'); setOperatividadOpen(false); navigation.closeDrawer(); }}
      />
      <DrawerItem
        label="Conceptos Técnicos"
        onPress={() => { navigation.navigate('ConceptosTecnicos'); setOperatividadOpen(false); navigation.closeDrawer(); }}
      />
      <DrawerItem
        label={`Operatividad ${operatividadOpen ? '▾' : '▸'}`}
        onPress={() => setOperatividadOpen(prev => !prev)}
      />
      {operatividadOpen ? (
        <>
          <DrawerItem
            label="Menu Principal"
            style={{ marginLeft: 16 }}
            onPress={() => { navigation.navigate('Operatividad', { screen: 'OperatividadHome' }); setOperatividadOpen(false); navigation.closeDrawer(); }}
          />

          <DrawerItem
            label="Encendido"
            style={{ marginLeft: 16 }}
            onPress={() => { navigation.navigate('Operatividad', { screen: 'Encendido' }); setOperatividadOpen(false); navigation.closeDrawer(); }}
          />
        </>
      ) : null}
      <DrawerItem
        label="Postman"
        onPress={() => { navigation.navigate('Postman'); setOperatividadOpen(false); navigation.closeDrawer(); }}
      />
      <DrawerItem
        label="Fillgun"
        onPress={() => { navigation.navigate('Fillgun'); setOperatividadOpen(false); navigation.closeDrawer(); }}
      />
      <DrawerItem
        label="Fallas"
        onPress={() => { navigation.navigate('Fallas'); setOperatividadOpen(false); navigation.closeDrawer(); }}
      />
    </DrawerContentScrollView>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={AppContent} />
        <Drawer.Screen
          name="IntroduccionHF"
          component={IntroduccionHFScreen}
          options={{ title: 'Introducción HF' }}
        />
        <Drawer.Screen
          name="ConceptosTecnicos"
          component={ConceptosTecnicosScreen}
          options={{ title: 'Conceptos Técnicos' }}
        />
        <Drawer.Screen
          name="Operatividad"
          component={OperatividadStackNavigator}
          options={{ title: 'Operatividad' }}
        />
        <Drawer.Screen name="Postman" component={PostmanScreen} />
        <Drawer.Screen
          name="Fillgun"
          component={FillgunScreen}
          options={{ title: 'Fillgun' }}
        />
        <Drawer.Screen name="Fallas" component={FallasScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
