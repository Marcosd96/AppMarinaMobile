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
    endTime: 2,
    instruction: "EATON 9130 UPS",
    clickTarget: {
      x: screenWidth * 0.5,
      y: screenHeight * 0.6,
      width: 120,
      height: 50,
    },
    description: "Ubicar la unidad de Alimentación.",
  },
  {
    startTime: 2,
    endTime: 6,
    instruction: "COMPUTADOR",
    clickTarget: {
      x: screenWidth * 0.5,
      y: screenHeight * 0.6,
      width: 120,
      height: 50,
    },
    description: "Ubicar el computador.",
  },
  {
    startTime: 6,
    endTime: 11,
    instruction: "R&S GB400V Unidad de Audio",
    clickTarget: {
      x: screenWidth * 0.5,
      y: screenHeight * 0.6,
      width: 120,
      height: 50,
    },
    description: "Ubicar la unidad de audio.",
  },
  {
    startTime: 11,
    endTime: 16,
    instruction: "SERVIDOR DEL POWEREDGE R310",
    clickTarget: {
      x: screenWidth * 0.5,
      y: screenHeight * 0.6,
      width: 120,
      height: 50,
    },
    description: "Ubicar el servidor del Poweredge R310.",
  },
  {
    startTime: 16,
    endTime: 21,
    instruction: "SWITCH DELL POWERCONNECT 2816",
    clickTarget: {
      x: screenWidth * 0.5,
      y: screenHeight * 0.6,
      width: 120,
      height: 50,
    },
    description: "Ubicar el switch DELL Powerconnect 2816.",
  },
  {
    startTime: 21,
    endTime: 26,
    instruction: "FUENTE DE ALIMENTACION EXTERNA R&S M3SR IN400A",
    clickTarget: {
      x: screenWidth * 0.5,
      y: screenHeight * 0.6,
      width: 120,
      height: 50,
    },
    description: "Ubicar la fuente de alimentación externa R&S M3SR IN400A.",
  },
  {
    startTime: 26,
    endTime: 30,
    instruction: "R&S ",
    clickTarget: {
      x: screenWidth * 0.5,
      y: screenHeight * 0.6,
      width: 120,
      height: 50,
    },
    description: "Descripción del Paso 7 (edítame)",
  },
  {
    startTime: 30,
    endTime: 33,
    instruction: "TUTORIAL COMPLETADO",
    clickTarget: {
      x: screenWidth * 0.5,
      y: screenHeight * 0.6,
      width: 120,
      height: 50,
    },
    description: "Tutorial completado.",
  },
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
