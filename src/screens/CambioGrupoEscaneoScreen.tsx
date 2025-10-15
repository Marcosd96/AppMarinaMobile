import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Video, { VideoRef } from 'react-native-video';
import { Appbar, Text, useTheme } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';

export default function CambioGrupoEscaneoScreen({ navigation }: any) {
  const videoRef = useRef<VideoRef>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const theme = useTheme();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      setIsPaused(true);
    }
  }, [isFocused]);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Appbar.Header mode="center-aligned" style={{ backgroundColor: theme.colors.primaryContainer }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Cambio de Grupo de Escaneo" />
      </Appbar.Header>

      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={require('../../videos/videos_operatividad/cambio_grupo_escaneo.mp4')}
          style={styles.video}
          paused={isPaused}
          onLoad={() => setIsVideoReady(true)}
          resizeMode="contain"
          controls={true}
          repeat={false}
        />
      </View>

      {!isVideoReady ? (
        <View style={styles.loadingOverlay}>
          <Text variant="bodyLarge">Cargando video...</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

