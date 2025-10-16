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
import ConceptoHardwareScreen from '../screens/ConceptoHardwareScreen';
import PostmanScreen from '../screens/PostmanScreen';
import FillgunScreen from '../screens/FillgunScreen';
import FallasScreen from '../screens/FallasScreen';
import VistasScreen from '../screens/VistasScreen.tsx';
import ArmadoRackScreen from '../screens/Armado_Rack';
import EnergizacionEquipoScreen from '../screens/EnergizacionEquipoScreen';
import UsoPostmanIIIScreen from '../screens/UsoPostmanIIIScreen';
import ApagarEquipoScreen from '../screens/ApagarEquipoScreen';
import AcopladorFrecuenciaScreen from '../screens/AcopladorFrecuenciaScreen';
import ActivarGPSScreen from '../screens/ActivarGPSScreen';
import CambioVocoderScreen from '../screens/CambioVocoderScreen';
import LlamadaPorVozScreen from '../screens/LlamadaPorVozScreen';
import CambioGrupoEscaneoScreen from '../screens/CambioGrupoEscaneoScreen';
import CambioPotenciaScreen from '../screens/CambioPotenciaScreen';
import CambioLlaveScreen from '../screens/CambioLlaveScreen';
import CreditsScreen from '../screens/CreditsScreen';
import { View, StyleSheet, useColorScheme } from 'react-native';
import { Text, Divider, useTheme } from 'react-native-paper';
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const Drawer = createDrawerNavigator();
const OperatividadStack = createStackNavigator();

function OperatividadStackNavigator() {
  return (
    <OperatividadStack.Navigator 
      screenOptions={{ headerShown: false }}
      initialRouteName="OperatividadHome"
    >
      <OperatividadStack.Screen
        name="OperatividadHome"
        component={OperatividadScreen}
      />
      <OperatividadStack.Screen name="EnergizacionEquipo" component={EnergizacionEquipoScreen} />
      <OperatividadStack.Screen name="UsoPostmanIII" component={UsoPostmanIIIScreen} />
      <OperatividadStack.Screen name="ApagarEquipo" component={ApagarEquipoScreen} />
      <OperatividadStack.Screen name="AcopladorFrecuencia" component={AcopladorFrecuenciaScreen} />
      <OperatividadStack.Screen name="ActivarGPS" component={ActivarGPSScreen} />
      <OperatividadStack.Screen name="CambioVocoder" component={CambioVocoderScreen} />
      <OperatividadStack.Screen name="LlamadaPorVoz" component={LlamadaPorVozScreen} />
      <OperatividadStack.Screen name="CambioGrupoEscaneo" component={CambioGrupoEscaneoScreen} />
      <OperatividadStack.Screen name="CambioPotencia" component={CambioPotenciaScreen} />
      <OperatividadStack.Screen name="CambioLlave" component={CambioLlaveScreen} />
    </OperatividadStack.Navigator>
  );
}

