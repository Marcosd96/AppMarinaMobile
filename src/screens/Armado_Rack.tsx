import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import Video, { VideoRef } from 'react-native-video';
import { Text, Button, Card, ProgressBar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { videoSegments, VideoSegment } from '../config/videoSegments';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const ArmadoRackScreen = () => {
  const videoRef = useRef<VideoRef>(null);
  const [currentSegment, setCurrentSegment] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showHandAnimation, setShowHandAnimation] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const handAnimation = useRef(new Animated.Value(0)).current;
  const pulseAnimation = useRef(new Animated.Value(1)).current;

  // Los segmentos del video se importan desde la configuración

  // Animación de la mano
  useEffect(() => {
    if (showHandAnimation) {
      const animateHand = () => {
        Animated.sequence([
          Animated.timing(handAnimation, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: true,
          }),
          Animated.timing(handAnimation, {
            toValue: 0,
            duration: 1200,
            useNativeDriver: true,
          }),
        ]).start(() => {
          if (showHandAnimation) {
            animateHand();
          }
        });
      };
      animateHand();
    }
  }, [showHandAnimation, handAnimation]);

  // Animación de pulso para el área de clic
  useEffect(() => {
    if (showHandAnimation) {
      const animatePulse = () => {
        Animated.sequence([
          Animated.timing(pulseAnimation, {
            toValue: 1.3,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnimation, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
        ]).start(() => {
          if (showHandAnimation) {
            animatePulse();
          }
        });
      };
      animatePulse();
    }
  }, [showHandAnimation, pulseAnimation]);

  // Control del video
  const onProgress = (data: any) => {
    const currentTime = data.currentTime;
    const segment = videoSegments[currentSegment];
    const progress = currentTime / segment.endTime;
    setVideoProgress(progress);
    
    if (currentTime >= segment.endTime) {
      // Pausar el video al final del segmento
      setIsPaused(true);
      setShowHandAnimation(true);
    }
  };

  const onSegmentComplete = () => {
    if (currentSegment < videoSegments.length - 1) {
      setCurrentSegment(currentSegment + 1);
      setIsPaused(false);
      setShowHandAnimation(false);
      setVideoProgress(0);
    } else {
      // Video completado
      setShowHandAnimation(false);
      Alert.alert(
        "¡Completado!",
        "Has terminado el tutorial de armado del rack. ¡Excelente trabajo!",
        [{ text: "Reiniciar", onPress: resetVideo }]
      );
    }
  };

  const resetVideo = () => {
    setCurrentSegment(0);
    setIsPaused(false);
    setShowHandAnimation(false);
    setVideoProgress(0);
    if (videoRef.current) {
      videoRef.current.seek(0);
    }
  };

  const handleClick = (event: any) => {
    if (!isPaused) return;
    
    const { locationX, locationY } = event.nativeEvent;
    const segment = videoSegments[currentSegment];
    const target = segment.clickTarget;
    
    // Verificar si el clic está dentro del área objetivo
    if (
      locationX >= target.x &&
      locationX <= target.x + target.width &&
      locationY >= target.y &&
      locationY <= target.y + target.height
    ) {
      onSegmentComplete();
    } else {
      // Mostrar mensaje de error si no hace clic en el área correcta
      Alert.alert(
        "¡Ups!",
        "Haz clic en el área indicada por la mano para continuar",
        [{ text: "Entendido" }]
      );
    }
  };

  const currentSegmentData = videoSegments[currentSegment];
  const isLastSegment = currentSegment === videoSegments.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineSmall" style={styles.title}>
          Armado del Rack - Tutorial Interactivo
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Paso {currentSegment + 1} de {videoSegments.length}
        </Text>
        <ProgressBar 
          progress={videoProgress} 
          color="#4CAF50" 
          style={styles.progressBar}
        />
      </View>

      <View style={styles.videoContainer}>
        <TouchableOpacity onPress={handleClick} style={styles.videoTouchArea}>
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
          
          {/* Overlay con instrucciones */}
          {isPaused && (
            <View style={styles.overlay}>
              <Card style={styles.instructionCard}>
                <Card.Content>
                  <Text variant="titleMedium" style={styles.instructionTitle}>
                    {currentSegmentData.instruction}
                  </Text>
                  <Text variant="bodyMedium" style={styles.instructionDescription}>
                    {currentSegmentData.description}
                  </Text>
                </Card.Content>
              </Card>
            </View>
          )}
          
          {/* Animación de la mano */}
          {showHandAnimation && (
            <Animated.View
              style={[
                styles.handAnimation,
                {
                  left: currentSegmentData.clickTarget.x - 20,
                  top: currentSegmentData.clickTarget.y - 30,
                  transform: [
                    {
                      scale: handAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 1.3],
                      }),
                    },
                  ],
                },
              ]}
            >
              <Text style={styles.handIcon}>👆</Text>
            </Animated.View>
          )}

          {/* Área de clic con animación de pulso */}
          {showHandAnimation && (
            <Animated.View
              style={[
                styles.clickArea,
                {
                  left: currentSegmentData.clickTarget.x,
                  top: currentSegmentData.clickTarget.y,
                  width: currentSegmentData.clickTarget.width,
                  height: currentSegmentData.clickTarget.height,
                  transform: [{ scale: pulseAnimation }],
                },
              ]}
            />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.controls}>
        <Button
          mode="outlined"
          onPress={resetVideo}
          style={styles.controlButton}
          icon="restart"
        >
          Reiniciar
        </Button>
        
        {isPaused && (
          <Button
            mode="contained"
            onPress={() => {
              setIsPaused(false);
              setShowHandAnimation(false);
            }}
            style={styles.controlButton}
            icon="play"
          >
            Continuar
          </Button>
        )}
      </View>

      {!isVideoReady && (
        <View style={styles.loadingOverlay}>
          <Text variant="bodyLarge">Cargando video...</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    backgroundColor: 'white',
    elevation: 2,
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
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
  },
  videoTouchArea: {
    flex: 1,
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  instructionCard: {
    maxWidth: '90%',
    backgroundColor: 'white',
  },
  instructionTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#1976D2',
  },
  instructionDescription: {
    textAlign: 'center',
    opacity: 0.8,
  },
  handAnimation: {
    position: 'absolute',
    zIndex: 1000,
  },
  handIcon: {
    fontSize: 40,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  clickArea: {
    position: 'absolute',
    backgroundColor: 'rgba(76, 175, 80, 0.3)',
    borderWidth: 2,
    borderColor: '#4CAF50',
    borderRadius: 8,
    zIndex: 999,
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
});

export default ArmadoRackScreen;
