import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import {
  Appbar,
  Text,
  Surface,
  Card,
  Button,
  DataTable,
  useTheme,
} from 'react-native-paper';
import ScreenEntrance from '../components/ScreenEntrance';

export default function ConceptosTecnicosScreen({ navigation }: any) {
  const theme = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Appbar.Header mode="center-aligned" style={{ backgroundColor: theme.colors.primaryContainer }}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Conceptos Técnicos" />
      </Appbar.Header>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <ScreenEntrance>
        {/* Especificaciones: tabla + lista codificadas */}
        <Surface style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={[styles.title, { color: theme.colors.onSurface }]}>
              Operación del Equipo - Especificaciones
            </Text>
            <View style={styles.specsContainer}>
              {/* Columna izquierda: Tabla */}
              <View style={[styles.table, { borderColor: theme.colors.outline, backgroundColor: theme.colors.surface }]}>
                <View style={[styles.row, styles.headerRow, { backgroundColor: theme.dark ? theme.colors.surfaceVariant : '#f5faff' }]}>
                  <Text style={[styles.cellHeader, styles.cellSpan, { color: theme.colors.primary }]}>
                    Rango de Frecuencia
                  </Text>
                </View>
                <View style={[styles.row, { borderTopColor: theme.colors.outlineVariant }]}>
                  <Text style={[styles.cellLabel, { borderRightColor: theme.colors.outlineVariant, color: theme.colors.onSurface }]}>TX</Text>
                  <Text style={[styles.cellValue, { color: theme.colors.onSurfaceVariant }]}>1.5 MHz – 30 MHz</Text>
                </View>
                <View style={[styles.row, { borderTopColor: theme.colors.outlineVariant }]}>
                  <Text style={[styles.cellLabel, { borderRightColor: theme.colors.outlineVariant, color: theme.colors.onSurface }]}>RX</Text>
                  <Text style={[styles.cellValue, { color: theme.colors.onSurfaceVariant }]}>10 kHz – 30 MHz</Text>
                </View>
                <View style={[styles.row, { borderTopColor: theme.colors.outlineVariant }]}>
                  <Text style={[styles.cellLabel, { borderRightColor: theme.colors.outlineVariant, color: theme.colors.onSurface }]}>Precisión de frecuencia</Text>
                  <Text style={[styles.cellValue, { color: theme.colors.onSurfaceVariant }]}>1×10⁻⁹ (OCXO)</Text>
                </View>
                <View style={[styles.row, { borderTopColor: theme.colors.outlineVariant }]}>
                  <Text style={[styles.cellLabel, { borderRightColor: theme.colors.outlineVariant, color: theme.colors.onSurface }]}>Potencia de Salida</Text>
                  <Text style={[styles.cellValue, { color: theme.colors.onSurfaceVariant }]}>
                    3 Modelos (150 W / 500 W / 1000 W)
                  </Text>
                </View>
                <View style={[styles.row, { borderTopColor: theme.colors.outlineVariant }]}>
                  <Text style={[styles.cellLabel, { borderRightColor: theme.colors.outlineVariant, color: theme.colors.onSurface }]}>Clases de emisión</Text>
                  <Text style={[styles.cellValue, { color: theme.colors.onSurfaceVariant }]}>
                    A1A, +/‑J3E, +/‑J2D, H3E, A3E, F3E, F1B, B8E, B7D
                  </Text>
                </View>
                <View style={[styles.row, { borderTopColor: theme.colors.outlineVariant }]}>
                  <Text style={[styles.cellLabel, { borderRightColor: theme.colors.outlineVariant, color: theme.colors.onSurface }]}>
                    Automatic Link Establishment (ALE)
                  </Text>
                  <Text style={[styles.cellValue, { color: theme.colors.onSurfaceVariant }]}>
                    (ALE2G) STD1045/1046/1049; (ALE3G) STANAG‑4538
                  </Text>
                </View>
                <View style={[styles.row, { borderTopColor: theme.colors.outlineVariant }]}>
                  <Text style={[styles.cellLabel, { borderRightColor: theme.colors.outlineVariant, color: theme.colors.onSurface }]}>Seguridad</Text>
                  <Text style={[styles.cellValue, { color: theme.colors.onSurfaceVariant }]}>
                    Voz y Datos cifrados (SVD para ALE3G); Voz cifrada (SECOM‑H)
                  </Text>
                </View>
                <View style={[styles.row, { borderTopColor: theme.colors.outlineVariant }]}>
                  <Text style={[styles.cellLabel, { borderRightColor: theme.colors.outlineVariant, color: theme.colors.onSurface }]}>VoIP</Text>
                  <Text style={[styles.cellValue, { color: theme.colors.onSurfaceVariant }]}>
                    A partir de versión de SW 7.0
                  </Text>
                </View>
                <View style={[styles.row, { borderTopColor: theme.colors.outlineVariant }]}>
                  <Text style={[styles.cellLabel, { borderRightColor: theme.colors.outlineVariant, color: theme.colors.onSurface }]}>Nº de "Preset pages"</Text>
                  <Text style={[styles.cellValue, { color: theme.colors.onSurfaceVariant }]}>100</Text>
                </View>
                <View style={[styles.row, styles.lastRow, { borderTopColor: theme.colors.outlineVariant }]}>
                  <Text style={[styles.cellLabel, { borderRightColor: theme.colors.outlineVariant, color: theme.colors.onSurface }]}>Nº de canales</Text>
                  <Text style={[styles.cellValue, { color: theme.colors.onSurfaceVariant }]}>400</Text>
                </View>
              </View>
            </View>
          </Card.Content>
          <Card.Content>
            {/* Columna derecha: Lista */}
            <View style={styles.bullets}>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Clases de potencia de y receptor independiente.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Capacidad de datos y voz segura integrada.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Excelente colocación gracias a las especificaciones del receptor
                y transmisor.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Control de nivel selectivo para potencia de transmisión óptima
                (opción SW).
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Sistema de radio definido por software.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>Operación local o remota.</Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Fuentes de alimentación para varias redes eléctricas estándar.
              </Text>
            </View>
          </Card.Content>
        </Surface>

        <Surface style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={[styles.title, { color: theme.colors.onSurface }]}>
              Características y Beneficios
            </Text>
            <View style={styles.bullets}>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>IP para una fácil integración.</Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>Informes GPS.</Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Patch telefónico, SIP y de voz sobre IP.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>Audio y control remoto vía IP.</Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>Conexión de dominio.</Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>Operación en ALE-2G, ALE-3G.</Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Comunicaciones seguras y confiables.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>Voz digital segura (SDV).</Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>SECOM-H EPM (ECCM).</Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Capacidad de colocación debido a las excelentes especificaciones
                del receptor.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Control de nivel selectivo para una potencia de transmisión
                óptima (opción de software).
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Selección de RF sintonizada digitalmente (opción de hardware).
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Configuración de radio solo por personal autorizado.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Diseño resistente, adecuado incluso para condiciones ambientales
                difíciles.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Potente prueba incorporada (BIT).
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Importantes funciones del equipo, como el establecimiento
                automático de enlaces (ALE) o varias.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Las radios admiten el salto de frecuencia y brindan
                interoperabilidad con otros radios R&S.
              </Text>
            </View>
          </Card.Content>
        </Surface>
        <Surface style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={[styles.title, { color: theme.colors.onSurface }]}>
              Modos de Operación para M3SR-Series 4100
            </Text>
            <View style={styles.bullets}>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Frecuencia Fija (ej. Voz, Morse).
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Tactical Data Link (Datos Tácticos) (LINK-11/-Y/-22).
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Automatic Link Establishment (ALE 3G).
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>Formas de onda EPM (SECOM-H).</Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>Voz/Datos Seguros (SVD).</Text>
            </View>
          </Card.Content>
        </Surface>
        <Surface style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={[styles.title, { color: theme.colors.onSurface }]}>
              ATU FK4115M HF Unidad de sintonización de antena
            </Text>
            <View style={styles.rowBetween}>
              <View style={styles.textCol}>
                <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                  El R&S®FK4115M ofrece una "función de sintonización
                  silenciosa" en todo el rango de frecuencia de 1,5 MHz a 30
                  MHz. La ventaja para el usuario es la baja probabilidad de
                  interceptación (LPI), ya que el ajuste de la frecuencia de ATU
                  se realiza muy rápidamente y sin ninguna emisión de potencia
                  de RF.
                </Text>
                <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
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
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Sintonización silenciosa en todo el rango (1,5 MHz a 30 MHz).
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Sintonización de antenas de varilla, látigo y alambre.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                150 W PEP, 100 W CW al 100% del ciclo de trabajo.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Capacidad de salto de frecuencia (R&S®SECOM‑H).
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Ajuste silencioso típico menor a 5 ms una vez aprendidas las
                frecuencias.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Reintento no silencioso menor a 100 ms si no se alcanza VSWR
                (menor a 1,5:1).
              </Text>
            </View>
          </Card.Content>
        </Surface>
        <Surface style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={[styles.title, { color: theme.colors.onSurface }]}>
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
                <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                  Con PTT Estándar, incl. micrófono (versión reforzada) con
                  cable y conector NF-7
                </Text>
              </View>
              <View style={styles.colHalf}>
                <Text variant="titleMedium" style={{ marginBottom: 4 }}>
                  R&S®GA015 Audífonos de cabeza
                </Text>
                <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
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
        <Surface style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={[styles.title, { color: theme.colors.onSurface }]}>
              R&S®GB4000V unidad de audio remota
            </Text>
            <Image
              source={require('../../Images/GB400V.png')}
              style={[styles.fillgunImage, { height: 220 }]}
              resizeMode="contain"
            />
            <View style={styles.bullets}>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Diseño compacto para minimizar el espacio requerido en las
                consolas del operador.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Conexión analógica para usar con todas las radios Rohde &
                Schwarz.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Señalización PTT y SQ en banda para su uso con radios
                R&S®Series4200.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Conexión VoIP compatible con EUROCAE ED137-1 a radios
                R&S®Series4200, R&S®Series4400 y R&S®Series4100.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Altavoz incorporado con control de volumen.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Ajuste de volumen mínimo configurable para garantizar la
                seguridad.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Los LED indican el estado de las radios (PTT, silenciador,
                VoIP).
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Disponible con un conector de auriculares adicional para la
                operación del instructor.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Conexión de altavoz externo para monitorización.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Se puede montar en un bastidor de 19" o en consolas de operador.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Dos conexiones de DC independientes para fuente de alimentación
                redundante.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Fácilmente configurable a través de un navegador web. Panel
                frontal a prueba de salpicaduras.
              </Text>
            </View>
          </Card.Content>
        </Surface>
        <Surface style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={[styles.title, { color: theme.colors.onSurface }]}>
              ANTENA dipolo HF R&S® HX002H1 (Para Estaciones de Radio en tierra)
            </Text>
            <Text style={[styles.paragraph, { color: theme.colors.onSurfaceVariant }]}>
              La Antena dipolo HF R&S®HX002H1 es adecuada para establecer
              enlaces de radio a cualquier distancia. En particular, la
              cobertura omnidireccional optimizada garantiza una alta fiabilidad
              de transmisión en distancias cortas y medias.
            </Text>
            <Text style={[styles.paragraph, { color: theme.colors.onSurfaceVariant }]}>
              El R&S®HX002H1 se puede utilizar junto con los transceptores HF de
              150 W de la familia SERIES 4100. El tiempo de fraguado
              extremadamente rápido permitiendo la operación de salto de
              frecuencia en línea con R&S®SECOM‑H.
            </Text>
            <Text style={[styles.paragraph, { color: theme.colors.onSurfaceVariant }]}>
              La antena permite una sintonización silenciosa en todo el rango de
              frecuencia de 1,5 MHz a 30 MHz. Para ello, la unidad de
              sintonización integrada debe aprender primero los ajustes de
              sintonización correctos para la antena en un rango de frecuencia
              definido por el usuario. A partir de entonces, la antena alcanza
              tiempos de sintonización de &lt; 5 ms.
            </Text>
            <Text style={[styles.paragraph, { color: theme.colors.onSurfaceVariant }]}>
              Se prestó especial atención a la obtención de una protección
              contra rayos eficaz. El ATU está completamente protegido contra el
              arco contra los rayos directos. Está probado para soportar arcos
              de 10 kV / 10 kA.
            </Text>
            <Image
              source={require('../../Images/HF_R&S_HX002H1.png')}
              style={[styles.fillgunImage, { height: 260, marginTop: 12 }]}
              resizeMode="contain"
            />
            <View style={styles.bullets}>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Cobertura omnidireccional con radiación de alto ángulo.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>Sin zona de salto.</Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Instalación de un solo mástil, no se requiere plano de tierra.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Unidad de sintonización integrada capaz de salto de frecuencia
                R&S®SECOM‑H.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Manejo de potencia 150 W PEP, 100 W CW al 100% del ciclo de
                trabajo.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Sintonización silenciosa en todo el rango de frecuencia de HF de
                1,5 MHz a 30 MHz.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Baja probabilidad de interceptación (LPI).
              </Text>
            </View>
          </Card.Content>
        </Surface>
        <Surface style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={[styles.title, { color: theme.colors.onSurface }]}>
              Antena HF STA 100 PM/M (Optimizada para uso a bordo de buques)
            </Text>
            <Text style={[styles.paragraph, { color: theme.colors.onSurfaceVariant }]}>
              Las Antenas HF (receptoras / transceptoras) son una parte crucial
              de una comunicación de radio confiable de largo alcance. Las
              antenas son fabricadas por la empresa alemana ELNA con las
              siguientes características:
            </Text>
            <View style={styles.bullets}>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Cobertura omnidireccional con radiación de alto ángulo.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>Sin zona de salto.</Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Instalación de un solo mástil, no se requiere plano de tierra.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Unidad de sintonización integrada capaz de salto de frecuencia
                R&S®SECOM‑H.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Manejo de potencia 150 W PEP, 100 W CW al 100% del ciclo de
                trabajo.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Sintonización silenciosa en todo el rango de frecuencia de HF de
                1,5 MHz a 30 MHz.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Baja probabilidad de interceptación (LPI).
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Rango de frecuencia de 0,1 a 30 MHz (frecuencia media / alta).
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Resiste velocidades de viento de hasta 200 km/h.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Fabricadas de plástico reforzado con fibra de vidrio.
              </Text>
              <Text style={[styles.bullet, { color: theme.colors.onSurfaceVariant }]}>
                Excelente resistencia frente a hielo, viento e incrustaciones.
              </Text>
            </View>
            <Image
              source={require('../../Images/Antena_HF_STA_100_PMM.jpg')}
              style={[styles.fillgunImage, { height: 260, marginTop: 12 }]}
              resizeMode="contain"
            />
          </Card.Content>
        </Surface>
        <Surface style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={[styles.title, { color: theme.colors.onSurface }]}>
              ANTENA GPS
            </Text>
            <Text style={[styles.paragraph, { color: theme.colors.onSurfaceVariant }]}>
              La antena GPS deberá tener una visibilidad clara del satélite para
              poder recuperar su posición GPS actual e información de
              sincronización del GPS.
            </Text>
            <Text style={[styles.paragraph, { color: theme.colors.onSurfaceVariant }]}>
              Si la recepción GPS se pierde temporalmente o la visibilidad del
              satélite es limitada, se transmite información de posicionamiento
              GPS vacía o parcial.
            </Text>
            <Text style={[styles.paragraph, { color: theme.colors.onSurfaceVariant }]}>
              Dado que se requiere la señal de hora GPS para la sincronización
              del sistema, las transmisiones programadas no son compatibles si
              nunca se ha recibido la señal de hora GPS.
            </Text>
            <Image
              source={require('../../Images/antena_gps.jpg')}
              style={[styles.fillgunImage, { height: 240, marginTop: 12 }]}
              resizeMode="contain"
            />
          </Card.Content>
        </Surface>
        <Surface style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={[styles.title, { color: theme.colors.onSurface }]}>
              Tipos de Modulación
            </Text>
            <DataTable style={[styles.dataTable, styles.dtTable, { borderColor: theme.colors.outline }]}>
              <DataTable.Row
                style={[styles.rowWrap, styles.dtRow, styles.dtHeader, { backgroundColor: theme.dark ? theme.colors.surfaceVariant : '#f5faff', borderTopColor: theme.colors.outlineVariant }]}
              >
                <DataTable.Cell
                  style={[styles.colWide, styles.dtCell, styles.dtPad, { borderRightColor: theme.colors.outlineVariant }]}
                >
                  <Text style={[styles.dtHeaderTitle, { color: theme.colors.primary }]}>Tipo de Emisión</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad, { borderRightColor: theme.colors.outlineVariant }]}
                >
                  <Text style={[styles.dtHeaderTitle, { color: theme.colors.primary }]}>ITU Designación</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad, { borderRightColor: theme.colors.outlineVariant }]}
                >
                  <Text style={[styles.dtHeaderTitle, { color: theme.colors.primary }]}>ITU (antigua)</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[
                    styles.colNarrowLast,
                    styles.dtCellLast,
                    styles.dtPad,
                  ]}
                >
                  <Text style={[styles.dtHeaderTitle, { color: theme.colors.primary }]}>Posterior (design)</Text>
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row style={[styles.rowWrap, styles.dtRow, { borderTopColor: theme.colors.outlineVariant }]}>
                <DataTable.Cell
                  style={[styles.colWide, styles.dtCell, styles.dtPad, { borderRightColor: theme.colors.outlineVariant }]}
                >
                  <Text style={[styles.cellText, { color: theme.colors.onSurfaceVariant }]}>Telegrafía Morse</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad, { borderRightColor: theme.colors.outlineVariant }]}
                >
                  <Text style={[styles.cellText, { color: theme.colors.onSurfaceVariant }]}>A1A</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad, { borderRightColor: theme.colors.outlineVariant }]}
                >
                  <Text style={[styles.cellText, { color: theme.colors.onSurfaceVariant }]}>A1</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[
                    styles.colNarrowLast,
                    styles.dtCellLast,
                    styles.dtPad,
                  ]}
                >
                  <Text style={[styles.cellText, { color: theme.colors.onSurfaceVariant }]}>CW</Text>
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row style={[styles.rowWrap, styles.dtRow]}>
                <DataTable.Cell
                  style={[styles.colWide, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>
                    Modulación de amplitud, voz
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>A3E</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>A3</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[
                    styles.colNarrowLast,
                    styles.dtCellLast,
                    styles.dtPad,
                  ]}
                >
                  <Text style={styles.cellText}>AM</Text>
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row style={[styles.rowWrap, styles.dtRow]}>
                <DataTable.Cell
                  style={[styles.colWide, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>
                    Modulación de amplitud equivalente, banda lateral superior,
                    con portadora, voz
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>H3E</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>A3H</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[
                    styles.colNarrowLast,
                    styles.dtCellLast,
                    styles.dtPad,
                  ]}
                >
                  <Text style={styles.cellText}>AME</Text>
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row style={[styles.rowWrap, styles.dtRow]}>
                <DataTable.Cell
                  style={[styles.colWide, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>
                    Banda lateral superior (USB), voz
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>J3E+</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>A3J</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[
                    styles.colNarrowLast,
                    styles.dtCellLast,
                    styles.dtPad,
                  ]}
                >
                  <Text style={styles.cellText}>SSB (USB)</Text>
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row style={[styles.rowWrap, styles.dtRow]}>
                <DataTable.Cell
                  style={[styles.colWide, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>
                    Banda lateral superior (LSB), voz
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>J3E-</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>A3J</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[
                    styles.colNarrowLast,
                    styles.dtCellLast,
                    styles.dtPad,
                  ]}
                >
                  <Text style={styles.cellText}>SSB (LSB)</Text>
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row style={[styles.rowWrap, styles.dtRow]}>
                <DataTable.Cell
                  style={[styles.colWide, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>
                    Banda lateral superior (USB), datos
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>J2D+</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>A9J</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[
                    styles.colNarrowLast,
                    styles.dtCellLast,
                    styles.dtPad,
                  ]}
                >
                  <Text style={styles.cellText}>AFSK, Módem</Text>
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row style={[styles.rowWrap, styles.dtRow]}>
                <DataTable.Cell
                  style={[styles.colWide, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>
                    Banda lateral superior (LSB), datos
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>J2D-</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>A9J</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[
                    styles.colNarrowLast,
                    styles.dtCellLast,
                    styles.dtPad,
                  ]}
                >
                  <Text style={styles.cellText}>AFSK, Módem</Text>
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row style={[styles.rowWrap, styles.dtRow]}>
                <DataTable.Cell
                  style={[styles.colWide, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>
                    Frecuencia portadora modulada, voz
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>F3E</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>F3</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[
                    styles.colNarrowLast,
                    styles.dtCellLast,
                    styles.dtPad,
                  ]}
                >
                  <Text style={styles.cellText}>FM</Text>
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row style={[styles.rowWrap, styles.dtRow]}>
                <DataTable.Cell
                  style={[styles.colWide, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>
                    Frecuencia modulada (Frequency Shift Keying)
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>F1D</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>F3</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[
                    styles.colNarrowLast,
                    styles.dtCellLast,
                    styles.dtPad,
                  ]}
                >
                  <Text style={styles.cellText}>FM</Text>
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row style={[styles.rowWrap, styles.dtRow]}>
                <DataTable.Cell
                  style={[styles.colWide, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>
                    Banda lateral independiente, voz
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>B8E</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>—</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[
                    styles.colNarrowLast,
                    styles.dtCellLast,
                    styles.dtPad,
                  ]}
                >
                  <Text style={styles.cellText}>ISB</Text>
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row style={[styles.rowWrap, styles.dtRow]}>
                <DataTable.Cell
                  style={[styles.colWide, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>
                    Banda lateral independiente, datos
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>B7D</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.colNarrow, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.cellText}>—</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[
                    styles.colNarrowLast,
                    styles.dtCellLast,
                    styles.dtPad,
                  ]}
                >
                  <Text style={styles.cellText}>ISB (data)</Text>
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </Card.Content>
        </Surface>
        <Surface style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={[styles.title, { color: theme.colors.onSurface }]}>
              Diseño de la página del menú
            </Text>
            <Image
              source={require('../../Images/disenho_pag_menu.jpg')}
              style={styles.menuDesignImage}
              resizeMode="contain"
            />
            <View style={styles.menuTextBlock}>
              <Text style={styles.menuItem}>
                <Text style={styles.menuNum}>1.</Text> Símbolo del dominio del
                menú
              </Text>
              <Text style={styles.menuItem}>
                <Text style={styles.menuNum}>2.</Text> Indicación: "Comunicación
                cifrada" o "Comunicación simple".
              </Text>
              <Text style={styles.menuItem}>
                <Text style={styles.menuNum}>3.</Text> Número de menú.
              </Text>
              <Text style={styles.menuItem}>
                <Text style={styles.menuNum}>4.</Text> Título del menú.
              </Text>
              <Text style={styles.menuItem}>
                <Text style={styles.menuNum}>5.</Text> Iconos.
              </Text>
              <Text style={styles.menuItem}>
                <Text style={styles.menuNum}>6.</Text> Icono del GPS.
              </Text>
              <Text style={styles.menuItem}>
                <Text style={styles.menuNum}>7.</Text> Tipo de sesión de control
                de radio (MON / ADV / FIX / LOC).
              </Text>
              <Text style={styles.menuItem}>
                <Text style={styles.menuNum}>8.</Text> Cabecera del menú.
              </Text>
              <Text style={styles.menuItem}>
                <Text style={styles.menuNum}>9.</Text> Etiqueta de tecla suave.
              </Text>
              <Text style={styles.menuItem}>
                <Text style={styles.menuNum}>10.</Text> Número de Radio
                Conectada (por ejemplo: LOC para radio local) o Estado de la
                Conexión.
              </Text>
            </View>
          </Card.Content>
        </Surface>
        <Surface style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={[styles.title, { color: theme.colors.onSurface }]}>
              Íconos y símbolos
            </Text>
            <Text style={[styles.paragraph, { color: theme.colors.onSurfaceVariant }]}>
              Los íconos y símbolos se muestran en el encabezado del menú. Los
              íconos indican los dominios del menú y los modos de comunicación.
            </Text>
            <DataTable
              style={[styles.dataTable, styles.dtTable, { marginTop: 8 }]}
            >
              <DataTable.Row
                style={[styles.rowWrap, styles.dtRow, styles.dtHeader]}
              >
                <DataTable.Cell
                  style={[styles.iconHeader, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.dtHeaderTitle}>Icono</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.noteHeader, styles.dtCellLast, styles.dtPad]}
                >
                  <Text style={styles.dtHeaderTitle}>Nota</Text>
                </DataTable.Cell>
              </DataTable.Row>

              {[
                {
                  img: require('../../Images/iconos/1.jpg'),
                  note: 'Menú Principal',
                },
                {
                  img: require('../../Images/iconos/2.png'),
                  note: 'Indica el menú de mantenimiento (Ver secc. 3.4 Mantenimiendo de la radio)y el menú de la pistola de llenado (Ver secc. 3.3 Control y Vigilancia de la radio y la unidad de control).',
                },
                {
                  img: require('../../Images/iconos/3.png'),
                  note: 'Indica los menús FF (Frecuencia fija).',
                },
                {
                  img: require('../../Images/iconos/4.png'),
                  note: 'Indica los menús ALE (opción). Para operar Establecimiento de Enlace Automático.',
                },
                {
                  img: require('../../Images/iconos/5.png'),
                  note: 'El ícono representa el funcionamiento de ALE‑2G.',
                },
                {
                  img: require('../../Images/iconos/6.png'),
                  note: 'Icono significa operación ALE‑3G.',
                },
                {
                  img: require('../../Images/iconos/7.png'),
                  note: 'Operación general de ALE (ALE, ALE‑2G y ALE‑3G).',
                },
                {
                  img: require('../../Images/iconos/8.png'),
                  note: 'Indica los menús de SECOM‑H (opción).',
                },
                {
                  img: require('../../Images/iconos/9.png'),
                  note: 'Indica los menús del Modem HF (opción).',
                },
              ].map((row, idx) => (
                <DataTable.Row
                  key={`icons-${idx}`}
                  style={[styles.rowWrap, styles.dtRow]}
                >
                  <DataTable.Cell
                    style={[styles.iconCell, styles.dtCell, styles.dtPad]}
                  >
                    <Image
                      source={row.img}
                      style={styles.iconImage}
                      resizeMode="contain"
                    />
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[styles.noteCell, styles.dtCellLast, styles.dtPad]}
                  >
                    <Text style={styles.cellText}>{row.note}</Text>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </Card.Content>
        </Surface>

        <Surface style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={[styles.title, { color: theme.colors.onSurface }]}>
              Símbolos en el encabezado
            </Text>
            <Text style={[styles.paragraph, { color: theme.colors.onSurfaceVariant }]}>
              Además, en el encabezado del menú pueden aparecer varios símbolos.
            </Text>
            <DataTable
              style={[styles.dataTable, styles.dtTable, { marginTop: 8 }]}
            >
              <DataTable.Row
                style={[styles.rowWrap, styles.dtRow, styles.dtHeader]}
              >
                <DataTable.Cell
                  style={[styles.iconHeader, styles.dtCell, styles.dtPad]}
                >
                  <Text style={styles.dtHeaderTitle}>Símbolo</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.noteHeader, styles.dtCellLast, styles.dtPad]}
                >
                  <Text style={styles.dtHeaderTitle}>Nota</Text>
                </DataTable.Cell>
              </DataTable.Row>

              {[
                {
                  img: require('../../Images/iconos/10.png'),
                  note: 'Indica que la función de silenciación de radio actualmente silencia el audio.',
                },
                {
                  img: require('../../Images/iconos/11.png'),
                  note: 'Indica que la función de silenciación de radio actualmente silencia el audio.',
                },
                {
                  img: require('../../Images/iconos/12.png'),
                  note: 'Conectado a un altavoz externo.',
                },
                {
                  img: require('../../Images/iconos/13.png'),
                  note: 'Cualquier transmisión y recepción están habilitadas.',
                },
                {
                  img: require('../../Images/iconos/14.png'),
                  note: "Transmisión deshabilitada por 'TX IHBT', comando remoto o fuente externa conectada a X26.20 (inhibición de TX).",
                },
                {
                  img: require('../../Images/iconos/15.png'),
                  note: 'Para más detalles, véase la sección 9 Dibujos Descripción de la interfaz: línea TxInhibit.',
                },
                {
                  img: require('../../Images/iconos/16.png'),
                  note: 'Cualquier recepción es dehabilitada por una fuente externa conectada a X26.35 (RX inhibit). Para más detalles ver secc. 9 Dibujos Descripción de la interfaz = línea RxInhibit.',
                },
                {
                  img: require('../../Images/iconos/17.png'),
                  note: 'Se desactiva cualquier transmisión y recepción (RX y TX inhiben).',
                },
                {
                  img: require('../../Images/iconos/18.png'),
                  note: 'Para más detalles, véase la secc. 9 Dibujos Descripción de la interfaz = línea RxInhibit y TxInhibit. 	',
                },
                {
                  img: require('../../Images/iconos/19.png'),
                  note: 'Modo de sitio dividido activo. Split Site Controller conectado; RX y TX posibles.',
                },
                {
                  img: require('../../Images/iconos/20.png'),
                  note: 'El Transmisor de Sitio Dividido está en Tx-Inhibit y por lo tanto no puede transmitir. El receptor de Sitio Dividido está en RX-Inhibit y no puede recibir. Si solo el transmisor está inhibido. sólo la "X" de TX se muestra en rojo. Lo mismo aplica si sólo el Receptor de Sitio Dividido está en RX inhibido.',
                },
                {
                  img: require('../../Images/iconos/21.png'),
                  note: 'El transmisor y el receptor no están operativos. Si solo el Transmisor de Sitio Dividido no está operativo, sólo el símbolo de TX se muestra en rojo. Lo mismo se aplica so sólo el Receptor de Sitio Dividido no está operativo.',
                },
                {
                  img: require('../../Images/iconos/22.png'),
                  note: 'Modo de sitio dividido activo: transmisor separado, recepción con hardware local.',
                },
                {
                  img: require('../../Images/iconos/23.png'),
                  note: 'No hay posición GPS disponible.',
                },
                {
                  img: require('../../Images/iconos/24.png'),
                  note: 'Fijación de posición GPS en 2D (hasta tres satélites).',
                },
                {
                  img: require('../../Images/iconos/25.png'),
                  note: 'Posición GPS fija 3D (cuatro o más satélites).',
                },
                {
                  img: require('../../Images/iconos/26.png'),
                  note: 'Módulo de interfaz DSC (opción) presente.',
                },
                {
                  img: require('../../Images/iconos/27.png'),
                  note: 'DSC no está conectado o no controla la radio.',
                },
                {
                  img: require('../../Images/iconos/28.png'),
                  note: 'DSC está tomando el control.',
                },
                {
                  img: require('../../Images/iconos/29.png'),
                  note: 'DSC tiene control sobre parámetros de la radio.',
                },
              ].map((row, idx) => (
                <DataTable.Row
                  key={`sym1-${idx}`}
                  style={[styles.rowWrap, styles.dtRow]}
                >
                  <DataTable.Cell
                    style={[styles.iconCell, styles.dtCell, styles.dtPad]}
                  >
                    <Image
                      source={row.img}
                      style={styles.iconImage}
                      resizeMode="contain"
                    />
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[styles.noteCell, styles.dtCellLast, styles.dtPad]}
                  >
                    <Text style={styles.cellText}>{row.note}</Text>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
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
    borderRadius: 8,
    overflow: 'hidden',
  },
  colWide: {
    flex: 2.2,
  },
  colNarrow: {
    flex: 1.1,
  },
  colNarrowLast: {
    flex: 1.4,
  },
  dataTable: {
    width: '100%',
  },
  rowWrap: {
    alignItems: 'stretch',
    flexWrap: 'wrap',
  },
  cellText: {
    flexWrap: 'wrap',
    flexShrink: 1,
    width: '100%',
  },
  dtTable: {
    borderWidth: 1,
    borderRadius: 8,
  },
  dtHeader: {
    // backgroundColor dinámico aplicado inline
  },
  dtHeaderTitle: {
    fontWeight: '700',
    fontSize: 11,
    lineHeight: 14,
    flexWrap: 'wrap',
    flexShrink: 1,
    textAlign: 'center',
    width: '100%',
  },
  dtRow: {
    borderTopWidth: 1,
  },
  dtCell: {
    borderRightWidth: 1,
    minWidth: 0,
    flexShrink: 1,
    flexBasis: 0,
  },
  dtCellLast: {
    borderRightWidth: 0,
    minWidth: 0,
    flexShrink: 1,
    flexBasis: 0,
  },
  dtPad: {
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  iconHeader: {
    width: 72,
  },
  noteHeader: {
    flex: 1,
  },
  iconCell: {
    width: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noteCell: {
    flex: 1,
  },
  iconImage: {
    width: 40,
    height: 28,
  },
  row: {
    flexDirection: 'row',
    borderTopWidth: 1,
  },
  headerRow: {
    // backgroundColor dinámico aplicado inline
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  cellLabel: {
    width: 140,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRightWidth: 1,
    fontWeight: '600',
  },
  cellValue: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  cellHeader: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontWeight: '700',
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
  menuDesignImage: {
    width: '100%',
    height: 320,
    marginTop: 8,
    alignSelf: 'center',
  },
  menuRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  menuTextCol: {
    flex: 1,
    paddingLeft: 6,
  },
  menuTextBlock: {
    marginTop: 8,
  },
  menuItem: {
    marginBottom: 6,
    color: '#344054',
    lineHeight: 20,
  },
  menuNum: {
    fontWeight: '700',
    color: '#0b4aa2',
  },
});
