import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Appbar, Text, Surface } from 'react-native-paper';
import Icon1Component from './components/1';
import Icon2Component from './components/2';
import Icon3Component from './components/3';
import Icon4Component from './components/4';
import Icon5Component from './components/5';
import Icon6Component from './components/6';

// Background image
const backgroundImage = require('../fondo.jpg');

// SVG Components
const Icon1 = ({ size = 40, color = "white" }) => (
  <Icon1Component width={size} height={size} backgroundColor="#1976d2" />
);

const Icon2 = ({ size = 40, color = "white" }) => (
  <Icon2Component width={size} height={size} backgroundColor="#1976d2" />
);

const Icon3 = ({ size = 40, color = "white" }) => (
  <Icon3Component width={size} height={size} backgroundColor="#1976d2" />
);

const Icon4 = ({ size = 40, color = "white" }) => (
  <Icon4Component width={size} height={size} backgroundColor="#1976d2" />
);

const Icon5 = ({ size = 40, color = "white" }) => (
  <Icon5Component width={size} height={size} backgroundColor="#1976d2" />
);

const Icon6 = ({ size = 40, color = "white" }) => (
  <Icon6Component width={size} height={size} backgroundColor="#1976d2" />
);

export default function AppContent({ navigation }: any) {
  const menuItems = [
    {
      id: 1,
      title: 'INTRODUCCIÓN HF',
      icon: Icon1,
      onPress: () => navigation.navigate('IntroduccionHF'),
    },
    {
      id: 2,
      title: 'CONCEPTOS TÉCNICOS DE HARDWARE',
      icon: Icon2,
      onPress: () => navigation.navigate('ConceptosTecnicos'),
    },
    {
      id: 3,
      title: 'OPERATIVIDAD DEL EQUIPO',
      icon: Icon3,
      onPress: () => navigation.navigate('Operatividad'),
    },
    {
      id: 4,
      title: 'USO E INSTALACIÓN DE POSTMAN',
      icon: Icon4,
      onPress: () => navigation.navigate('Postman'),
    },
    {
      id: 5,
      title: 'USO DEL FILLGUN',
      icon: Icon5,
      onPress: () => navigation.navigate('Fillgun'),
    },
    {
      id: 6,
      title: 'FALLAS',
      icon: Icon6,
      onPress: () => navigation.navigate('Fallas'),
    },
  ];

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
      <View style={styles.container}>
        <Appbar.Header mode="center-aligned" style={styles.header}>
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
                    <item.icon size={40} color="white" />
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
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(248, 249, 250, 0.9)',
  },
  header: {
    backgroundColor: 'rgba(25, 118, 210, 0.9)',
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
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
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
});
