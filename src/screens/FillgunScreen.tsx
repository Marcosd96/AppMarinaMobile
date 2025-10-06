import React, { useMemo, useState, useCallback } from 'react';
import { ScrollView, StyleSheet, View, useWindowDimensions, Image } from 'react-native';
import { Appbar, Text, Surface, Card, Button } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import Animated, {
  Extrapolate,
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import type { SharedValue } from 'react-native-reanimated';

type SlideItemProps = {
  index: number;
  width: number;
  animatedIndex: SharedValue<number>;
  source: any;
  title: string;
};

function SlideItem({ index, width, animatedIndex, source, title }: SlideItemProps) {
  const slideStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          animatedIndex.value,
          [index - 1, index, index + 1],
          [0.96, 1, 0.96],
          Extrapolate.CLAMP
        ),
      },
      {
        translateY: interpolate(
          animatedIndex.value,
          [index - 1, index, index + 1],
          [8, 0, 8],
          Extrapolate.CLAMP
        ),
      },
    ],
    opacity: interpolate(
      animatedIndex.value,
      [index - 1, index, index + 1],
      [0.6, 1, 0.6],
      Extrapolate.CLAMP
    ),
  }));

  const imageParallaxStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          animatedIndex.value,
          [index - 1, index, index + 1],
          [30, 0, -30],
          Extrapolate.CLAMP
        ),
      },
    ],
  }));

  return (
    <Animated.View style={[{ width }, slideStyle]}>
      <View style={styles.stepImageContainer}>
        <Animated.View style={[{ width: '100%', height: '100%' }, imageParallaxStyle]}>
          <Image source={source} resizeMode="cover" style={styles.stepImage} />
        </Animated.View>
      </View>
      <Text variant="titleMedium" style={styles.stepTitle}>
        {title}
      </Text>
    </Animated.View>
  );
}

type DotProps = { index: number; animatedIndex: SharedValue<number> };

function Dot({ index, animatedIndex }: DotProps) {
  const style = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          animatedIndex.value,
          [index - 1, index, index + 1],
          [1, 1.3, 1],
          Extrapolate.CLAMP
        ),
      },
    ],
    opacity: interpolate(
      animatedIndex.value,
      [index - 1, index, index + 1],
      [0.4, 1, 0.4],
      Extrapolate.CLAMP
    ),
  }));
  return <Animated.View style={[styles.dot, style]} />;
}

