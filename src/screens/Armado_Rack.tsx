import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import Video, { VideoRef } from 'react-native-video';
import { Text, Button, Appbar, useTheme } from 'react-native-paper';
import { videoSegments } from '../config/videoSegments';

const ArmadoRackScreen = ({ navigation }: any) => {
  const theme = useTheme();
  const videoRef = useRef<VideoRef>(null);
  const [currentSegment, setCurrentSegment] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [showStepModal, setShowStepModal] = useState(false);

  const onProgress = (data: any) => {
    const currentTime = data.currentTime;
    const segment = videoSegments[currentSegment];
    const progress = Math.min(currentTime / segment.endTime, 1);
    setVideoProgress(progress);

    if (currentTime >= segment.endTime) {
      setIsPaused(true);
      setShowStepModal(true); // Abrir modal al pausar
    }
  };

  const goNext = () => {
    setShowStepModal(false);
    if (currentSegment < videoSegments.length - 1) {
      setCurrentSegment(prev => prev + 1);
      setIsPaused(false);
      setVideoProgress(0);
    } else {
      Alert.alert('¡Completado!', 'Has terminado el tutorial.');
    }
  };

  const resetVideo = () => {
    setCurrentSegment(0);
    setIsPaused(false);
    setVideoProgress(0);
    setShowStepModal(false);
    if (videoRef.current) videoRef.current.seek(0);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Appbar.Header mode="center-aligned" style={{ backgroundColor: theme.colors.primaryContainer }}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Armado del Rack" 
        />
      </Appbar.Header>

      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={require('../../videos/partes.mp4')}
          style={styles.video}
          paused={isPaused}
          onProgress={onProgress}
          onLoad={() => setIsVideoReady(true)}
          resizeMode="contain"
          repeat={false}
        />
      </View>

      {/* Mensaje inline siempre visible */}
      <View style={styles.inlineMessage}>
        <Text variant="titleSmall" style={styles.inlineTitle}>
          {`Paso ${currentSegment + 1}`}
        </Text>
        <Text variant="bodyMedium" style={styles.inlineInstruction}>
          {videoSegments[currentSegment]?.instruction || 'Instrucción'}
        </Text>
        <Text variant="bodySmall" style={styles.inlineDescription}>
          {videoSegments[currentSegment]?.description || 'Descripción editable del paso.'}
        </Text>
      </View>

      <View style={styles.controls}>
        <Button mode="outlined" onPress={resetVideo} style={styles.controlButton} icon="restart">
          Reiniciar
        </Button>
        <Button mode="contained" onPress={goNext} style={styles.controlButton} icon="play" disabled={!isPaused}>
          Continuar
        </Button>
      </View>

      {!isVideoReady ? (
        <View style={styles.loadingOverlay}>
          <Text variant="bodyLarge">Cargando video...</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 12,
    opacity: 0.7,
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
  },
  videoContainer: {
    flex: 1,
    position: 'relative',
    margin: 0,
    borderRadius: 0,
    overflow: 'hidden',
    elevation: 0,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  inlineMessage: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0,0,0,0.12)',
  },
  inlineTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  inlineInstruction: {
    marginBottom: 4,
  },
  inlineDescription: {
    opacity: 0.8,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: 'white',
    elevation: 2,
  },
  controlButton: {
    flex: 1,
    marginHorizontal: 8,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalButton: {
    marginTop: 15,
  },
});

export default ArmadoRackScreen;
