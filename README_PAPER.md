# App Marina Mobile - Guía de Desarrollo

Este proyecto es una aplicación de capacitación técnica para equipos HF de Rohde & Schwarz, desarrollada con React Native Paper v5.x y Material Design 3.

## Características

- ✅ React Native 0.81.4
- ✅ React Native Paper v5.x con Material Design 3 (MD3)
- ✅ React Navigation 7.x (Drawer + Stack)
- ✅ React Native Reanimated 4.x para animaciones
- ✅ React Native Video para contenido multimedia
- ✅ Soporte para temas claro y oscuro
- ✅ TypeScript para tipado estático
- ✅ 19 pantallas de capacitación implementadas
- ✅ Sistema de video interactivo con validación de interacción

## Instalación

Las dependencias ya están instaladas. Si necesitas reinstalarlas:

```bash
npm install
```

## Configuración adicional para Android

Para que los iconos vectoriales funcionen correctamente en Android, ejecuta:

```bash
npx react-native run-android
```

## Ejecutar el proyecto

### Android
```bash
npx react-native run-android
```

### iOS (solo en macOS)
```bash
npx react-native run-ios
```

## Estructura del proyecto

```
AppMarinaMobile/
├── App.tsx                           # Punto de entrada, PaperProvider y temas
├── index.js                          # Registro de la aplicación
├── src/
│   ├── AppContent.tsx                # Pantalla principal (Home)
│   ├── navigation/
│   │   └── AppNavigator.tsx          # Navegación Drawer + Stack
│   ├── screens/                      # Pantallas de capacitación
│   │   ├── IntroduccionHFScreen.tsx
│   │   ├── ConceptosTecnicosScreen.tsx
│   │   ├── ConceptoHardwareScreen.tsx
│   │   ├── VistasScreen.tsx
│   │   ├── Armado_Rack.tsx           # Video interactivo
│   │   ├── OperatividadScreen.tsx
│   │   ├── EnergizacionEquipoScreen.tsx
│   │   ├── UsoPostmanIIIScreen.tsx
│   │   ├── ApagarEquipoScreen.tsx
│   │   ├── AcopladorFrecuenciaScreen.tsx
│   │   ├── ActivarGPSScreen.tsx
│   │   ├── CambioVocoderScreen.tsx
│   │   ├── LlamadaPorVozScreen.tsx
│   │   ├── CambioGrupoEscaneoScreen.tsx
│   │   ├── CambioPotenciaScreen.tsx
│   │   ├── CambioLlaveScreen.tsx
│   │   ├── PostmanScreen.tsx
│   │   ├── FillgunScreen.tsx
│   │   └── FallasScreen.tsx
│   ├── components/                   # Componentes reutilizables
│   │   ├── ScreenEntrance.tsx        # HOC para transiciones
│   │   └── [1-6].jsx                 # Componentes específicos
│   ├── config/                       # Configuraciones
│   │   ├── videoSegments.ts          # Config del video interactivo
│   │   └── ejemplo_personalizacion.ts
│   └── assets/
│       └── svgs/                     # Iconos SVG personalizados
├── Images/                           # Imágenes y recursos
│   ├── iconos_landing/               # Iconos del menú principal
│   ├── postman/                      # Capturas de Postman
│   ├── fallas/                       # Guías de troubleshooting
│   └── ...
├── videos/                           # Videos de capacitación
│   └── partes.mp4
├── android/                          # Proyecto Android nativo
├── ios/                              # Proyecto iOS nativo
└── __tests__/                        # Tests unitarios
```

## Componentes de React Native Paper Utilizados

La aplicación hace uso extensivo de componentes de Material Design 3:

### Navegación
- **Appbar** - Barra superior en todas las pantallas
  - `Appbar.Header` con modo `center-aligned`
  - `Appbar.Action` para menú hamburguesa y navegación
  - `Appbar.Content` para títulos

### Contenedores y Layout
- **Surface** - Tarjetas del menú principal con elevación
- **Card** - Contenedores de contenido en pantallas
- **ScrollView** - Contenido desplazable en todas las pantallas
- **Divider** - Separadores en el drawer

### Texto y Tipografía
- **Text** - Con variantes de Material Design
  - `variant="titleMedium"` para encabezados
  - `variant="bodySmall"` para subtítulos
  - `variant="labelMedium"` para etiquetas

### Interacción
- **Pressable** - Feedback táctil en tarjetas (React Native nativo)
- **IconButton** - Botones de acción en appbar
- **DrawerItem** - Items del menú lateral

### Navegación (React Navigation)
- **DrawerNavigator** - Menú lateral con secciones expandibles
- **StackNavigator** - Navegación en profundidad para Operatividad
- **DrawerContentScrollView** - Contenido del drawer personalizado

