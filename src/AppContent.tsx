import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Appbar, Text, Surface, IconButton } from 'react-native-paper';

export default function AppContent({ navigation }: any) {
  const menuItems = [
    {
      id: 1,
      title: 'INTRODUCCIÓN HF',
      icon: 'antenna',
      onPress: () => navigation.navigate('IntroduccionHF'),
    },
    {
      id: 2,
      title: 'CONCEPTOS TÉCNICOS DE HARDWARE',
      icon: 'chip',
      onPress: () => navigation.navigate('ConceptosTecnicos'),
    },
    {
      id: 3,
      title: 'OPERATIVIDAD DEL EQUIPO',
      icon: 'cog',
      onPress: () => navigation.navigate('Operatividad'),
    },
    {
      id: 4,
      title: 'USO E INSTALACIÓN DE POSTMAN',
      icon: 'download',
      onPress: () => navigation.navigate('Postman'),
    },
    {
      id: 5,
      title: 'USO DEL FILLGUN',
      icon: 'radio',
      onPress: () => navigation.navigate('Fillgun'),
    },
    {
      id: 6,
      title: 'FALLAS',
      icon: 'wrench',
      onPress: () => navigation.navigate('Fallas'),
    },
  ];

  return (
    <View style={styles.container}>
      <Appbar.Header mode="center-aligned">
        <Appbar.Content title="HF ROHDE & SCHWARZ" />
      </Appbar.Header>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <View style={styles.grid}>
          {menuItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.cardContainer}
              onPress={item.onPress}
              activeOpacity={0.7}
            >
              <Surface style={styles.menuCard} elevation={2}>
                <View style={styles.cardIconContainer}>
                  <IconButton
                    icon={getIcon(item.icon)}
                    size={40}
                    iconColor="white"
                    style={styles.iconButton}
                  />
                </View>
                <View style={styles.cardContent}>
                  <Text variant="labelMedium" style={styles.cardTitle}>
                    {item.title}
                  </Text>
                </View>
              </Surface>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

// Función para obtener iconos de Material Design
function getIcon(iconName: string) {
  const icons: { [key: string]: string } = {
    antenna: 'antenna', // Antena/signal
    chip: 'chip', // Chip/hardware
    cog: 'cog', // Configuración
    download: 'robot-industrial', // Descarga
    radio: 'radio', // Radio
    wrench: 'hammer-wrench', // Herramientas/mantenimiento
  };
  return icons[iconName] || 'help';
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    paddingBottom: 20,
    justifyContent: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContainer: {
    width: '48%',
    marginBottom: 16,
    height: 140,
  },
  menuCard: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  cardIconContainer: {
    height: 80,
    backgroundColor: '#1976d2',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardIcon: {
    fontSize: 32,
    color: 'white',
  },
  cardContent: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  cardTitle: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#333',
    fontSize: 10,
    lineHeight: 12,
  },
  iconButton: {
    margin: 0,
  },
});
