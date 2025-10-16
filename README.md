<div align="center">

```
╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║                       📱  AppMarinaMobile  📱                        ║
║                                                                       ║
║                 Capacitación Técnica en Equipos HF                    ║
║                  Rohde & Schwarz Mobile Training                      ║
║                                                                       ║
║            React Native  •  TypeScript  •  Material Design 3          ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```

<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-0.81.4-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Native">
  <img src="https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Material%20Design%203-6200EE?style=for-the-badge&logo=material-design&logoColor=white" alt="Material Design 3">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Android-3DDC84?style=flat-square&logo=android&logoColor=white" alt="Android">
  <img src="https://img.shields.io/badge/Platform-iOS%20Ready-000000?style=flat-square&logo=ios&logoColor=white" alt="iOS">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/Version-0.0.1-blue?style=flat-square" alt="Version">
</p>

<p align="center">
  <strong>Aplicación móvil multiplataforma para capacitación técnica interactiva</strong><br>
  <em>Video interactivo • Navegación jerárquica • 20 módulos educativos</em>
</p>

<p align="center">
  <a href="#-características-principales">Características</a> •
  <a href="#-stack-tecnológico-principal">Stack</a> •
  <a href="#-instalación">Instalación</a> •
  <a href="#-documentación">Documentación</a> •
  <a href="#-créditos">Créditos</a>
</p>

---

</div>

## 📋 Resumen Ejecutivo

**AppMarinaMobile** es una aplicación móvil desarrollada en React Native para la capacitación técnica de equipos HF de Rohde & Schwarz. La aplicación implementa Material Design 3 y está diseñada para proporcionar una interfaz intuitiva para el aprendizaje de conceptos técnicos de radiofrecuencia.

---

## ✨ Características Principales

<table>
<tr>
<td width="50%">

### 🎬 Video Interactivo
Sistema innovador de aprendizaje activo con pausas automáticas y validación de interacción del usuario.

### 🎨 Material Design 3
Interfaz moderna con soporte automático de tema claro/oscuro según preferencias del sistema.

### 📱 Responsive Design
Adaptación perfecta desde smartphones pequeños (360dp) hasta tablets grandes (1080dp+).

</td>
<td width="50%">

### 🧭 Navegación Jerárquica
Drawer + Stack Navigation con 20 pantallas organizadas en 7 secciones educativas.

### ⚡ Alto Rendimiento
Animaciones nativas a 60fps con React Native Reanimated y optimizaciones de bundle.

### 📚 20 Módulos
Contenido completo desde conceptos básicos hasta troubleshooting avanzado.

</td>
</tr>
</table>

---

## 🏗️ Arquitectura del Sistema

### Stack Tecnológico Principal

| Componente | Tecnología | Versión | Propósito |
|------------|------------|---------|-----------|
| **Framework Base** | React Native | 0.81.4 | Desarrollo multiplataforma |
| **Lenguaje** | TypeScript | 5.8.3 | Tipado estático y mejor DX |
| **UI Framework** | React Native Paper | 5.14.5 | Componentes Material Design 3 |
| **Gestión de Estado** | React Hooks | 19.1.0 | Estado local y contexto |
| **Navegación** | React Navigation | 7.x | Drawer + Stack Navigation |
| **Iconos** | React Native Vector Icons | 10.3.0 | Iconografía Material Design |
| **Animaciones** | React Native Reanimated | 4.1.2 | Animaciones de alto rendimiento |
| **Video** | React Native Video | 6.16.1 | Reproducción de videos interactivos |

### Arquitectura de Componentes

```
AppMarinaMobile/
├── App.tsx                    # Punto de entrada y configuración de temas
├── src/
│   ├── AppContent.tsx         # Pantalla principal (Home)
│   ├── navigation/
│   │   └── AppNavigator.tsx   # Configuración de navegación (Drawer + Stack)
│   ├── screens/               # 20 pantallas de capacitación
│   │   ├── IntroduccionHFScreen.tsx
│   │   ├── ConceptosTecnicosScreen.tsx
│   │   ├── OperatividadScreen.tsx
│   │   ├── Armado_Rack.tsx    # Video interactivo
│   │   ├── CreditsScreen.tsx  # Créditos del proyecto
│   │   └── ... (15+ más)
│   ├── components/            # Componentes reutilizables
│   │   └── ScreenEntrance.tsx
│   ├── config/                # Configuraciones
│   │   ├── videoSegments.ts   # Segmentos de video interactivo
│   │   └── ejemplo_personalizacion.ts
│   └── assets/
│       └── svgs/              # Iconos SVG personalizados
├── android/                   # Configuración específica Android
├── ios/                       # Configuración específica iOS
├── Images/                    # Recursos estáticos (imágenes, iconos)
└── videos/                    # Videos de capacitación
```

