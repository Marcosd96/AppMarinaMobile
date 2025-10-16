# Paso a Paso Detallado - Creación de HF R&S Instructor
## Tutorial Completo de Implementación

---

## 📱 PASO A PASO DE CREACIÓN DEL PROYECTO

### PASO 1: Preparación del Entorno de Desarrollo

#### 1.1. Instalar Node.js
```bash
# Descargar e instalar Node.js v20.x LTS desde nodejs.org
# Verificar instalación
node --version  # debe mostrar v20.x
npm --version   # debe mostrar v10.x
```

#### 1.2. Instalar Java Development Kit (JDK)
```bash
# Descargar JDK 17 desde Oracle o usar OpenJDK
# Configurar variable de entorno JAVA_HOME
# Windows:
setx JAVA_HOME "C:\Program Files\Java\jdk-17"
setx PATH "%PATH%;%JAVA_HOME%\bin"

# Verificar
java -version  # debe mostrar versión 17.x
```

#### 1.3. Instalar Android Studio
1. Descargar Android Studio desde https://developer.android.com/studio
2. Instalar con configuración por defecto
3. Abrir Android Studio → SDK Manager
4. Instalar:
   - Android SDK Platform 33 (Android 13)
   - Android SDK Build-Tools
   - Android Emulator
   - Android SDK Platform-Tools

#### 1.4. Configurar Variables de Entorno Android
```bash
# Windows
setx ANDROID_HOME "%LOCALAPPDATA%\Android\Sdk"
setx PATH "%PATH%;%ANDROID_HOME%\platform-tools"
setx PATH "%PATH%;%ANDROID_HOME%\emulator"
setx PATH "%PATH%;%ANDROID_HOME%\tools"
setx PATH "%PATH%;%ANDROID_HOME%\tools\bin"

# Verificar
adb --version
```

---

### PASO 2: Crear el Proyecto Base

#### 2.1. Inicializar Proyecto con TypeScript
```bash
# Crear el proyecto
npx react-native@latest init HFRSInstructor --template react-native-template-typescript

# Output esperado:
# ✔ Downloading template
# ✔ Copying template
# ✔ Processing template
# ✔ Installing dependencies
# Run instructions for Android:
#   • cd HFRSInstructor && npx react-native run-android
```

#### 2.2. Navegar al Proyecto
```bash
cd HFRSInstructor

# Verificar estructura generada
ls -la
# Debes ver:
# - android/
# - ios/
# - node_modules/
# - App.tsx
# - package.json
# - tsconfig.json
```

#### 2.3. Probar el Proyecto Base
```bash
# Terminal 1: Iniciar Metro Bundler
npm start

# Terminal 2: Ejecutar en Android
npm run android

# Debes ver la pantalla de bienvenida de React Native
```

---

### PASO 3: Instalar Dependencias de UI (React Native Paper)

#### 3.1. Instalar React Native Paper
```bash
npm install react-native-paper@^5.14.5
```

#### 3.2. Instalar Dependencias Peer de Paper
```bash
npm install react-native-safe-area-context@^5.6.1
npm install react-native-vector-icons@^10.3.0
npm install @react-native-vector-icons/material-design-icons@^12.3.0
```

#### 3.3. Configurar Vector Icons en Android
**Archivo: `android/app/build.gradle`**
```gradle
// Agregar al final del archivo
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
```

#### 3.4. Actualizar App.tsx para usar Paper
```typescript
import React from 'react';
import { PaperProvider, MD3LightTheme, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={MD3LightTheme}>
        <Text variant="displayLarge">¡React Native Paper funciona!</Text>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
```

#### 3.5. Rebuild Android
```bash
# Limpiar build anterior
cd android
./gradlew clean
cd ..

# Ejecutar nuevamente
npm run android
```

---

### PASO 4: Configurar Sistema de Navegación

#### 4.1. Instalar React Navigation Core
```bash
npm install @react-navigation/native@^7.1.17
```

