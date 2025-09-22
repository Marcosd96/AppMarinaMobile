import React, { useCallback, useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Image, Pressable, StyleSheet, View, useWindowDimensions, ScrollView } from 'react-native';
import { Appbar, Text, Surface } from 'react-native-paper';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  runOnJS,
} from 'react-native-reanimated';

export default function EncendidoScreen({ navigation }: any) {
  const { height: windowHeight } = useWindowDimensions();
  const [layoutWidth, setLayoutWidth] = useState(0);
  const [layoutHeight, setLayoutHeight] = useState(0);
  const [holderWidth, setHolderWidth] = useState(0);
  const [holderHeight, setHolderHeight] = useState(0);
  const asset = Image.resolveAssetSource(
    require('../../Images/encendidosinfondo.png'),
  );
  const imageRatio =
    asset?.width && asset?.height ? asset.width / asset.height : 1.0;
  const isFocused = useIsFocused();

  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const [showHint, setShowHint] = useState(false);
  const pulse = useSharedValue(1);
  const [showInfo, setShowInfo] = useState(false);
  const [infoText, setInfoText] = useState<string>('');
  const infoOpacity = useSharedValue(0);
  const infoTranslateY = useSharedValue(8);
  // Coordenadas normalizadas del hotspot ON/OFF dentro de la imagen (0..1)
  // Ajusta estos valores si necesitas precisión milimétrica
  const HOTSPOT = { x: 0.853, y: 0.773 };

  const onContainerLayout = useCallback((e: any) => {
    const { width, height } = e.nativeEvent.layout;
    setLayoutWidth(width);
    setLayoutHeight(height);
  }, []);

  const onHolderLayout = useCallback((e: any) => {
    const { width, height } = e.nativeEvent.layout;
    setHolderWidth(width);
    setHolderHeight(height);
  }, []);

  // Animate to zoom into right side (ON/OFF area) each time screen is focused
  useEffect(() => {
    if (!isFocused) {
      // reset immediately when leaving
      scale.value = 1;
      translateX.value = 0;
      translateY.value = 0;
      setShowHint(false);
      setShowInfo(false);
      setInfoText('');
      infoOpacity.value = 0;
      infoTranslateY.value = 8;
      return;
    }
    if (!layoutWidth || !layoutHeight) return;
    const targetScale = 4.2;
    const shiftX = -layoutWidth * 1.4; // move image further left to focus right side more
    const shiftY = 0;
    // start from identity each time
    scale.value = 1;
    translateX.value = 0;
    translateY.value = 0;
    setShowHint(false);
    // slight delay to ensure layout settled
    setTimeout(() => {
      scale.value = withTiming(targetScale, {
        duration: 700,
        easing: Easing.out(Easing.cubic),
      });
      translateX.value = withTiming(
        shiftX,
        { duration: 700, easing: Easing.out(Easing.cubic) },
        () => {
          runOnJS(setShowHint)(true);
        },
      );
      translateY.value = withTiming(shiftY, {
        duration: 700,
        easing: Easing.out(Easing.cubic),
      });
    }, 50);
  }, [isFocused, layoutWidth, layoutHeight, scale, translateX, translateY]);

  const animatedImageStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
  }));

  const handleZoomOut = () => {
    setShowHint(false);
    scale.value = withTiming(1, {
      duration: 600,
      easing: Easing.out(Easing.cubic),
    });
    translateX.value = withTiming(0, {
      duration: 600,
      easing: Easing.out(Easing.cubic),
    });
    translateY.value = withTiming(0, {
      duration: 600,
      easing: Easing.out(Easing.cubic),
    });
    // Mostrar texto informativo debajo tras el zoom out
    setTimeout(() => {
      setInfoText(
        'El Sistema de Comunicación R&S M3SR Series4100 HF, garantiza una comunicación permanente a nivel operacional y táctico a través del recurso combinado entre hardware y software para comunicaciones avanzadas vía radiofrecuencia.',
      );
      setShowInfo(true);
    }, 650);
  };

  // Animación de aparición del Surface de información
  useEffect(() => {
    if (showInfo) {
      infoOpacity.value = 0;
      infoTranslateY.value = 12;
      infoOpacity.value = withTiming(1, { duration: 350, easing: Easing.out(Easing.cubic) });
      infoTranslateY.value = withTiming(0, { duration: 350, easing: Easing.out(Easing.cubic) });
    } else {
      infoOpacity.value = 0;
      infoTranslateY.value = 8;
    }
  }, [showInfo, infoOpacity, infoTranslateY]);

  const infoAnimatedStyle = useAnimatedStyle(() => ({
    opacity: infoOpacity.value,
    transform: [{ translateY: infoTranslateY.value }],
  }));

  // Simple hover-like pulse to indicar el botón ON/OFF (cuando el hint está visible)
  useEffect(() => {
    if (showHint) {
      pulse.value = 1;
      // Pulso continuo: 1 -> 1.15 -> 1
      const loop = () => {
        pulse.value = withTiming(
          1.15,
          { duration: 700, easing: Easing.inOut(Easing.ease) },
          () => {
            pulse.value = withTiming(
              1,
              { duration: 700, easing: Easing.inOut(Easing.ease) },
              () => {
                if (showHint) runOnJS(loop)();
              },
            );
          },
        );
      };
      loop();
    }
  }, [showHint, pulse]);

  const pulseStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pulse.value }],
    opacity: 0.9,
  }));

  const imageAreaHeight = Math.max(220, Math.floor(windowHeight * 0.38));

  return (
    <View style={styles.container} onLayout={onContainerLayout}>
      <Appbar.Header mode="center-aligned" style={styles.header}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Encendido" />
      </Appbar.Header>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 16 }}>
      <View style={[styles.stage, { height: imageAreaHeight }]}>
        <Animated.View
          style={[styles.imageHolder, animatedImageStyle]}
          onLayout={onHolderLayout}
        >
          <Image
            source={require('../../Images/encendidosinfondo.png')}
            style={styles.image}
            resizeMode="contain"
          />
          {showHint && (
            // Marcador pulsante posicionado por coordenadas relativas a la imagen
            <Animated.View
              style={[
                styles.hoverCircleBase,
                pulseStyle,
                {
                  // Calcular caja real de la imagen (resizeMode contain)
                  ...(holderWidth && holderHeight
                    ? (() => {
                        const holderRatio = holderWidth / holderHeight;
                        let dispW = holderWidth;
                        let dispH = holderHeight;
                        let offsetX = 0;
                        let offsetY = 0;
                        if (holderRatio > imageRatio) {
                          // barras horizontales
                          dispH = holderHeight;
                          dispW = dispH * imageRatio;
                          offsetX = (holderWidth - dispW) / 2;
                        } else {
                          // barras verticales
                          dispW = holderWidth;
                          dispH = dispW / imageRatio;
                          offsetY = (holderHeight - dispH) / 2;
                        }
                        const size = 12;
                        return {
                          left: offsetX + dispW * HOTSPOT.x - size / 2,
                          top: offsetY + dispH * HOTSPOT.y - size / 2,
                          width: size,
                          height: size,
                          borderRadius: size / 2,
                        };
                      })()
                    : {}),
                  right: holderWidth ? undefined : 24,
                  bottom: holderHeight ? undefined : 120,
                  zIndex: 10,
                },
              ]}
            >
              <Pressable style={styles.hoverTouch} onPress={handleZoomOut} />
            </Animated.View>
          )}
        </Animated.View>

        {showHint && (
          <View style={styles.hintContainer} pointerEvents="box-none">
            <View style={styles.hintBoxRow}>
              <Text style={styles.hintText}>Encienda el Equipo en el circulo rojo</Text>
            </View>
          </View>
        )}
      </View>

      {showInfo && (
        <Animated.View style={[styles.infoAnimatedContainer, infoAnimatedStyle]}>
          <Surface style={styles.infoSurface} elevation={2}>
            <Text style={styles.infoTitle}>Información</Text>
            <Text style={styles.infoText}>{infoText}</Text>
          </Surface>
        </Animated.View>
      )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { backgroundColor: 'rgba(25, 118, 210, 0.9)' },
  stage: { flex: 1, overflow: 'hidden', backgroundColor: '#00000008' },
  imageHolder: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: '100%', height: '100%' },
  infoSurface: {
    marginTop: 8,
    marginHorizontal: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  infoAnimatedContainer: { marginHorizontal: 0 },
  infoTitle: { fontWeight: '700', marginBottom: 6, color: '#111827' },
  infoText: { color: '#374151', lineHeight: 20 },
  hintContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  hintBoxRow: {
    backgroundColor: '#FFF3C4',
    borderColor: '#FACC15',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    margin: 16,
  },
  hintText: { color: '#92400E', fontWeight: '700' },
  hoverCircleBase: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ef4444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hoverTouch: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hoverText: { color: 'white', fontWeight: '800' },
});