---

## 🎨 Diseño y Experiencia de Usuario

### Sistema de Diseño

- **Design System**: Material Design 3 (MD3)
- **Tema**: Soporte para modo claro y oscuro automático
- **Paleta de Colores**:
  - Primario: `#6200ee` (claro) / `#bb86fc` (oscuro)
  - Secundario: `#03dac6`
  - Superficie: `#f8f9fa` (claro) / `#1e1e1e` (oscuro)

### Componentes de Interfaz

| Componente | Uso | Características |
|------------|-----|-----------------|
| **Appbar** | Navegación superior | Título centrado "HF ROHDE & SCHWARZ" |
| **Card** | Tarjetas de menú | Elevación 2, bordes redondeados 16px |
| **IconButton** | Iconos de navegación | Tamaño 40px, color blanco |
| **ScrollView** | Contenido desplazable | Padding responsivo, gap 16px |
| **Surface** | Contenedores | Elevación y sombras |

### Layout Responsivo

- **Grid System**: 3 columnas con `flexWrap` y `justifyContent: space-between`
- **Aspect Ratio**: 1:1 para tarjetas de menú
- **Padding**: 20px general, 40px inferior
- **Gap**: 16px entre elementos

---

## 📱 Funcionalidades Principales

### Sistema de Navegación

La aplicación implementa un **Drawer Navigation** con menú lateral desplegable que organiza el contenido en secciones jerárquicas:

- **Home**: Pantalla principal con acceso a todos los módulos
- **Menú Drawer**: Navegación lateral con secciones expandibles animadas
- **Stack Navigation**: Navegación en profundidad para submódulos

### Módulos de Capacitación

#### 1. **INTRODUCCIÓN HF**
   - Conceptos básicos de radiofrecuencia HF
   - Fundamentos teóricos

#### 2. **CONCEPTOS TÉCNICOS DE HARDWARE**
   Submódulos:
   - Concepto del Hardware
   - Vistas del Sistema
   - **Armado del Rack** (Video Interactivo)

#### 3. **OPERATIVIDAD DEL EQUIPO**
   Procedimientos operativos completos:
   - Energización del Equipo
   - Uso de Postman III
   - Apagar Equipo
   - Acoplador de Frecuencia
   - Activar GPS
   - Cambio de Vocoder
   - Llamada por Voz
   - Cambio de Grupo de Escaneo
   - Cambio de Potencia
   - Cambio de Llave

#### 4. **USO E INSTALACIÓN DE POSTMAN**
   - Guía completa de instalación
   - Configuración de API testing

#### 5. **USO DEL FILLGUN**
   - Herramientas de programación de equipos
   - Procedimientos paso a paso

#### 6. **FALLAS**
   - Diagnóstico de problemas
   - Solución de fallas comunes
   - Guías visuales de troubleshooting

#### 7. **CRÉDITOS**
   - Equipo de desarrollo
   - Referencias técnicas
   - Información del proyecto

### Características Avanzadas

#### Video Interactivo
- **Pausas automáticas**: El video se detiene en puntos clave
- **Validación de interacción**: El usuario debe hacer clic en áreas específicas
- **Animaciones de guía**: Indicadores visuales animados
- **Feedback visual**: Áreas resaltadas con efectos de pulso
- **Progreso por segmentos**: Control granular del aprendizaje

#### Animaciones
- **Transiciones suaves**: Usando React Native Reanimated
- **Feedback táctil**: Animaciones de escala en botones
- **Drawer animado**: Expansión/colapso de secciones con rotación de iconos

---

## ⚙️ Configuración Técnica

### Dependencias Principales

