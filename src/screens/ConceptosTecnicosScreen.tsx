import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Text, Surface, Card, Button } from 'react-native-paper';

export default function ConceptosTecnicosScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Conceptos Técnicos" />
      </Appbar.Header>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Hardware de Comunicaciones HF
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              El hardware de comunicaciones HF incluye componentes
              especializados diseñados para operar en el rango de alta
              frecuencia con máxima eficiencia.
            </Text>
          </Card.Content>
        </Surface>

        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Componentes Principales
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              • Transceptores HF{'\n'}• Amplificadores de potencia{'\n'}•
              Antenas direccionales{'\n'}• Sistemas de filtrado{'\n'}•
              Interfaces de control
            </Text>
          </Card.Content>
        </Surface>

        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Especificaciones Técnicas
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              • Potencia de salida: 100W - 1kW{'\n'}• Rango de frecuencia:
              1.5-30 MHz{'\n'}• Sensibilidad: -110 dBm{'\n'}• Selectividad: 2.4
              kHz{'\n'}• Estabilidad: ±1 ppm
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
