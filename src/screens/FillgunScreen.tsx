import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Text, Surface, Card, Button } from 'react-native-paper';

export default function FillgunScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Uso del Fillgun" />
      </Appbar.Header>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Introducción al Fillgun
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              El Fillgun es una herramienta especializada para el llenado y
              mantenimiento de sistemas de refrigeración en equipos de
              comunicaciones HF.
            </Text>
          </Card.Content>
        </Surface>

        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Procedimiento de Uso
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              1. Verificar presión del sistema{'\n'}
              2. Conectar mangueras de llenado{'\n'}
              3. Configurar parámetros de presión{'\n'}
              4. Iniciar proceso de llenado{'\n'}
              5. Monitorear niveles constantemente
            </Text>
          </Card.Content>
        </Surface>

        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Medidas de Seguridad
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              • Usar equipo de protección personal{'\n'}• Verificar válvulas de
              seguridad{'\n'}• Mantener área ventilada{'\n'}• Seguir protocolos
              de emergencia{'\n'}• Documentar todas las operaciones
            </Text>
          </Card.Content>
        </Surface>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
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
  paragraph: {
    marginTop: 8,
    lineHeight: 20,
  },
  button: {
    marginTop: 20,
  },
});