```json
{
  "react": "19.1.0",
  "react-native": "0.81.4",
  "react-native-paper": "^5.14.5",
  "@react-navigation/native": "^7.1.17",
  "@react-navigation/drawer": "^7.5.8",
  "@react-navigation/stack": "^7.4.8",
  "react-native-reanimated": "^4.1.2",
  "react-native-video": "^6.16.1",
  "react-native-gesture-handler": "^2.28.0",
  "react-native-screens": "^4.16.0",
  "react-native-svg": "^15.13.0",
  "react-native-safe-area-context": "^5.6.1",
  "react-native-vector-icons": "^10.3.0"
}
```

### Configuración de Build

- **Android**: Gradle 8.x, SDK mínimo 21
- **iOS**: Xcode 14+, iOS 11+
- **Metro**: Configuración optimizada para React Native 0.81.4
- **Babel**: Preset React Native con optimizaciones

### Optimizaciones Implementadas

- **Tree Shaking**: Importación selectiva de componentes Paper
- **Bundle Splitting**: Separación de código nativo y JavaScript
- **Icon Optimization**: Vector icons optimizados para diferentes densidades
- **Theme Optimization**: Carga condicional de temas claro/oscuro
- **Native Animations**: useNativeDriver en todas las animaciones
- **Image Optimization**: Assets optimizados por densidad de pantalla
- **Responsive Design**: Layout adaptativo según tamaño de pantalla

---

## 🚀 Instalación

### Pre-requisitos

- Node.js 20.x o superior
- Java Development Kit (JDK) 17
- Android Studio con Android SDK
- Git

### Pasos de Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/AppMarinaMobile.git
cd AppMarinaMobile

# Instalar dependencias
npm install

# Para Android
npm run android

