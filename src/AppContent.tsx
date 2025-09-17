import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import {
  Appbar,
  Card,
  Text,
  Surface,
  IconButton,
} from 'react-native-paper';

export default function AppContent() {
  const menuItems = [
    {
      id: 1,
      title: 'INTRODUCCIÓN HF',
      icon: 'antenna',
      onPress: () => console.log('Introducción HF'),
    },
    {
      id: 2,
      title: 'CONCEPTOS TÉCNICOS DE HARDWARE',
      icon: 'chip',
      onPress: () => console.log('Conceptos Técnicos'),
    },
    {
      id: 3,
      title: 'OPERATIVIDAD DEL EQUIPO',
      icon: 'cog',
      onPress: () => console.log('Operatividad'),
    },
    {
      id: 4,
      title: 'USO E INSTALACIÓN DE POSTMAN',
      icon: 'download',
      onPress: () => console.log('Instalación Postman'),
    },
    {
      id: 5,
      title: 'USO DEL FILLGUN',
      icon: 'radio',
      onPress: () => console.log('Uso del Fillgun'),
    },
    {
      id: 6,
      title: 'FALLAS',
      icon: 'wrench',
      onPress: () => console.log('Fallas'),
    },
  ];

  return (
    <View style={styles.container}>
      <Appbar.Header mode="center-aligned">
        <Appbar.Content title="HF ROHDE & SCHWARZ" />
      </Appbar.Header>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.grid}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.cardContainer}
              onPress={item.onPress}
              activeOpacity={0.7}
            >
              <Card style={styles.menuCard} elevation={2}>
                <View style={styles.cardIconContainer}>
                  <IconButton
                    icon={getIcon(item.icon)}
                    size={40}
                    iconColor="white"
                    style={styles.iconButton}
                  />
                </View>
                <Card.Content style={styles.cardContent}>
                  <Text variant="labelMedium" style={styles.cardTitle}>
                    {item.title}
                  </Text>
                </Card.Content>
              </Card>
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
    antenna: 'wifi', // Antena/signal
    chip: 'chip', // Chip/hardware
    cog: 'cog', // Configuración
    download: 'download', // Descarga
    radio: 'radio', // Radio
    wrench: 'wrench', // Herramientas/mantenimiento
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
    padding: 20,
    paddingBottom: 40,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  cardContainer: {
    width: '30%',
    minWidth: 100,
    aspectRatio: 1,
  },
  menuCard: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
  },
  cardIconContainer: {
    flex: 1,
    backgroundColor: '#1976d2',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  cardIcon: {
    fontSize: 32,
    color: 'white',
  },
  cardContent: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 60,
  },
  cardTitle: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#333',
    fontSize: 11,
    lineHeight: 14,
  },
  iconButton: {
    margin: 0,
  },
});
