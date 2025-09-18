import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Text, Surface, Card, Button } from 'react-native-paper';

export default function OperatividadScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Operatividad del Equipo" />
      </Appbar.Header>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Procedimientos de Operación
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              Los procedimientos de operación garantizan el uso correcto y
              seguro de los equipos HF, maximizando su rendimiento y vida útil.
            </Text>
          </Card.Content>
        </Surface>

        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Checklist de Inicio
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              • Verificar conexiones de alimentación{'\n'}• Comprobar estado de
              antenas{'\n'}• Realizar autodiagnóstico del sistema{'\n'}•
              Verificar configuración de frecuencias{'\n'}• Confirmar estado de
              filtros
            </Text>
          </Card.Content>
        </Surface>

        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Mantenimiento Preventivo
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              • Limpieza de conectores{'\n'}• Verificación de niveles de señal
              {'\n'}• Calibración de instrumentos{'\n'}• Actualización de
              firmware{'\n'}• Documentación de incidencias
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