#### 4.2. Instalar Dependencias Requeridas
```bash
npm install react-native-screens@^4.16.0
npm install react-native-gesture-handler@^2.28.0
npm install react-native-reanimated@^4.1.2
```

#### 4.3. Instalar Navegadores Específicos
```bash
npm install @react-navigation/drawer@^7.5.8
npm install @react-navigation/stack@^7.4.8
```

#### 4.4. Configurar Reanimated en Babel
**Archivo: `babel.config.js`**
```javascript
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-worklets/plugin',  // Agregar esta línea
  ],
};
```

#### 4.5. Configurar Gesture Handler
**Archivo: `index.js`**
```javascript
import 'react-native-gesture-handler';  // Agregar al INICIO del archivo
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

#### 4.6. Configurar en Android MainActivity
**Archivo: `android/app/src/main/java/com/appmarinamobile/MainActivity.kt`**
```kotlin
package com.appmarinamobile

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.os.Bundle  // Agregar

class MainActivity : ReactActivity() {
  override fun getMainComponentName(): String = "HFRSInstructor"

  // Agregar este método
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }

  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
```

---

### PASO 5: Crear Estructura de Carpetas

#### 5.1. Crear Carpetas del Proyecto
```bash
# Estructura de código fuente
mkdir src
mkdir src/screens
mkdir src/navigation
mkdir src/components
mkdir src/config
mkdir src/assets
mkdir src/assets/svgs

# Estructura de recursos
mkdir Images
mkdir Images/iconos
mkdir Images/iconos_landing
mkdir Images/postman
mkdir Images/fallas
mkdir Images/usodelfillgun
mkdir Images/partes_del_sistema
mkdir Images/introduccion_hf

# Videos
mkdir videos
mkdir videos/videos_operatividad
```

---

### PASO 6: Crear Pantalla Principal (Home)

#### 6.1. Crear AppContent.tsx
**Archivo: `src/AppContent.tsx`**
```typescript
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function AppContent({ navigation }: any) {
  const insets = useSafeAreaInsets();

  const menuItems = [
    { id: 1, title: 'INTRODUCCIÓN HF', route: 'IntroduccionHF' },
    { id: 2, title: 'CONCEPTOS TÉCNICOS', route: 'ConceptosTecnicos' },
    { id: 3, title: 'OPERATIVIDAD DEL EQUIPO', route: 'Operatividad' },
    { id: 4, title: 'USO DE POSTMAN', route: 'Postman' },
    { id: 5, title: 'USO DEL FILLGUN', route: 'Fillgun' },
    { id: 6, title: 'FALLAS', route: 'Fallas' },
  ];

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="HF ROHDE & SCHWARZ" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={[styles.content, { paddingBottom: insets.bottom }]}>
        <View style={styles.grid}>
          {menuItems.map(item => (
            <Card 
              key={item.id} 
              style={styles.card}
              onPress={() => navigation.navigate(item.route)}
            >
              <Card.Content>
                <Text variant="titleMedium">{item.title}</Text>
              </Card.Content>
            </Card>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: 16,
  },
});
```

---

### PASO 7: Crear Navegador Principal

#### 7.1. Crear AppNavigator.tsx
**Archivo: `src/navigation/AppNavigator.tsx`**
```typescript
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AppContent from '../AppContent';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
          name="Home" 
          component={AppContent}
          options={{ title: 'Inicio' }}
        />
        {/* Agregar más pantallas después */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
```

---

### PASO 8: Actualizar App.tsx con Temas

#### 8.1. Configurar Temas y Providers
**Archivo: `App.tsx`**
```typescript
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { PaperProvider, MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

const lightTheme = {
  ...MD3LightTheme,
  version: 3,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6200ee',
    secondary: '#03dac6',
  },
};

const darkTheme = {
  ...MD3DarkTheme,
  version: 3,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#bb86fc',
    secondary: '#03dac6',
  },
};

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppNavigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
```

#### 8.2. Probar la Aplicación
```bash
npm run android
```

**Resultado esperado:**
- Pantalla principal con 6 tarjetas
- Drawer funcional al presionar icono de menú
- Tema claro/oscuro según configuración del sistema

---

### PASO 9: Crear Pantallas Individuales

#### 9.1. Template de Pantalla Base
**Archivo: `src/screens/IntroduccionHFScreen.tsx`**
```typescript
import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Appbar, Text, Card } from 'react-native-paper';

