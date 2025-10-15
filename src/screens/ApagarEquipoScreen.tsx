import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Video, { VideoRef } from 'react-native-video';
import { Appbar, Text } from 'react-native-paper';

export default function ApagarEquipoScreen({ navigation }: any) {
  const videoRef = useRef<VideoRef>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  return (
    <View style={styles.container}>
      <Appbar.Header mode="center-aligned" style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Apagar Equipo" />
      </Appbar.Header>

      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={require('../../videos/videos_operatividad/apagar_equipo.mp4')}
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
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: 'rgba(25, 118, 210, 0.9)',
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

