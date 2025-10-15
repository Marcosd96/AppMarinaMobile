import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { Appbar, Text, Surface, Card, useTheme } from 'react-native-paper';
import ScreenEntrance from '../components/ScreenEntrance';

export default function IntroduccionHFScreen({ navigation }: any) {
  const theme = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>

      <Appbar.Header mode="center-aligned" style={{ backgroundColor: theme.colors.primaryContainer }}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Introducción HF" />
      </Appbar.Header>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps="handled"
      >
        
        <ScreenEntrance>
          <Surface style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={2}>
            <Card.Content>
              <Text variant="headlineSmall" style={[styles.title, { color: theme.colors.onSurface }]}>
                Introducción al HF en redes de comunicación
              </Text>
              <Text variant="bodyMedium" style={[styles.paragraph, { color: theme.colors.onSurfaceVariant }]}>
                La banda de Alta Frecuencia (HF, High Frequency) corresponde al
                rango del espectro radioeléctrico comprendido entre los 3 MHz y
                los 30 MHz. Su relevancia en el ámbito de las telecomunicaciones
                radica en la propagación ionosférica de sus ondas, fenómeno que
                permite que las señales puedan recorrer miles de kilómetros
                rebotando en las capas de la ionosfera. Gracias a esta
                característica, el HF ha sido históricamente una de las
                tecnologías más utilizadas para establecer comunicaciones de
                largo alcance sin necesidad de recurrir a satélites o redes
                terrestres extensas.
              </Text>
              <Image
                source={require('../../Images/introduccion_hf/1.jpg')}
                style={styles.deviceImage}
                resizeMode="contain"
              />
              <Text variant="bodyMedium" style={[styles.paragraph, { color: theme.colors.onSurfaceVariant }]}>
                Desde el punto de vista técnico, las redes de comunicación
                basadas en HF han jugado un papel fundamental en sectores como
                la navegación marítima y aérea, los servicios militares, la
                radiodifusión internacional y los sistemas de emergencia, donde
                la cobertura amplia y la confiabilidad resultan esenciales. A
                diferencia de las bandas de VHF (Very High Frequency) y UHF
                (Ultra High Frequency), que ofrecen mayor capacidad para
                transmitir datos pero con un alcance más limitado, el HF se
                caracteriza por su capacidad de conectar regiones aisladas o de
                difícil acceso, lo que lo convierte en un recurso estratégico en
                escenarios de desastre natural, operaciones internacionales y
                exploraciones en territorios remotos. No obstante, el uso de la
                banda HF también presenta limitaciones. El ancho de banda
                disponible es reducido en comparación con otras frecuencias, lo
                que restringe la velocidad de transmisión de datos y la calidad
                de la señal. Además, la propagación ionosférica depende de
                factores como la hora del día, las condiciones atmosféricas y la
                actividad solar, lo que introduce variaciones en la estabilidad
                del canal de comunicación. A pesar de ello, los avances en
                tecnologías digitales y en técnicas de modulación han permitido
                modernizar los sistemas de comunicación en HF, optimizando su
                rendimiento y manteniendo su vigencia en la actualidad. En
                conclusión, el HF constituye una de las bases históricas y
                estratégicas de las redes de comunicación global, ofreciendo una
                combinación única de alcance, resiliencia y bajo costo. Aunque
                se enfrenta a retos frente a las tecnologías modernas, sigue
                siendo una herramienta indispensable en contextos donde la
                cobertura universal y la independencia de infraestructuras
                externas resultan vitales para garantizar la comunicación
                efectiva.
              </Text>
              <Image
                source={require('../../Images/introduccion_hf/2.png')}
                style={styles.deviceImage}
                resizeMode="contain"
              />
            </Card.Content>
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
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
  },
  title: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  paragraph: {
    marginTop: 8,
    lineHeight: 20,
  },
  deviceImage: {
    width: '100%',
    height: 200,
    marginTop: 12,
    borderRadius: 8,
  },
  button: {
    marginTop: 20,
  },
});