export default function IntroduccionHFScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="INTRODUCCIÓN HF" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Conceptos Básicos de HF
            </Text>
            <Text variant="bodyLarge" style={styles.text}>
              La comunicación HF (High Frequency) opera en frecuencias 
              entre 3 y 30 MHz...
            </Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Cover source={require('../../Images/introduccion_hf/1.jpg')} />
          <Card.Content>
            <Text variant="bodyMedium" style={styles.text}>
              Diagrama de propagación ionosférica
            </Text>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  title: {
    marginBottom: 12,
  },
  text: {
    marginTop: 8,
  },
});
```

#### 9.2. Registrar Pantalla en Navigator
**Archivo: `src/navigation/AppNavigator.tsx`**
```typescript
import IntroduccionHFScreen from '../screens/IntroduccionHFScreen';

// Dentro de <Drawer.Navigator>
<Drawer.Screen 
  name="IntroduccionHF" 
  component={IntroduccionHFScreen}
  options={{ title: 'Introducción HF' }}
/>
```

#### 9.3. Repetir para Cada Pantalla
```bash
# Crear archivos para las 19 pantallas
touch src/screens/ConceptosTecnicosScreen.tsx
touch src/screens/OperatividadScreen.tsx
touch src/screens/ConceptoHardwareScreen.tsx
touch src/screens/VistasDelSistemaScreen.tsx
touch src/screens/Armado_Rack.tsx
touch src/screens/EnergizacionEquipoScreen.tsx
touch src/screens/UsoPostmanIIIScreen.tsx
touch src/screens/ApagarEquipoScreen.tsx
touch src/screens/AcopladorFrecuenciaScreen.tsx
touch src/screens/ActivarGPSScreen.tsx
touch src/screens/CambioDeVocoderScreen.tsx
touch src/screens/LlamadaPorVozScreen.tsx
touch src/screens/CambioDeGrupoDeEscaneoScreen.tsx
touch src/screens/CambioDePotenciaScreen.tsx
touch src/screens/CambioDeLlaveScreen.tsx
touch src/screens/PostmanScreen.tsx
touch src/screens/FillgunScreen.tsx
touch src/screens/FallasScreen.tsx
```

---

### PASO 10: Implementar Video Interactivo

#### 10.1. Instalar React Native Video
```bash
npm install react-native-video@^6.16.1
npm install react-native-worklets@^0.5.1
```

#### 10.2. Rebuild Android
```bash
cd android
./gradlew clean
cd ..
npm run android
```

#### 10.3. Crear Configuración de Segmentos
**Archivo: `src/config/videoSegments.ts`**
```typescript
export interface VideoSegment {
  id: number;
  pauseAt: number;
  description: string;
  targetArea: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  nextSegmentStart: number;
}

export const armadoRackSegments: VideoSegment[] = [
  {
    id: 1,
    pauseAt: 5.0,
    description: 'Identificar el switch Ethernet en el rack',
    targetArea: { x: 100, y: 200, width: 150, height: 100 },
    nextSegmentStart: 5.5,
  },
  {
    id: 2,
    pauseAt: 12.0,
    description: 'Localizar la fuente de poder',
    targetArea: { x: 120, y: 320, width: 140, height: 90 },
    nextSegmentStart: 12.5,
  },
  // ... más segmentos
];
```

#### 10.4. Crear Pantalla de Video Interactivo
**Archivo: `src/screens/Armado_Rack.tsx`**
```typescript
import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Appbar, Text, Button } from 'react-native-paper';
import Video from 'react-native-video';
import { armadoRackSegments } from '../config/videoSegments';

