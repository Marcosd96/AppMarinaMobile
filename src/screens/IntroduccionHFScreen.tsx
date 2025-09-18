import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Text, Surface, Card, Button } from 'react-native-paper';

export default function IntroduccionHFScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Introducción HF" />
      </Appbar.Header>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Introducción a HF (Alta Frecuencia)
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              La tecnología de Alta Frecuencia (HF) es fundamental en las
              comunicaciones de larga distancia. Esta sección cubre los
              conceptos básicos y fundamentales.
            </Text>
          </Card.Content>
        </Surface>

        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Características Principales
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              • Frecuencias de 3-30 MHz{'\n'}• Propagación por reflexión
              ionosférica{'\n'}• Comunicaciones de larga distancia{'\n'}•
              Aplicaciones militares y civiles
            </Text>
          </Card.Content>
        </Surface>

        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Equipos ROHDE & SCHWARZ
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              Los equipos ROHDE & SCHWARZ ofrecen soluciones avanzadas para
              comunicaciones HF con tecnología de vanguardia y máxima
              confiabilidad.
            </Text>
          </Card.Content>
        </Surface>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: 'rgba(25, 118, 210, 0.9)',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  title: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  paragraph: {
    marginTop: 8,
    lineHeight: 20,
  },
  button: {
    marginTop: 20,
  },
});
