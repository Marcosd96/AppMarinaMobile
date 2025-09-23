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
import VistasScreen from '../screens/VistasScreen';

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
  // Estado escalable por secciones
  const [sectionsOpen, setSectionsOpen] = React.useState<
    Record<string, boolean>
  >({
    Conceptos: false,
    Operatividad: false,
  });

  const toggleSection = (name: string) =>
    setSectionsOpen(prev => ({ ...prev, [name]: !prev[name] }));

  const closeAllSections = () =>
    setSectionsOpen(
      prev =>
        Object.fromEntries(Object.keys(prev).map(k => [k, false])) as Record<
          string,
          boolean
        >,
    );

  const navigateAndClose = (route: string, params?: any) => {
    closeAllSections();
    navigation.navigate(route, params);
    navigation.closeDrawer();
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Home" onPress={() => navigateAndClose('Home')} />
      <DrawerItem
        label="Introducción HF"
        onPress={() => navigateAndClose('IntroduccionHF')}
      />

      {/* Conceptos Técnicos */}
      <DrawerItem
        label={`Conceptos Técnicos ${sectionsOpen.Conceptos ? '▾' : '▸'}`}
        onPress={() => toggleSection('Conceptos')}
      />
      {sectionsOpen.Conceptos ? (
        <>
          <DrawerItem
            label="Menú Principal"
            style={{ marginLeft: 16 }}
            onPress={() =>
              navigateAndClose('ConceptosTecnicos', {
                screen: 'ConceptosTecnicosHome',
              })
            }
          />
          <DrawerItem
            label="Vistas"
            style={{ marginLeft: 16 }}
            onPress={() => navigateAndClose('Vistas')}
          />
        </>
      ) : null}

      {/* Operatividad */}
      <DrawerItem
        label={`Operatividad ${sectionsOpen.Operatividad ? '▾' : '▸'}`}
        onPress={() => toggleSection('Operatividad')}
      />
      {sectionsOpen.Operatividad ? (
        <>
          <DrawerItem
            label="Menu Principal"
            style={{ marginLeft: 16 }}
            onPress={() =>
              navigateAndClose('Operatividad', { screen: 'OperatividadHome' })
            }
          />

          <DrawerItem
            label="Encendido"
            style={{ marginLeft: 16 }}
            onPress={() =>
              navigateAndClose('Operatividad', { screen: 'Encendido' })
            }
          />
        </>
      ) : null}

      <DrawerItem label="Postman" onPress={() => navigateAndClose('Postman')} />
      <DrawerItem label="Fillgun" onPress={() => navigateAndClose('Fillgun')} />
      <DrawerItem label="Fallas" onPress={() => navigateAndClose('Fallas')} />
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
        <Drawer.Screen name="Vistas" component={VistasScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