export default function Armado_Rack({ navigation }: any) {
  const videoRef = useRef<Video>(null);
  const [paused, setPaused] = useState(false);
  const [currentSegment, setCurrentSegment] = useState(0);
  const [waitingForClick, setWaitingForClick] = useState(false);
  const pulseAnim = useRef(new Animated.Value(1)).current;

  const handleProgress = (data: any) => {
    const currentTime = data.currentTime;
    const segment = armadoRackSegments[currentSegment];

    if (segment && currentTime >= segment.pauseAt && !waitingForClick) {
      setPaused(true);
      setWaitingForClick(true);
      startPulseAnimation();
    }
  };

  const startPulseAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const handleAreaClick = () => {
    if (waitingForClick) {
      pulseAnim.stopAnimation();
      setWaitingForClick(false);
      setPaused(false);
      
      if (currentSegment < armadoRackSegments.length - 1) {
        setCurrentSegment(currentSegment + 1);
      }
    }
  };

  const segment = armadoRackSegments[currentSegment];

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="ARMADO DEL RACK" />
      </Appbar.Header>

      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={require('../../videos/partes.mp4')}
          style={styles.video}
          paused={paused}
          onProgress={handleProgress}
          resizeMode="contain"
        />

        {waitingForClick && segment && (
          <TouchableOpacity
            style={[
              styles.targetArea,
              {
                left: segment.targetArea.x,
                top: segment.targetArea.y,
                width: segment.targetArea.width,
                height: segment.targetArea.height,
              },
            ]}
            onPress={handleAreaClick}
          >
            <Animated.View
              style={[
                styles.pulse,
                { transform: [{ scale: pulseAnim }] },
              ]}
            />
          </TouchableOpacity>
        )}
      </View>

      {waitingForClick && (
        <View style={styles.instructionContainer}>
          <Text variant="titleMedium" style={styles.instruction}>
            {segment?.description}
          </Text>
          <Text variant="bodySmall">Toca el área resaltada para continuar</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  targetArea: {
    position: 'absolute',
    borderWidth: 3,
    borderColor: 'yellow',
    backgroundColor: 'rgba(255, 255, 0, 0.2)',
  },
  pulse: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 0, 0.3)',
  },
  instructionContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  instruction: {
    marginBottom: 8,
  },
});
```

---

### PASO 11: Implementar Drawer Animado

#### 11.1. Crear Custom Drawer
**Archivo: `src/navigation/CustomDrawer.tsx`**
```typescript
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Text, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Section {
  title: string;
  items: { label: string; route: string }[];
}