export default function FillgunScreen({ navigation }: any) {
  const { width: windowWidth } = useWindowDimensions();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = useMemo(
    () => [
      {
        key: 'paso1',
        title: 'Paso 1: Preparación',
        source: require('../../Images/usodelfillgun/paso1.png'),
      },
      {
        key: 'paso2',
        title: 'Paso 2: Conexión',
        source: require('../../Images/usodelfillgun/paso2.png'),
      },
      {
        key: 'paso3',
        title: 'Paso 3: Configuración',
        source: require('../../Images/usodelfillgun/paso3.png'),
      },
      {
        key: 'paso4',
        title: 'Paso 4: Descarga',
        source: require('../../Images/usodelfillgun/paso4.png'),
      },
    ],
    []
  );

  const animatedIndex = useSharedValue(0);
  const headerTranslateY = useSharedValue(-24);
  const headerOpacity = useSharedValue(0);
  const cardTranslateY = useSharedValue(24);
  const cardOpacity = useSharedValue(0);
  const prevScale = useSharedValue(1);
  const nextScale = useSharedValue(1);

  const goToStep = (nextIndex: number) => {
    const clamped = Math.max(0, Math.min(nextIndex, steps.length - 1));
    setCurrentStep(clamped);
    animatedIndex.value = withTiming(clamped, { duration: 360, easing: Easing.out(Easing.cubic) });
  };

  const handleNext = () => goToStep(currentStep + 1);
  const handlePrev = () => goToStep(currentStep - 1);

  // Responsive carousel width (keeps nice margins and a max content width)
  const horizontalPadding = 40; // roughly matches content padding
  const carouselWidth = Math.min(Math.max(windowWidth - horizontalPadding, 280), 820);

  const trackStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          animatedIndex.value,
          steps.map((_, i) => i),
          steps.map((_, i) => -i * carouselWidth)
        ),
      },
    ],
  }));

  const isSmall = windowWidth < 380;

  useFocusEffect(
    useCallback(() => {
      // Reset instantly to initial state
      setCurrentStep(0);
      animatedIndex.value = 0;
      headerTranslateY.value = -24;
      headerOpacity.value = 0;
      cardTranslateY.value = 24;
      cardOpacity.value = 0;

      // Run entrance animations on focus
      headerTranslateY.value = withTiming(0, { duration: 520, easing: Easing.out(Easing.cubic) });
      headerOpacity.value = withTiming(1, { duration: 520, easing: Easing.out(Easing.cubic) });
      cardTranslateY.value = withTiming(0, { duration: 560, easing: Easing.out(Easing.cubic) });
      cardOpacity.value = withTiming(1, { duration: 560, easing: Easing.out(Easing.cubic) });

      return () => {
        // optional: stop animations or leave values as-is
      };
    }, [headerTranslateY, headerOpacity, cardTranslateY, cardOpacity])
  );

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: headerTranslateY.value }],
    opacity: headerOpacity.value,
  }));

  const cardAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: cardTranslateY.value }],
    opacity: cardOpacity.value,
  }));

  const prevButtonStyle = useAnimatedStyle(() => ({ transform: [{ scale: prevScale.value }] }));
  const nextButtonStyle = useAnimatedStyle(() => ({ transform: [{ scale: nextScale.value }] }));

  return (
    <View style={styles.container}>
      <Animated.View style={headerAnimatedStyle}>
      <Appbar.Header mode="center-aligned" style={styles.header}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Uso del Fillgun" />
      </Appbar.Header>
      </Animated.View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Animated.View style={cardAnimatedStyle}>
        <Surface style={styles.card} elevation={3}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Tutorial paso a paso
            </Text>

            <View style={{ width: '100%', alignItems: 'center' }}>
              <View style={{ width: carouselWidth, overflow: 'hidden' }}>
              <Animated.View style={{ flexDirection: 'row', width: carouselWidth * steps.length }}>
                <Animated.View style={[{ flexDirection: 'row', width: '100%' }, trackStyle]}>
                  {steps.map((step, i) => (
                    <SlideItem
                      key={step.key}
                      index={i}
                      width={carouselWidth}
                      animatedIndex={animatedIndex}
                      source={step.source}
                      title={step.title}
                    />
                  ))}
                </Animated.View>
              </Animated.View>
              </View>
            </View>

            <View style={styles.dotsContainer}>
              {steps.map((_, i) => (
                <Dot key={`dot-${i}`} index={i} animatedIndex={animatedIndex} />
              ))}
            </View>

            <View style={[styles.navRow, isSmall && styles.navRowStack]}>
              <Text variant="labelLarge" style={[styles.stepCounter, { marginBottom: 8, alignSelf: 'center' }]}>
                {currentStep + 1} / {steps.length}
              </Text>
              <View style={[styles.navButtonsGroup, isSmall && styles.navButtonsGroupStack]}>
                <Animated.View style={[styles.navButtonWrap, prevButtonStyle]}>
                  <Button
                    mode="outlined"
                    icon="chevron-left"
                    onPress={handlePrev}
                    onPressIn={() => {
                      prevScale.value = withSpring(0.96, { damping: 18, stiffness: 220 });
                    }}
                    onPressOut={() => {
                      prevScale.value = withSpring(1, { damping: 16, stiffness: 180 });
                    }}
                    disabled={currentStep === 0}
                    style={[styles.navButton, isSmall && styles.navButtonFull]}
                    contentStyle={styles.buttonContent}
                    labelStyle={styles.buttonLabel}
                  >
                    Anterior
                  </Button>
                </Animated.View>
                <Animated.View style={[styles.navButtonWrap, nextButtonStyle]}>
                  <Button
                    mode="contained"
                    icon="chevron-right"
                    onPress={handleNext}
                    onPressIn={() => {
                      nextScale.value = withSpring(0.96, { damping: 18, stiffness: 220 });
                    }}
                    onPressOut={() => {
                      nextScale.value = withSpring(1, { damping: 16, stiffness: 180 });
                    }}
                    disabled={currentStep === steps.length - 1}
                    style={[styles.navButton, isSmall && styles.navButtonFull]}
                    contentStyle={styles.buttonContent}
                    labelStyle={styles.buttonLabel}
                  >
                    Siguiente
                  </Button>
                </Animated.View>
              </View>
            </View>
          </Card.Content>
        </Surface>
        </Animated.View>
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
    alignSelf: 'center',
    maxWidth: 960,
    overflow: 'hidden',
  },
  paragraph: {
    marginTop: 8,
    lineHeight: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
  },
  stepImageContainer: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#eef3f8',
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 8,
  },
  stepImage: {
    width: '100%',
    height: '100%',
  },
  stepTitle: {
    marginTop: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 12,
    // gap not supported on older RN; use margins in children
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1976d2',
    marginHorizontal: 6,
  },
  navRow: {
    marginTop: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navRowStack: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  navButtonsGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  navButtonsGroupStack: {
    flexDirection: 'column',
    gap: 8,
  },
  navButton: {
    minWidth: 140,
    borderRadius: 10,
  },
  navButtonFull: {
    width: '100%',
  },
  navButtonWrap: {
    borderRadius: 12,
  },
  buttonContent: {
    height: 44,
  },
  buttonLabel: {
    letterSpacing: 0.2,
  },
  stepCounter: {
    opacity: 0.7,
  },
});
