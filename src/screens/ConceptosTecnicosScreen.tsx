import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { Appbar, Text, Surface, Card, Button } from 'react-native-paper';

export default function ConceptosTecnicosScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Appbar.Header mode="center-aligned" style={styles.header}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Conceptos Técnicos" />
      </Appbar.Header>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        {/* Especificaciones: tabla + lista codificadas */}
        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Operación del Equipo - Especificaciones
            </Text>
            <View style={styles.specsContainer}>
              {/* Columna izquierda: Tabla */}
              <View style={styles.table}>
                <View style={[styles.row, styles.headerRow]}>
                  <Text style={[styles.cellHeader, styles.cellSpan]}>
                    Rango de Frecuencia
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={[styles.cellLabel]}>TX</Text>
                  <Text style={styles.cellValue}>1.5 MHz – 30 MHz</Text>
                </View>
                <View style={styles.row}>
                  <Text style={[styles.cellLabel]}>RX</Text>
                  <Text style={styles.cellValue}>10 kHz – 30 MHz</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cellLabel}>Precisión de frecuencia</Text>
                  <Text style={styles.cellValue}>1×10⁻⁹ (OCXO)</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cellLabel}>Potencia de Salida</Text>
                  <Text style={styles.cellValue}>
                    3 Modelos (150 W / 500 W / 1000 W)
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cellLabel}>Clases de emisión</Text>
                  <Text style={styles.cellValue}>
                    A1A, +/‑J3E, +/‑J2D, H3E, A3E, F3E, F1B, B8E, B7D
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cellLabel}>
                    Automatic Link Establishment (ALE)
                  </Text>
                  <Text style={styles.cellValue}>
                    (ALE2G) STD1045/1046/1049; (ALE3G) STANAG‑4538
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cellLabel}>Seguridad</Text>
                  <Text style={styles.cellValue}>
                    Voz y Datos cifrados (SVD para ALE3G); Voz cifrada (SECOM‑H)
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cellLabel}>VoIP</Text>
                  <Text style={styles.cellValue}>
                    A partir de versión de SW 7.0
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cellLabel}>Nº de “Preset pages”</Text>
                  <Text style={styles.cellValue}>100</Text>
                </View>
                <View style={[styles.row, styles.lastRow]}>
                  <Text style={styles.cellLabel}>Nº de canales</Text>
                  <Text style={styles.cellValue}>400</Text>
                </View>
              </View>
            </View>
          </Card.Content>
          <Card.Content>
            {/* Columna derecha: Lista */}
            <View style={styles.bullets}>
              <Text style={styles.bullet}>
                Clases de potencia de y receptor independiente.
              </Text>
              <Text style={styles.bullet}>
                Capacidad de datos y voz segura integrada.
              </Text>
              <Text style={styles.bullet}>
                Excelente colocación gracias a las especificaciones del receptor
                y transmisor.
              </Text>
              <Text style={styles.bullet}>
                Control de nivel selectivo para potencia de transmisión óptima
                (opción SW).
              </Text>
              <Text style={styles.bullet}>
                Sistema de radio definido por software.
              </Text>
              <Text style={styles.bullet}>Operación local o remota.</Text>
              <Text style={styles.bullet}>
                Fuentes de alimentación para varias redes eléctricas estándar.
              </Text>
            </View>
          </Card.Content>
        </Surface>

        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Características y Beneficios
            </Text>
            <View style={styles.bullets}>
              <Text style={styles.bullet}>IP para una fácil integración.</Text>
              <Text style={styles.bullet}>Informes GPS.</Text>
              <Text style={styles.bullet}>
                Patch telefónico, SIP y de voz sobre IP.
              </Text>
              <Text style={styles.bullet}>Audio y control remoto vía IP.</Text>
              <Text style={styles.bullet}>Conexión de dominio.</Text>
              <Text style={styles.bullet}>Operación en ALE-2G, ALE-3G.</Text>
              <Text style={styles.bullet}>
                Comunicaciones seguras y confiables.
              </Text>
              <Text style={styles.bullet}>Voz digital segura (SDV).</Text>
              <Text style={styles.bullet}>SECOM-H EPM (ECCM).</Text>
              <Text style={styles.bullet}>
                Capacidad de colocación debido a las excelentes especificaciones
                del receptor.
              </Text>
              <Text style={styles.bullet}>
                Control de nivel selectivo para una potencia de transmisión
                óptima (opción de software).
              </Text>
              <Text style={styles.bullet}>
                Selección de RF sintonizada digitalmente (opción de hardware).
              </Text>
              <Text style={styles.bullet}>
                Configuración de radio solo por personal autorizado.
              </Text>
              <Text style={styles.bullet}>
                Diseño resistente, adecuado incluso para condiciones ambientales
                difíciles.
              </Text>
              <Text style={styles.bullet}>
                Potente prueba incorporada (BIT).
              </Text>
              <Text style={styles.bullet}>
                Importantes funciones del equipo, como el establecimiento
                automático de enlaces (ALE) o varias.
              </Text>
              <Text style={styles.bullet}>
                Las radios admiten el salto de frecuencia y brindan
                interoperabilidad con otros radios R&S.
              </Text>
            </View>
          </Card.Content>
        </Surface>
        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              Modos de Operación para M3SR-Series 4100
            </Text>
            <View style={styles.bullets}>
              <Text style={styles.bullet}>
                Frecuencia Fija (ej. Voz, Morse).
              </Text>
              <Text style={styles.bullet}>
                Tactical Data Link (Datos Tácticos) (LINK-11/-Y/-22).
              </Text>
              <Text style={styles.bullet}>
                Automatic Link Establishment (ALE 3G).
              </Text>
              <Text style={styles.bullet}>Formas de onda EPM (SECOM-H).</Text>
              <Text style={styles.bullet}>Voz/Datos Seguros (SVD).</Text>
            </View>
          </Card.Content>
        </Surface>
        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              ATU FK4115M HF Unidad de sintonización de antena
            </Text>
            <View style={styles.rowBetween}>
              <View style={styles.textCol}>
                <Text style={styles.bullet}>
                  El R&S®FK4115M ofrece una "función de sintonización
                  silenciosa" en todo el rango de frecuencia de 1,5 MHz a 30
                  MHz. La ventaja para el usuario es la baja probabilidad de
                  interceptación (LPI), ya que el ajuste de la frecuencia de ATU
                  se realiza muy rápidamente y sin ninguna emisión de potencia
                  de RF.
                </Text>
                <Text style={styles.bullet}>
                  A la salida de RF del transceptor de 150 W del Serie
                  R&S®M3SR4100, la unidad de sintonización de antena (ATU) puede
                  manejar hasta 150 W PEP o 100 W CW al 100% del ciclo de
                  trabajo. Tiene un tiempo de ajuste extremadamente rápido para
                  canales silenciosos y permite la operación de salto de
                  frecuencia en línea con R&S®SECOM‑H.
                </Text>
              </View>
            </View>

            <View style={styles.bullets}>
              <Image
                source={require('../../Images/rys_fk4115m.png')}
                style={styles.deviceImage}
                resizeMode="contain"
              />
              <Text style={styles.bullet}>
                Sintonización silenciosa en todo el rango (1,5 MHz a 30 MHz).
              </Text>
              <Text style={styles.bullet}>
                Sintonización de antenas de varilla, látigo y alambre.
              </Text>
              <Text style={styles.bullet}>
                150 W PEP, 100 W CW al 100% del ciclo de trabajo.
              </Text>
              <Text style={styles.bullet}>
                Capacidad de salto de frecuencia (R&S®SECOM‑H).
              </Text>
              <Text style={styles.bullet}>
                Ajuste silencioso típico menor a 5 ms una vez aprendidas las
                frecuencias.
              </Text>
              <Text style={styles.bullet}>
                Reintento no silencioso menor a 100 ms si no se alcanza VSWR
                (menor a 1,5:1).
              </Text>
            </View>
          </Card.Content>
        </Surface>
        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              ACCESORIOS
            </Text>
            <Text variant="titleMedium" style={{ marginBottom: 8 }}>
              R&S® GP4100A FILL GUN
            </Text>
            <Image
              source={require('../../Images/fillgun.png')}
              style={styles.fillgunImage}
              resizeMode="contain"
            />
            <Text style={styles.bullet}>
              El dispositivo FILL GUN se utiliza para transferir datos de
              configuración a uno o más radios R&S®M3SR Series4100. No necesita
              fuente de alimentación ya que es suministrado por la PC conectada
              o la radio. El estado del dispositivo de llenado se indica
              mediante LED (encendido, lectura, escritura, conectado, error).
            </Text>
            <Text style={styles.bullet}>
              Después de establecer una configuración de red con R&S, los
              archivos de configuración generados se almacenan en el dispositivo
              de llenado a través de la interfaz USB del PC que ejecuta
              R&S®RNMS3000 y los datos remotos cargador (RDL).
            </Text>
            <Text style={styles.bullet}>
              En el sitio de radio, la acción del operador se limita a elegir la
              dirección global de radio apropiada (RGA) en la HMI de radio para
              asignar una radio a su configuración preconfigurada. Todos los
              archivos transferidos desde y hacia el dispositivo de llenado se
              cifran antes de cargarlos. Por lo tanto, los datos sensibles, como
              las claves, se almacenan en el dispositivo.
            </Text>

            <View style={styles.rowBetween}>
              <View style={styles.colHalf}>
                <Text variant="titleMedium" style={{ marginBottom: 4 }}>
                  R&S®GA013 Auricular micro teléfono
                </Text>
                <Text style={styles.bullet}>
                  Con PTT Estándar, incl. micrófono (versión reforzada) con
                  cable y conector NF-7
                </Text>
              </View>
              <View style={styles.colHalf}>
                <Text variant="titleMedium" style={{ marginBottom: 4 }}>
                  R&S®GA015 Audífonos de cabeza
                </Text>
                <Text style={styles.bullet}>
                  Con PTT Estándar, dinámico con cable y conector NF-7, con
                  protección activa
                </Text>
              </View>
            </View>

            <Text
              variant="titleMedium"
              style={{ marginTop: 12, marginBottom: 8 }}
            >
              Fuente de alimentación externa R&S® M3SR IN4000A
            </Text>
            <Image
              source={require('../../Images/RyS_m3sr_in4000a.png')}
              style={[styles.fillgunImage, { height: 180 }]}
              resizeMode="contain"
            />
            <Text style={styles.bullet}>
              La radio funciona DC de 28 V DC (28 V DC a 29 V DC). Este voltaje
              se proporciona como una opción por la fuente de alimentación
              externa R&S IN4000A disponible para este propósito. La radio
              también puede funcionar con una batería externa (19 V DC a 31 V
              DC).
            </Text>
            <Text style={styles.bullet}>
              Una función de conmutación automática integrada en la radio
              proporciona conmutación automática en espera en caso de que falle
              la alimentación principal. Es una fuente de alimentación AC/DC
              compacta y polivalente diseñada para su uso con sistemas de
              control y radiocomunicaciones navales.
            </Text>
          </Card.Content>
        </Surface>
        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              R&S®GB4000V unidad de audio remota
            </Text>
            <Image
              source={require('../../Images/GB400V.png')}
              style={[styles.fillgunImage, { height: 220 }]}
              resizeMode="contain"
            />
            <View style={styles.bullets}>
              <Text style={styles.bullet}>
                Diseño compacto para minimizar el espacio requerido en las
                consolas del operador.
              </Text>
              <Text style={styles.bullet}>
                Conexión analógica para usar con todas las radios Rohde &
                Schwarz.
              </Text>
              <Text style={styles.bullet}>
                Señalización PTT y SQ en banda para su uso con radios
                R&S®Series4200.
              </Text>
              <Text style={styles.bullet}>
                Conexión VoIP compatible con EUROCAE ED137-1 a radios
                R&S®Series4200, R&S®Series4400 y R&S®Series4100.
              </Text>
              <Text style={styles.bullet}>
                Altavoz incorporado con control de volumen.
              </Text>
              <Text style={styles.bullet}>
                Ajuste de volumen mínimo configurable para garantizar la
                seguridad.
              </Text>
              <Text style={styles.bullet}>
                Los LED indican el estado de las radios (PTT, silenciador,
                VoIP).
              </Text>
              <Text style={styles.bullet}>
                Disponible con un conector de auriculares adicional para la
                operación del instructor.
              </Text>
              <Text style={styles.bullet}>
                Conexión de altavoz externo para monitorización.
              </Text>
              <Text style={styles.bullet}>
                Se puede montar en un bastidor de 19" o en consolas de operador.
              </Text>
              <Text style={styles.bullet}>
                Dos conexiones de DC independientes para fuente de alimentación
                redundante.
              </Text>
              <Text style={styles.bullet}>
                Fácilmente configurable a través de un navegador web. Panel
                frontal a prueba de salpicaduras.
              </Text>
            </View>
          </Card.Content>
        </Surface>
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
  paragraph: {
    marginTop: 8,
    lineHeight: 20,
  },
  button: {
    marginTop: 20,
  },
  specsContainer: {
    marginTop: 8,
    flexDirection: 'row',
  },
  table: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d0d5dd',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eef2f6',
  },
  headerRow: {
    backgroundColor: '#f5faff',
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  cellLabel: {
    width: 140,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderRightColor: '#eef2f6',
    fontWeight: '600',
    color: '#344054',
  },
  cellValue: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    color: '#475467',
  },
  cellHeader: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontWeight: '700',
    color: '#0b4aa2',
  },
  cellSpan: {
    textAlign: 'left',
  },
  bullets: {
    flex: 1,
    paddingLeft: 16,
    justifyContent: 'flex-start',
  },
  bullet: {
    marginBottom: 8,
    color: '#475467',
  },
  colHalf: {
    flex: 1,
    paddingRight: 12,
  },
  fillgunImage: {
    width: '100%',
    height: 220,
    marginTop: 12,
    alignSelf: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCol: {
    flex: 1,
    paddingRight: 12,
    gap: 6,
  },
  deviceImage: {
    width: 220,
    height: 160,
    alignSelf: 'center',
  },
});