export default function CustomDrawer(props: any) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const sections: Section[] = [
    {
      title: 'CONCEPTOS TÉCNICOS',
      items: [
        { label: 'Concepto del Hardware', route: 'ConceptoHardware' },
        { label: 'Vistas del Sistema', route: 'VistasDelSistema' },
        { label: 'Armado del Rack', route: 'Armado_Rack' },
      ],
    },
    {
      title: 'OPERATIVIDAD DEL EQUIPO',
      items: [
        { label: 'Energización del Equipo', route: 'EnergizacionEquipo' },
        { label: 'Uso de Postman III', route: 'UsoPostmanIII' },
        { label: 'Apagar Equipo', route: 'ApagarEquipo' },
        { label: 'Acoplador de Frecuencia', route: 'AcopladorFrecuencia' },
        { label: 'Activar GPS', route: 'ActivarGPS' },
        { label: 'Cambio de Vocoder', route: 'CambioDeVocoder' },
        { label: 'Llamada por Voz', route: 'LlamadaPorVoz' },
        { label: 'Cambio de Grupo de Escaneo', route: 'CambioDeGrupoDeEscaneo' },
        { label: 'Cambio de Potencia', route: 'CambioDePotencia' },
        { label: 'Cambio de Llave', route: 'CambioDeLlave' },
      ],
    },
  ];

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text variant="headlineSmall">HF R&S</Text>
      </View>
      <Divider />

      {sections.map(section => (
        <View key={section.title}>
          <TouchableOpacity
            style={styles.sectionHeader}
            onPress={() => toggleSection(section.title)}
          >
            <Text variant="titleMedium">{section.title}</Text>
            <Icon 
              name={expandedSections[section.title] ? 'expand-less' : 'expand-more'} 
              size={24} 
            />
          </TouchableOpacity>

          {expandedSections[section.title] && (
            <View style={styles.itemsContainer}>
              {section.items.map(item => (
                <TouchableOpacity
                  key={item.route}
                  style={styles.item}
                  onPress={() => props.navigation.navigate(item.route)}
                >
                  <Text variant="bodyMedium">{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      ))}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  itemsContainer: {
    backgroundColor: '#fff',
  },
  item: {
    padding: 16,
    paddingLeft: 32,
  },
});
```

#### 11.2. Usar Custom Drawer en Navigator
**Archivo: `src/navigation/AppNavigator.tsx`**
```typescript
import CustomDrawer from './CustomDrawer';

<Drawer.Navigator 
  drawerContent={(props) => <CustomDrawer {...props} />}
  initialRouteName="Home"
>
  {/* pantallas */}
</Drawer.Navigator>
```

---

### PASO 12: Agregar Recursos Multimedia

#### 12.1. Copiar Imágenes
```bash
# Copiar todas las imágenes a sus carpetas correspondientes
cp [fuente]/iconos/* Images/iconos/
cp [fuente]/iconos_landing/* Images/iconos_landing/
cp [fuente]/postman/* Images/postman/
cp [fuente]/fallas/* Images/fallas/
# ... etc
```

#### 12.2. Copiar Videos
```bash
cp [fuente]/partes.mp4 videos/
cp [fuente]/videos_operatividad/* videos/videos_operatividad/
```

#### 12.3. Optimizar Imágenes (Opcional)
```bash
# Instalar herramienta de optimización
npm install -g imageoptim-cli

# Optimizar todas las imágenes
imageoptim --directory Images
```

---

### PASO 13: Optimizar para Producción

#### 13.1. Configurar ProGuard (Android)
**Archivo: `android/app/build.gradle`**
```gradle
android {
    buildTypes {
        release {
            minifyEnabled true
            shrinkResources true
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}
```

#### 13.2. Configurar Babel para Producción
**Archivo: `babel.config.js`**
```javascript
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-worklets/plugin',
  ],
  env: {
    production: {
      plugins: [
        'react-native-paper/babel',  // Tree shaking
        'transform-remove-console',  // Remover console.log
      ],
    },
  },
};
```

---

### PASO 14: Generar APK de Producción

#### 14.1. Generar Keystore
```bash
cd android/app
keytool -genkeypair -v -storetype PKCS12 -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

# Ingresar contraseña cuando se solicite
```

#### 14.2. Configurar Gradle
**Archivo: `android/gradle.properties`**
```properties
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```

**Archivo: `android/app/build.gradle`**
```gradle
android {
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
            shrinkResources true
        }
    }
}
```

#### 14.3. Construir APK Release
```bash
cd android
./gradlew assembleRelease

# APK generado en:
# android/app/build/outputs/apk/release/app-release.apk
```

#### 14.4. Copiar APK a Raíz
```bash
cp android/app/build/outputs/apk/release/app-release.apk ./HFRSInstructor-release.apk
```

---

### PASO 15: Testing y Documentación

#### 15.1. Escribir Tests
**Archivo: `__tests__/App.test.tsx`**
```typescript
import 'react-native';
import React from 'react';
import App from '../App';
import { render } from '@testing-library/react-native';

it('renders correctly', () => {
  const { getByText } = render(<App />);
  expect(getByText('HF ROHDE & SCHWARZ')).toBeTruthy();
});
```

#### 15.2. Ejecutar Tests
```bash
npm test
```

#### 15.3. Crear Documentación
```bash
# Crear archivos de documentación
touch README.md
touch ESTADO_DEL_ARTE_HFRSInstructor.md
touch VIDEO_INTERACTIVO_README.md
```

---

### PASO 16: Version Control

#### 16.1. Inicializar Git
```bash
git init
git add .
git commit -m "Initial commit: HFRSInstructor v0.0.1"
```

#### 16.2. Crear .gitignore
```
node_modules/
.gradle/
build/
*.apk
*.keystore
android/app/build/
ios/Pods/
```

#### 16.3. Conectar a Repositorio Remoto
```bash
git remote add origin [URL_DEL_REPO]
git push -u origin main
```

---

## ✅ CHECKLIST DE VERIFICACIÓN FINAL

### Funcionalidad
- [ ] App inicia sin crashes
- [ ] Navegación Drawer funciona
- [ ] Todas las 19 pantallas son accesibles
- [ ] Video interactivo funciona correctamente
- [ ] Imágenes se cargan correctamente
- [ ] Animaciones son fluidas (60fps)
- [ ] Modo oscuro/claro funciona
- [ ] Responsive en diferentes tamaños de pantalla

### Performance
- [ ] Cold start < 3 segundos
- [ ] Navegación < 200ms
- [ ] Sin memory leaks
- [ ] Frame rate consistente 60fps
- [ ] APK size < 20MB

### Calidad de Código
- [ ] Sin errores de TypeScript
- [ ] Sin warnings de linter
- [ ] Código comentado
- [ ] Tests pasan
- [ ] Documentación completa

---

## 📊 TIEMPO ESTIMADO POR FASE

| Fase | Tiempo | Complejidad |
|------|--------|-------------|
| PASO 1: Entorno | 2-4 horas | Media |
| PASO 2: Proyecto Base | 30 min | Baja |
| PASO 3: UI Framework | 1 hora | Baja |
| PASO 4: Navegación | 2 horas | Media |
| PASO 5: Estructura | 30 min | Baja |
| PASO 6-9: Pantallas | 3-5 días | Alta |
| PASO 10: Video Interactivo | 1-2 días | Alta |
| PASO 11: Drawer Animado | 1 día | Media |
| PASO 12: Recursos | 1 día | Baja |
| PASO 13: Optimización | 1 día | Media |
| PASO 14: Build Release | 2 horas | Media |
| PASO 15: Testing | 1-2 días | Media |
| PASO 16: Git | 1 hora | Baja |
| **TOTAL** | **~15-20 días** | |

---

## 🎯 CONSEJOS FINALES

### Para la Sustentación
1. **Practica la demostración**: Ten la app lista en un dispositivo físico
2. **Prepara backup**: APK instalado en 2 dispositivos diferentes
3. **Conoce cada línea**: Debes poder explicar cualquier parte del código
4. **Documenta decisiones**: Por qué elegiste cada tecnología

### Para el Desarrollo
1. **Commits frecuentes**: Commit cada feature implementada
2. **Branches**: Usa branches para features grandes
3. **Testing continuo**: Prueba en dispositivo real cada cambio importante
4. **Backup**: Respalda el proyecto regularmente

### Errores Comunes a Evitar
1. No ejecutar `./gradlew clean` después de cambios nativos
2. Olvidar configurar vector icons en Android
3. No agregar `react-native-gesture-handler` al inicio de index.js
4. No configurar Reanimated en babel.config.js
5. Importaciones incorrectas de componentes Paper

---

**¡Éxito en tu sustentación!** 🎓

Este proyecto demuestra dominio completo de desarrollo móvil moderno con React Native, TypeScript, Material Design 3, y arquitectura de software profesional.

---

**Versión**: 1.0  
**Última Actualización**: Octubre 2025  
**Autor**: HFRSInstructor Team

