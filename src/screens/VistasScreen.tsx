import React from 'react';
import { StyleSheet, View, Pressable, ScrollView } from 'react-native';
import { Appbar, Button, Surface, Snackbar, Text } from 'react-native-paper';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  withSequence,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Image as RNImage } from 'react-native';

type Hotspot = {
  id: string;
  x: number;
  y: number;
  label: string;
  size?: number;
  description?: string[];
};

export default function VistasScreen({ navigation }: any) {
  const [isFront, setIsFront] = React.useState(true);
  const [containerSize, setContainerSize] = React.useState({
    width: 0,
    height: 0,
  });
  // const [snack, setSnack] = React.useState<{ visible: boolean; message: string }>({ visible: false, message: '' });
  /* Modo marcar coordenadas (desactivado para uso futuro)
  const [markMode, setMarkMode] = React.useState(false);
  */
  const [selectedHotspot, setSelectedHotspot] = React.useState<Hotspot | null>(
    null,
  );
  // Split view mode (no bottom sheet)
  const highlightScale = useSharedValue(1);
  const highlightOpacity = useSharedValue(0);

  const frontImg = require('../../Images/encendidosinfondo.png');
  const rearImg = require('../../Images/vista_trasera.png');

  // Zoom/Pan shared values
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const savedTX = useSharedValue(0);
  const savedTY = useSharedValue(0);

  const resetTransforms = React.useCallback(() => {
    scale.value = withTiming(1);
    savedScale.value = 1;
    translateX.value = withTiming(0);
    translateY.value = withTiming(0);
    savedTX.value = 0;
    savedTY.value = 0;
  }, [scale, savedScale, translateX, translateY, savedTX, savedTY]);

  React.useEffect(() => {
    // reset zoom when switching image
    resetTransforms();
  }, [isFront, resetTransforms]);

  const pinch = Gesture.Pinch()
    .onUpdate(e => {
      const next = savedScale.value * e.scale;
      // clamp
      scale.value = next < 1 ? 1 : next > 5 ? 5 : next;
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const pan = Gesture.Pan()
    .onUpdate(e => {
      translateX.value = savedTX.value + e.translationX;
      translateY.value = savedTY.value + e.translationY;
    })
    .onEnd(() => {
      savedTX.value = translateX.value;
      savedTY.value = translateY.value;
    });

  /* Handler de marcado (desactivado para uso futuro)
  const handleImagePress = (event: any) => { ... };
  */

  const composed = Gesture.Simultaneous(pan, pinch);

  React.useEffect(() => {
    if (selectedHotspot) {
      // Hotspot highlight animation (scale + fade)
      highlightScale.value = 0.8;
      highlightOpacity.value = 0;
      highlightOpacity.value = withTiming(1, { duration: 180 });
      highlightScale.value = withSequence(
        withTiming(1.15, { duration: 140 }),
        withTiming(1.0, { duration: 120 }),
      );
    }
  }, [selectedHotspot]);

  // Al cambiar de vista, deseleccionar el punto actual
  React.useEffect(() => {
    setSelectedHotspot(null);
  }, [isFront]);

  const highlightStyle = useAnimatedStyle(() => ({
    transform: [{ scale: highlightScale.value }],
    opacity: highlightOpacity.value,
  }));

  const animatedImageStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
  }));

  // Hotspots defined in percentage coordinates of the image container (0-1)
  //Desfase de -5px en y
  //mayor x = derecha
  //menor y = arriba
  const frontHotspots: Hotspot[] = [
    {
      id: 'display',
      x: 0.222,
      y: 0.477,
      label: 'DISPLAY PRINCIPAL',
      size: 40,
      description: [
        '-Visualización de Menús.',
        '-Visualización de la tecla programable dependiente del menú.',
        '-Funciones',
      ],
    },
    {
      id: 'encendido',
      x: 0.099,
      y: 0.594,
      label: 'ENCENDIDO/APAGADO',
      size: 10,
      description: ['On: Encender el display.', 'Off: Apagar el display.'],
    },
    {
      id: 'menu',
      x: 0.131,
      y: 0.594,
      label: 'MENU/INICIO',
      size: 10,
      description: ['Cambiar al menú de inicio.'],
    },
    {
      id: 'led',
      x: 0.159,
      y: 0.594,
      label: 'LED ON',
      size: 10,
      description: [
        'ON: Unidad de Control energizada',
        'CU: Unidad de Control OK',
        'GO: Radio ok.',
      ],
    },
    {
      id: 'esc_clr',
      x: 0.321,
      y: 0.594,
      label: 'ESC CLR',
      size: 10,
      description: ['Eliminar entradas.', 'Abortar procesos.'],
    },
    {
      id: 'ent',
      x: 0.355,
      y: 0.594,
      label: 'ENT',
      size: 10,
      description: ['Confirmación de entradas.', 'Iniciar procesos.'],
    },
    {
      id: 'led2',
      x: 0.293,
      y: 0.594,
      label: 'LED ON',
      size: 10,
      description: [
        'ON: Unidad de Control energizada',
        'CU: Unidad de Control OK',
        'GO: Radio ok.',
      ],
    },
    {
      id: 'teclado',
      x: 0.422,
      y: 0.455,
      label: 'TECLADO NUMÉRICO',
      size: 50,
      description: ['Valores numéricos.', 'Punto decimal.'],
    },
    {
      id: 'perilla',
      x: 0.422,
      y: 0.575,
      label: 'PERILLA DE AFINACIÓN',
      size: 30,
      description: ['Valores de ajuste.', 'Seleccionar menús.'],
    },
    {
      id: 'fillgun',
      x: 0.533,
      y: 0.615,
      label: 'CONECTOR FILLGUN',
      size: 28,
      description: [
        'Este conector solo se usa para conectar el FILLGUN R&S GP3000 a la radio para cargar la configuración al equipo.',
      ],
    },
    {
      id: 'conector_altavoz',
      x: 0.668,
      y: 0.600,
      label: 'CONECTOR ALTAVOZ/AURICULARES',
      size: 13,
      description: [
        'Con PTT Estándar, incluye micrófono (versión reforzada) con cable y conector NF-7.',
      ],
    },
    {
      id: 'altavoz',
      x: 0.627,
      y: 0.600,
      label: 'ALTAVOZ/AURICULAR/VOLUMEN',
      size: 10,
      description: [
        'Volumen bajo: Control girado completamente en sentido antihorario.',
        'Volumen completo: Control girado completamente en sentido horario',
      ],
    },
    {
      id: 'altavoz2',
      x: 0.74,
      y: 0.600,
      label: 'ALTAVOZ/AURICULAR/VOLUMEN',
      size: 10,
      description: [
        'Volumen bajo: Control girado completamente en sentido antihorario.',
        'Volumen completo: Control girado completamente en sentido horario',
      ],
    },
    {
      id: 'int_ext',
      x: 0.779,
      y: 0.600,
      label: 'INT EXT',
      size: 12,
      description: [
        'Seleccionando interno / altavoz externo (función de alternancia).',
      ],
    },
    {
      id: 'erase',
      x: 0.858,
      y: 0.600,
      label: 'ERASE',
      size: 16,
      description: [
        'Presione la tecla borrar durante 1s para borrar todos los ajustes excepto la configuración predeterminada en Preset página 0 (operación de frecuencia fija).',
      ],
    },
    {
      id: 'on_off',
      x: 0.899,
      y: 0.600,
      label: 'ON/OFF',
      size: 13,
      description: [
        'Transceptor de conmutación encendido o apagado (Función de alternancia).',
      ],
    },
  ];


  const rearHotspots: Hotspot[] = [
    {
      id: 'conector_red_electrica',
      x: 0.161,
      y: 0.371,
      label: 'Conector de Red Eléctrica',
      size: 25,
      description: [
        'Este conector solo se usa para conectar la radio a la red eléctrica.',
      ],
    },
    {
      id: 'nan',
      x: 0.077,
      y: 0.653,
      label: 'Not used in this aplication',
      size: 25,
      description: ['No se usa en esta aplicación.'],
    },
    {
      id: 'conector_x32',
      x: 0.174,
      y: 0.653,
      label: 'Conector X32 (BATERIA) a batería externa X32',
      size: 25,
      description: [
        'BATERIA DB15 macho, 3 pines de alta corriente, tipo 40A conector de acomplamiento: conector multipunto hembra de 3 vías R&S, contactos de enchufe de alta corriente, caja blindada R&S',
      ],
    },
    {
      id: 'conector_x31',
      x: 0.285,
      y: 0.653,
      label: 'Conector X31 (DC IN) al amplificador de potencia externo X31',
      size: 25,
      description: [
        'DC IN DB15 macho, 2 pines de alta corriente, tipo 40A + 5 pines auxiliares conector de acoplamiento: conector multipunto hembra de 5 vías R&S, contactos de enchufe de alta corriente, contactos hembra R&S, caja blindada R&S',
      ],
    },
    {
      id: 'conector_sync',
      x: 0.522,
      y: 0.615,
      label: 'Conector EXT SYNC X10',
      size: 13,
      description: [
        'EXT SYNC se utiliza para sincronizar la frecuencia de varios dispositivos en un sistema. BNC (hembra) conector de acoplamiento: sistema de enchufe de cable macho BNC',
      ],
    },
    {
      id: 'conector_audio_ptt',
      x: 0.613,
      y: 0.617,
      label:
        'Conector AUDIO / PTT X26 AUDIO / PTT / E / S MULTIUSO / "Terminal de datos 2" / DB44 HD (Alta Densidad), Conector hembra de acomplamiento',
      size: 30,
      description: [
        'Conector multipunto macho de 44 vías R&S, contactos de clavija R&S, carcasa blindada R&S',
      ],
    },
    {
      id: 'conector_data',
      x: 0.712,
      y: 0.620,
      label: 'Conector DATA  / RS232 X23 "Terminal de Datos 1" ',
      size: 20,
      description: [
        'Observaciones: La radio de la serie XK4100 es un DCE(módem) con respecto a este conector. DB15, hembra; conector de acoplamiento: conector multipunto macho de 15 vías R&S carcasa blindada R&S',
      ],
    },
    {
      id: 'conector_rcb_ser',
      x: 0.789,
      y: 0.620,
      label:
        'Conector RCB SER X21 (control) al amplificador de potencia externo X21',
      size: 20,
      description: [
        'Serie RCB (fibra óptica) Para conectar dispositivos externos como ATU, amplificadores de potencia, etc.',
        'Tipo: Conector hembra de fibra óptica SC',
      ],
    },
    {
      id: 'conector_remoto',
      x: 0.857,
      y: 0.620,
      label: 'Conector Remoto X24',
      size: 20,
      description: [
        'REMOTO (RS232) Observaciones: La radio de la serie XK4100 es un DTE (terminal) con respecto a este conector DB9 macho.',
        'Conector de acoplamiento: conector multipunto hembra de 9 vías R&S, contactos de enchufe de alta corriente, contactos hembra R&S, caja blindada R&S',
      ],
    },
    {
      id: 'conector_lan',
      x: 0.912,
      y: 0.620,
      label: 'Conector LAN X20',
      size: 15,
      description: [
        'Nota: X20 es un conector MDI. Conector de acoplamiento: conector de cable de 8 vías R&S',
      ],
    },
    {
      id: 'conector_antena',
      x: 0.775,
      y: 0.370,
      label: 'Conector de Antena Rx X2111',
      size: 12,
      description: [
        'SOLAMENTE Entrada de antena para el receptor MR4100E y MR4100G-B o entrada para antena RX separada (MR4100X, MR4100) Tipo BNC, conector hembra de acoplamiento: sistema de enchufe de cable macho BNC R&S',
      ],
    },
    {
      id: 'conector_rx_tx',
      x: 0.839,
      y: 0.370,
      label: 'Conector Rx / Tx  X2112 a amplificador de potencia externo',
      size: 12,
      description: [
        '(por ejemplo, R&S VK4150 o R&S VK4190)',
      ],
    },
    {
      id: 'conector_x2113',
      x: 0.908,
      y: 0.370,
      label: 'X2113',
      size: 12,
      description: [
        'CONECTOR DE ANTENA GPS Tipo TNC, hembra. Conector de acoplamiento: sistema de enchufe de cable macho TNC R&S',
      ],
    },
  ];
  const hotspots: Hotspot[] = isFront ? frontHotspots : rearHotspots;

  const handleHotspotPress = (label: string, id: string) => {
    const found = hotspots.find(h => h.id === id) || null;
    setSelectedHotspot(found);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header mode="center-aligned" style={styles.header}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title={isFront ? 'Vista Delantera' : 'Vista Trasera'} />
      </Appbar.Header>

      <View style={styles.content}>
        <Surface style={styles.imageCard} elevation={2}>
          <View
            style={styles.canvas}
            onLayout={e => setContainerSize(e.nativeEvent.layout)}
          >
            <GestureDetector gesture={composed}>
              <Animated.View
                style={[styles.transformLayer, animatedImageStyle]}
              >
                <Animated.Image
                  source={isFront ? frontImg : rearImg}
                  style={isFront ? styles.imageFront : styles.imageRear}
                  resizeMode="center"
                />
                {containerSize.width > 0 &&
                  hotspots.map(h => {
                    const isSelected = selectedHotspot?.id === h.id;
                    return (
                      <Pressable
                        key={h.id}
                        onPress={() => handleHotspotPress(h.label, h.id)}
                        style={[
                          styles.hotspot,
                          {
                            left:
                              h.x * containerSize.width - (h.size || 32) / 2,
                            top:
                              h.y * containerSize.height - (h.size || 32) / 2,
                            width: h.size || 32,
                            height: h.size || 32,
                            borderRadius: (h.size || 32) / 2,
                            backgroundColor: isSelected
                              ? 'rgba(220, 38, 38, 0.25)'
                              : 'transparent',
                            borderColor: isSelected
                              ? 'rgba(220, 38, 38, 0.9)'
                              : 'transparent',
                            borderWidth: isSelected ? 1 : 0,
                          },
                        ]}
                      />
                    );
                  })}

                {/* Animated highlight overlay for selected hotspot */}
                {selectedHotspot && containerSize.width > 0 && (
                  <Animated.View
                    pointerEvents="none"
                    style={[
                      styles.hotspot,
                      highlightStyle,
                      {
                        left:
                          selectedHotspot.x * containerSize.width -
                          (selectedHotspot.size || 32) / 2,
                        top:
                          selectedHotspot.y * containerSize.height -
                          (selectedHotspot.size || 32) / 2,
                        width: selectedHotspot.size || 32,
                        height: selectedHotspot.size || 32,
                        borderRadius: (selectedHotspot.size || 32) / 2,
                        backgroundColor: 'rgba(220, 38, 38, 0.25)',
                        borderColor: 'rgba(220, 38, 38, 0.9)',
                        borderWidth: 1,
                      },
                    ]}
                  />
                )}
              </Animated.View>
            </GestureDetector>
          </View>
        </Surface>

        <View style={styles.actionsRow}>
          <Button
            mode="contained"
            onPress={() => {
              setIsFront(prev => !prev);
              setSelectedHotspot(null);
            }}
            style={[styles.actionBtn]}
          >
            {isFront ? 'Mostrar Vista Trasera' : 'Mostrar Vista Delantera'}
          </Button>
          <Button
            mode="outlined"
            onPress={() => {
              resetTransforms();
              setSelectedHotspot(null);
            }}
            style={[styles.actionBtn]}
          >
            Reiniciar vista
          </Button>
        </View>
        <Surface style={styles.descSurface} elevation={2}>
          <View style={styles.descHeader}>
            <Text variant="titleMedium" style={styles.descTitle}>
              {selectedHotspot ? selectedHotspot.label : 'Selecciona un punto'}
            </Text>
          </View>
          <ScrollView>
            {selectedHotspot?.description?.map((line, idx) => {
              const text = line.replace(/^[-•]\s?/, '');
              return (
                <View key={idx} style={styles.descItemRow}>
                  <View style={styles.descBullet} />
                  <Text variant="bodyMedium" style={styles.descText}>
                    {text}
                  </Text>
                </View>
              );
            })}
            {!selectedHotspot && (
              <Text variant="bodyMedium" style={styles.descPlaceholder}>
                Toca un punto en la imagen para ver su descripción.
              </Text>
            )}
            {selectedHotspot && !selectedHotspot.description && (
              <Text variant="bodyMedium" style={styles.descPlaceholder}>
                ID: {selectedHotspot.id}
              </Text>
            )}
          </ScrollView>
        </Surface>
      </View>
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
  content: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  imageCard: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  descSurface: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'white',
    padding: 12,
  },
  descHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  descTitle: {
    fontSize: 22,
    lineHeight: 26,
    color: '#1f2937',
    fontWeight: '600',
  },
  descItemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 8,
  },
  descBullet: {
    width: 6,
    height: 6,
    marginTop: 7,
    borderRadius: 3,
    backgroundColor: 'rgba(220, 38, 38, 0.9)',
  },
  descText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    color: '#263238',
  },
  descPlaceholder: {
    color: '#607d8b',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
  },
  markingMode: {
    borderWidth: 3,
    borderColor: '#ff6b35',
  },
  markingIndicator: {
    backgroundColor: 'rgba(255, 107, 53, 0.9)',
    borderRadius: 8,
    padding: 8,
    marginTop: 8,
    alignItems: 'center',
  },
  markingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },
  canvas: {
    width: '100%',
    height: '100%',
  },
  transformLayer: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageFront: {
    width: '113%',
    height: '113%',
  },
  imageRear: {
    width: '100%',
    height: '100%',
  },
  hotspot: {
    position: 'absolute',
    backgroundColor: 'rgba(220, 38, 38, 0.25)',
    borderWidth: 1,
    borderColor: 'rgba(220, 38, 38, 0.9)',
  },
  toggleBtn: {
    borderRadius: 10,
    paddingVertical: 4,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  actionBtn: {
    flex: 1,
    borderRadius: 10,
  },
  infoSurface: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
    borderRadius: 12,
    padding: 12,
    backgroundColor: 'white',
  },
  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sheetContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 12,
  },
  sheet: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    backgroundColor: 'white',
  },
  sheetGrabber: {
    alignSelf: 'center',
    width: 36,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ccc',
    marginBottom: 8,
  },
});
