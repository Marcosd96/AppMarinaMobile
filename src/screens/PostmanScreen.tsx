import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Appbar, Text, Surface, Card, Chip, Divider, useTheme } from 'react-native-paper';
import ScreenEntrance from '../components/ScreenEntrance';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface AccordionProps {
  title: string;
  number: string;
  icon: string;
  children: React.ReactNode;
  delay?: number;
}

function Accordion({
  title,
  number,
  icon,
  children,
  delay = 0,
}: AccordionProps) {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  return (
    <ScreenEntrance delay={delay}>
      <Surface style={[styles.accordionContainer, { backgroundColor: theme.colors.surface }]} elevation={2}>
        <TouchableOpacity
          style={styles.accordionHeader}
          onPress={() => setExpanded(!expanded)}
          activeOpacity={0.7}
        >
          <View style={styles.accordionTitleRow}>
            <View style={styles.iconContainer}>
              <Icon name={icon} size={24} color={theme.colors.primary} />
            </View>
            <View style={styles.titleContainer}>
              <Text variant="labelSmall" style={[styles.stepNumber, { color: theme.colors.primary }]}>
                {number}
              </Text>
              <Text variant="titleMedium" style={[styles.accordionTitle, { color: theme.colors.onSurface }]}>
                {title}
              </Text>
            </View>
          </View>
          <Icon
            name={expanded ? 'chevron-up' : 'chevron-down'}
            size={24}
            color={theme.colors.onSurfaceVariant}
          />
        </TouchableOpacity>

        {expanded && (
          <View style={styles.accordionContent}>
            <Divider style={styles.divider} />
            {children}
          </View>
        )}
      </Surface>
    </ScreenEntrance>
  );
}