## Sistema de Navegación

### Drawer Navigation
El menú lateral implementa un sistema jerárquico con secciones expandibles:

```typescript
<DrawerSection label="Conceptos Técnicos" open={sectionsOpen.Conceptos}>
  <DrawerItem label="Menú Principal" />
  <DrawerItem label="Concepto del Hardware" />
  <DrawerItem label="Vistas" />
  <DrawerItem label="Armado del Rack" />
</DrawerSection>
```

**Características:**
- Secciones colapsables con animaciones
- Rotación animada de flechas indicadoras
- Cierre automático al navegar
- Estilos personalizados para items anidados

### Stack Navigation
Para el módulo de Operatividad se usa navegación en pila:

```typescript
<OperatividadStack.Navigator>
  <OperatividadStack.Screen name="OperatividadHome" />
  <OperatividadStack.Screen name="EnergizacionEquipo" />
  <OperatividadStack.Screen name="UsoPostmanIII" />
  {/* ... 8 pantallas más */}
</OperatividadStack.Navigator>
```

## Animaciones

### React Native Reanimated
Todas las animaciones usan el driver nativo para máximo rendimiento:

**Drawer Secciones:**
```typescript
const progress = useSharedValue(open ? 1 : 0);
const arrowStyle = useAnimatedStyle(() => ({
  transform: [{ rotate: `${interpolate(progress.value, [0, 1], [0, 90])}deg` }],
}));
```

**Tarjetas del Home:**
```typescript
Animated.spring(scale, {
  toValue: 0.97,
  useNativeDriver: true,
  friction: 6,
  tension: 200,
})
```

## Video Interactivo

La pantalla `Armado_Rack.tsx` implementa un sistema innovador de aprendizaje:

### Características
- **Pausas automáticas** en puntos definidos
- **Validación de clics** en áreas específicas
- **Animación de mano** que indica dónde hacer clic
- **Instrucciones contextuales** en cada paso
- **Barra de progreso** por segmento

### Configuración
Los segmentos se definen en `src/config/videoSegments.ts`:

```typescript
{
  startTime: 0,
  endTime: 8,
  instruction: "Haz clic en el rack",
  clickTarget: {
    x: screenWidth * 0.3,
    y: screenHeight * 0.4,
    width: 120,
    height: 50
  }
}
```

## Temas

El proyecto incluye configuración para temas claro y oscuro que se adaptan automáticamente al sistema del dispositivo.

### Personalización de Colores
```typescript
const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6200ee',
    secondary: '#03dac6',
  },
};
```

## Responsive Design

La aplicación se adapta a diferentes tamaños de pantalla con breakpoints definidos:

```typescript
const BP = { xs: 360, sm: 400, md: 480, lg: 600 };
```

- **xs**: Dispositivos compactos (< 360dp)
- **sm**: Teléfonos pequeños (360-400dp)
- **md**: Teléfonos medianos (400-480dp)
- **lg**: Teléfonos grandes y tablets (> 480dp)

## Optimización

### Bundle
- Plugin de Babel para React Native Paper
- Importación selectiva de componentes
- Tree shaking automático

### Performance
- `useNativeDriver: true` en todas las animaciones
- Imágenes optimizadas por densidad de pantalla
- Vector icons para escalado perfecto
- Lazy loading de recursos pesados

## Desarrollo

### Scripts Disponibles
```bash
npm start              # Metro bundler
npm run android        # Ejecutar en Android
npm run ios            # Ejecutar en iOS
npm run lint           # ESLint
npm test               # Jest tests
```

### Hot Reload
Los cambios en el código se reflejan automáticamente en el emulador/dispositivo.

## Documentación

### Enlaces Útiles
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [Material Design 3](https://m3.material.io/)
- [React Native Video](https://github.com/react-native-video/react-native-video)

### Archivos README Adicionales
- `VIDEO_INTERACTIVO_README.md` - Guía detallada del sistema de video interactivo
- `README.md` - Estado del Arte completo del proyecto
- `ESTADO_DEL_ARTE_AppMarinaMobile.md` - Documentación técnica extendida

## Troubleshooting

### Iconos no se muestran en Android
```bash
cd android && ./gradlew clean
cd .. && npx react-native run-android
```

### Video no reproduce
Verifica que el archivo esté en `videos/partes.mp4` y que `react-native-video` esté instalado.

### Errores de navegación
Asegúrate de que todas las dependencias de React Navigation estén instaladas:
```bash
npm install @react-navigation/native @react-navigation/drawer @react-navigation/stack
npm install react-native-gesture-handler react-native-reanimated react-native-screens
```

Para iOS:
```bash
cd ios && pod install && cd ..
```
