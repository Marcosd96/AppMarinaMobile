import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export interface VideoSegment {
  startTime: number;
  endTime: number;
  instruction: string;
  clickTarget: { x: number; y: number; width: number; height: number };
  description: string;
}

//Video de 30 segundos con 3 pausas
export const ejemploVideoCorto: VideoSegment[] = [
  {
    startTime: 0,
    endTime: 10,
    instruction: "Haz clic en el botón de encendido",
    clickTarget: { 
      x: screenWidth * 0.4, 
      y: screenHeight * 0.3, 
      width: 100, 
      height: 40 
    },
    description: "Primer paso: encender el equipo"
  },
  {
    startTime: 10,
    endTime: 20,
    instruction: "Selecciona el modo de operación",
    clickTarget: { 
      x: screenWidth * 0.3, 
      y: screenHeight * 0.5, 
      width: 120, 
      height: 50 
    },
    description: "Segundo paso: configurar el modo"
  },
  {
    startTime: 20,
    endTime: 30,
    instruction: "Confirma la configuración",
    clickTarget: { 
      x: screenWidth * 0.5, 
      y: screenHeight * 0.7, 
      width: 90, 
      height: 35 
    },
    description: "Tercer paso: finalizar configuración"
  }
];

// EJEMPLO 2: Video largo con muchas pausas
export const ejemploVideoLargo: VideoSegment[] = [
  {
    startTime: 0,
    endTime: 5,
    instruction: "Abre el panel de control",
    clickTarget: { x: 50, y: 100, width: 80, height: 30 },
    description: "Accede al panel principal"
  },
  {
    startTime: 5,
    endTime: 10,
    instruction: "Activa el sistema de monitoreo",
    clickTarget: { x: 150, y: 200, width: 100, height: 40 },
    description: "Habilita el monitoreo en tiempo real"
  },
  {
    startTime: 10,
    endTime: 15,
    instruction: "Configura los parámetros de red",
    clickTarget: { x: 200, y: 300, width: 110, height: 45 },
    description: "Establece la configuración de red"
  },
  {
    startTime: 15,
    endTime: 20,
    instruction: "Inicia la calibración",
    clickTarget: { x: 100, y: 400, width: 90, height: 35 },
    description: "Comienza el proceso de calibración"
  },
  {
    startTime: 20,
    endTime: 25,
    instruction: "Verifica las conexiones",
    clickTarget: { x: 250, y: 500, width: 120, height: 50 },
    description: "Revisa todas las conexiones"
  },
  {
    startTime: 25,
    endTime: 30,
    instruction: "Guarda la configuración",
    clickTarget: { x: 180, y: 600, width: 100, height: 40 },
    description: "Almacena los cambios realizados"
  }
];

// EJEMPLO 3: Coordenadas fijas (no responsivas)
export const ejemploCoordenadasFijas: VideoSegment[] = [
  {
    startTime: 0,
    endTime: 8,
    instruction: "Clic en el botón superior izquierdo",
    clickTarget: { x: 50, y: 100, width: 80, height: 30 },
    description: "Botón de inicio"
  },
  {
    startTime: 8,
    endTime: 16,
    instruction: "Clic en el botón central",
    clickTarget: { x: 150, y: 200, width: 100, height: 40 },
    description: "Botón de configuración"
  },
  {
    startTime: 16,
    endTime: 24,
    instruction: "Clic en el botón inferior derecho",
    clickTarget: { x: 250, y: 300, width: 90, height: 35 },
    description: "Botón de confirmación"
  }
];

// FUNCIONES DE UTILIDAD

// Calcular coordenadas basadas en porcentajes
export const calcularCoordenadasPorcentuales = (
  porcentajeX: number, // 0-100
  porcentajeY: number, // 0-100
  ancho: number,
  alto: number
) => ({
  x: (screenWidth * porcentajeX) / 100,
  y: (screenHeight * porcentajeY) / 100,
  width: ancho,
  height: alto
});

// Ejemplo de uso de coordenadas porcentuales
export const ejemploCoordenadasPorcentuales: VideoSegment[] = [
  {
    startTime: 0,
    endTime: 10,
    instruction: "Clic en el centro de la pantalla",
    clickTarget: calcularCoordenadasPorcentuales(50, 50, 100, 50),
    description: "Centro de la pantalla"
  },
  {
    startTime: 10,
    endTime: 20,
    instruction: "Clic en la esquina superior derecha",
    clickTarget: calcularCoordenadasPorcentuales(80, 20, 80, 40),
    description: "Esquina superior derecha"
  }
];
