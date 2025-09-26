import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export interface VideoSegment {
  startTime: number;
  endTime: number;
  instruction: string;
  clickTarget: { x: number; y: number; width: number; height: number };
  description: string;
}

// Configuración de los segmentos del video
// Ajusta estos valores según el contenido real de tu video
export const videoSegments: VideoSegment[] = [
  {
    startTime: 0,
    endTime: 8,
    instruction: "Haz clic en el botón de inicio del sistema",
    clickTarget: { 
      x: screenWidth * 0.3, 
      y: screenHeight * 0.4, 
      width: 120, 
      height: 50 
    },
    description: "Primero necesitamos encender el sistema principal"
  },
  {
    startTime: 8,
    endTime: 15,
    instruction: "Selecciona la configuración de red",
    clickTarget: { 
      x: screenWidth * 0.2, 
      y: screenHeight * 0.6, 
      width: 100, 
      height: 40 
    },
    description: "Configura la conexión de red para el equipo"
  },
  {
    startTime: 15,
    endTime: 22,
    instruction: "Activa el módulo de comunicación",
    clickTarget: { 
      x: screenWidth * 0.5, 
      y: screenHeight * 0.5, 
      width: 110, 
      height: 45 
    },
    description: "Habilita la comunicación con otros dispositivos"
  },
  {
    startTime: 22,
    endTime: 30,
    instruction: "Confirma la configuración",
    clickTarget: { 
      x: screenWidth * 0.4, 
      y: screenHeight * 0.7, 
      width: 90, 
      height: 40 
    },
    description: "Finaliza la configuración del sistema"
  }
];

// Función para ajustar las coordenadas según el tamaño real del video
export const adjustCoordinatesForVideo = (
  videoWidth: number,
  videoHeight: number,
  containerWidth: number,
  containerHeight: number
) => {
  const scaleX = containerWidth / videoWidth;
  const scaleY = containerHeight / videoHeight;
  
  return videoSegments.map(segment => ({
    ...segment,
    clickTarget: {
      x: segment.clickTarget.x * scaleX,
      y: segment.clickTarget.y * scaleY,
      width: segment.clickTarget.width * scaleX,
      height: segment.clickTarget.height * scaleY,
    }
  }));
};