function DrawerSection({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const progress = useSharedValue(open ? 1 : 0);
  React.useEffect(() => {
    progress.value = withTiming(open ? 1 : 0, { duration: 220, easing: Easing.out(Easing.cubic) });
  }, [open, progress]);

  const arrowStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${interpolate(progress.value, [0, 1], [0, 90])}deg` }],
  }));
  const contentStyle = useAnimatedStyle(() => ({
    opacity: withTiming(open ? 1 : 0, { duration: 180 }),
    transform: [{ scaleY: interpolate(progress.value, [0, 1], [0.88, 1]) }],
  }));

  return (
    <View>
      <DrawerItem
        label={() => (
          <View style={styles.sectionHeaderRow}>
            <Text variant="titleSmall" style={[styles.sectionHeaderText, { color: theme.colors.onSurface }]}>{label}</Text>
            <Animated.Text style={[styles.sectionArrow, arrowStyle, { color: theme.colors.onSurfaceVariant }]}>▸</Animated.Text>
          </View>
        )}
        onPress={onToggle}
        style={styles.sectionHeaderItem}
        labelStyle={{ color: theme.colors.onSurface }}
      />
      {open ? (
        <Animated.View style={[styles.sectionContent, contentStyle]}>
          {children}
        </Animated.View>
      ) : null}
    </View>
  );
}

function CustomDrawerContent(props: any) {
  const { navigation } = props;
  const theme = useTheme();
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
    <DrawerContentScrollView {...props} style={{ backgroundColor: theme.colors.surface }}>
      <Animated.View style={[styles.drawerHeader, { backgroundColor: theme.colors.surface }]}>
        <Text variant="titleMedium" style={[styles.drawerTitle, { color: theme.colors.onSurface }]}>HF ROHDE & SCHWARZ</Text>
        <Text variant="bodySmall" style={[styles.drawerSubtitle, { color: theme.colors.onSurfaceVariant }]}>Navegación</Text>
      </Animated.View>
      <Divider style={[styles.divider, { backgroundColor: theme.colors.outlineVariant }]} />

      <DrawerItem 
        label="Home" 
        onPress={() => navigateAndClose('Home')}
        labelStyle={{ color: theme.colors.onSurface }}
      />
      <DrawerItem
        label="Introducción HF"
        onPress={() => navigateAndClose('IntroduccionHF')}
        labelStyle={{ color: theme.colors.onSurface }}
      />

      <DrawerSection
        label="Conceptos Técnicos"
        open={sectionsOpen.Conceptos}
        onToggle={() => toggleSection('Conceptos')}
      >
        <DrawerItem
          label="Menú Principal"
          style={styles.childItem}
          labelStyle={{ color: theme.colors.onSurfaceVariant }}
          onPress={() =>
            navigateAndClose('ConceptosTecnicos', {
              screen: 'ConceptosTecnicosHome',
            })
          }
        />
        <DrawerItem
          label="Concepto del Hardware"
          style={styles.childItem}
          labelStyle={{ color: theme.colors.onSurfaceVariant }}
          onPress={() => navigateAndClose('ConceptoHardware')}
        />
        <DrawerItem
          label="Vistas"
          style={styles.childItem}
          labelStyle={{ color: theme.colors.onSurfaceVariant }}
          onPress={() => navigateAndClose('Vistas')}
        />
        <DrawerItem
          label="Armado del Rack"
          style={styles.childItem}
          labelStyle={{ color: theme.colors.onSurfaceVariant }}
          onPress={() => navigateAndClose('ArmadoRack')}
        />
      </DrawerSection>

      <DrawerSection
        label="Operatividad"
        open={sectionsOpen.Operatividad}
        onToggle={() => toggleSection('Operatividad')}
      >
        <DrawerItem
          label="Menu Principal"
          style={styles.childItem}
          labelStyle={{ color: theme.colors.onSurfaceVariant }}
          onPress={() =>
            navigateAndClose('Operatividad', { screen: 'OperatividadHome' })
          }
        />

        <DrawerItem
          label="Energización del Equipo"
          style={styles.childItem}
          labelStyle={{ color: theme.colors.onSurfaceVariant }}
          onPress={() =>
            navigateAndClose('Operatividad', { screen: 'EnergizacionEquipo' })
          }
        />

        <DrawerItem
          label="Uso de Postman III"
          style={styles.childItem}
          labelStyle={{ color: theme.colors.onSurfaceVariant }}
          onPress={() =>
            navigateAndClose('Operatividad', { screen: 'UsoPostmanIII' })
          }
        />

        <DrawerItem
          label="Apagar Equipo"
          style={styles.childItem}
          labelStyle={{ color: theme.colors.onSurfaceVariant }}
          onPress={() =>
            navigateAndClose('Operatividad', { screen: 'ApagarEquipo' })
          }
        />

        <DrawerItem
          label="Acoplador de Frecuencia"
          style={styles.childItem}
          labelStyle={{ color: theme.colors.onSurfaceVariant }}
          onPress={() =>
            navigateAndClose('Operatividad', { screen: 'AcopladorFrecuencia' })
          }
        />

        <DrawerItem
          label="Activar GPS"
          style={styles.childItem}
          labelStyle={{ color: theme.colors.onSurfaceVariant }}
          onPress={() =>
            navigateAndClose('Operatividad', { screen: 'ActivarGPS' })
          }
        />

        <DrawerItem
          label="Cambio de Vocoder"
          style={styles.childItem}
          labelStyle={{ color: theme.colors.onSurfaceVariant }}
          onPress={() =>
            navigateAndClose('Operatividad', { screen: 'CambioVocoder' })
          }
        />

        <DrawerItem
          label="Llamada por Voz"
          style={styles.childItem}
          labelStyle={{ color: theme.colors.onSurfaceVariant }}
          onPress={() =>
            navigateAndClose('Operatividad', { screen: 'LlamadaPorVoz' })
          }
        />

        <DrawerItem
          label="Cambio de Grupo de Escaneo"
          style={styles.childItem}
          labelStyle={{ color: theme.colors.onSurfaceVariant }}
          onPress={() =>
            navigateAndClose('Operatividad', { screen: 'CambioGrupoEscaneo' })
          }
        />

        <DrawerItem
          label="Cambio de Potencia"
          style={styles.childItem}
          labelStyle={{ color: theme.colors.onSurfaceVariant }}
          onPress={() =>
            navigateAndClose('Operatividad', { screen: 'CambioPotencia' })
          }
        />

        <DrawerItem
          label="Cambio de Llave"
          style={styles.childItem}
          labelStyle={{ color: theme.colors.onSurfaceVariant }}
          onPress={() =>
            navigateAndClose('Operatividad', { screen: 'CambioLlave' })
          }
        />
      </DrawerSection>

      <DrawerItem 
        label="Postman" 
        onPress={() => navigateAndClose('Postman')}
        labelStyle={{ color: theme.colors.onSurface }}
      />
      <DrawerItem 
        label="Fillgun" 
        onPress={() => navigateAndClose('Fillgun')}
        labelStyle={{ color: theme.colors.onSurface }}
      />
      <DrawerItem 
        label="Fallas" 
        onPress={() => navigateAndClose('Fallas')}
        labelStyle={{ color: theme.colors.onSurface }}
      />
      <Divider style={[styles.divider, { backgroundColor: theme.colors.outlineVariant }]} />
      <DrawerItem 
        label="Créditos" 
        onPress={() => navigateAndClose('Credits')}
        labelStyle={{ color: theme.colors.onSurface }}
      />
    </DrawerContentScrollView>
  );
}

export default function AppNavigator() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerType: 'front',
          swipeEnabled: true,
          swipeEdgeWidth: 40,
          overlayColor: isDark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.15)',
          drawerStyle: {
            width: 290,
            backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
            borderRightColor: isDark ? '#3a3a3a' : 'rgba(0,0,0,0.08)',
            borderRightWidth: StyleSheet.hairlineWidth,
          },
        }}
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
        <Drawer.Screen
          name="ConceptoHardware"
          component={ConceptoHardwareScreen}
          options={{ title: 'Concepto del Hardware' }}
        />
        <Drawer.Screen 
          name="ArmadoRack" 
          component={ArmadoRackScreen}
          options={{ title: 'Armado del Rack' }}
        />
        <Drawer.Screen
          name="Credits"
          component={CreditsScreen}
          options={{ title: 'Créditos' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  drawerTitle: {
    fontWeight: '700',
  },
  drawerSubtitle: {
    opacity: 0.7,
  },
  divider: {
    marginVertical: 8,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  sectionHeaderText: {
    fontWeight: '600',
  },
  sectionArrow: {
    fontSize: 16,
    opacity: 0.6,
  },
  sectionHeaderItem: {
    marginTop: 4,
  },
  sectionContent: {
    paddingLeft: 12,
  },
  childItem: {
    marginLeft: 8,
  },
});
