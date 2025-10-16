import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Appbar, Text, Surface, Card, useTheme, Divider } from 'react-native-paper';
import ScreenEntrance from '../components/ScreenEntrance';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface MenuItemProps {
  title: string;
  description: string;
  icon: string;
  onPress: () => void;
  theme: any;
  color?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, description, icon, onPress, theme, color }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
    <Card style={[styles.menuCard, { backgroundColor: theme.colors.surface }]} mode="elevated">
      <Card.Content style={styles.menuCardContent}>
        <View style={[styles.iconContainer, { backgroundColor: color || theme.colors.primaryContainer }]}>
          <Icon name={icon} size={32} color={theme.colors.primary} />
        </View>
        <View style={styles.textContainer}>
          <Text variant="titleMedium" style={[styles.menuTitle, { color: theme.colors.onSurface }]}>
            {title}
          </Text>
          <Text variant="bodySmall" style={[styles.menuDescription, { color: theme.colors.onSurfaceVariant }]}>
            {description}
          </Text>
        </View>
        <Icon name="chevron-right" size={24} color={theme.colors.onSurfaceVariant} />
      </Card.Content>
    </Card>
  </TouchableOpacity>
);

export default function OperatividadScreen({ navigation }: any) {
  const theme = useTheme();

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e: any) => {
      e.preventDefault();
      navigation.navigate('Home');
    });
    return unsubscribe;
  }, [navigation]);

  const menuSections = [
    {
      category: 'Configuración Básica',
      icon: 'power',
      items: [
        {
          title: 'Energización del Equipo',
          description: 'Procedimiento para encender y energizar el sistema',
          icon: 'power-on',
          screen: 'EnergizacionEquipo',
          color: '#E8F5E9',
        },
        {
          title: 'Apagar Equipo',
          description: 'Proceso seguro de apagado del sistema',
          icon: 'power-off',
          screen: 'ApagarEquipo',
          color: '#FFEBEE',
        },
      ],
    },
    {
      category: 'Configuración de Radio',
      icon: 'radio',
      items: [
        {
          title: 'Acoplador de Frecuencia',
          description: 'Configuración del acoplador de antena',
          icon: 'tune',
          screen: 'AcopladorFrecuencia',
          color: '#E3F2FD',
        },
        {
          title: 'Cambio de Vocoder',
          description: 'Modificar el codificador de voz',
          icon: 'microphone-settings',
          screen: 'CambioVocoder',
          color: '#F3E5F5',
        },
        {
          title: 'Cambio de Potencia',
          description: 'Ajustar la potencia de transmisión',
          icon: 'speedometer',
          screen: 'CambioPotencia',
          color: '#FFF3E0',
        },
        {
          title: 'Cambio de Llave',
          description: 'Cambiar configuración de cifrado',
          icon: 'key-variant',
          screen: 'CambioLlave',
          color: '#FCE4EC',
        },
      ],
    },
    {
      category: 'Comunicaciones',
      icon: 'phone',
      items: [
        {
          title: 'Llamada por Voz',
          description: 'Realizar comunicación de voz',
          icon: 'phone-in-talk',
          screen: 'LlamadaPorVoz',
          color: '#E0F2F1',
        },
        {
          title: 'Cambio de Grupo de Escaneo',
          description: 'Modificar grupo de escaneo activo',
          icon: 'antenna',
          screen: 'CambioGrupoEscaneo',
          color: '#FFF9C4',
        },
      ],
    },
    {
      category: 'Herramientas y Sistemas',
      icon: 'tools',
      items: [
        {
          title: 'Uso de Postman III',
          description: 'Manejo del sistema de mensajería',
          icon: 'email-fast',
          screen: 'UsoPostmanIII',
          color: '#F1F8E9',
        },
        {
          title: 'Activar GPS',
          description: 'Activación y configuración del GPS',
          icon: 'map-marker-check',
          screen: 'ActivarGPS',
          color: '#E8EAF6',
        },
      ],
    },
  ];
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Appbar.Header mode="center-aligned" style={{ backgroundColor: theme.colors.primaryContainer }}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Operatividad del Equipo" />
      </Appbar.Header>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ScreenEntrance>
          {/* Header Card */}
          <Surface style={[styles.headerCard, { backgroundColor: theme.colors.primaryContainer }]} elevation={2}>
            <View style={styles.headerContent}>
              <Icon name="cog-outline" size={48} color={theme.colors.onPrimaryContainer} />
              <Text variant="headlineSmall" style={[styles.headerTitle, { color: theme.colors.onPrimaryContainer }]}>
                Guías de Operación
              </Text>
              <Text variant="bodyMedium" style={[styles.headerSubtitle, { color: theme.colors.onPrimaryContainer }]}>
                Selecciona una sección para ver los procedimientos detallados
              </Text>
            </View>
          </Surface>

          {/* Menu Sections */}
          {menuSections.map((section, sectionIndex) => (
            <View key={sectionIndex} style={styles.section}>
              <View style={styles.sectionHeader}>
                <Icon name={section.icon} size={24} color={theme.colors.primary} />
                <Text variant="titleLarge" style={[styles.categoryTitle, { color: theme.colors.onBackground }]}>
                  {section.category}
                </Text>
              </View>
              <Divider style={[styles.sectionDivider, { backgroundColor: theme.colors.outlineVariant }]} />
              
              {section.items.map((item, itemIndex) => (
                <MenuItem
                  key={itemIndex}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  onPress={() => navigation.navigate(item.screen)}
                  theme={theme}
                  color={item.color}
                />
              ))}
            </View>
          ))}

          {/* Info Footer */}
          <Surface style={[styles.footerCard, { backgroundColor: theme.colors.surfaceVariant }]} elevation={1}>
            <Icon name="information-outline" size={24} color={theme.colors.primary} />
            <Text variant="bodySmall" style={[styles.footerText, { color: theme.colors.onSurfaceVariant }]}>
              Todas las operaciones deben realizarse siguiendo los procedimientos establecidos para garantizar el correcto funcionamiento del equipo.
            </Text>
          </Surface>
        </ScreenEntrance>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  headerCard: {
    marginBottom: 24,
    borderRadius: 16,
    padding: 24,
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    marginTop: 12,
    marginBottom: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerSubtitle: {
    textAlign: 'center',
    opacity: 0.8,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 12,
  },
  categoryTitle: {
    fontWeight: 'bold',
  },
  sectionDivider: {
    marginBottom: 12,
    height: 2,
  },
  menuCard: {
    marginBottom: 12,
    borderRadius: 12,
    elevation: 2,
  },
  menuCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  menuTitle: {
    fontWeight: '600',
    marginBottom: 4,
  },
  menuDescription: {
    lineHeight: 18,
  },
  footerCard: {
    marginTop: 8,
    marginBottom: 16,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  footerText: {
    flex: 1,
    lineHeight: 20,
  },
});
