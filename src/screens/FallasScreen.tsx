import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Text, Surface, Card, Button } from 'react-native-paper';

export default function FallasScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Fallas" />
      </Appbar.Header>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Diagnóstico de Fallas
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              El diagnóstico sistemático de fallas es crucial para mantener la
              operatividad de los equipos HF y minimizar el tiempo de
              inactividad.
            </Text>
          </Card.Content>
        </Surface>

        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Fallas Comunes
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              • Pérdida de señal de RF{'\n'}• Problemas de alimentación{'\n'}•
              Fallos en conectores{'\n'}• Descalibración de frecuencias{'\n'}•
              Sobrecalentamiento de componentes
            </Text>
          </Card.Content>
        </Surface>

        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Procedimiento de Reparación
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              1. Identificar el síntoma{'\n'}
              2. Realizar diagnóstico inicial{'\n'}
              3. Aislar el componente defectuoso{'\n'}
              4. Reemplazar o reparar{'\n'}
              5. Verificar funcionamiento{'\n'}
              6. Documentar la intervención
            </Text>
          </Card.Content>
        </Surface>

        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Herramientas Necesarias
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              • Multímetro digital{'\n'}• Osciloscopio{'\n'}• Analizador de
              espectro{'\n'}• Herramientas de calibración{'\n'}• Equipos de
              prueba de RF
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