export default function PostmanScreen({ navigation }: any) {
  const theme = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Appbar.Header mode="center-aligned" style={{ backgroundColor: theme.colors.primaryContainer }}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="R&S Postman III" />
      </Appbar.Header>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <ScreenEntrance>
          <Surface style={[styles.heroCard, { backgroundColor: theme.colors.surface }]} elevation={3}>
            <View style={styles.heroContent}>
              <Icon name="book-open-variant" size={48} color={theme.colors.primary} />
              <Text variant="headlineMedium" style={[styles.heroTitle, { color: theme.colors.onSurface }]}>
                Manual de Instalación
              </Text>
              <Text variant="bodyMedium" style={[styles.heroSubtitle, { color: theme.colors.onSurfaceVariant }]}>
                R&S NS5150 / Postman III
              </Text>
              <Chip icon="file-document" style={[styles.chip, { backgroundColor: theme.colors.primaryContainer }]}>
                Version 01 - 2020
              </Chip>
            </View>
          </Surface>
        </ScreenEntrance>

        {/* SECTION 1 */}
        <Accordion
          number="SECCIÓN 1"
          title="Descripción General de la Documentación"
          icon="file-document-outline"
          delay={60}
        >
          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            La documentación de usuario para la instalación del R&S NS5150
            contiene instrucciones para configurar el entorno del sistema R&S
            NS5150. Este manual describe la instalación para la versión 04.06 o
            posterior.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            El R&S NS5150 puede instalarse en diferentes entornos. Los
            siguientes tipos de integración son soportados:
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📚 Tipos de Integración Soportados:
          </Text>

          <View style={styles.optionGroup}>
            <Text style={[styles.option, { color: theme.colors.onSurfaceVariant }]}> • R&S Postman III standalone</Text>
            <Text style={[styles.option, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • R&S Postman III integrated (navy system)
            </Text>
            <Text style={[styles.option, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • R&S Postman III router for R&S MMHS systems
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📖 1.1 R&S Postman III Standalone e Integrated
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Dependiendo del sistema operativo elegido para el servidor, puede
            ser necesaria una configuración adicional. Las siguientes tareas
            están descritas:
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              • Planificación de la instalación – valores necesarios durante la
              instalación y su significado
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              • Instalación del sistema operativo – pasos que son requisito
              previo para un sistema R&S Postman III
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              • Instalación de R&S Postman III – instalación de los paquetes de
              software R&S Postman III
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              • Configuración de R&S Postman III – creación del sitio local en
              la consola de administración
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              • Apéndice – configuración de servicios opcionales de
              transferencia de datos y agregar nuevos usuarios
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📖 1.2 Postman III Router para Sistemas MMHS
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            La instalación para este tipo de integración se describe en un
            capítulo separado (Capítulo 6).
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Este manual cubre todos los escenarios de instalación del sistema
              R&S Postman III según el tipo de integración seleccionado
            </Text>
          </View>
        </Accordion>

        {/* SECTION 2 */}
        <Accordion
          number="SECCIÓN 2"
          title="Convenciones"
          icon="format-text"
          delay={80}
        >
          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Las siguientes convenciones se utilizan a lo largo del Manual de
            Instalación R&S NS5150:
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            ✍️ Convenciones Tipográficas:
          </Text>

          <View style={styles.conventionTable}>
            <View style={styles.conventionRow}>
              <Text style={[styles.conventionLabel, { color: theme.colors.primary }]}>
                "Graphical user interface elements"
              </Text>
              <Text style={[styles.conventionDesc, { color: theme.colors.onSurfaceVariant }]}>
                Todos los nombres de elementos gráficos de interfaz de usuario
                tanto en la pantalla como en los paneles frontales y traseros,
                como cuadros de diálogo, softkeys, menús, opciones o botones
                están encerrados entre comillas.
              </Text>
            </View>

            <View style={styles.conventionRow}>
              <Text style={[styles.conventionLabel, { color: theme.colors.primary }]}>"KEYS"</Text>
              <Text style={[styles.conventionDesc, { color: theme.colors.onSurfaceVariant }]}>
                Los nombres de teclas están escritos en letras mayúsculas y
                encerrados entre comillas.
              </Text>
            </View>

            <View style={styles.conventionRow}>
              <Text style={[styles.conventionLabel, { color: theme.colors.primary }]}>Input</Text>
              <Text style={[styles.conventionDesc, { color: theme.colors.onSurfaceVariant }]}>
                La entrada que debe ser ingresada por el usuario se muestra en
                cursiva.
              </Text>
            </View>

            <View style={styles.conventionRow}>
              <Text style={[styles.conventionLabel, { color: theme.colors.primary }]}>
                File names, commands, program code
              </Text>
              <Text style={[styles.conventionDesc, { color: theme.colors.onSurfaceVariant }]}>
                Nombres de archivo, comandos, ejemplos de código y salida de
                pantalla se distinguen por la fuente.
              </Text>
            </View>

            <View style={styles.conventionRow}>
              <Text style={[styles.conventionLabel, { color: theme.colors.primary }]}>Links</Text>
              <Text style={[styles.conventionDesc, { color: theme.colors.onSurfaceVariant }]}>
                Los enlaces en los que puede hacer clic se muestran en fuente
                azul.
              </Text>
            </View>

            <View style={styles.conventionRow}>
              <Text style={[styles.conventionLabel, { color: theme.colors.primary }]}>References</Text>
              <Text style={[styles.conventionDesc, { color: theme.colors.onSurfaceVariant }]}>
                Las referencias a otras partes de la documentación están
                encerradas entre comillas.
              </Text>
            </View>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔧 Otras Convenciones:
          </Text>

          <View style={styles.optionGroup}>
            <Text variant="bodyMedium" style={[styles.bold, { color: theme.colors.onSurface }]}>
              Comandos Remotos:
            </Text>
            <Text style={styles.conventionDesc}>
              Los comandos remotos pueden incluir abreviaciones para simplificar
              la entrada. En la descripción de dichos comandos, todas las partes
              que deben ingresarse están escritas en letras mayúsculas. El texto
              adicional en caracteres en minúsculas es solo para información.
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Seguir estas convenciones facilita la comprensión de las
              instrucciones durante la instalación
            </Text>
          </View>
        </Accordion>

        {/* SECTION 3 */}
        <Accordion
          number="SECCIÓN 3"
          title="Planificación de la Configuración del Sistema R&S Postman III"
          icon="clipboard-list"
          delay={100}
        >
          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Antes de comenzar con la instalación del sistema R&S Postman III,
            cree un plan de configuración del sistema con las siguientes
            categorías de información:
          </Text>

          <View style={styles.categoryList}>
            <Text style={[styles.categoryItem, { color: theme.colors.onSurfaceVariant }]}>• Parámetros globales</Text>
            <Text style={[styles.categoryItem, { color: theme.colors.onSurfaceVariant }]}>• Parámetros del servidor</Text>
            <Text style={[styles.categoryItem, { color: theme.colors.onSurfaceVariant }]}>• Parámetros del cliente</Text>
            <Text style={[styles.categoryItem, { color: theme.colors.onSurfaceVariant }]}>• Parámetros de usuario</Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="lightbulb" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Recomendamos crear un plan de instalación completo que abarque
              todos los servidores y clientes antes de comenzar con la
              instalación.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🌍 3.1 Parámetros Globales
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Los siguientes parámetros deben definirse globalmente para una
            instalación de R&S Postman III.
          </Text>

          <View style={styles.parameterTable}>
            <View style={[styles.parameterRow, { backgroundColor: theme.colors.surfaceVariant, borderLeftColor: theme.colors.primary }]}>
              <Text style={[styles.parameterName, { color: theme.colors.primary }]}>Language</Text>
              <Text style={[styles.parameterExample, { color: theme.colors.onSurfaceVariant }]}>Ejemplo: en</Text>
              <Text style={[styles.parameterDesc, { color: theme.colors.onSurfaceVariant }]}>
                Código de idioma de dos dígitos.
              </Text>
              <Text style={[styles.parameterRemarks, { color: theme.colors.onSurfaceVariant }]}>
                Los únicos idiomas soportados son en (English) y es (Spanish).
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={[styles.parameterName, { color: theme.colors.primary }]}>Region</Text>
              <Text style={[styles.parameterExample, { color: theme.colors.onSurfaceVariant }]}>Ejemplo: US</Text>
              <Text style={[styles.parameterDesc, { color: theme.colors.onSurfaceVariant }]}>
                Código de región de dos dígitos (= código de sub-idioma).
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={[styles.parameterName, { color: theme.colors.primary }]}>Country</Text>
              <Text style={[styles.parameterExample, { color: theme.colors.onSurfaceVariant }]}>Ejemplo: en</Text>
              <Text style={[styles.parameterDesc, { color: theme.colors.onSurfaceVariant }]}>
                Código de país de dos dígitos.
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={[styles.parameterName, { color: theme.colors.primary }]}>Organization</Text>
              <Text style={[styles.parameterExample, { color: theme.colors.onSurfaceVariant }]}>Ejemplo: RuS</Text>
              <Text style={[styles.parameterDesc, { color: theme.colors.onSurfaceVariant }]}>
                Nombre abreviado de su organización.
              </Text>
              <Text style={[styles.parameterRemarks, { color: theme.colors.onSurfaceVariant }]}>
                No debe contener espacios ni caracteres especiales. Use solo
                caracteres ASCII.
              </Text>
            </View>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🖥️ 3.2 Parámetros del Servidor
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Los siguientes parámetros deben definirse para cada servidor R&S
            Postman III (= sitio).
          </Text>

          <View style={styles.parameterTable}>
            <View style={[styles.parameterRow, { backgroundColor: theme.colors.surfaceVariant, borderLeftColor: theme.colors.primary }]}>
              <Text style={[styles.parameterName, { color: theme.colors.primary }]}>Host Name</Text>
              <Text style={[styles.parameterExample, { color: theme.colors.onSurfaceVariant }]}>Ejemplo: MU2</Text>
              <Text style={[styles.parameterDesc, { color: theme.colors.onSurfaceVariant }]}>
                El nombre del host o computadora.
              </Text>
              <Text style={[styles.parameterRemarks, { color: theme.colors.onSurfaceVariant }]}>
                No debe contener guiones. Nota: No puede cambiar el nombre del
                host después.
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={[styles.parameterName, { color: theme.colors.primary }]}>Domain Name</Text>
              <Text style={[styles.parameterExample, { color: theme.colors.onSurfaceVariant }]}>Ejemplo: pm-mu2.com</Text>
              <Text style={[styles.parameterDesc, { color: theme.colors.onSurfaceVariant }]}>
                El nombre de dominio DNS.
              </Text>
              <Text style={[styles.parameterRemarks, { color: theme.colors.onSurfaceVariant }]}>
                No debe estar vacío. Nota: No puede cambiar el nombre de dominio
                después.
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={[styles.parameterName, { color: theme.colors.primary }]}>Email Domain</Text>
              <Text style={[styles.parameterExample, { color: theme.colors.onSurfaceVariant }]}>Ejemplo: pm-mu2.com</Text>
              <Text style={[styles.parameterDesc, { color: theme.colors.onSurfaceVariant }]}>
                El nombre de dominio de correo.
              </Text>
              <Text style={[styles.parameterRemarks, { color: theme.colors.onSurfaceVariant }]}>
                Puede ser igual a la propiedad domain name.
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={[styles.parameterName, { color: theme.colors.primary }]}>IP address</Text>
              <Text style={[styles.parameterExample, { color: theme.colors.onSurfaceVariant }]}>Ejemplo: 172.29.80.15</Text>
              <Text style={[styles.parameterDesc, { color: theme.colors.onSurfaceVariant }]}>La dirección IPv4.</Text>
              <Text style={[styles.parameterRemarks, { color: theme.colors.onSurfaceVariant }]}>
                Debe ser una dirección IPv4. Las direcciones IPv6 no son
                soportadas.
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={[styles.parameterName, { color: theme.colors.primary }]}>Subnet mask</Text>
              <Text style={[styles.parameterExample, { color: theme.colors.onSurfaceVariant }]}>
                Ejemplo: 255.255.255.0
              </Text>
              <Text style={[styles.parameterDesc, { color: theme.colors.onSurfaceVariant }]}>
                La máscara de subred IPv4.
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={[styles.parameterName, { color: theme.colors.primary }]}>Site ID</Text>
              <Text style={[styles.parameterExample, { color: theme.colors.onSurfaceVariant }]}>Ejemplo: 80</Text>
              <Text style={[styles.parameterDesc, { color: theme.colors.onSurfaceVariant }]}>
                El ID del sitio Postman III.
              </Text>
              <Text style={[styles.parameterRemarks, { color: theme.colors.onSurfaceVariant }]}>
                Cada servidor R&S Postman III debe tener un ID de sitio único.
                El site ID es un identificador numérico. Recomendamos usar una
                parte de su número de red IP como site ID.
              </Text>
            </View>
          </View>

          <View style={styles.warningBox}>
            <Icon name="alert" size={18} color="#FF9800" />
            <Text variant="bodySmall" style={[styles.warningText, { color: theme.colors.onErrorContainer }]}>
              Los nombres de host y dominio no se pueden cambiar después. El
              host y el nombre de dominio no se pueden cambiar después de que el
              software R&S Postman III ha sido instalado y configurado. Cambiar
              el nombre de host o dominio requiere que repita todo el proceso de
              instalación comenzando con una instalación nueva del sistema
              operativo Microsoft Windows.
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Cada servidor R&S Postman III debe tener un ID de sitio único.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            💻 3.3 Parámetros del Cliente
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Los siguientes parámetros deben definirse para cada cliente R&S
            Postman III.
          </Text>

          <View style={styles.parameterTable}>
            <View style={[styles.parameterRow, { backgroundColor: theme.colors.surfaceVariant, borderLeftColor: theme.colors.primary }]}>
              <Text style={[styles.parameterName, { color: theme.colors.primary }]}>Host Name</Text>
              <Text style={[styles.parameterExample, { color: theme.colors.onSurfaceVariant }]}>Ejemplo: MU2WS</Text>
              <Text style={[styles.parameterDesc, { color: theme.colors.onSurfaceVariant }]}>
                El nombre del host o computadora.
              </Text>
              <Text style={[styles.parameterRemarks, { color: theme.colors.onSurfaceVariant }]}>
                Puede contener un número si tiene múltiples clientes, ej.
                MU2WS1, MU2WS2 etc.
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={[styles.parameterName, { color: theme.colors.primary }]}>Domain Name</Text>
              <Text style={[styles.parameterExample, { color: theme.colors.onSurfaceVariant }]}>Ejemplo: pm-mu2.com</Text>
              <Text style={[styles.parameterDesc, { color: theme.colors.onSurfaceVariant }]}>
                El nombre de dominio DNS.
              </Text>
              <Text style={[styles.parameterRemarks, { color: theme.colors.onSurfaceVariant }]}>
                Usualmente los clientes residen en el mismo dominio DNS que el
                servidor en su red de trabajo.
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={[styles.parameterName, { color: theme.colors.primary }]}>IP address</Text>
              <Text style={[styles.parameterExample, { color: theme.colors.onSurfaceVariant }]}>Ejemplo: 172.29.80.16</Text>
              <Text style={[styles.parameterDesc, { color: theme.colors.onSurfaceVariant }]}>La dirección IPv4.</Text>
              <Text style={[styles.parameterRemarks, { color: theme.colors.onSurfaceVariant }]}>
                Debe ser una dirección IPv4. Las direcciones IPv6 no son
                soportadas.
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={[styles.parameterName, { color: theme.colors.primary }]}>Subnet mask</Text>
              <Text style={[styles.parameterExample, { color: theme.colors.onSurfaceVariant }]}>
                Ejemplo: 255.255.255.0
              </Text>
              <Text style={[styles.parameterDesc, { color: theme.colors.onSurfaceVariant }]}>
                La máscara de subred IPv4.
              </Text>
            </View>
          </View>
        </Accordion>

        {/* SECTION 4 */}
        <Accordion
          number="SECCIÓN 4"
          title="Instalación del Sistema Operativo"
          icon="microsoft-windows"
          delay={120}
        >
          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            El software de servidor y cliente R&S Postman III puede instalarse
            en uno de los siguientes sistemas operativos:
          </Text>

          <View style={styles.checkList}>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Microsoft Windows 10 Professional, Enterprise 64-bit
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Microsoft Windows Server 2016
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              El software del sistema R&S NS5150 incluye componentes de código
              abierto no modificados. Las licencias y documentación asociadas
              están incluidas en los medios de distribución en la subcarpeta
              "Third-Party". No se imputan responsabilidades de ningún tipo a
              sus autores/contribuidores, de acuerdo con las licencias
              respectivas.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            💻 4.1 Requisitos de Hardware del Sistema
          </Text>

          <View style={styles.checkList}>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Requisitos de hardware según lo definido por el sistema
              operativo seleccionado
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}> • Al menos 4 GB de RAM</Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Tarjeta gráfica o terminal con al menos 1024 x 768 x 24 bpp de
              resolución, 1280 x 1024 bpp recomendado
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Al menos un adaptador LAN de 100 Mbit
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Teclado, mouse, adaptador USB, unidad DVD-ROM que soporte "Boot
              from DVD"
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Disco duro con al menos 80 Gbyte de espacio libre
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔧 4.2 Instalación de Microsoft Windows
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Instale uno de los sistemas operativos Microsoft Windows soportados.
            Consulte la documentación adjunta para obtener más instrucciones.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="key" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Use la misma contraseña en todas las computadoras.
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="account-circle" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Debe haber una cuenta de administrador llamada Installer.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            👤 4.3.1 Configuración de Usuario para Windows 10
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Al instalar Windows 10 como sistema operativo, recomendamos usar el
            nombre de usuario <Text style={styles.bold}>Installer</Text> durante
            la instalación. El usuario que cree aquí se asigna automáticamente
            al grupo <Text style={styles.bold}>Administrators</Text>.
          </Text>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura4-1.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 4-1: Windows 10 - cuenta installer
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            👤 4.3.2 Configuración de Usuario para Windows Server 2016
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Al instalar Windows Server 2016 como sistema operativo, el usuario{' '}
            <Text style={styles.bold}>Installer</Text> debe crearse manualmente
            y asignarse al grupo <Text style={styles.bold}>Administrators</Text>{' '}
            usando el administrador de usuarios de Windows.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Se debe usar una contraseña segura. En Windows Server 2016, la
            contraseña debe crearse de acuerdo con estas reglas:
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>• No use el nombre</Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              • Use al menos tres clases de caracteres. Las clases de caracteres
              son:
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}> – letra minúscula</Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}> – letra mayúscula</Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}> – número</Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}> – carácter especial</Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Para información detallada, consulte:
            https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/password-must-meet-complexity-requirements
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔄 4.4 Actualización del Sistema Operativo
          </Text>

          <View style={styles.infoBox}>
            <Icon name="update" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Recomendamos instalar las últimas actualizaciones y parches de
              Windows. Pueden instalarse desde los servidores de actualización
              de Microsoft si tiene una conexión a Internet. También hay
              instaladores offline disponibles.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🌐 4.5 Configuración de Red
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            4.5.1 Prioridad de Adaptador y Desactivación de Adaptadores de Red
            No Utilizados
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Para una operación correcta, el sistema necesita tener el adaptador
            de red. El adaptador de red usado por R&S Postman III debe tener la
            prioridad más alta (valor más bajo de métrica de interfaz TCP/IPv4)
            en la lista. Los adaptadores no utilizados/desconectados deben estar
            deshabilitados.
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Presione [Win+R] para abrir la ventana "Run"
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Ingrese el comando <Text style={styles.bold}>ncpa.cpl</Text> y
              haga clic en el botón "OK"
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              La ventana "Network Connections" muestra los adaptadores de red
              detectados.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura4-2.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 4-2: Lista de adaptadores de red
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            4.5.1.1 Desactivación de Adaptadores de Red No Utilizados
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► En la ventana "Network Connections", haga clic derecho en el
              adaptador de red a desactivar y seleccione "Disable" del menú
              emergente.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/4-5-1-1.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Desactivación de adaptador de red
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            4.5.1.2 Configuración de Prioridad del Adaptador
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. En la ventana "Network Connections", haga clic derecho en el
              adaptador de red a modificar y seleccione "Properties" del menú
              emergente.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Seleccione el elemento "Internet Protocol Version 4 (TCP/IPv4)"
              y haga clic en el botón "Properties".
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. En la ventana "Internet Protocol Version 4 (TCP/IPv4)
              Properties", haga clic en el botón "Advanced".
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              4. En la ventana "Advanced TCP/IP Settings", desmarque la casilla
              "Automatic metric" e ingrese un valor entero positivo.
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              El adaptador de red con el valor más bajo tiene la prioridad más
              alta.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura4-3.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 4-3: Configuración de métrica de interfaz de red
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            💻 4.5.2 Nombre de Computadora, Dirección IP y Grupo de Trabajo
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            La computadora necesita una dirección IP única según la hoja de
            Configuración del Sistema.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Usando SysPrep para deployment: Si tiene la intención de usar
              SysPrep para múltiples despliegues, tenga en cuenta que cada
              computadora necesita obtener un nombre individual/dirección
              IP/grupo de trabajo. Este paso es el procedimiento recomendado en
              oposición a simplemente clonar el HDD.
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Para configurar lo anterior:
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Presione [Win+R] para abrir la ventana "Run".
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Ingrese el comando <Text style={styles.bold}>ncpa.cpl</Text> y
              haga clic en el botón "OK".
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              La ventana "Network Connections" muestra los adaptadores de red
              detectados.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. En la ventana "Network Connections", haga clic derecho en el
              adaptador de red a modificar y seleccione "Properties" del menú
              emergente.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              4. Seleccione el elemento "Internet Protocol Version 4 (TCP/IPv4)"
              y haga clic en el botón "Properties".
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              5. En la pestaña "General", haga clic en "Use the following IP
              address" e ingrese la dirección IP estática nombrada en la hoja de
              Configuración del Sistema (ej. 172.29.81.16) con la "Subnet mask"
              255.255.255.0. Deje los otros valores vacíos.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🖥️ 4.6 Cambio del Nombre de Host
          </Text>

          <View style={styles.warningBox}>
            <Icon name="alert" size={18} color="#FF9800" />
            <Text variant="bodySmall" style={[styles.warningText, { color: theme.colors.onErrorContainer }]}>
              El nombre de host o dominio no se puede cambiar después de que R&S
              Postman III ha sido instalado y configurado.
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Después de la instalación del sistema operativo, el servidor (ej.
            con el nombre de host "mu2" para Windows Unit2 Server") es por
            defecto miembro del grupo de trabajo "WORKGROUP".
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Los siguientes pasos explican cómo configurar el grupo de trabajo
            local:
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Presione [Win+R] para abrir la ventana "Run".
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Ingrese el comando <Text style={styles.bold}>sysdm.cpl</Text> y
              haga clic en el botón "OK".
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              Se abre la ventana "System Properties":
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura4-4.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 4-4: Cambio de nombre de computadora y descripción, grupo
              de trabajo y sufijo DNS primario
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Haga clic en el botón "Change" y en la ventana "Computer Name
              Changes" ingrese el nombre de la computadora del servidor, ej.
              "MU2".
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              4. Haga clic en el botón "More" e ingrese el "Primary DNS suffix
              of this computer", ej. "pm-mu2.com". Haga clic en "OK" para
              guardar los cambios.
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              De vuelta en la ventana "Computer Name Changes", el "Full computer
              name (FCN)" ya está mostrado correctamente. En el ejemplo
              anterior, sería: mu2.pm-mu2.com.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              5. Haga clic en "OK" y confirme que es necesario reiniciar.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              6. Cuando el sistema le pida reiniciar la computadora, haga clic
              en "Yes" para activar la nueva configuración.
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Si tiene la intención de un despliegue asistido por SysPrep, los
            pasos anteriores se pueden omitir ya que deben repetirse para cada
            máquina clonada.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🛡️ 4.7 Configuración de Data Execution Prevention
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Presione [Win+R] para abrir la ventana "Run".
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Ingrese el comando <Text style={styles.bold}>sysdm.cpl</Text> y
              haga clic en el botón "OK".
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              Se muestra la ventana "System Properties".
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Navegue a la pestaña "Advanced" y haga clic en el botón
              "Settings" en la sección "Performance".
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              4. Navegue a la pestaña "Data Execution Prevention".
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              5. Active el botón de radio superior "Turn on DEP for essential
              Windows programs and services only" como se muestra en Figura 4-5,
              luego haga clic en "OK" para confirmar.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura4-5.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 4-5: Configuración de Data Execution Prevention (DEP)
            </Text>
          </View>

          <View style={styles.warningBox}>
            <Icon name="alert-circle" size={18} color="#FF9800" />
            <Text variant="bodySmall" style={[styles.warningText, { color: theme.colors.onErrorContainer }]}>
              Importante: Configure correctamente DEP y la prioridad de
              adaptadores de red antes de continuar con la instalación
            </Text>
          </View>
        </Accordion>

        {/* SECTION 5 */}
        <Accordion
          number="SECCIÓN 5"
          title="Instalación del Software R&S Postman III"
          icon="download"
          delay={140}
        >
          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Después de que el sistema operativo ha sido instalado y configurado
            como se describe en el Capítulo 4, "Instalación del Sistema
            Operativo", el software R&S Postman III puede ser instalado y
            configurado usando el Asistente de Configuración de R&S Postman III.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Este capítulo describe una instalación de tipo "Postman III
            standalone". Si ocurren diferencias comparadas con el tipo de
            integración "Postman III integrated with navy system", estas
            diferencias se señalan.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            💿 5.1 Creación del Portador de Datos para la Instalación
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              El PM3 y DEVICE CONTROL se suministran en discos separados. Para
              la instalación, se debe crear un nuevo portador de datos a partir
              de ambos discos.
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Para crear el portador de datos de instalación, proceda de la
            siguiente manera:
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              • Copie el contenido del CD PM3 (CDROM-NS51550-BASE) y péguelo en
              el nuevo portador de datos.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              • Copie los paquetes MSI (simcosii-...msi, devicecontrol*.msi) del
              DEVICE CONTROL y péguelos en la carpeta Rohde-Schwarz/SIMCOSII de
              la carpeta CDROM-NS5150-BASE respectivamente en la carpeta raíz
              del nuevo portador de datos.
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Luego puede realizar la instalación como se describe en el manual de
            instalación.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            👤 5.2 Inicio de Sesión como Installer
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            La instalación y configuración del software R&S Postman III debe
            realizarse usando la cuenta{' '}
            <Text style={styles.bold}>Installer</Text> creada durante la
            instalación del sistema operativo. Por favor, cierre sesión e inicie
            sesión como usuario <Text style={styles.bold}>Installer</Text> si
            aún no lo ha hecho.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🚀 5.3 Lanzamiento del Asistente de Configuración R&S Postman III
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Lance el Asistente de Configuración R&S Postman III ejecutando el
            archivo <Text style={styles.bold}>setup.exe</Text> en la carpeta de
            instalación.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            ⚙️ 5.4 Selección del Tipo de Instalación y Opciones
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Después de que se ha lanzado el Asistente de Configuración R&S
            Postman III, se muestra la página{' '}
            <Text style={styles.bold}>Welcome</Text>. Seleccione:
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              • Tipo de integración (standalone o integrated with the R&S Navy o
              R&S MMHS system)
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              • Tipo de instalación (server and/or client)
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>• Opciones adicionales</Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-1.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-1: Página Welcome
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔑 5.5 Ingreso de Claves de Producto
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Para instalaciones standalone de Postman III e instalaciones
            integradas con sistema Navy y para cada opción seleccionada, se debe
            ingresar una clave de producto válida. La clave de producto se
            imprime en los papeles de licencia que vienen con los medios de
            instalación del software.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Ingrese las claves de producto apropiadas en los campos respectivos
            hasta que se muestre una marca de verificación verde junto a cada
            clave de producto.
          </Text>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-2.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-2: Ingreso de claves de producto
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🌐 5.6 Planificación de la Red
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Haga clic en la pestaña "Planning" para mostrar el editor de
            planificación de red.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Pestaña Planning no disponible para R&S Postman III router for
              MMHS: La pestaña "Planning" solo está disponible para los tipos de
              integración "Postman III" standalone y "Postman III integrated
              (navy system)".
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-3.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-3: Planning
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📍 5.6.1 Agregar Sitios
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Presione la tecla "Insert" o haga clic derecho en la lista de
              sitios y seleccione "Add site" del menú contextual para agregar un
              nuevo sitio.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Complete los siguientes parámetros del sitio desde el plan de
              configuración del sistema. Ver Capítulo 3, "Planificación de la
              Configuración del Sistema R&S Postman III", para más información:
            </Text>
          </View>

          <View style={styles.checkList}>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}> • Site ID</Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}> • Site Name</Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}> • Mail Domain</Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}> • Server Name (FCN)</Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}> • IP Address</Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Check RSIRP and enter network and station ID.
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              Este paso solo es necesario si la opción "R&S VHF/UHF Radio
              Protocol" ha sido seleccionada en la página Welcome.
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Check S5066 and enter node id and ALE address.
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              Este paso solo es necesario si la opción "R&S HF Radio Protocol"
              ha sido seleccionada en la página Welcome.
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}> • User (opcional)</Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Repita los pasos anteriores para cada sitio R&S Postman III.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📂 5.6.2 Carga de Sitios
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            La configuración creada por el Asistente de Configuración R&S
            Postman III puede cargarse desde un archivo. Esta configuración
            puede ser útil para instalar múltiples estaciones.
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Haga clic en el botón "Open" para importar sitios y usuarios.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Seleccione un archivo XML que haya sido guardado previamente
              por un Asistente de Configuración R&S Postman III existente.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Haga clic en "Open" para sobrescribir su plan de red actual con
              la configuración cargada.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🖨️ 5.6.3 Impresión del Plan de Red
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            El plan de red puede imprimirse para fines de documentación. La
            funcionalidad de impresión se realiza exportando el plan de red a un
            archivo HTML, que luego se abre en el navegador predeterminado.
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Haga clic en el botón "Print" para exportar el plan de red
              actual a un archivo HTML y abrir el archivo en el navegador
              predeterminado.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Use la funcionalidad de su navegador para formatear la salida
              de impresión (orientación, márgenes, encabezados, pies de página,
              etc.) e imprimir el plan de red.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            ✅ 5.6.4 Selección del Sitio Local
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Haga clic derecho en uno de los sitios en la lista de planificación
            de red y seleccione "Select site" del menú contextual o presione
            [Ctrl+Enter].
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Este paso copia los parámetros del sitio seleccionado a los campos
            de entrada de la pestaña "Settings" descrita en la siguiente
            sección.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            El sitio seleccionado se marca con una marca de verificación verde.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Uno de los sitios planificados debe ser seleccionado como sitio
              local. Para cada instalación de servidor R&S Postman III,
              exactamente uno de los sitios planificados debe ser seleccionado
              como sitio local. Los otros sitios se configuran como sitios
              remotos (desde el punto de vista del sitio local que se está
              instalando y configurando actualmente).
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-4.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-4: Plan de red completo
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            💾 5.6.5 Guardado de Sitios
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            El plan de red actual puede guardarse en un archivo XML, que puede
            ser cargado por el Asistente de Configuración R&S Postman III. Este
            paso facilita la instalación de múltiples estaciones.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            La función solo está habilitada si se ha seleccionado un sitio
            local.
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Haga clic en el botón "Save As" para abrir el diálogo "Save
              As".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Seleccione una carpeta e ingrese un nombre de archivo de
              exportación (ej. sites.xml).
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Haga clic en "Save" para exportar el plan de red actual a un
              formato intercambiable.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📋 5.6.6 Gestión de Múltiples Planes de Red
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            La configuración de sitios y usuarios de la pestaña "Planning" puede
            guardarse en un archivo y cargarse desde un archivo. Ver capítulos
            5.6.2, "Loading Sites", y 5.6.5, "Saving Sites", para detalles.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            ⚙️ 5.7 Edición de Parámetros de Instalación
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Haga clic en la pestaña "Settings" para mostrar y editar los
            parámetros de instalación.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="alert" size={18} color="#FF9800" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Pestaña "Settings" deshabilitada si la clave de producto es
              inválida: Todas las pestañas excepto la pestaña "Welcome" están
              deshabilitadas mientras no haya ingresado claves de producto
              válidas para cada opción seleccionada.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-5.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-5: Página Settings
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="refresh" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Los prerequisitos se actualizan cuando se cambian las
              configuraciones: Cuando se edita un parámetro del instalador, la
              lista de tareas de prerequisitos (ver más abajo) se actualiza
              automáticamente. Esto es necesario porque algunas tareas de
              prerequisitos dependen de los valores actuales de los parámetros
              del instalador. Por ejemplo, la tarea de prerequisito de nombre de
              host verifica que el nombre de host real del sistema coincide con
              el valor ingresado en el cuadro de texto de configuración de
              nombre de host.
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Los valores predeterminados para las configuraciones se derivan de
            la configuración actual de su sistema. Una vez que se ha editado un
            valor, el valor modificado se guarda en el registro y se restaura en
            el próximo inicio del Asistente de Configuración R&S Postman III.
            También es posible especificar cada configuración a través de
            parámetros de línea de comandos.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            ✅ 5.8 Completar Tareas de Prerequisitos
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en la pestaña "Prerequisites" para mostrar todas las
              tareas de prerequisitos que deben completarse para una instalación
              exitosa del software.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-6.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-6: Página Prerequisites
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            El distintivo de color en la pestaña "Prerequisites" muestra el
            número de tareas incompletas (rojo) si hay o el número de tareas
            completadas (verde).
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Cada una de las tareas tiene uno o más enlaces de comando que le
            ayudan a completar la tarea. Dependiendo del tipo de tarea, hay
            enlaces de comando que abren las respectivas ventanas de
            configuración de Windows donde puede realizar la configuración
            requerida, o si hay enlaces de comando que completan directamente la
            tarea de configuración del sistema.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              La lista de tareas de prerequisitos varía ligeramente dependiendo
              del tipo de instalación seleccionado (servidor y/o cliente) y la
              plataforma de destino (Windows 10 o Windows Server 2016). Las
              siguientes secciones describen cada una de las tareas de
              configuración en detalle.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            👨‍💼 5.8.1 Prerequisito de Administrador
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica si el usuario actual es miembro del grupo{' '}
            <Text style={styles.bold}>Administrators</Text>.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Si esta tarea falla, usted no ha iniciado sesión como un usuario que
            es miembro del grupo <Text style={styles.bold}>Administrators</Text>
            , o el Control de Cuentas de Usuario de Windows (UAC) no está
            desactivado.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🛡️ 5.8.2 Data Execution Prevention
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica si las configuraciones de DEP ("Data Execution Prevention")
            están configuradas según se requiere.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🌐 5.8.3 Adaptadores de Red
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica si todos los adaptadores de red están configurados según se
            requiere.
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Enable Weak Host Sends" para habilitar weak host
              sends.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🌍 5.8.4 Nombre de Dominio
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica si se ha configurado un sufijo de nombre de dominio DNS y
            si coincide con el valor configurado en la página "Settings".
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🖥️ 5.8.5 Nombre de Host
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica si el nombre de host coincide con el valor configurado en
            la página "Settings".
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔍 5.8.6 Resolución de Nombre del Servidor
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica si el nombre del servidor puede resolverse a la dirección
            IP configurada en la página "Settings".
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Requerido solo para instalaciones de cliente.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📡 5.8.7 Ping Server
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica si se puede hacer ping a la dirección IP del servidor.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Requerido solo para instalaciones de cliente.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            👥 5.8.8 Grupo PMIII-User
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica si el grupo local de Windows{' '}
            <Text style={styles.bold}>PMIII-User</Text> existe.
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Create group" para crear un grupo local de
              usuarios de Windows.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            👤 5.8.9 Cuenta de Usuario Installer
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica si existe una cuenta de usuario de Windows llamada{' '}
            <Text style={styles.bold}>Installer</Text> y es miembro del grupo
            "Administrators".
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            👤 5.8.10 Cuenta de Usuario [Pm3UserName]
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica si existe una cuenta de usuario de Windows nombrada según
            se configuró en la página "Settings" y es miembro del grupo{' '}
            <Text style={styles.bold}>PMIII-User</Text>.
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Haga clic en "Create user" para crear la cuenta local de
              usuario de Windows.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Haga clic en "Add user to group(s)" para agregar la cuenta de
              usuario al grupo "PMIII-User".
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🪟 5.8.11 Características de Windows
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica si todas las características de Windows requeridas están
            habilitadas.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              La característica ".NET Framework 3.5" debe instalarse desde
              Windows Server 2016 o medio de instalación de Windows 10 u online.
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Para instalar ".NET Framework 3.5" en Windows Server 2016 online,
            proceda de la siguiente manera:
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>1. Abra "Server Manager".</Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. En "Server Manager", haga clic en Manage {'>'} Add Roles and
              Features {'>'} Features.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Seleccione ".NET Framework 3.5 Features".
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Para instalar ".NET Framework 3.5" en Windows 10 online, proceda de
            la siguiente manera:
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Haga clic en "Programs and Features" en la ventana de
              configuración de Windows 10.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Haga clic en "Turn Windows Feature on or off".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Seleccione ".NET Framework 3.5 Features".
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Para instalar ".NET Framework 3.5" desde medio de instalación de
            Windows Server 2016 o Windows 10, proceda de la siguiente manera:
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Haga clic en "Locate and Enable .NET Framework 3.5" para abrir
              una ventana de selección de archivo.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Seleccione el archivo
              microsoft-windows-netfx3-ondemand-package.cab.
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              El archivo está en el medio de instalación de Windows Server 2016
              o Windows 10 en la subcarpeta "sources\sxs".
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              El medio de instalación debe ser compatible con la versión de
              Windows instalada.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-7.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-7: Instalación desde medio de instalación de Windows
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Enable Windows features" para habilitar todas las
              características faltantes.
            </Text>
          </View>

          <View style={styles.warningBox}>
            <Icon name="clock-alert" size={18} color="#FF9800" />
            <Text variant="bodySmall" style={[styles.warningText, { color: theme.colors.onErrorContainer }]}>
              La instalación de características de Windows faltantes puede
              tardar hasta varios minutos. Durante este tiempo, la GUI del
              Asistente de Configuración R&S Postman III no responde. Por favor,
              sea paciente y espere a que se complete la tarea.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📦 5.9 Instalación de Paquetes de Software
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Después de que todas las tareas de prerequisitos hayan sido
            completadas, se puede iniciar la instalación del software.
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en la pestaña "Installation" para mostrar la página
              "Installation".
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-8.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-8: Página Installation
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            ▶️ 5.9.1 Inicio de la Instalación
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Apply" para iniciar la instalación del paquete de
              software.
            </Text>
          </View>

          <View style={styles.warningBox}>
            <Icon name="alert" size={18} color="#FF9800" />
            <Text variant="bodySmall" style={[styles.warningText, { color: theme.colors.onErrorContainer }]}>
              Complete todas las tareas de prerequisitos antes de iniciar la
              instalación. Iniciar la instalación de los paquetes de software
              R&S Postman III antes de que todas las tareas de prerequisitos
              hayan sido completadas (es decir, tengan una marca de verificación
              verde) debería resultar en un error de instalación, o - peor aún -
              uno o más paquetes de software podrían instalarse con
              configuración incorrecta causando probablemente errores difíciles
              de rastrear.
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Un ícono de estado para cada paquete indica si el paquete respectivo
            será instalado dependiendo del tipo de instalación seleccionado,
            plataforma y otras condiciones. Use el enlace "Toggle Legend" en la
            parte inferior izquierda de la página "Installation" para mostrar
            una explicación de los diferentes íconos de estado.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              La colección de paquetes de software que se instalan varía según
              el tipo de instalación seleccionado (servidor y/o cliente) y la
              plataforma de destino (Windows 10 o Windows Server 2016).
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="clock-alert" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              La instalación de los paquetes de software tarda aprox. 20
              minutos. Sea paciente y no cierre el Asistente de Configuración
              R&S Postman III durante este tiempo.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔄 5.9.2 Reinicio de la Máquina
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Dependiendo del tipo de instalación (servidor y/o cliente), se
            muestra el diálogo "Reboot" después de que todos los paquetes de
            software han sido instalados.
          </Text>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-9.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-9: Diálogo Reboot
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Reboot and restart" para iniciar un reinicio del
              sistema y reiniciar el Asistente de Configuración R&S Postman III.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            ⚙️ 5.10 Configuración de Paquetes de Software
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Después de que todos los paquetes de software requeridos han sido
            instalados y la máquina ha sido reiniciada, los paquetes de software
            deben ser configurados.
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Haga clic en la pestaña "Configuration" para mostrar las tareas
              de configuración.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Complete cada tarea hasta que muestre una marca de verificación
              verde.
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Los enlaces de comando en la parte inferior de cada tarea
            proporcionan asistencia para completar cada tarea.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              La lista de tareas de configuración varía dependiendo del tipo de
              instalación seleccionado (servidor y/o cliente). Para
              instalaciones solo de cliente, solo se debe realizar un pequeño
              subconjunto de las tareas de configuración.
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Las siguientes secciones describen cada una de las tareas de
            configuración en detalle.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🗄️ 5.10.1 Configuración de SQL Server
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Haga clic en "Configure TCP port 1433" para configurar el
              número de puerto TCP estático 1433.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Haga clic en "(Re-)start SQL Server" para reiniciar el servicio
              SQL Server.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔧 5.10.2 SQL Server BUILTIN\Administrators Sysadmin Role
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica que el grupo Administrators sea miembro del rol "sysadmin"
            de SQL Server. Si SQL Server fue preinstalado por algún otro
            programa de configuración, puede ser necesaria una corrección.
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Add 'BUILTIN\Administrators' to 'sysadmin' role"
              si este comando está habilitado.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📧 5.10.3 Configuración de hMailServer
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Configure hMailServer" para configurar
              hMailServer.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📍 5.10.4 Dirección de Origen TMR
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica si la dirección IP pública del TMR ("Tactical Management
            Router") está configurada a la dirección IP configurada. La
            dirección IP pública se usa como la dirección IP de origen para
            paquetes IP salientes.
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Adjust address and restart TMR service" si se
              detecta un desajuste.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            ☕ 5.10.5 Actualizaciones de Java
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Disable updates" para deshabilitar el actualizador
              automático de Java.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🖥️ 5.10.6 Ícono de Bandeja del Sistema Java
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Hide system tray icon" para deshabilitar el ícono
              de bandeja del sistema Java.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📦 5.10.7 Despliegue de Java
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Adjust" para ajustar la configuración de
              despliegue de Java.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            💾 5.10.8 Caché de Java
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica que el caché de Java esté vacío.
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Clear cache" para limpiar el caché (si es
              necesario).
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔧 5.10.9 Variable de Entorno SIMCOS_ROOT
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica que la variable de entorno SIMCOS_ROOT ha sido establecida.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📄 5.10.10 Archivos de Catálogo EVL
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Copy files" para instalar los archivos de catálogo
              EVL.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            👥 5.10.11 Base de Datos UMAN
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Update database" para aplicar todas las
              modificaciones requeridas a la base de datos UMAN.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📡 5.10.12 Base de Datos DEVCON
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Update database" para aplicar todas las
              modificaciones requeridas a la base de datos DEVCON.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📶 5.10.13 Configuración de S5066 Stack
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica si las configuraciones relevantes del archivo de
            configuración s5066.xml son correctas.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Esta tarea solo está presente si la opción "R&S HF Radio Protocol"
            ha sido seleccionada en la página "Welcome".
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Fix config" para ajustar la configuración del
              stack S5066.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📧 5.10.14 Configuración de Correo S5066
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica si las configuraciones relevantes del archivo de
            configuración "s5066_mail.xml" son correctas.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Esta tarea solo está presente si la opción "R&S HF Radio Protocol"
            ha sido seleccionada en la página "Welcome".
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Fix config" para ajustar la configuración de
              correo S5066.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔧 5.10.15 Servicios SIMCOS II
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Haga clic en "Configure services" para establecer el tipo de
              inicio de todos los servicios a "Automatic".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Haga clic en "Start services" para iniciar los servicios R&S
              Device Control (SIMCOS II fue renombrado a Device Control).
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🌐 5.10.16 Interfaz Web SIMCOS II
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica que la interfaz web R&S Device Control (SIMCOS II fue
            renombrado a Device Control) sea accesible.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔐 5.10.17 Instancia ADAM (AD LDS)
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Haga clic en "Install instance (unattended)" para instalar la
              instancia ADAM de postman3.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Haga clic en "Add<Text style={styles.substep}>hostname</Text>
              \PMIII-User to Readers role" para otorgar derechos de lectura a
              los miembros del grupo PMIII User.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            👨‍💼 5.10.18 Rol de Administradores del Instalador ADAM
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica que el usuario actual (
            <Text style={styles.bold}>Installer</Text>) sea miembro del rol
            "Administrators" de ADAM.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🧙 5.10.19 Asistente de Configuración R&S Postman III
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Haga clic en "Launch setup wizard" para lanzar el Asistente de
              Configuración R&S Postman III.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-10.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-10: Pantalla de bienvenida del asistente de configuración
              de Postman III
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            <Text style={styles.bold}>
              Nota: Entendiendo el Asistente de Configuración de Postman III
            </Text>
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            El Asistente de Configuración de Postman III es un instalador
            adicional que instala y configura una parte adicional de los
            paquetes de software R&S Postman III.
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Haga clic en "Next" en la pantalla de bienvenida del asistente
              de configuración R&S Postman III.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-11.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-11: Pantalla de licencia
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Marque la casilla "I accept the terms in the License Agreement"
              y haga clic en "Next" para continuar.
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Se muestra la pantalla "Site Configuration". Todos los parámetros
            requeridos ya están completados.
          </Text>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-12.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-12: Pantalla de configuración de sitio completada
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              4. Haga clic en "Next" para continuar.
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}> Se abre la página "Install".</Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-13.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-13: Página Install
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              5. Haga clic en "Install" para iniciar la instalación del
              subsistema R&S Postman III.
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              <Text style={styles.bold}>Nota:</Text> La instalación del
              subsistema R&S Postman III tarda unos minutos. Por favor, sea
              paciente mientras se instala y configura el subsistema R&S Postman
              III.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              6. Después de que el subsistema R&S Postman III ha sido instalado,
              haga clic en "Finish" para cerrar el Asistente de Configuración
              R&S Postman III y volver al Asistente de Configuración R&S Postman
              III.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-14.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-14: Instalación completa
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔥 5.10.20 Reglas de Firewall del Servicio R&S Postman III
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Instala o actualiza las Reglas de Firewall del Servicio Postman III.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔐 5.10.21 Cuenta de Servicios del Sistema R&S Postman III
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica la configuración de la cuenta de Servicios del Sistema R&S
            Postman III.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📁 5.10.22 Ruta y Registro de R&S Postman III
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica que el software R&S Postman III ha sido instalado en el
            directorio correcto y que las configuraciones del registro son
            correctas.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            ⚙️ 5.10.23 Configuración de R&S Postman III
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            La tarea de Configuración de R&S Postman III asegura que la
            configuración de los sitios R&S Postman III coincida con el plan de
            red, que ha sido configurado en la página "Planning". Cuando se
            detecta una desviación, se muestra una advertencia y se proporcionan
            comandos para ajustar la configuración.
          </Text>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-15.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-15: Tarea de configuración de R&S Postman III
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Haga clic en "Stop Services" para detener todos los servicios
              que dependen de la configuración de sitios y usuarios.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Haga clic en "Remove orphaned sites" (si está habilitado) para
              eliminar todos los sitios que son parte de la configuración actual
              de MU1, MU2, MU3, pero ya no son (más) parte del plan de red.
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              Este paso puede ser necesario si R&S Postman III es actualizado o
              la configuración de red ha cambiado.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Haga clic en "Update modified sites" (si está habilitado) para
              actualizar todos los sitios existentes de la configuración actual
              con los parámetros definidos en el plan de red.
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              Este paso puede ser necesario si R&S Postman III es actualizado o
              la configuración de red ha cambiado.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              4. Haga clic en "Add missing sites" para agregar todos los sitios
              faltantes.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📄 5.10.24 Archivos de Configuración de R&S Postman III
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Verifica que las configuraciones en los archivos de configuración de
            R&S Postman III (.config, .jnlp) sean consistentes con los
            parámetros de la página "Settings".
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🌐 5.10.25 Interfaz Web de R&S Postman III
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            La tarea Interfaz Web de Postman III proporciona un conjunto de
            enlaces de comando que ayudan a lanzar las respectivas aplicaciones
            GUI de Java.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Usualmente, no se requiere acción para esta tarea de configuración.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔗 5.10.26 Accesos Directos de R&S Postman III
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Create shortcuts" para crear accesos directos
              ("iconos") en el escritorio y en el menú de inicio de R&S Postman
              III para lanzar las siguientes aplicaciones R&S Postman III:
            </Text>
          </View>

          <View style={styles.checkList}>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • R&S Postman III Management Console
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • R&S Postman III Tactical Console
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • R&S Postman III Chat Console
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🚀 5.10.27 Servicios de R&S Postman III
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Start services" para iniciar los servicios R&S
              Postman III.
            </Text>
          </View>

          <View style={styles.warningBox}>
            <Icon name="alert" size={18} color="#FF9800" />
            <Text variant="bodySmall" style={[styles.warningText, { color: theme.colors.onErrorContainer }]}>
              Nota: El inicio del servicio GwTact falla si el sitio local no
              está configurado. El servicio GwTact no puede iniciarse si la
              configuración del sitio es errónea y no coincide con los
              parámetros ingresados en el Asistente de Configuración R&S Postman
              III. El inicio también puede fallar si la configuración del sitio
              es errónea y no coincide con los parámetros ingresados en el
              Asistente de Configuración R&S Postman III.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📡 5.10.28 Configuración del Administrador PLDA
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Para sistemas navales, es posible configurar la conexión al servicio
            que administra las líneas de comunicación (un servicio que
            proporciona la Interfaz de Aplicación de Datos).
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📤 5.10.29 Accesos Directos SendTo
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            La tarea de accesos directos SendTo asegura que se agregue una
            entrada para cada sitio remoto R&S Postman III al menú contextual
            "Send To" del Explorador de Windows. Debe ejecutarse solo después de
            que todos los sitios remotos hayan sido ingresados o importados a la
            Consola de Administración R&S Postman III.
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Create 'SendTo' shortcuts" para agregar accesos
              directos SendTo para cada sitio remoto.
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              Este paso debe hacerse una vez por usuario.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            💿 5.10.30 Deshabilitar AutoRun para Unidades Extraíbles
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            La tarea deshabilitar AutoRun para unidades extraíbles verifica si
            la característica auto-run está deshabilitada o habilitada. Cuando
            la característica auto-run está habilitada, el sistema operativo
            podría lanzar automáticamente programas cuando se inserta un medio
            en una unidad extraíble. Esto es un riesgo de seguridad, por
            ejemplo, si el medio insertado está infectado por un virus. La
            configuración es válida en todo el sistema. La configuración no es
            obligatoria pero se recomienda.
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Haga clic en "Disable AutoRun" para deshabilitar la
              característica auto-run.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Haga clic en "Restart Explorer" para aplicar la nueva
              configuración inmediatamente sin reiniciar el sistema.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🗄️ 5.10.31 Modelo de Recuperación de Bases de Datos de SQL Server
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            La tarea Modelo de Recuperación de Bases de Datos de SQL Server
            verifica si las bases de datos para R&S Postman III están en "simple
            recovery mode".
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Adjust recovery models" para establecer el modelo
              de recuperación a "Simple" para todas las bases de datos SQL
              Server existentes.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📧 5.10.32 Autoconfiguración de Thunderbird
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            La Autoconfiguración de Thunderbird crea un archivo con los
            parámetros para crear una cuenta de correo electrónico en
            thunderbird (ej. dominio de correo, servidor de correo).
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔌 5.10.33 Complementos de Thunderbird
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Copia los complementos de Thunderbird suministrados a la instalación
            de Thunderbird.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Observe la configuración de idioma en la página "Settings".
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🛣️ 5.11 Configuración del Enrutamiento
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Inicie la Consola de Administración R&S Postman III haciendo
              doble clic en su icono en el escritorio.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. En la página "Routing Info – Edit" (clic derecho "Routing
              Info"), vaya a la pestaña "Routing Configuration".
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Configure el enrutamiento a las otras unidades móviles a
              "Direct".
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              4. Seleccione el nombre de su "Access Gateway" y el "Tactical
              Circuit" a usar según su entorno del sistema.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>5. Finalmente haga clic en "OK".</Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-16.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-16: Consola de administración - configuración de
              enrutamiento
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Después de que la ventana se cierra, el enrutamiento actualizado se
            puede encontrar en la tabla del "Global Routing Map". Esta tabla
            muestra qué circuito de destino se puede alcanzar usando qué
            circuito.
          </Text>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-17.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-17: Consola de administración - mapa de enrutamiento
              global
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              6. Para actualizar la configuración del gateway táctico local,
              haga clic en el botón parpadeante en la barra de herramientas de
              la consola de administración:
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              📡🔄 (Update Gateway Configuration)
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            👥 5.12 Configuración de Usuario
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Inicie sesión en el servidor R&S NS5150 como usuario Installer
              con la contraseña asignada en la cuenta.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Abra Internet Explorer y navegue a la Interfaz Web NS5150 en la
              URL http://localhost:8080/simcos2.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Abra el administrador de usuarios R&S Postman III "UMAN" y haga
              clic en el botón "Add...".
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-18.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-18: UMAN - agregando un usuario
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              4. Ingrese los valores para "User Name" y "Login". Confirme con
              "Ok".
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              En este ejemplo, ambos son iguales para mantenerlo simple.
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="account-multiple" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Consejo: Usuarios Adicionales - Repita este paso para todos los
              usuarios que planean trabajar en este servidor y a través de las
              estaciones de trabajo conectadas más tarde.
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              5. Seleccione la pestaña "Groups" y seleccione el grupo Operators.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              6. Haga clic en "Edit" para abrir el diálogo UMAN "Add/Edit
              Group".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>7. Seleccione la pestaña "Members".</Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              8. Haga clic en "Add ..." para abrir el diálogo UMAN "Add/Edit
              Group" {'>'} "Add Members".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              9. Seleccione el nombre de la nueva cuenta de usuario y haga clic
              en "Ok" para agregar el usuario al grupo Operators.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-19.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-19: UMAN - add/edit group: members
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>10. Cierre UMAN.</Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📻 5.13 Detección de Radios y Actualización de Base de Datos
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Antes de que el sistema pueda trabajar con los radios, Device
            Discovery debe detectar y escribir los radios en la base de datos
            DEVCON.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Precondiciones para la detección de radios:
            </Text>
          </View>

          <View style={styles.checkList}>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Un firmware de radio ya está programado que soporta IPoA.
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Los nombres de radio correctos y las direcciones IP están
              configurados según la hoja de entorno del sistema.
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Los radios deben cargarse con misiones válidas usando R&S
              RNMS3000 y/o una fillgun.
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Inicie sesión en el servidor como usuario Installer.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Abra R&S Device Discovery haciendo clic en el icono del
              escritorio:
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Si se usan radios VHF/UHF del tipo Xx4400x en el sistema, el
              rango de direcciones IP debe ingresarse primero. Abra la ventana
              de configuración haciendo clic en el botón "Settings" en la
              esquina superior derecha (enmarcado en rojo en la captura de
              pantalla).
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-20.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-20: Botón de configuración de detección de dispositivos
            </Text>
          </View>

          <View style={styles.warningBox}>
            <Icon name="alert" size={18} color="#FF9800" />
            <Text variant="bodySmall" style={[styles.warningText, { color: theme.colors.onErrorContainer }]}>
              Nota: TMR, R&S M3TR y R&S XK4100 radios deben detectarse con la
              configuración predeterminada de la herramienta.
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              4. En la ventana de configuración, ingrese el {'<'}first IP
              address{'>'}
              {'<'}last IP address{'>'} (separado por un guion) de los radios
              R&S 4400 en PortSweepAddresses y haga clic en "Save".
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              También puede ingresar distintos rangos R&S 4/P (separados por una
              coma).
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-21.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-21: Device discovery - ventana de configuración
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              5. De vuelta en la ventana principal de Device Discovery, haga
              clic en el botón "Discover".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              6. Cuando todos los dispositivos estén listados aquí, haga clic en
              "Update DEVCON".
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-22.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-22: Device discovery - actualizando DEVCON
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-23.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-23: Device discovery - proceso de actualización de base
              de datos
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            En la siguiente captura de pantalla, la base de datos ya está
            actualizada. En consecuencia, el botón "Update DEVCON" está en gris
            y un símbolo de verificación verde dice: "No se requiere
            actualización de base de datos DEVCON".
          </Text>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-24.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-24: Device discovery - vista general de dispositivos
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              7. Cierre la herramienta después de una actualización exitosa.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📧 5.14 Configuración del Cliente de Correo Electrónico
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            ✉️ 5.14.1 Configuración de la Cuenta de Correo Electrónico
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Lance la aplicación Mozilla Thunderbird.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Tome los valores de la pestaña "Settings" en el Asistente de
              Configuración R&S Postman III. La dirección de correo electrónico
              debe construirse a partir de la configuración de "User name"
              (propiedad Pm3UserName) y "Email domain name" (propiedad
              Pm3EmailDomainName), ej. OpMu2@pm-mu2.com.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-25.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-25: Configuración de Thunderbird (1)
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-26.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-26: Configuración de Thunderbird (2)
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. En la ventana de advertencia, haga clic en "Done" para
              finalizar la configuración.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-27.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-27: Configuración de Thunderbird (3)
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🌍 5.14.2 Cambio del Idioma
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Lance la aplicación Mozilla Thunderbird.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>2. Haga clic en ☰ {'>'} "Options".</Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-28.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-28: Configuración de idioma (1)
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. En la sección "Language", puede cambiar el idioma.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura5-29.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 5-29: Configuración de idioma (2)
            </Text>
          </View>
        </Accordion>

        {/* SECTION 6 */}
        <Accordion
          number="SECCIÓN 6"
          title="Instalación R&S Postman III para R&S MMHS"
          icon="router-wireless"
          delay={160}
        >
          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Este capítulo describe la instalación de R&S Postman III con el tipo
            de integración "Postman III router for MMHS". Para este tipo de
            integración, el producto R&S Device Control (SIMCOS II fue
            renombrado a Device Control) debe estar instalado antes del proceso
            de instalación de R&S Postman III.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔧 6.1 Prerequisitos
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📦 6.1.1 Otros Productos Rohde & Schwarz
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Para la instalación de R&S Postman III con el tipo de integración
            "Postman III router for MMHS", el producto R&S Device Control
            (SIMCOS II fue renombrado a Device Control) debe estar instalado
            antes del proceso de instalación de R&S Postman III.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            👤 6.1.2 Configuración de Usuario
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            El proceso de instalación de R&S Postman III requiere que cree una
            cuenta de usuario local de Windows, que debe ser miembro del grupo
            local de Windows <Text style={styles.bold}>Administrators</Text>.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Este usuario debe usarse para el proceso de instalación.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            💿 6.2 Instalación
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🚀 6.2.1 Lanzamiento del Asistente de Configuración R&S Postman III
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Lance el Asistente de Configuración R&S Postman III ejecutando el
            archivo <Text style={styles.bold}>setup.exe</Text> en la carpeta de
            instalación.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Instalación implícita del framework .NET: El Asistente de
              Configuración R&S Postman III depende del Microsoft .NET Framework
              Versión 4.0 (o posterior). Si esta versión no está instalada, se
              instala automáticamente cuando se lanza el asistente de
              configuración por primera vez.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            ⚙️ 6.2.2 Selección del Tipo de Instalación y Opciones
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Después de que se ha lanzado el Asistente de Configuración R&S
            Postman III, se muestra la página "Welcome".
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>1. Seleccione lo siguiente:</Text>
          </View>

          <View style={styles.checkList}>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Integration type: Postman III for MMHS
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Installation type: Server only
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Additional options: RS-IRP (if this option is valid in the
              target environment)
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura6-1.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 6-1: Opciones de bienvenida
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Cambie a la pestaña "Settings" para continuar.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📋 6.2.3 Verificación de la Pestaña Settings
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Cuando las opciones de la pantalla "Welcome" están seleccionadas, la
            pestaña "Settings" debe abrirse. Para el tipo de integración
            "Postman III router for MMHS", solo tres elementos de configuración
            son de importancia. La pestaña "Settings" muestra el estado actual
            de la máquina. Aquí puede asegurarse de que las configuraciones sean
            requeridas una vez.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Tenga en cuenta que las configuraciones en esta captura de pantalla
            son un ejemplo.
          </Text>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura6-2.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 6-2: Configuración para MMHS
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Prerequisitos de instalación: R&S TMR se basa en la versión
              correcta de la biblioteca WinPcap instalada. A menudo esta
              biblioteca ya está instalada en una versión incorrecta, por
              ejemplo después del uso de la aplicación Wireshark.
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Antes de continuar, asegúrese de lo siguiente:
          </Text>

          <View style={styles.checkList}>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • No se abre ninguna aplicación Wireshark (verifique también las
              sesiones de escritorio remoto abiertas)
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • WinPcap no está instalado – asegúrese de desinstalarlo si aplica
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Cierre y reinicie <Text style={styles.bold}>setup.exe</Text>{' '}
            después.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            ✅ 6.2.4 Pestaña Prerequisites
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Cuando la pestaña "Settings" muestra todos los valores requeridos de
            la máquina actual, cambie a la pestaña "Prerequisites". La pestaña
            puede mostrar configuraciones que no permiten la operación de TMR.
            Las configuraciones pueden ajustarse haciendo clic en los botones
            apropiados.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            El firewall puede deshabilitarse haciendo clic en "Disable
            firewall".
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            El weak host routing necesario para TMR puede habilitarse haciendo
            clic en "Enable weak host send".
          </Text>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura6-3.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 6-3: Prerequisitos para MMHS (1)
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            El resultado debería verse así:
          </Text>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura6-4.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 6-4: Prerequisitos para MMHS (2)
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            💾 6.2.5 Pestaña Installation
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Los paquetes necesarios para el tipo de integración elegido se
            muestran aquí. Para el tipo de integración "Postman III router for
            MMHS", los siguientes paquetes deben instalarse:
          </Text>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura6-5.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 6-5: Pestaña de instalación del asistente de configuración
              MMHS
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Haga clic en "Apply" para iniciar la instalación.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            ⚙️ 6.2.6 Pestaña Configuration
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Después de que todos los paquetes de software requeridos han sido
            instalados, los paquetes de software deben configurarse.
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Haga clic en la pestaña "Configuration" para mostrar las tareas
              de configuración.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Complete cada tarea hasta que muestre una marca de verificación
              verde.
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Los enlaces de comando en la parte inferior de cada tarea
            proporcionan asistencia para completar cada tarea. La siguiente
            tarea se muestra:
          </Text>

          <View style={styles.checkList}>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Chapter 5.10.4, "TMR Source Address", on page 41
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Chapter 5.10.28, "PLDA Manager Configuration", on page 49
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Chapter 5.10.30, "Disabling AutoRun for Removable Drives", on
              page 49
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔧 6.3 Pasos Post-Instalación
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔌 6.3.1 Adaptación del Servicio PLDA Manager
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Si se instaló R&S Postman III con el tipo de integración 'Postman
            III router for MMHS' en un servidor miembro R&S MMHS, entonces el
            Servicio PLDA Manager debe adaptarse manualmente para ejecutarse
            bajo la cuenta "MMHHSServices".
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Si el Servicio PLDA Manager se ejecuta como local\System, no tiene
              privilegios suficientes para acceder al directorio MMHS AD-LDS.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura6-6.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 6-6: Adaptación del servicio PLDA manager
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📡 6.3.2 Instalación de Dispositivos TAP
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Durante la instalación de R&S TMR, se creó un acceso directo en el
            escritorio.
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Inicie el Administrador de Dispositivos TAP de R&S a través de
              este acceso directo.
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              Debería aparecer una ventana como la que se muestra a
              continuación.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura6-7.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 6-7: Dispositivo TAP
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Dependiendo de los dispositivos TAP ya instalados, la lista de
            dispositivos TAP mostrada por el Administrador de Dispositivos TAP
            de R&S podría estar vacía o no.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            La lista de dispositivos TAP se muestra con un fondo gris y el
            servicio R&S TMR está indicado como en ejecución. En este estado,
            solo es posible monitorear la configuración actual, no se permiten
            cambios.
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Para poner el Administrador de Dispositivos TAP de R&S en el
              modo de edición, haga clic en el botón "Stop".
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              Esto detiene el servicio TMR y le permite realizar cambios.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Elimine todas las entradas existentes (si las hay) a través del
              botón "Remove".
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              4. Haga clic en "Add" para crear el primer dispositivo TAP.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              5. Ingrese el nombre "TAP-TMR", marque la casilla para "Bind
              TCP/IP" y asigne la dirección IP como se indica en su manual de
              información del sistema.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              6. Asegúrese de que las otras configuraciones estén configuradas
              como se muestra en la figura a continuación.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura6-8.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 6-8: Crear dispositivo TAP
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              7. Haga clic en "OK" para confirmar.
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              Después de presionar "OK", aparece una advertencia de seguridad de
              que Windows no puede verificar el editor del software del
              controlador.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura6-9.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 6-9: Instalar dispositivo TAP
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              8. Haga clic en "Install" para instalar el controlador.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              9. Después de que TAP-TMR ha sido creado, haga clic en "Add"
              nuevamente para agregar el primer dispositivo TAP para una
              instancia de protocolo. La convención de nomenclatura se explica
              en detalle en el paso 12.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              10. Para el primer dispositivo RSIRP, asigne el nombre
              "TAP-RSIRP-1" sin asignar ninguna dirección IP.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              11. Haga clic en "OK" para confirmar.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura6-10.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 6-10: Dispositivo TAP para una instancia de protocolo
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              12. Repita este paso para crear los siguientes dispositivos TAP
              adicionales:
            </Text>
          </View>

          <View style={styles.checkList}>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}> • TAP-RSIRP-2</Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}> • TAP-S5066Device1</Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}> • TAP-S5066Device2</Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}> • TAP-S5066Device3</Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura6-11.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 6-11: Nombre de instancia de protocolo en DEVCON GUI
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Después de la creación de todos los dispositivos TAP, el
            Administrador de Dispositivos TAP de R&S debería verse como se
            muestra a continuación:
          </Text>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura6-12.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 6-12: Lista completa de todos los dispositivos TAP
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Nota: Convención de nomenclatura para crear dispositivos TAP - El
              servicio R&S TMR reconoce los dispositivos TAP por su nombre. Por
              lo tanto, el primer dispositivo TAP creado debe nombrarse
              "TAP-TMR" y este dispositivo es el único dispositivo TAP que tiene
              una dirección IP. Los otros dispositivos TAP deben nombrarse según
              los nombres de todas las instancias de protocolo disponibles.
              Estas instancias pueden encontrarse en la GUI de DEVCON o en la
              base de datos de R&S Device Control. La convención de nomenclatura
              es "TAP-" más el nombre de la instancia del protocolo. Por
              ejemplo, para la captura de pantalla (RSIRP-2), el nombre correcto
              del dispositivo TAP a crear es "TAP-RSIRP-2".
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              13. Haga clic en "Start" para activar el servicio TMR nuevamente.
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              El TMR está en ejecución (indicado por el LED de estado verde) y
              el fondo de la lista de dispositivos TAP cambia su color a gris.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura6-13.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 6-13: Configuración completa y activa
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            El Router de Gestión Táctica R&S está ahora configurado y listo para
            usar.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔀 6.3.3 Activación de Flexible Ack Routing (FAR)
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Después de la instalación de TMR, el FAR debe activarse.
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Abra el TMRGUI
              (C:\programfiles\Rohde-Schwarz\PostmanIII\TMR\TmrGui.exe) y
              asegúrese de que el botón "FAR" esté activado.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura6-14.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 6-14: TMR management GUI
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Con un fondo gris como se muestra en la Figura 6-14, el botón está
            activado.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            <Text style={styles.bold}>
              Relación entre el servicio TMR, el controlador TMR y los servicios
              R&S Device Control
            </Text>
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            El R&S TMR consiste de un servicio TMR que se configura como
            automático durante la instalación y que siempre está en ejecución.
            Además, el controlador TMR de R&S instala un controlador TMR, que se
            instala en el directorio R&S Device Control (SIMCOS II fue
            renombrado a Device Control). Se inicia y detiene junto con los
            servicios R&S Device Control.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Por lo tanto, reiniciar los servicios R&S Device Control solo
            desencadena un reinicio del controlador TMR. El servicio TMR debe
            reiniciarse manualmente a través de la consola de servicios de
            Microsoft Windows, en caso de que este paso sea necesario.
          </Text>
        </Accordion>

        {/* SECTION 7 */}
        <Accordion
          number="SECCIÓN 7"
          title="Actualización de Instalaciones R&S Postman III"
          icon="update"
          delay={180}
        >
          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Este capítulo describe el proceso de actualización de instalaciones
            R&S Postman III desde versiones anteriores a la versión 04.06.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔄 Actualización desde Versión Anterior a 04.06
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            R&S Postman III comenzando con versiones posteriores a 04.00
            requiere nuevos sistemas operativos Windows 10 y Microsoft Server
            2016 en lugar de Windows 7 y Microsoft Server 2008 R2.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Por lo tanto, se requiere una reinstalación de los sistemas
            operativos y R&S Postman III para actualizar.
          </Text>

          <View style={styles.warningBox}>
            <Icon name="alert" size={18} color="#FF9800" />
            <Text variant="bodySmall" style={[styles.warningText, { color: theme.colors.onErrorContainer }]}>
              Importante: La actualización desde versiones anteriores a 04.06
              requiere una reinstalación completa del sistema operativo y el
              software R&S Postman III. No es posible realizar una actualización
              directa.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📋 Requisitos para la Actualización
          </Text>

          <View style={styles.optionGroup}>
            <Text variant="bodyMedium" style={[styles.bold, { color: theme.colors.onSurface }]}>
              Sistemas Operativos Requeridos:
            </Text>
          </View>

          <View style={styles.checkList}>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Windows 10 Professional o Enterprise 64-bit
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}> • Microsoft Server 2016</Text>
          </View>

          <View style={styles.optionGroup}>
            <Text variant="bodyMedium" style={[styles.bold, { color: theme.colors.onSurface }]}>
              Sistemas Operativos Obsoletos:
            </Text>
          </View>

          <View style={styles.checkList}>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}> ✗ Windows 7 (ya no soportado)</Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              ✗ Microsoft Server 2008 R2 (ya no soportado)
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔧 Proceso de Actualización
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Realizar backup completo de la configuración actual
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Exportar configuración de red desde el Asistente de
              Configuración
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Guardar datos de usuario y configuraciones personalizadas
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Documentar todas las configuraciones de red y parámetros
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Instalar el nuevo sistema operativo
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Windows 10 Professional/Enterprise 64-bit o
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}> • Microsoft Server 2016</Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Seguir las instrucciones del Capítulo 4
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>3. Configurar el sistema operativo</Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Crear cuenta de usuario Installer
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}> • Configurar adaptadores de red</Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Establecer nombre de host y dominio
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Configurar DEP (Data Execution Prevention)
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              4. Instalar R&S Postman III versión 04.06 o posterior
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Seguir las instrucciones del Capítulo 5
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Usar el Asistente de Configuración R&S Postman III
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Cargar la configuración de red guardada previamente
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              5. Restaurar configuraciones personalizadas
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}> • Importar usuarios</Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}> • Configurar sitios remotos</Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Verificar configuración de enrutamiento
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              6. Verificar el funcionamiento del sistema
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}> • Comprobar conectividad de red</Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Verificar servicios R&S Postman III
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Realizar pruebas de comunicación
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Recomendación: Planifique cuidadosamente el proceso de
              actualización y realice la migración durante una ventana de
              mantenimiento programada para minimizar el impacto en las
              operaciones.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            ⚠️ Consideraciones Importantes
          </Text>

          <View style={styles.optionGroup}>
            <Text variant="bodyMedium" style={[styles.bold, { color: theme.colors.onSurface }]}>
              Antes de Actualizar:
            </Text>
          </View>

          <View style={styles.checkList}>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Documentar toda la configuración actual del sistema
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Realizar backup de todas las bases de datos
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Guardar archivos de configuración personalizados
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Verificar compatibilidad de hardware con los nuevos sistemas
              operativos
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Notificar a todos los usuarios sobre el tiempo de inactividad
              planificado
            </Text>
          </View>

          <View style={styles.optionGroup}>
            <Text variant="bodyMedium" style={[styles.bold, { color: theme.colors.onSurface }]}>
              Durante la Actualización:
            </Text>
          </View>

          <View style={styles.checkList}>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Seguir estrictamente el orden de los pasos de instalación
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • No omitir ninguna tarea de prerequisitos
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Verificar cada paso antes de continuar al siguiente
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Mantener registro de cualquier problema encontrado
            </Text>
          </View>

          <View style={styles.optionGroup}>
            <Text variant="bodyMedium" style={[styles.bold, { color: theme.colors.onSurface }]}>
              Después de la Actualización:
            </Text>
          </View>

          <View style={styles.checkList}>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Realizar pruebas exhaustivas de todas las funcionalidades
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Verificar la conectividad con todos los sitios remotos
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Confirmar que todos los usuarios pueden acceder al sistema
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Monitorear el sistema durante las primeras 24-48 horas
            </Text>
          </View>
        </Accordion>

        {/* SECTION 8 */}
        <Accordion
          number="SECCIÓN 8"
          title="Apéndice: Configuración Avanzada y Mantenimiento"
          icon="tools"
          delay={200}
        >
          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Este apéndice proporciona información detallada sobre
            configuraciones avanzadas, integración de servicios externos,
            gestión de usuarios y resolución de problemas comunes.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📡 8.1 Integración de Servicios Externos de Transferencia de Datos
            (DTS)
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            R&S Postman III soporta los siguientes tipos de software DTS externo
            ("Data Transfer Service"):
          </Text>

          <View style={styles.checkList}>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}> • S5066</Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}> • RSIRP</Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            💿 8.2 Instalación de Software DTS
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Para usar uno de los paquetes de software DTS, la opción respectiva
            debe seleccionarse durante la instalación como se describe en el
            Capítulo 5.4, "Selección del Tipo de Instalación y Opciones".
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔧 8.3 Creación de Instancias DTS
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Para usar los paquetes de software DTS instalados, se deben
            configurar una o más instancias de cada tipo DTS usando la utilidad
            R&S Device Discovery. Una instancia también se llama "dispositivo
            virtual".
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Inicie sesión como usuario{' '}
              <Text style={styles.bold}>Installer</Text> e inicie la utilidad
              R&S Device Discovery.
            </Text>

            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Haga clic en el comando "Add S5066Device..." o "Add
              RSIRPDevice..." para agregar una instancia DTS (dispositivo
              virtual) al panel de dispositivos.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura8-1.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 8-1: Agregar un dispositivo virtual RSIRP o S5066
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Edite el nombre del dispositivo virtual haciendo clic en el nombre
            del dispositivo.
          </Text>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura8-2.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 8-2: Editar el nombre del dispositivo
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              4. Haga clic en "Options" para expandir el panel de opciones y
              verificar o ajustar las opciones del dispositivo virtual.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura8-3.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 8-3: Ajustar opciones del dispositivo virtual
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              5. Finalmente haga clic en "Update DEVCON" para agregar el
              dispositivo virtual al sistema y reiniciar todos los servicios
              dependientes.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            👥 8.4 Agregar un Nuevo Usuario
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Para agregar un nuevo usuario R&S Postman III a un sitio, proceda de
            la siguiente manera:
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Crear una cuenta de usuario de Windows para el nuevo usuario
              tanto en el servidor como en uno o más clientes.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Agregar la cuenta de usuario de Windows al grupo{' '}
              <Text style={styles.bold}>PMIII-User</Text> en el servidor.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Crear una cuenta de usuario UMAN usando el nombre del usuario
              como login usando el R&S Postman III Extended User Manager (UMAN).
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              4. Agregar la cuenta de usuario UMAN al grupo PMIII Operators.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              5. Crear una cuenta de usuario Postman III usando la Consola de
              Administración R&S Postman III. Esto creará implícitamente una
              cuenta de correo para el nuevo usuario.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              6. Configurar el cliente de correo (Mozilla Thunderbird) en cada
              PC cliente.
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Estos pasos se describen con más detalle en las siguientes
            secciones.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📋 8.4.1 Planificación de Propiedades de Usuario
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Los siguientes parámetros deben definirse para cada usuario R&S
            Postman III de cada sitio R&S Postman III.
          </Text>

          <View style={styles.parameterTable}>
            <View style={[styles.parameterRow, { backgroundColor: theme.colors.surfaceVariant, borderLeftColor: theme.colors.primary }]}>
              <Text style={[styles.parameterName, { color: theme.colors.primary }]}>User name</Text>
              <Text style={[styles.parameterExample, { color: theme.colors.onSurfaceVariant }]}>Ejemplo: OpMU2</Text>
              <Text style={[styles.parameterDesc, { color: theme.colors.onSurfaceVariant }]}>El nombre del usuario.</Text>
              <Text style={[styles.parameterRemarks, { color: theme.colors.onSurfaceVariant }]}>
                Usado para: cuenta de usuario de Windows, cuenta de usuario R&S
                Postman III, grupo de trabajo, cuenta UMAN
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={[styles.parameterName, { color: theme.colors.primary }]}>Password</Text>
              <Text style={[styles.parameterExample, { color: theme.colors.onSurfaceVariant }]}>Ejemplo: 123456</Text>
              <Text style={[styles.parameterDesc, { color: theme.colors.onSurfaceVariant }]}>
                La contraseña del usuario.
              </Text>
              <Text style={[styles.parameterRemarks, { color: theme.colors.onSurfaceVariant }]}>
                No use el valor predeterminado.
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={[styles.parameterName, { color: theme.colors.primary }]}>Mail account</Text>
              <Text style={[styles.parameterExample, { color: theme.colors.onSurfaceVariant }]}>Ejemplo: OpMU2</Text>
              <Text style={[styles.parameterDesc, { color: theme.colors.onSurfaceVariant }]}>
                El nombre de la cuenta de correo del usuario.
              </Text>
              <Text style={[styles.parameterRemarks, { color: theme.colors.onSurfaceVariant }]}>
                El nombre de la cuenta de correo debe ser idéntico al nombre de
                usuario.
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={[styles.parameterName, { color: theme.colors.primary }]}>Management privileges</Text>
              <Text style={[styles.parameterExample, { color: theme.colors.onSurfaceVariant }]}>Ejemplo: All</Text>
              <Text style={[styles.parameterDesc, { color: theme.colors.onSurfaceVariant }]}>
                Los privilegios de gestión R&S Postman III.
              </Text>
            </View>
          </View>

          <View style={styles.infoBox}>
            <Icon name="alert" size={18} color="#FF9800" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Limitación de nombre de usuario: Solo el guion bajo "_" está
              permitido como carácter especial en el nombre de usuario más
              adelante en R&S NS5150 UMAN. No está permitido crear usuarios de
              Windows y R&S NS5150 con caracteres especiales como "." que no se
              pueden crear en R&S NS5150 UMAN más adelante.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            💻 8.4.2 Creación de la Cuenta de Usuario de Windows
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Realice los siguientes pasos tanto en un servidor R&S Postman III
            como en cada cliente R&S Postman III que deba ser accesible para el
            nuevo usuario.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Válido para sistemas sin Windows Domain-Controller.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Use la misma contraseña en todas las computadoras.
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Inicie sesión en Windows usando la cuenta{' '}
              <Text style={styles.bold}>Installer</Text>.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Haga clic en "Start" {'>'} "Windows Administrative Tools" {'>'}{' '}
              "Computer Management". En el árbol, navegue al elemento "Computer"{' '}
              {'>'} "System Tools" {'>'} "Local Users and Groups".
              Alternativamente, inicie{' '}
              <Text style={styles.bold}>lusrmgr.msc</Text>.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Haga clic derecho en "Users" y seleccione "New User..." para
              abrir el diálogo "New User".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>4. Ingrese el nombre de usuario.</Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>5. Ingrese la contraseña dos veces.</Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              6. Desmarque la casilla "User must change password at next logon".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              7. Marque la casilla "Password never expires".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              8. Haga clic en "Create" para crear el nuevo usuario.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              9. Haga clic en "Close" para cerrar el diálogo "New User".
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Con Windows Domain-Controller, la cuenta se crea en el dominio de
            Windows. Los siguientes pasos son requeridos solo en el servidor:
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Haga clic derecho en el usuario recién creado y seleccione
              "Properties" para abrir el diálogo "User Properties".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Seleccione la pestaña "Member Of".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Haga clic en el botón "Add..." para abrir el diálogo "Select
              Groups".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              4. Haga clic en "Advanced" y luego en "Find Now" para listar todos
              los grupos de Windows.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              5. Seleccione el grupo <Text style={styles.bold}>PMIII-User</Text>{' '}
              y haga clic en "OK" tres veces para cerrar todos los diálogos.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📝 8.4.3 Creación de la Cuenta de Usuario UMAN
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Los siguientes pasos deben realizarse solo en un servidor R&S
            Postman III:
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Inicie sesión en Windows usando la cuenta{' '}
              <Text style={styles.bold}>Installer</Text>.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Presione [Win+R] para abrir el diálogo "Run".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Ingrese{' '}
              <Text style={styles.bold}>http://localhost:8080/simcos2</Text>{' '}
              para lanzar la Interfaz Web Extendida de Postman.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              4. Haga clic en el ícono "UMAN" para lanzar el Administrador de
              Usuario Extendido de Postman.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              5. Haga clic en "Add..." en la pestaña "Users" para abrir el
              diálogo UMAN "Add/Edit User".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              6. Ingrese el nuevo nombre de usuario en los campos "User Name" y
              "Login".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              7. Haga clic en "Ok" para agregar la cuenta de usuario UMAN y
              cerrar el diálogo.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>8. Seleccione la pestaña "Groups".</Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>9. Seleccione el grupo "Operators".</Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              10. Haga clic en "Edit..." para abrir el diálogo UMAN "Add/Edit
              Group".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              11. Seleccione la pestaña "Members".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              12. Haga clic en "Add..." para abrir el diálogo UMAN "Add/Edit
              Group" – "Add Members".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              13. Seleccione el nuevo nombre de usuario.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              14. Haga clic en "Ok" dos veces para agregar el usuario al grupo y
              cerrar todos los diálogos.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              15. Haga clic en "Exit" para cerrar la ventana UMAN.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            ✉️ 8.4.4 Creación de la Cuenta de Usuario Postman III
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Los siguientes pasos deben realizarse solo en un servidor R&S
            Postman III.
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Inicie sesión en Windows usando la cuenta{' '}
              <Text style={styles.bold}>Installer</Text>.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Lance la Consola de Administración R&S Postman III.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>3. Seleccione la pestaña "Users".</Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              4. Haga clic en el botón de la barra de herramientas "Create new
              user" o presione [Ctrl+Shift+U] para abrir el diálogo "User".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              5. Ingrese el nuevo nombre de usuario en el campo "First Name".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              6. Ingrese el nuevo nombre de usuario en el campo "User logon
              name".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>7. Seleccione la pestaña "E-mail".</Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              8. Ingrese el nuevo nombre de cuenta de correo en el campo "E-mail
              Account Name".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              9. Seleccione el nombre del sitio local de la lista desplegable
              "Mail Server Site".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              10. Seleccione la pestaña "Management Authorisation".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              11. Haga clic en "Assign all" para asignar todos los privilegios
              de gestión al nuevo usuario.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              12. Haga clic en "Ok" para agregar el nuevo usuario.
            </Text>
              <Text style={[styles.substep, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              Se muestra el diálogo "Create New User".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              13. Ingrese una contraseña para la cuenta de correo del nuevo
              usuario (dos veces) y haga clic en "Ok".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              14. Si se muestra el diálogo "Mail Server Authentication", ingrese{' '}
              <Text style={styles.bold}>Administrator</Text> en el campo "User
              Name" e ingrese la contraseña del administrador en el campo
              "Password".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              15. Haga clic en "Ok" para crear una cuenta de correo para el
              nuevo usuario.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📧 8.4.5 Configuración de Mozilla Thunderbird Mail
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Los siguientes pasos deben realizarse en cada cliente R&S Postman
            III donde el cliente Mozilla Thunderbird debe ser accesible para el
            nuevo usuario.
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Inicie sesión en Windows usando la nueva cuenta de usuario.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Inicie la aplicación Mozilla Thunderbird.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Ingrese los valores de la tabla de usuario. Para información
              detallada, consulte el Capítulo 5.14.1, "Setting Up the Email
              Account".
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🌐 8.6 Cambio de la Dirección IP del Servidor
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Es posible cambiar la dirección IP de un servidor R&S Postman III
            después de la instalación y configuración siguiendo estos pasos:
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Cambiar la dirección IP del adaptador de red en el Panel de
              Control de Red (ncpa.cpl).
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Cambiar la dirección IP del sitio en la Consola de
              Administración R&S Postman III.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Cambiar la dirección IP pública del TMR ("Tactical Management
              Router").
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>4. Reiniciar el servidor.</Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Estos pasos se describen con más detalle a continuación.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔧 8.6.1 Cambio de la Dirección IP del Adaptador de Red
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Haga clic en Start {'>'} Control Panel {'>'} Network and
              Sharing Center {'>'} Change adapter settings o lance{' '}
              <Text style={styles.bold}>ncpa.cpl</Text> para abrir el applet
              "Network Control Panel".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Haga clic derecho en el adaptador de red y seleccione
              "Properties" del menú contextual para abrir el diálogo "Network
              Adapter Properties".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Seleccione Internet Protocol Version 4 (TCP/IPv4) y haga clic
              en "Properties" para abrir el diálogo Internet Protocol Version 4
              (TCP/IPv4).
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              4. Ingrese la nueva dirección IP y haga clic en "OK" dos veces
              para cerrar todos los diálogos.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📡 8.6.2 Cambio de la Dirección IP del Sitio
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Inicie sesión como <Text style={styles.bold}>Installer</Text>.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Abra la Consola de Administración R&S Postman III.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Haga clic derecho en el nodo {'<'}country{'>'}
              {'<'}organization{'>'}Sites{'<'}SiteName{'>'}Equipments/Host
              Servers{'<'}HostName{'>'}Gw{'<'}HostName{'>'} para abrir el menú
              contextual "Tactical Gateway".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              4. Seleccione "Edit Tactical Gateway" para abrir el diálogo
              "Tactical Gateway".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              5. Ingrese la nueva dirección IP en el campo "Unicast Address".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              6. Haga clic en "Ok" para guardar los cambios y cerrar el diálogo
              "Tactical Gateway".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              7. Haga clic en el botón parpadeante "Update Gateway
              Configuration" de la barra de herramientas.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              8. Repita los pasos anteriores para cada servidor Postman III.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              9. Alternativamente, puede exportar la configuración del sitio
              actual desde el servidor local y reimportarla en cada otro
              servidor.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔀 8.6.3 Cambio de la Dirección IP Pública del TMR
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            La dirección IP pública del TMR ("Tactical Management Router") debe
            cambiarse para coincidir con la nueva dirección IP. Use los
            siguientes métodos para cambiar la dirección IP pública:
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Lance el Asistente de Configuración R&S Postman III.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>2. Active la página "Settings".</Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Asegúrese de que la nueva dirección IP del servidor se muestre
              en el campo "Server IP address".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              4. Active la página "Configuration".
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              5. Seleccione la tarea TMR Source Address.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              6. Haga clic en el comando "Adjust address and restart TMR
              service".
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Alternativamente puede modificar las configuraciones directamente en
            el registro de Windows:
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. Inicie el Editor de Registro (
              <Text style={styles.bold}>regedit.exe</Text>).
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. Navegue a la clave de registro
              HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Rohde-Schwarz\TMR.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. Cambie el valor PublicIpAddress a la nueva dirección IP.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔄 8.6.4 Reinicio del Servidor
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              ► Reinicie el servidor para reiniciar todos los servicios y
              vincularlos a la nueva dirección IP.
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📖 8.7 Compartir Libreta de Direcciones
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            El concepto es gestionar la libreta de direcciones en una cuenta de
            Thunderbird. Allí, la libreta de direcciones se exporta a un
            archivo.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            El archivo se distribuye a otras máquinas y luego se importa en
            Thunderbird.
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📤 8.7.1 Exportar Libreta de Direcciones
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. En la ventana "Home" de Thunderbird, haga clic en la pestaña
              "Address Book".
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura8-4.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 8-4: Thunderbird home
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. En la pestaña "Address Book", seleccione "Personal Address
              Book".
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura8-5.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 8-5: Thunderbird address book
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. En la barra "Address Book", haga clic en "Tools" {'>'} "Export"
              para exportar la libreta de direcciones. Seleccione el tipo de
              archivo "vCard (*.vcf)".
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura8-6.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 8-6: Thunderbird address book type
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            📥 8.7.2 Importar Libreta de Direcciones
          </Text>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              1. En la ventana "Home" de Thunderbird, haga clic en la pestaña
              "Address Book".
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura8-7.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 8-7: Thunderbird home
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              2. En la pestaña "Address Book", seleccione "Personal Address
              Book".
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura8-8.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 8-8: Thunderbird address book empty
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              3. En la barra "Address Book", haga clic en "Tools" {'>'} "Import"
              para importar la libreta de direcciones.
            </Text>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              4. En el asistente, seleccione "Address Books" y haga clic en
              "Next".
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura8-9.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 8-9: Thunderbird address book import (1)
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              5. Seleccione el tipo de archivo "vCard (*.vcf)" y haga clic en
              "Next".
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura8-10.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 8-10: Thunderbird address book import (2)
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              6. Seleccione la libreta de direcciones y haga clic en "Open".
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura8-11.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 8-11: Thunderbird address book import (3)
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={[styles.step, { color: theme.colors.onSurfaceVariant }]}>
              7. Haga clic en "Finish" para finalizar la importación.
            </Text>
          </View>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura8-12.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 8-12: Thunderbird address book import (4)
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔥 8.8 Configuración de Firewalls
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            El producto requiere comunicación TCP/IP entre el servidor, las
            máquinas cliente y los radios IPoA. Durante la instalación, el
            firewall de Windows está configurado para permitir el tráfico
            necesario.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Si se usan firewalls externos o las reglas del firewall de Windows
            se proporcionan centralmente, asegúrese de que la comunicación TCP
            pase por los firewalls.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Las siguientes tablas listan los puertos que deben ser permitidos
            por los firewalls.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Tabla 8-3: Conexiones entrantes del servidor Postman III - Puertos
              TCP 80, 8080 (comunicación con servidor HTTP), puertos TCP 5098,
              5086 (comunicación con servicio COREA), puertos TCP 5100 a 5113 y
              puerto UDP 4712 (servicios Device Control), puertos TCP (2345,
              5200-5222, 5661-5669, 8732, 20203, 29520, 29531) y puertos TCP
              dinámicos 49152 a 65535 (servicios Postman III), puerto UDP 10161
              (servicios Postman III), puertos UDP 2751-2754 (servicios Postman
              III), puerto UDP 9 (servicios Postman III), puerto UDP 21337
              (radios IPoA), puertos TCP 389, 1389 (servicio AL LDS), puertos
              TCP 25, 110, 143, 587 (servicio Email), puerto TCP 8750 (servicios
              R&S MapTrack), puerto UDP para importación UDP (fuente de datos
              GPS over UDP).
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={[styles.infoText, { color: theme.colors.onSurfaceVariant }]}>
              Tabla 8-4: Conexiones entrantes del cliente Postman III - Puertos
              TCP 5400-5500 (clientes Device Control), puertos TCP dinámicos
              49152 a 65535 (clientes Postman III).
            </Text>
          </View>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            🔍 8.9 Resolución de Problemas
          </Text>

          <Text variant="titleSmall" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
            ☕ Habilitación de Java Update Needed
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            En algunas versiones de Java, se abre la ventana "Java Update
            Needed" cuando un usuario inicia la primera aplicación Java (ej.
            DEVCON, UMAN, Consola Táctica R&S Postman III, Consola de
            Administración R&S Postman III).
          </Text>

          <View style={[styles.imageContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
            <Image
              source={require('../../Images/postman/figura8-13.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={[styles.imageCaption, { color: theme.colors.onSurfaceVariant }]}>
              Figura 8-13: Java update needed
            </Text>
          </View>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Si el usuario marca el campo "Do not ask again..." y luego
            selecciona la opción "Update" o "Block" por error, la aplicación
            Java no se inicia. No es posible corregir fácilmente esta decisión
            ya que la ventana no aparece de nuevo.
          </Text>

          <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
            Soluciones para habilitar la ventana nuevamente:
          </Text>

          <View style={styles.checkList}>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Eliminar todo el perfil de usuario.
            </Text>
            <Text style={[styles.checkItem, { color: theme.colors.onSurfaceVariant }]}>
              {' '}
              • Eliminar esta clave de registro:
              HKEY_CURRENT_USER\Software\AppDataLow\Software\JavaSoft\DeploymentProperties.
            </Text>
          </View>
        </Accordion>

        {/* Footer */}
        <ScreenEntrance delay={200}>
          <Surface style={[styles.footerCard, { backgroundColor: theme.colors.surfaceVariant }]} elevation={1}>
            <Icon name="information-outline" size={24} color={theme.colors.primary} />
            <Text variant="bodySmall" style={[styles.footerText, { color: theme.colors.onSurfaceVariant }]}>
              Manual de instalación basado en: R&S NS5150 / Postman III
              Installation Manual (Version 01, 2020) - Documento oficial: 08
              PIII_Installation Manual_en_2020-02-18.pdf
            </Text>
          </Surface>
        </ScreenEntrance>

        <ScreenEntrance delay={220}>
          <Surface style={[styles.publisherCard, { backgroundColor: theme.colors.surfaceVariant }]} elevation={1}>
            <View style={styles.publisherContent}>
              <Text variant="bodySmall" style={[styles.publisherText, { color: theme.colors.onSurfaceVariant }]}>
                <Text style={[styles.bold, { color: theme.colors.onSurface }]}>Publicado por:</Text> Rohde & Schwarz
                GmbH & Co. KG
              </Text>
              <Text variant="bodySmall" style={[styles.publisherText, { color: theme.colors.onSurfaceVariant }]}>
                <Text style={[styles.bold, { color: theme.colors.onSurface }]}>Año:</Text> 2020
              </Text>
            </View>
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
    padding: 16,
    paddingBottom: 40,
  },
  heroCard: {
    marginBottom: 20,
    borderRadius: 16,
    overflow: 'hidden',
  },
  heroContent: {
    padding: 24,
    alignItems: 'center',
  },
  heroTitle: {
    marginTop: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1976D2',
  },
  heroSubtitle: {
    marginTop: 4,
    color: '#666',
    textAlign: 'center',
  },
  chip: {
    marginTop: 16,
    backgroundColor: '#E3F2FD',
  },
  accordionContainer: {
    marginBottom: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  accordionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  titleContainer: {
    flex: 1,
  },
  stepNumber: {
    color: '#1976D2',
    fontWeight: '600',
    marginBottom: 2,
  },
  accordionTitle: {
    fontWeight: '600',
    color: '#333',
  },
  accordionContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  divider: {
    marginBottom: 16,
  },
  subtitle: {
    marginBottom: 16,
    lineHeight: 22,
    color: '#555',
  },
  bold: {
    fontWeight: '700',
    color: '#333',
  },
  sectionTitle: {
    marginTop: 16,
    marginBottom: 8,
    fontWeight: '600',
    color: '#1976D2',
  },
  field: {
    marginBottom: 12,
  },
  fieldLabel: {
    lineHeight: 22,
    color: '#555',
  },
  fieldValue: {
    fontWeight: '600',
    color: '#333',
  },
  optionGroup: {
    marginBottom: 12,
    paddingLeft: 8,
  },
  option: {
    lineHeight: 24,
    color: '#666',
    fontSize: 14,
  },
  buttonInfo: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    padding: 12,
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
    gap: 8,
  },
  infoText: {
    flex: 1,
    color: '#1565C0',
    lineHeight: 18,
  },
  warningBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    padding: 12,
    backgroundColor: '#FFF3E0',
    borderRadius: 8,
    gap: 8,
  },
  warningText: {
    flex: 1,
    color: '#E65100',
    lineHeight: 18,
  },
  table: {
    marginBottom: 12,
  },
  tableHeader: {
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  tableRow: {
    lineHeight: 24,
    color: '#666',
    fontSize: 14,
  },
  settingsList: {
    marginBottom: 12,
  },
  settingItem: {
    lineHeight: 24,
    color: '#666',
    fontSize: 14,
  },
  checkList: {
    marginBottom: 12,
  },
  checkItem: {
    lineHeight: 24,
    color: '#4CAF50',
    fontSize: 14,
  },
  statusIndicators: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 12,
    padding: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  statusItem: {
    fontSize: 14,
  },
  configList: {
    marginBottom: 12,
  },
  configItem: {
    lineHeight: 24,
    color: '#666',
    fontSize: 14,
  },
  stepsList: {
    marginBottom: 12,
  },
  step: {
    lineHeight: 24,
    color: '#666',
    fontSize: 14,
    marginBottom: 4,
  },
  successBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    padding: 16,
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
    gap: 12,
  },
  successText: {
    flex: 1,
    color: '#2E7D32',
    fontWeight: '600',
    lineHeight: 20,
  },
  footerCard: {
    marginTop: 8,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  footerText: {
    flex: 1,
    color: '#666',
    lineHeight: 18,
  },
  publisherCard: {
    marginTop: 8,
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
  },
  publisherContent: {
    gap: 4,
  },
  publisherText: {
    color: '#555',
    lineHeight: 20,
  },
  paramRow: {
    lineHeight: 22,
    color: '#555',
    marginTop: 8,
  },
  paramExample: {
    lineHeight: 20,
    color: '#888',
    fontSize: 13,
    fontStyle: 'italic',
    marginBottom: 4,
  },
  substep: {
    lineHeight: 22,
    color: '#777',
    fontSize: 14,
    marginLeft: 16,
  },
  conventionTable: {
    marginBottom: 12,
  },
  conventionRow: {
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  conventionLabel: {
    fontWeight: '600',
    color: '#1976D2',
    marginBottom: 6,
    fontSize: 14,
  },
  conventionDesc: {
    lineHeight: 20,
    color: '#555',
    fontSize: 14,
  },
  categoryList: {
    marginVertical: 12,
  },
  categoryItem: {
    lineHeight: 24,
    color: '#666',
    fontSize: 14,
  },
  parameterTable: {
    marginBottom: 16,
  },
  parameterRow: {
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#1976D2',
  },
  parameterName: {
    fontWeight: '700',
    color: '#1976D2',
    fontSize: 15,
    marginBottom: 4,
  },
  parameterExample: {
    fontStyle: 'italic',
    color: '#666',
    fontSize: 13,
    marginBottom: 6,
  },
  parameterDesc: {
    color: '#444',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 4,
  },
  parameterRemarks: {
    color: '#777',
    fontSize: 13,
    lineHeight: 18,
    fontStyle: 'italic',
    marginTop: 4,
  },
  imageCaption: {
    fontSize: 12,
    color: '#888',
    fontStyle: 'italic',
    marginTop: 8,
    marginBottom: 12,
    textAlign: 'center',
  },
  imageContainer: {
    marginVertical: 16,
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    padding: 12,
    borderRadius: 8,
  },
  documentImage: {
    width: '100%',
    height: 300,
    borderRadius: 4,
  },
});
