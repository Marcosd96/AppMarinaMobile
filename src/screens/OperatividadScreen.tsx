import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { Appbar, Text, Surface, Card, Button, useTheme } from 'react-native-paper';
import ScreenEntrance from '../components/ScreenEntrance';

export default function OperatividadScreen({ navigation }: any) {
  const theme = useTheme();

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e: any) => {
      // Prevenir el comportamiento por defecto
      e.preventDefault();
      // Navegar a Home
      navigation.navigate('Home');
    });

    return unsubscribe;
  }, [navigation]);
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Appbar.Header mode="center-aligned" style={{ backgroundColor: theme.colors.primaryContainer }}>
        {/* <Appbar.BackAction onPress={() => navigation.navigate('Home')} /> */}
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Operatividad del Equipo" />
      </Appbar.Header>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <ScreenEntrance>
          <Surface style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={2}>
            <Card.Content>
              <Text
                variant="headlineSmall"
                style={[styles.title, styles.centeredTitle, { color: theme.colors.onSurface }]}
              >
                Partes del Sistema
              </Text>
              <Text variant="titleMedium" style={[styles.subtitle, { color: theme.colors.onSurface }]}>
                R&S®M3SR Series4100
              </Text>
              <Image
                source={require('../../Images/partes_del_sistema/encendidosinfondo.png')}
                style={[styles.deviceImage, styles.tightImage]}
                resizeMode="contain"
              />
              <Text variant="bodyMedium" style={[styles.paragraph, { color: theme.colors.onSurfaceVariant }]}>
                Sistema de comunicación de última generación funcionalidad de
                banda ancha HF para establecer enlaces de datos de largo alcance
                en un canal de 24 kHz. La probabilidad de obtener altas
                velocidades de datos permanentes se puede incrementar gracias a
                un concepto de banda ancha de radio HF bien sintonizado e
                integrado preparado para canales de 48 kHz..
              </Text>
              <Text variant="titleMedium" style={[styles.subtitle, { color: theme.colors.onSurface }]}>
                R&S®M3SR Series4100
              </Text>
              <Image
                source={require('../../Images/partes_del_sistema/fuente.png')}
                style={[styles.deviceImage, styles.tightImage]}
                resizeMode="contain"
              />
                <Text variant="bodyMedium" style={[styles.paragraph, { color: theme.colors.onSurfaceVariant }]}>
                  El R&S IN4000A es una fuente de alimentación AC / DC compacta y
                  polivalente diseñada para su uso con sistemas de Control de
                  tráfico aéreo, defensa aérea y radiocomunicaciones navales. Por
                  ejemplo, el R&S IN4000A suministra energía a una variedad de
                  radios R&S M3SR y componentes del sistema.
                </Text>
                <Text variant="titleMedium" style={[styles.subtitle, { color: theme.colors.onSurface }]}>
                  Switch Dell PowerConnect 2816
                </Text>
                <Image
                  source={require('../../Images/partes_del_sistema/switch.png')}
                  style={[styles.deviceImage, styles.tightImage]}
                  resizeMode="contain"
                />
                <Text variant="bodyMedium" style={[styles.paragraph, { color: theme.colors.onSurfaceVariant }]}>
                  Es un dispositivo de interconexión utilizado para conectar equipos de red, formando una Red de Área Local (LAN). Sus especificaciones técnicas siguen el estándar Ethernet (IEEE 802.3). Es un switch gestionado de Capa 3 (L3) con 16 puertos. Incluye características como Control de Flujo, Capacidad Duplex, Switching de Capa 3, Switching de Capa 2, Auto-detección por Dispositivo, Soporte DHCP, Soporte BootP, Soporte ARP, Soporte VLAN, Auto Uplink (MDI/MDI-X Automático), IGMP Snooping, Activatable, Soporte IPv6 y Compatibilidad con Jumbo Frames.
                </Text>
                <Text variant="titleMedium" style={[styles.subtitle, { color: theme.colors.onSurface }]}>
                  Servidor Dell PowerEdge R310
                </Text>
                <Image
                  source={require('../../Images/partes_del_sistema/servidor.png')}
                  style={[styles.deviceImage, styles.tightImage]}
                  resizeMode="contain"
                />
                <Text variant="bodyMedium" style={[styles.paragraph, { color: theme.colors.onSurfaceVariant }]}>
                  El Servidor Dell PowerEdge R310 es un servidor para rack de un socket y 1U de alto rendimiento que cuenta con un procesamiento flexible, capacidad de ampliación, gestión simplificada, protección de datos y opciones de seguridad. Opciones de procesador y configuraciones de memoria que se equilibran para ejecutar aplicaciones, como Windows® Small Business Server, Business Center Essentials, SQL Workgroup/Standard, Oracle® 11g Standard, VMware®, Active Directory®, SharePoint® y archivo/impresión. Opciones de múltiples RAID y hasta cuatro discos duros de 2,5" o 3,5" para ayudar a mantener protegidos los datos.
                </Text>
                <Text variant="titleMedium" style={[styles.subtitle, { color: theme.colors.onSurface }]}>
                  R&S GB4000V Unidad de Audio
                </Text>
                <Image
                  source={require('../../Images/partes_del_sistema/unidad_de_audio.png')}
                  style={[styles.deviceImage, styles.tightImage]}
                  resizeMode="contain"
                />
                <Text variant="bodyMedium" style={[styles.paragraph, { color: theme.colors.onSurfaceVariant }]}>
                  El R&S GB4000V es una unidad de audio remota. Es ideal para pequeños sistemas ATC donde no hay un interruptor de voz dedicado. El R&S GB4000V proporciona audio, PTT y silenciamiento hacia y desde radios en una ubicación remota. La unidad es compacta y cabe en cualquier consola. El R&S GB4000V se puede conectar a las radios mediante E & M de 4 hilos (línea analógica) o voz sobre IP (VoIP). Los tonos disponibles son 2040 Hz (PTT) y 2440 Hz (SQ).
                </Text>
                <Text variant="titleMedium" style={[styles.subtitle, { color: theme.colors.onSurface }]}>
                  Computador
                </Text>
                <Image
                  source={require('../../Images/partes_del_sistema/computador.png')}
                  style={[styles.serverImage]}
                  resizeMode="contain"
                />
                <Text variant="bodyMedium" style={[styles.paragraph, { color: theme.colors.onSurfaceVariant }]}>
                  Es instalado en el Rack para la instalación de las operaciones basadas en perfiles y las aplicaciones como:
                </Text>
                <Text variant="titleMedium" style={[styles.subtitle, { color: theme.colors.onSurface }]}>
                  R&S®Postman III
                </Text>
                <Text variant="bodyMedium" style={[styles.paragraph, { color: theme.colors.onSurfaceVariant }]}>
                  • E-mail: Admite clientes de correo electrónico estándar{'\n'}
                  • MapTrack: Transporte y visualización de datos GPS{'\n'}
                  • Chat: Comunicación de mensajes cortos entre estaciones{'\n'}
                  • Transferencia de archivos: Envío de cualquier tipo de archivo entre estaciones{'\n'}
                  • Servicio de Fax / Voz: Fax y correo de voz
                </Text>
                <Text variant="titleMedium" style={[styles.subtitle, { color: theme.colors.onSurface }]}>
                  Fuente de alimentación externa R&S® M3SR IN4000A
                </Text>
                <Image
                  source={require('../../Images/partes_del_sistema/fuente_externa.png')}
                  style={[styles.deviceImage, styles.tightImage]}
                  resizeMode="contain"
                />
                <Text variant="bodyMedium" style={[styles.paragraph, { color: theme.colors.onSurfaceVariant }]}>
                  Proporciona más energía real (watts) para proteger más equipos y dejar espacio para expandir los sistemas IT con un factor de energía de 0.9. Simplifica el monitoreo y administración de UPS con una interfaz de usuario de LCD luminosa. Extiende el tiempo de ejecución de la batería para dispositivos críticos con segmentos de carga. Maximiza los tiempos de ejecución con módulos opcionales de batería prolongada.
                </Text>
                <Text variant="bodyMedium" style={[styles.paragraph, { color: theme.colors.onSurfaceVariant }]}>
                  <Text style={styles.specLabel}>RANGO DE ENERGÍA:</Text> 700-3000 VA{'\n'}
                  <Text style={styles.specLabel}>VOLTAJE:</Text> 120, 208, 220-240 Vac{'\n'}
                  <Text style={styles.specLabel}>FRECUENCIA:</Text> 50/60 Hz
                </Text>
              </Card.Content>
            </Surface>

          
        </ScreenEntrance>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
  },
  title: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  centeredTitle: {
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 12,
    marginBottom: 2,
    textAlign: 'left',
    color: '#666',
  },
  paragraph: {
    marginTop: 8,
    marginBottom: 15,
    lineHeight: 20,
  },
  deviceImage: {
    width: '100%',
    height: 200,
    marginTop: 12,
    borderRadius: 8,
  },
  tightImage: {
    marginTop: -30,
    marginBottom: -30,
  },
  serverImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  specLabel: {
    fontWeight: 'bold',
    color: '#1976d2',
  },
  button: {
    marginTop: 20,
  },
});
