import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Text, Surface, Card, Button } from 'react-native-paper';

export default function ConceptosTecnicosScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Appbar.Header mode="center-aligned" style={styles.header}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Conceptos Técnicos" />
      </Appbar.Header>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        {/* Especificaciones: tabla + lista codificadas */}
        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Operación del Equipo - Especificaciones
            </Text>
            <View style={styles.specsContainer}>
              {/* Columna izquierda: Tabla */}
              <View style={styles.table}>
                <View style={[styles.row, styles.headerRow]}>
                  <Text style={[styles.cellHeader, styles.cellSpan]}>
                    Rango de Frecuencia
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={[styles.cellLabel]}>TX</Text>
                  <Text style={styles.cellValue}>1.5 MHz – 30 MHz</Text>
                </View>
                <View style={styles.row}>
                  <Text style={[styles.cellLabel]}>RX</Text>
                  <Text style={styles.cellValue}>10 kHz – 30 MHz</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cellLabel}>Precisión de frecuencia</Text>
                  <Text style={styles.cellValue}>1×10⁻⁹ (OCXO)</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cellLabel}>Potencia de Salida</Text>
                  <Text style={styles.cellValue}>
                    3 Modelos (150 W / 500 W / 1000 W)
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cellLabel}>Clases de emisión</Text>
                  <Text style={styles.cellValue}>
                    A1A, +/‑J3E, +/‑J2D, H3E, A3E, F3E, F1B, B8E, B7D
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cellLabel}>
                    Automatic Link Establishment (ALE)
                  </Text>
                  <Text style={styles.cellValue}>
                    (ALE2G) STD1045/1046/1049; (ALE3G) STANAG‑4538
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cellLabel}>Seguridad</Text>
                  <Text style={styles.cellValue}>
                    Voz y Datos cifrados (SVD para ALE3G); Voz cifrada (SECOM‑H)
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cellLabel}>VoIP</Text>
                  <Text style={styles.cellValue}>
                    A partir de versión de SW 7.0
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cellLabel}>Nº de “Preset pages”</Text>
                  <Text style={styles.cellValue}>100</Text>
                </View>
                <View style={[styles.row, styles.lastRow]}>
                  <Text style={styles.cellLabel}>Nº de canales</Text>
                  <Text style={styles.cellValue}>400</Text>
                </View>
              </View>
            </View>
          </Card.Content>
        </Surface>
        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            {/* Columna derecha: Lista */}
            <View style={styles.bullets}>
              <Text style={styles.bullet}>
                Clases de potencia de y receptor independiente.
              </Text>
              <Text style={styles.bullet}>
                Capacidad de datos y voz segura integrada.
              </Text>
              <Text style={styles.bullet}>
                Excelente colocación gracias a las especificaciones del receptor
                y transmisor.
              </Text>
              <Text style={styles.bullet}>
                Control de nivel selectivo para potencia de transmisión óptima
                (opción SW).
              </Text>
              <Text style={styles.bullet}>
                Sistema de radio definido por software.
              </Text>
              <Text style={styles.bullet}>Operación local o remota.</Text>
              <Text style={styles.bullet}>
                Fuentes de alimentación para varias redes eléctricas estándar.
              </Text>
            </View>
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
  specsContainer: {
    marginTop: 8,
    flexDirection: 'row',
  },
  table: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d0d5dd',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eef2f6',
  },
  headerRow: {
    backgroundColor: '#f5faff',
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  cellLabel: {
    width: 140,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderRightColor: '#eef2f6',
    fontWeight: '600',
    color: '#344054',
  },
  cellValue: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    color: '#475467',
  },
  cellHeader: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontWeight: '700',
    color: '#0b4aa2',
  },
  cellSpan: {
    textAlign: 'left',
  },
  bullets: {
    flex: 1,
    paddingLeft: 16,
    justifyContent: 'flex-start',
  },
  bullet: {
    marginBottom: 8,
    color: '#475467',
  },
});