# Para iOS
cd ios && pod install && cd ..
npm run ios
```

### Build de Producción

```bash
# Android APK
cd android
./gradlew assembleRelease
# APK generado en: android/app/build/outputs/apk/release/app-release.apk
```

---

## 🔧 Herramientas de Desarrollo

### Entorno de Desarrollo

- **IDE**: Visual Studio Code con extensiones React Native
- **Package Manager**: npm/pnpm
- **Version Control**: Git
- **Testing**: Jest + React Native Testing Library

### Scripts Disponibles

```bash
npm start          # Iniciar Metro bundler
npm run android    # Ejecutar en Android
npm run ios        # Ejecutar en iOS
npm run lint       # Análisis de código
npm test           # Ejecutar tests
```

---

## 📊 Métricas de Rendimiento

### Tamaño de Bundle

- **JavaScript Bundle**: ~2.5MB (desarrollo)
- **Android APK**: ~15MB (debug)
- **iOS IPA**: ~12MB (debug)

### Tiempos de Carga

- **Cold Start**: < 3 segundos
- **Hot Reload**: < 1 segundo
- **Navigation**: < 200ms

---

## 🚀 Roadmap y Mejoras Futuras

### Implementaciones Completadas ✅

- [x] **Navegación**: React Navigation con Drawer + Stack implementado
- [x] **Animaciones**: React Native Reanimated integrado
- [x] **Video Interactivo**: Sistema de videos con pausas e interacción
- [x] **20 Pantallas**: Módulos completos de capacitación
- [x] **Drawer Animado**: Menú lateral con secciones expandibles
- [x] **Pantalla de Créditos**: Reconocimiento del equipo y referencias

### Próximas Implementaciones

- [ ] **Persistencia**: Agregar AsyncStorage para guardar progreso del usuario
- [ ] **Testing**: Cobertura de tests > 80%
- [ ] **CI/CD**: Pipeline automatizado con GitHub Actions
- [ ] **Offline Mode**: Acceso a contenido sin conexión
- [ ] **Certificados**: Sistema de certificación al completar módulos

### Optimizaciones Planificadas

- [ ] **Lazy Loading**: Carga diferida de módulos pesados
- [ ] **Code Splitting**: División por funcionalidades
- [ ] **Performance Monitoring**: Integración con Flipper/Reactotron
- [ ] **Accessibility**: Mejoras de accesibilidad (screen readers, contraste)
- [ ] **Analytics**: Seguimiento de progreso y métricas de uso

---

## 📚 Documentación

### Documentos del Proyecto

Este repositorio incluye documentación completa para sustentación de tesis y desarrollo:

- 📄 **[SUSTENTACION_CREACION_PROYECTO.md](SUSTENTACION_CREACION_PROYECTO.md)** - Documento académico completo con el proceso de creación
- 📋 **[PASO_A_PASO_CREACION.md](PASO_A_PASO_CREACION.md)** - Tutorial técnico detallado paso a paso
- ❓ **[PREGUNTAS_SUSTENTACION.md](PREGUNTAS_SUSTENTACION.md)** - 30 preguntas frecuentes con respuestas técnicas
- 📝 **[CHEAT_SHEET_SUSTENTACION.md](CHEAT_SHEET_SUSTENTACION.md)** - Resumen rápido para sustentación
- 📖 **[README_PAPER.md](README_PAPER.md)** - Estado del arte de React Native Paper
- 🎬 **[VIDEO_INTERACTIVO_README.md](VIDEO_INTERACTIVO_README.md)** - Documentación del sistema de video interactivo

### Referencias Técnicas

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Native Paper Documentation](https://callstack.github.io/react-native-paper/)
- [Material Design 3 Guidelines](https://m3.material.io/)
- [React Navigation Documentation](https://reactnavigation.org/docs/getting-started)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [React Native Video](https://github.com/react-native-video/react-native-video)

### Estándares y Mejores Prácticas

- **Code Style**: ESLint + Prettier
- **TypeScript**: Configuración estricta
- **Git Flow**: Branching strategy
- **Commit Convention**: Conventional Commits

---

## 🔍 Análisis Comparativo

### Ventajas Competitivas

1. **Material Design 3**: Implementación completa del último sistema de diseño
2. **TypeScript**: Tipado estático para mayor robustez
3. **Modularidad**: Arquitectura escalable y mantenible
4. **Cross-Platform**: Una sola base de código para iOS y Android
5. **Performance**: Optimizaciones específicas para React Native

### Consideraciones Técnicas

- **Dependencias**: Versiones estables y bien mantenidas
- **Compatibilidad**: Soporte para versiones recientes de OS
- **Mantenibilidad**: Código limpio y bien documentado
- **Escalabilidad**: Estructura preparada para crecimiento

---

## 📈 Conclusiones

AppMarinaMobile representa una implementación moderna y robusta de una aplicación de capacitación técnica para equipos HF de Rohde & Schwarz. La aplicación destaca por:

### Logros Principales

1. **Arquitectura Completa**: Sistema de navegación jerárquico con Drawer + Stack
2. **20 Módulos de Capacitación**: Contenido extenso y bien organizado
3. **Video Interactivo**: Innovador sistema de aprendizaje con validación de interacción
4. **Material Design 3**: Implementación completa del sistema de diseño moderno
5. **Animaciones Nativas**: Alto rendimiento con React Native Reanimated
6. **TypeScript**: Código robusto y mantenible con tipado estático
7. **Responsive**: Adaptación a diferentes tamaños de pantalla

### Impacto Técnico

La aplicación utiliza tecnologías de última generación y mejores prácticas de desarrollo móvil:
- Navegación intuitiva y jerarquizada
- Experiencia de usuario fluida con animaciones nativas
- Contenido multimedia interactivo
- Arquitectura modular escalable
- Código limpio y bien documentado

### Estado Actual

✅ **Producción**: La aplicación está completamente funcional con todos los módulos implementados
✅ **APK Generado**: Build de release disponible (AppMarinaMobile-release.apk)
✅ **Documentación**: Completa y actualizada

---

## 👥 Créditos

### Equipo de Desarrollo

- **Cristian Camilo Moya Arévalo** - Desarrollador
- **Jhan Paul Londoño Castillo** - Desarrollador

### Diagnóstico de Fallas

- **Deiby Giovanny Torres Agudelo** - Especialista en Diagnóstico

### Fuentes Técnicas y Referencias

Basado en información y lineamientos técnicos tomados de los **manuales de Radio HF de Rohde & Schwarz**, empleados como referencia para la correcta implementación y configuración de los sistemas de comunicación.

### Lema

> *"Las operaciones navales llegan hasta donde las comunicaciones lo permitan"*

---

**Versión del Proyecto**: 0.0.1  
**Plataformas**: Android / iOS  
**Última Actualización**: Octubre 2025  
**Equipo de Desarrollo**: Cristian Camilo Moya Arévalo • Jhan Paul Londoño Castillo
