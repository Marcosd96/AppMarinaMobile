import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Text, Surface, Card, Button } from 'react-native-paper';

export default function PostmanScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Postman" />
      </Appbar.Header>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Instalación de Postman
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              Postman es una herramienta esencial para el desarrollo y testing
              de APIs. Esta guía te ayudará a instalarlo y configurarlo
              correctamente.
            </Text>
          </Card.Content>
        </Surface>

        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Pasos de Instalación
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              1. Descargar Postman desde postman.com{'\n'}
              2. Ejecutar el instalador{'\n'}
              3. Crear cuenta gratuita{'\n'}
              4. Configurar workspace{'\n'}
              5. Importar colecciones de APIs
            </Text>
          </Card.Content>
        </Surface>

        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Configuración para APIs HF
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              • Configurar endpoints de comunicación{'\n'}• Establecer
              autenticación{'\n'}• Configurar timeouts apropiados{'\n'}•
              Importar esquemas de datos{'\n'}• Crear variables de entorno
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
