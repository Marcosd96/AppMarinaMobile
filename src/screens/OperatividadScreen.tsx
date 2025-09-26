import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { Appbar, Text, Surface, Card, Button } from 'react-native-paper';
import ScreenEntrance from '../components/ScreenEntrance';

export default function OperatividadScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Appbar.Header mode="center-aligned" style={styles.header}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Operatividad del Equipo" />
      </Appbar.Header>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <ScreenEntrance>
          <Surface style={styles.card} elevation={2}>
            <Card.Content>
              <Text
                variant="headlineSmall"
                style={[styles.title, styles.centeredTitle]}
              >
                Partes del Sistema
              </Text>
              <Text variant="titleMedium" style={styles.subtitle}>
                R&S®M3SR Series4100
              </Text>
              <Image
                source={require('../../Images/partes_del_sistema/encendidosinfondo.png')}
                style={[styles.deviceImage, styles.tightImage]}
                resizeMode="contain"
              />
              <Text variant="bodyMedium" style={styles.paragraph}>
                Sistema de comunicación de última generación funcionalidad de
                banda ancha HF para establecer enlaces de datos de largo alcance
                en un canal de 24 kHz. La probabilidad de obtener altas
                velocidades de datos permanentes se puede incrementar gracias a
                un concepto de banda ancha de radio HF bien sintonizado e
                integrado preparado para canales de 48 kHz..
              </Text>
              <Text variant="titleMedium" style={styles.subtitle}>
                R&S®M3SR Series4100
              </Text>
              <Image
                source={require('../../Images/partes_del_sistema/fuente.png')}
                style={[styles.deviceImage, styles.tightImage]}
                resizeMode="contain"
              />
                <Text variant="bodyMedium" style={styles.paragraph}>
                  El R&S IN4000A es una fuente de alimentación AC / DC compacta y
                  polivalente diseñada para su uso con sistemas de Control de
                  tráfico aéreo, defensa aérea y radiocomunicaciones navales. Por
                  ejemplo, el R&S IN4000A suministra energía a una variedad de
                  radios R&S M3SR y componentes del sistema.
                </Text>
                <Text variant="titleMedium" style={styles.subtitle}>
                  Switch Dell PowerConnect 2816
                </Text>
                <Image
                  source={require('../../Images/partes_del_sistema/switch.png')}
                  style={[styles.deviceImage, styles.tightImage]}
                  resizeMode="contain"
                />
                <Text variant="bodyMedium" style={styles.paragraph}>
                  Es un dispositivo de interconexión utilizado para conectar equipos de red, formando una Red de Área Local (LAN). Sus especificaciones técnicas siguen el estándar Ethernet (IEEE 802.3). Es un switch gestionado de Capa 3 (L3) con 16 puertos. Incluye características como Control de Flujo, Capacidad Duplex, Switching de Capa 3, Switching de Capa 2, Auto-detección por Dispositivo, Soporte DHCP, Soporte BootP, Soporte ARP, Soporte VLAN, Auto Uplink (MDI/MDI-X Automático), IGMP Snooping, Activatable, Soporte IPv6 y Compatibilidad con Jumbo Frames.
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
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: 'rgba(25, 118, 210, 0.9)',
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
    backgroundColor: 'white',
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
  button: {
    marginTop: 20,
  },
});
