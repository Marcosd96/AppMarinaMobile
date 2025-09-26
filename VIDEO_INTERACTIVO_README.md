# Video Interactivo - Tutorial de Armado del Rack

## 📋 Descripción

Este componente implementa un video interactivo que se pausa automáticamente en puntos específicos, mostrando instrucciones y una animación de mano que indica dónde hacer clic para continuar.

## 🚀 Características Implementadas

### ✅ Funcionalidades Principales
- **Pausas Automáticas**: El video se pausa al final de cada segmento definido
- **Animación de Mano**: Indicador visual que se repite mostrando dónde hacer clic
- **Validación de Clics**: Solo avanza si el usuario hace clic en el área correcta
- **Instrucciones Contextuales**: Texto explicativo para cada paso
- **Barra de Progreso**: Muestra el progreso del segmento actual
- **Controles de Video**: Botones para reiniciar y continuar
- **Feedback Visual**: Área resaltada donde hacer clic con animación de pulso

### 🎨 Elementos Visuales
- **Overlay Semi-transparente**: Oscurece el video durante las pausas
- **Tarjeta de Instrucciones**: Diseño limpio con Material Design
- **Animaciones Suaves**: Transiciones fluidas para mejor UX
- **Responsive Design**: Se adapta a diferentes tamaños de pantalla

## 📁 Estructura de Archivos

```
src/
├── screens/
│   └── Armado_Rack.tsx          # Componente principal del video interactivo
├── config/
│   └── videoSegments.ts         # Configuración de segmentos del video
└── navigation/
    └── AppNavigator.tsx         # Navegación actualizada
```

## ⚙️ Configuración

### 1. Segmentos del Video (`src/config/videoSegments.ts`)

```typescript
export const videoSegments: VideoSegment[] = [
  {
    startTime: 0,           // Tiempo de inicio en segundos
    endTime: 8,             // Tiempo de fin en segundos
    instruction: "Texto de instrucción",
    clickTarget: {          // Área donde hacer clic
      x: screenWidth * 0.3,
      y: screenHeight * 0.4,
      width: 120,
      height: 50
    },
    description: "Descripción detallada del paso"
  }
  // ... más segmentos
];
```

### 2. Ajuste de Coordenadas

El archivo incluye una función `adjustCoordinatesForVideo()` para ajustar las coordenadas según el tamaño real del video:

```typescript
const adjustedSegments = adjustCoordinatesForVideo(
  videoWidth,      // Ancho real del video
  videoHeight,     // Alto real del video
  containerWidth,  // Ancho del contenedor
  containerHeight  // Alto del contenedor
);
```

## 🎯 Cómo Usar

### 1. Acceso desde el Menú
- Abre el drawer de navegación
- Ve a "Conceptos Técnicos" → "Armado del Rack"

### 2. Interacción con el Video
1. **Reproducción Automática**: El video comienza automáticamente
2. **Pausa Automática**: Se pausa al final de cada segmento
3. **Seguir Instrucciones**: Lee la instrucción y haz clic en el área indicada
4. **Validación**: Solo avanza si haces clic en el área correcta
5. **Continuar**: El video continúa al siguiente segmento

### 3. Controles Disponibles
- **Reiniciar**: Vuelve al inicio del video
- **Continuar**: Reanuda la reproducción (si está pausado)

## 🔧 Personalización

### Modificar Segmentos
Edita `src/config/videoSegments.ts` para:
- Cambiar los tiempos de pausa
- Actualizar las instrucciones
- Ajustar las áreas de clic
- Agregar o quitar segmentos

### Cambiar el Video
1. Reemplaza `partes.mp4` en la carpeta `videos/`
2. Actualiza la ruta en `Armado_Rack.tsx`:
   ```typescript
   source={require('../../videos/tu_nuevo_video.mp4')}
   ```

### Personalizar Estilos
Modifica los estilos en `Armado_Rack.tsx`:
- Colores de la interfaz
- Tamaños de fuentes
- Animaciones
- Posicionamiento de elementos

## 🎨 Animaciones Implementadas

### 1. Animación de Mano
```typescript
// Escala de 1 a 1.3 con duración de 1200ms
Animated.timing(handAnimation, {
  toValue: 1,
  duration: 1200,
  useNativeDriver: true,
})
```

### 2. Animación de Pulso
```typescript
// Pulso del área de clic de 1 a 1.3
Animated.timing(pulseAnimation, {
  toValue: 1.3,
  duration: 800,
  useNativeDriver: true,
})
```

## 📱 Compatibilidad

- **React Native**: 0.60+
- **react-native-video**: Última versión
- **react-native-paper**: Para componentes UI
- **react-native-reanimated**: Para animaciones

## 🐛 Solución de Problemas

### Video no se reproduce
1. Verifica que el archivo esté en `videos/partes.mp4`
2. Asegúrate de que `react-native-video` esté instalado
3. Para iOS, ejecuta `cd ios && pod install`

### Coordenadas incorrectas
1. Ajusta las coordenadas en `videoSegments.ts`
2. Usa la función `adjustCoordinatesForVideo()` si es necesario
3. Prueba en diferentes tamaños de pantalla

### Animaciones no funcionan
1. Verifica que `react-native-reanimated` esté instalado
2. Asegúrate de que `useNativeDriver: true` esté configurado

## 🚀 Próximas Mejoras

- [ ] Soporte para múltiples videos
- [ ] Configuración de velocidad de reproducción
- [ ] Guardado de progreso
- [ ] Modo de pantalla completa
- [ ] Subtítulos opcionales
- [ ] Análisis de interacciones del usuario

## 📞 Soporte

Si tienes problemas o preguntas:
1. Revisa la documentación de `react-native-video`
2. Verifica la configuración de segmentos
3. Comprueba los logs de la consola para errores
