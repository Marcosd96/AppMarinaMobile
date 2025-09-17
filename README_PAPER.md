# App Marina Mobile - React Native Paper

Este proyecto está configurado con React Native Paper v5.x y Material Design 3.

## Características

- ✅ React Native 0.81.4
- ✅ React Native Paper v5.x
- ✅ Material Design 3 (MD3)
- ✅ Soporte para temas claro y oscuro
- ✅ Iconos vectoriales configurados
- ✅ Optimización de bundle con Babel
- ✅ TypeScript

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
src/
├── AppContent.tsx    # Componente principal con ejemplos de Paper
App.tsx               # Configuración del PaperProvider y temas
```

## Componentes incluidos

El proyecto incluye ejemplos de los siguientes componentes de React Native Paper:

- **Appbar** - Barra de navegación superior
- **Button** - Botones en diferentes variantes
- **Card** - Tarjetas de contenido
- **TextInput** - Campos de entrada de texto
- **FAB** - Botón de acción flotante
- **Switch** - Interruptor
- **Chip** - Chips informativos
- **Surface** - Superficie con elevación
- **Divider** - Divisor

## Temas

El proyecto incluye configuración para temas claro y oscuro que se adaptan automáticamente al sistema del dispositivo.

## Optimización

El proyecto está configurado con el plugin de Babel de React Native Paper para optimizar el tamaño del bundle en producción, importando solo los componentes que se utilizan.

## Documentación

Para más información sobre React Native Paper, visita:
https://callstack.github.io/react-native-paper/
