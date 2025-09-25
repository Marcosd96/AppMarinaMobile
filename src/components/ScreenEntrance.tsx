import React, { PropsWithChildren, useCallback } from 'react';
import { View, ViewProps } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';

type ScreenEntranceProps = PropsWithChildren<
  ViewProps & {
    offsetY?: number;
    duration?: number;
    delay?: number;
  }
>;

export default function ScreenEntrance({
  children,
  style,
  offsetY = 16,
  duration = 420,
  delay = 40,
  ...rest
}: ScreenEntranceProps) {
  const translateY = useSharedValue(offsetY);
  const opacity = useSharedValue(0);

  useFocusEffect(
    useCallback(() => {
      // reset
      translateY.value = offsetY;
      opacity.value = 0;
      // play
      setTimeout(() => {
        translateY.value = withTiming(0, {
          duration,
          easing: Easing.out(Easing.cubic),
        });
        opacity.value = withTiming(1, {
          duration,
          easing: Easing.out(Easing.cubic),
        });
      }, delay);

      return () => {};
    }, [delay, duration, offsetY, opacity, translateY])
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={[style, animatedStyle]} {...rest}>
      {children}
    </Animated.View>
  );
}


