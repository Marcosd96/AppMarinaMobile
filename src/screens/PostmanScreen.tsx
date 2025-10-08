import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Appbar, Text, Surface, Card, Chip, Divider } from 'react-native-paper';
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

  return (
    <ScreenEntrance delay={delay}>
      <Surface style={styles.accordionContainer} elevation={2}>
        <TouchableOpacity
          style={styles.accordionHeader}
          onPress={() => setExpanded(!expanded)}
          activeOpacity={0.7}
        >
          <View style={styles.accordionTitleRow}>
            <View style={styles.iconContainer}>
              <Icon name={icon} size={24} color="#1976D2" />
            </View>
            <View style={styles.titleContainer}>
              <Text variant="labelSmall" style={styles.stepNumber}>
                {number}
              </Text>
              <Text variant="titleMedium" style={styles.accordionTitle}>
                {title}
              </Text>
            </View>
          </View>
          <Icon
            name={expanded ? 'chevron-up' : 'chevron-down'}
            size={24}
            color="#666"
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
  return (
    <View style={styles.container}>
      <Appbar.Header mode="center-aligned" style={styles.header}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="R&S Postman III" />
      </Appbar.Header>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <ScreenEntrance>
          <Surface style={styles.heroCard} elevation={3}>
            <View style={styles.heroContent}>
              <Icon name="book-open-variant" size={48} color="#1976D2" />
              <Text variant="headlineMedium" style={styles.heroTitle}>
                Manual de Instalación
              </Text>
              <Text variant="bodyMedium" style={styles.heroSubtitle}>
                R&S NS5150 / Postman III
              </Text>
              <Chip icon="file-document" style={styles.chip}>
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
          <Text variant="bodyMedium" style={styles.subtitle}>
            La documentación de usuario para la instalación del R&S NS5150
            contiene instrucciones para configurar el entorno del sistema R&S
            NS5150. Este manual describe la instalación para la versión 04.06 o
            posterior.
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            El R&S NS5150 puede instalarse en diferentes entornos. Los
            siguientes tipos de integración son soportados:
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📚 Tipos de Integración Soportados:
          </Text>

          <View style={styles.optionGroup}>
            <Text style={styles.option}> • R&S Postman III standalone</Text>
            <Text style={styles.option}>
              {' '}
              • R&S Postman III integrated (navy system)
            </Text>
            <Text style={styles.option}>
              {' '}
              • R&S Postman III router for R&S MMHS systems
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📖 1.1 R&S Postman III Standalone e Integrated
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Dependiendo del sistema operativo elegido para el servidor, puede
            ser necesaria una configuración adicional. Las siguientes tareas
            están descritas:
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              • Planificación de la instalación – valores necesarios durante la
              instalación y su significado
            </Text>
            <Text style={styles.step}>
              • Instalación del sistema operativo – pasos que son requisito
              previo para un sistema R&S Postman III
            </Text>
            <Text style={styles.step}>
              • Instalación de R&S Postman III – instalación de los paquetes de
              software R&S Postman III
            </Text>
            <Text style={styles.step}>
              • Configuración de R&S Postman III – creación del sitio local en
              la consola de administración
            </Text>
            <Text style={styles.step}>
              • Apéndice – configuración de servicios opcionales de
              transferencia de datos y agregar nuevos usuarios
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📖 1.2 Postman III Router para Sistemas MMHS
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            La instalación para este tipo de integración se describe en un
            capítulo separado (Capítulo 6).
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
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
          <Text variant="bodyMedium" style={styles.subtitle}>
            Las siguientes convenciones se utilizan a lo largo del Manual de
            Instalación R&S NS5150:
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            ✍️ Convenciones Tipográficas:
          </Text>

          <View style={styles.conventionTable}>
            <View style={styles.conventionRow}>
              <Text style={styles.conventionLabel}>
                "Graphical user interface elements"
              </Text>
              <Text style={styles.conventionDesc}>
                Todos los nombres de elementos gráficos de interfaz de usuario
                tanto en la pantalla como en los paneles frontales y traseros,
                como cuadros de diálogo, softkeys, menús, opciones o botones
                están encerrados entre comillas.
              </Text>
            </View>

            <View style={styles.conventionRow}>
              <Text style={styles.conventionLabel}>"KEYS"</Text>
              <Text style={styles.conventionDesc}>
                Los nombres de teclas están escritos en letras mayúsculas y
                encerrados entre comillas.
              </Text>
            </View>

            <View style={styles.conventionRow}>
              <Text style={styles.conventionLabel}>Input</Text>
              <Text style={styles.conventionDesc}>
                La entrada que debe ser ingresada por el usuario se muestra en
                cursiva.
              </Text>
            </View>

            <View style={styles.conventionRow}>
              <Text style={styles.conventionLabel}>
                File names, commands, program code
              </Text>
              <Text style={styles.conventionDesc}>
                Nombres de archivo, comandos, ejemplos de código y salida de
                pantalla se distinguen por la fuente.
              </Text>
            </View>

            <View style={styles.conventionRow}>
              <Text style={styles.conventionLabel}>Links</Text>
              <Text style={styles.conventionDesc}>
                Los enlaces en los que puede hacer clic se muestran en fuente
                azul.
              </Text>
            </View>

            <View style={styles.conventionRow}>
              <Text style={styles.conventionLabel}>References</Text>
              <Text style={styles.conventionDesc}>
                Las referencias a otras partes de la documentación están
                encerradas entre comillas.
              </Text>
            </View>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔧 Otras Convenciones:
          </Text>

          <View style={styles.optionGroup}>
            <Text variant="bodyMedium" style={styles.bold}>
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
            <Text variant="bodySmall" style={styles.infoText}>
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
          <Text variant="bodyMedium" style={styles.subtitle}>
            Antes de comenzar con la instalación del sistema R&S Postman III,
            cree un plan de configuración del sistema con las siguientes
            categorías de información:
          </Text>

          <View style={styles.categoryList}>
            <Text style={styles.categoryItem}>• Parámetros globales</Text>
            <Text style={styles.categoryItem}>• Parámetros del servidor</Text>
            <Text style={styles.categoryItem}>• Parámetros del cliente</Text>
            <Text style={styles.categoryItem}>• Parámetros de usuario</Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="lightbulb" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              Recomendamos crear un plan de instalación completo que abarque
              todos los servidores y clientes antes de comenzar con la
              instalación.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🌍 3.1 Parámetros Globales
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Los siguientes parámetros deben definirse globalmente para una
            instalación de R&S Postman III.
          </Text>

          <View style={styles.parameterTable}>
            <View style={styles.parameterRow}>
              <Text style={styles.parameterName}>Language</Text>
              <Text style={styles.parameterExample}>Ejemplo: en</Text>
              <Text style={styles.parameterDesc}>
                Código de idioma de dos dígitos.
              </Text>
              <Text style={styles.parameterRemarks}>
                Los únicos idiomas soportados son en (English) y es (Spanish).
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={styles.parameterName}>Region</Text>
              <Text style={styles.parameterExample}>Ejemplo: US</Text>
              <Text style={styles.parameterDesc}>
                Código de región de dos dígitos (= código de sub-idioma).
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={styles.parameterName}>Country</Text>
              <Text style={styles.parameterExample}>Ejemplo: en</Text>
              <Text style={styles.parameterDesc}>
                Código de país de dos dígitos.
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={styles.parameterName}>Organization</Text>
              <Text style={styles.parameterExample}>Ejemplo: RuS</Text>
              <Text style={styles.parameterDesc}>
                Nombre abreviado de su organización.
              </Text>
              <Text style={styles.parameterRemarks}>
                No debe contener espacios ni caracteres especiales. Use solo
                caracteres ASCII.
              </Text>
            </View>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🖥️ 3.2 Parámetros del Servidor
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Los siguientes parámetros deben definirse para cada servidor R&S
            Postman III (= sitio).
          </Text>

          <View style={styles.parameterTable}>
            <View style={styles.parameterRow}>
              <Text style={styles.parameterName}>Host Name</Text>
              <Text style={styles.parameterExample}>Ejemplo: MU2</Text>
              <Text style={styles.parameterDesc}>
                El nombre del host o computadora.
              </Text>
              <Text style={styles.parameterRemarks}>
                No debe contener guiones. Nota: No puede cambiar el nombre del
                host después.
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={styles.parameterName}>Domain Name</Text>
              <Text style={styles.parameterExample}>Ejemplo: pm-mu2.com</Text>
              <Text style={styles.parameterDesc}>
                El nombre de dominio DNS.
              </Text>
              <Text style={styles.parameterRemarks}>
                No debe estar vacío. Nota: No puede cambiar el nombre de dominio
                después.
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={styles.parameterName}>Email Domain</Text>
              <Text style={styles.parameterExample}>Ejemplo: pm-mu2.com</Text>
              <Text style={styles.parameterDesc}>
                El nombre de dominio de correo.
              </Text>
              <Text style={styles.parameterRemarks}>
                Puede ser igual a la propiedad domain name.
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={styles.parameterName}>IP address</Text>
              <Text style={styles.parameterExample}>Ejemplo: 172.29.80.15</Text>
              <Text style={styles.parameterDesc}>La dirección IPv4.</Text>
              <Text style={styles.parameterRemarks}>
                Debe ser una dirección IPv4. Las direcciones IPv6 no son
                soportadas.
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={styles.parameterName}>Subnet mask</Text>
              <Text style={styles.parameterExample}>
                Ejemplo: 255.255.255.0
              </Text>
              <Text style={styles.parameterDesc}>
                La máscara de subred IPv4.
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={styles.parameterName}>Site ID</Text>
              <Text style={styles.parameterExample}>Ejemplo: 80</Text>
              <Text style={styles.parameterDesc}>
                El ID del sitio Postman III.
              </Text>
              <Text style={styles.parameterRemarks}>
                Cada servidor R&S Postman III debe tener un ID de sitio único.
                El site ID es un identificador numérico. Recomendamos usar una
                parte de su número de red IP como site ID.
              </Text>
            </View>
          </View>

          <View style={styles.warningBox}>
            <Icon name="alert" size={18} color="#FF9800" />
            <Text variant="bodySmall" style={styles.warningText}>
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
            <Text variant="bodySmall" style={styles.infoText}>
              Cada servidor R&S Postman III debe tener un ID de sitio único.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            💻 3.3 Parámetros del Cliente
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Los siguientes parámetros deben definirse para cada cliente R&S
            Postman III.
          </Text>

          <View style={styles.parameterTable}>
            <View style={styles.parameterRow}>
              <Text style={styles.parameterName}>Host Name</Text>
              <Text style={styles.parameterExample}>Ejemplo: MU2WS</Text>
              <Text style={styles.parameterDesc}>
                El nombre del host o computadora.
              </Text>
              <Text style={styles.parameterRemarks}>
                Puede contener un número si tiene múltiples clientes, ej.
                MU2WS1, MU2WS2 etc.
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={styles.parameterName}>Domain Name</Text>
              <Text style={styles.parameterExample}>Ejemplo: pm-mu2.com</Text>
              <Text style={styles.parameterDesc}>
                El nombre de dominio DNS.
              </Text>
              <Text style={styles.parameterRemarks}>
                Usualmente los clientes residen en el mismo dominio DNS que el
                servidor en su red de trabajo.
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={styles.parameterName}>IP address</Text>
              <Text style={styles.parameterExample}>Ejemplo: 172.29.80.16</Text>
              <Text style={styles.parameterDesc}>La dirección IPv4.</Text>
              <Text style={styles.parameterRemarks}>
                Debe ser una dirección IPv4. Las direcciones IPv6 no son
                soportadas.
              </Text>
            </View>

            <View style={styles.parameterRow}>
              <Text style={styles.parameterName}>Subnet mask</Text>
              <Text style={styles.parameterExample}>
                Ejemplo: 255.255.255.0
              </Text>
              <Text style={styles.parameterDesc}>
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
          <Text variant="bodyMedium" style={styles.subtitle}>
            El software de servidor y cliente R&S Postman III puede instalarse
            en uno de los siguientes sistemas operativos:
          </Text>

          <View style={styles.checkList}>
            <Text style={styles.checkItem}>
              {' '}
              • Microsoft Windows 10 Professional, Enterprise 64-bit
            </Text>
            <Text style={styles.checkItem}>
              {' '}
              • Microsoft Windows Server 2016
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              El software del sistema R&S NS5150 incluye componentes de código
              abierto no modificados. Las licencias y documentación asociadas
              están incluidas en los medios de distribución en la subcarpeta
              "Third-Party". No se imputan responsabilidades de ningún tipo a
              sus autores/contribuidores, de acuerdo con las licencias
              respectivas.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            💻 4.1 Requisitos de Hardware del Sistema
          </Text>

          <View style={styles.checkList}>
            <Text style={styles.checkItem}>
              {' '}
              • Requisitos de hardware según lo definido por el sistema
              operativo seleccionado
            </Text>
            <Text style={styles.checkItem}> • Al menos 4 GB de RAM</Text>
            <Text style={styles.checkItem}>
              {' '}
              • Tarjeta gráfica o terminal con al menos 1024 x 768 x 24 bpp de
              resolución, 1280 x 1024 bpp recomendado
            </Text>
            <Text style={styles.checkItem}>
              {' '}
              • Al menos un adaptador LAN de 100 Mbit
            </Text>
            <Text style={styles.checkItem}>
              {' '}
              • Teclado, mouse, adaptador USB, unidad DVD-ROM que soporte "Boot
              from DVD"
            </Text>
            <Text style={styles.checkItem}>
              {' '}
              • Disco duro con al menos 80 Gbyte de espacio libre
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔧 4.2 Instalación de Microsoft Windows
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Instale uno de los sistemas operativos Microsoft Windows soportados.
            Consulte la documentación adjunta para obtener más instrucciones.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="key" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              Use la misma contraseña en todas las computadoras.
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="account-circle" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              Debe haber una cuenta de administrador llamada Installer.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            👤 4.3.1 Configuración de Usuario para Windows 10
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Al instalar Windows 10 como sistema operativo, recomendamos usar el
            nombre de usuario <Text style={styles.bold}>Installer</Text> durante
            la instalación. El usuario que cree aquí se asigna automáticamente
            al grupo <Text style={styles.bold}>Administrators</Text>.
          </Text>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura4-1.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 4-1: Windows 10 - cuenta installer
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            👤 4.3.2 Configuración de Usuario para Windows Server 2016
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Al instalar Windows Server 2016 como sistema operativo, el usuario{' '}
            <Text style={styles.bold}>Installer</Text> debe crearse manualmente
            y asignarse al grupo <Text style={styles.bold}>Administrators</Text>{' '}
            usando el administrador de usuarios de Windows.
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Se debe usar una contraseña segura. En Windows Server 2016, la
            contraseña debe crearse de acuerdo con estas reglas:
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>• No use el nombre</Text>
            <Text style={styles.step}>
              • Use al menos tres clases de caracteres. Las clases de caracteres
              son:
            </Text>
            <Text style={styles.substep}> – letra minúscula</Text>
            <Text style={styles.substep}> – letra mayúscula</Text>
            <Text style={styles.substep}> – número</Text>
            <Text style={styles.substep}> – carácter especial</Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Para información detallada, consulte:
            https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/password-must-meet-complexity-requirements
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔄 4.4 Actualización del Sistema Operativo
          </Text>

          <View style={styles.infoBox}>
            <Icon name="update" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              Recomendamos instalar las últimas actualizaciones y parches de
              Windows. Pueden instalarse desde los servidores de actualización
              de Microsoft si tiene una conexión a Internet. También hay
              instaladores offline disponibles.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🌐 4.5 Configuración de Red
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            4.5.1 Prioridad de Adaptador y Desactivación de Adaptadores de Red
            No Utilizados
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Para una operación correcta, el sistema necesita tener el adaptador
            de red. El adaptador de red usado por R&S Postman III debe tener la
            prioridad más alta (valor más bajo de métrica de interfaz TCP/IPv4)
            en la lista. Los adaptadores no utilizados/desconectados deben estar
            deshabilitados.
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Presione [Win+R] para abrir la ventana "Run"
            </Text>
            <Text style={styles.step}>
              2. Ingrese el comando <Text style={styles.bold}>ncpa.cpl</Text> y
              haga clic en el botón "OK"
            </Text>
            <Text style={styles.substep}>
              {' '}
              La ventana "Network Connections" muestra los adaptadores de red
              detectados.
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura4-2.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 4-2: Lista de adaptadores de red
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            4.5.1.1 Desactivación de Adaptadores de Red No Utilizados
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► En la ventana "Network Connections", haga clic derecho en el
              adaptador de red a desactivar y seleccione "Disable" del menú
              emergente.
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/4-5-1-1.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Desactivación de adaptador de red
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            4.5.1.2 Configuración de Prioridad del Adaptador
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. En la ventana "Network Connections", haga clic derecho en el
              adaptador de red a modificar y seleccione "Properties" del menú
              emergente.
            </Text>

            <Text style={styles.step}>
              2. Seleccione el elemento "Internet Protocol Version 4 (TCP/IPv4)"
              y haga clic en el botón "Properties".
            </Text>

            <Text style={styles.step}>
              3. En la ventana "Internet Protocol Version 4 (TCP/IPv4)
              Properties", haga clic en el botón "Advanced".
            </Text>

            <Text style={styles.step}>
              4. En la ventana "Advanced TCP/IP Settings", desmarque la casilla
              "Automatic metric" e ingrese un valor entero positivo.
            </Text>
            <Text style={styles.substep}>
              {' '}
              El adaptador de red con el valor más bajo tiene la prioridad más
              alta.
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura4-3.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 4-3: Configuración de métrica de interfaz de red
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            💻 4.5.2 Nombre de Computadora, Dirección IP y Grupo de Trabajo
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            La computadora necesita una dirección IP única según la hoja de
            Configuración del Sistema.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              Usando SysPrep para deployment: Si tiene la intención de usar
              SysPrep para múltiples despliegues, tenga en cuenta que cada
              computadora necesita obtener un nombre individual/dirección
              IP/grupo de trabajo. Este paso es el procedimiento recomendado en
              oposición a simplemente clonar el HDD.
            </Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Para configurar lo anterior:
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Presione [Win+R] para abrir la ventana "Run".
            </Text>

            <Text style={styles.step}>
              2. Ingrese el comando <Text style={styles.bold}>ncpa.cpl</Text> y
              haga clic en el botón "OK".
            </Text>
            <Text style={styles.substep}>
              {' '}
              La ventana "Network Connections" muestra los adaptadores de red
              detectados.
            </Text>

            <Text style={styles.step}>
              3. En la ventana "Network Connections", haga clic derecho en el
              adaptador de red a modificar y seleccione "Properties" del menú
              emergente.
            </Text>

            <Text style={styles.step}>
              4. Seleccione el elemento "Internet Protocol Version 4 (TCP/IPv4)"
              y haga clic en el botón "Properties".
            </Text>

            <Text style={styles.step}>
              5. En la pestaña "General", haga clic en "Use the following IP
              address" e ingrese la dirección IP estática nombrada en la hoja de
              Configuración del Sistema (ej. 172.29.81.16) con la "Subnet mask"
              255.255.255.0. Deje los otros valores vacíos.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🖥️ 4.6 Cambio del Nombre de Host
          </Text>

          <View style={styles.warningBox}>
            <Icon name="alert" size={18} color="#FF9800" />
            <Text variant="bodySmall" style={styles.warningText}>
              El nombre de host o dominio no se puede cambiar después de que R&S
              Postman III ha sido instalado y configurado.
            </Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Después de la instalación del sistema operativo, el servidor (ej.
            con el nombre de host "mu2" para Windows Unit2 Server") es por
            defecto miembro del grupo de trabajo "WORKGROUP".
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Los siguientes pasos explican cómo configurar el grupo de trabajo
            local:
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Presione [Win+R] para abrir la ventana "Run".
            </Text>

            <Text style={styles.step}>
              2. Ingrese el comando <Text style={styles.bold}>sysdm.cpl</Text> y
              haga clic en el botón "OK".
            </Text>
            <Text style={styles.substep}>
              {' '}
              Se abre la ventana "System Properties":
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura4-4.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 4-4: Cambio de nombre de computadora y descripción, grupo
              de trabajo y sufijo DNS primario
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              3. Haga clic en el botón "Change" y en la ventana "Computer Name
              Changes" ingrese el nombre de la computadora del servidor, ej.
              "MU2".
            </Text>

            <Text style={styles.step}>
              4. Haga clic en el botón "More" e ingrese el "Primary DNS suffix
              of this computer", ej. "pm-mu2.com". Haga clic en "OK" para
              guardar los cambios.
            </Text>
            <Text style={styles.substep}>
              {' '}
              De vuelta en la ventana "Computer Name Changes", el "Full computer
              name (FCN)" ya está mostrado correctamente. En el ejemplo
              anterior, sería: mu2.pm-mu2.com.
            </Text>

            <Text style={styles.step}>
              5. Haga clic en "OK" y confirme que es necesario reiniciar.
            </Text>

            <Text style={styles.step}>
              6. Cuando el sistema le pida reiniciar la computadora, haga clic
              en "Yes" para activar la nueva configuración.
            </Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Si tiene la intención de un despliegue asistido por SysPrep, los
            pasos anteriores se pueden omitir ya que deben repetirse para cada
            máquina clonada.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🛡️ 4.7 Configuración de Data Execution Prevention
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Presione [Win+R] para abrir la ventana "Run".
            </Text>

            <Text style={styles.step}>
              2. Ingrese el comando <Text style={styles.bold}>sysdm.cpl</Text> y
              haga clic en el botón "OK".
            </Text>
            <Text style={styles.substep}>
              {' '}
              Se muestra la ventana "System Properties".
            </Text>

            <Text style={styles.step}>
              3. Navegue a la pestaña "Advanced" y haga clic en el botón
              "Settings" en la sección "Performance".
            </Text>

            <Text style={styles.step}>
              4. Navegue a la pestaña "Data Execution Prevention".
            </Text>

            <Text style={styles.step}>
              5. Active el botón de radio superior "Turn on DEP for essential
              Windows programs and services only" como se muestra en Figura 4-5,
              luego haga clic en "OK" para confirmar.
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura4-5.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 4-5: Configuración de Data Execution Prevention (DEP)
            </Text>
          </View>

          <View style={styles.warningBox}>
            <Icon name="alert-circle" size={18} color="#FF9800" />
            <Text variant="bodySmall" style={styles.warningText}>
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
          <Text variant="bodyMedium" style={styles.subtitle}>
            Después de que el sistema operativo ha sido instalado y configurado
            como se describe en el Capítulo 4, "Instalación del Sistema
            Operativo", el software R&S Postman III puede ser instalado y
            configurado usando el Asistente de Configuración de R&S Postman III.
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Este capítulo describe una instalación de tipo "Postman III
            standalone". Si ocurren diferencias comparadas con el tipo de
            integración "Postman III integrated with navy system", estas
            diferencias se señalan.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            💿 5.1 Creación del Portador de Datos para la Instalación
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              El PM3 y DEVICE CONTROL se suministran en discos separados. Para
              la instalación, se debe crear un nuevo portador de datos a partir
              de ambos discos.
            </Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Para crear el portador de datos de instalación, proceda de la
            siguiente manera:
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              • Copie el contenido del CD PM3 (CDROM-NS51550-BASE) y péguelo en
              el nuevo portador de datos.
            </Text>
            <Text style={styles.step}>
              • Copie los paquetes MSI (simcosii-...msi, devicecontrol*.msi) del
              DEVICE CONTROL y péguelos en la carpeta Rohde-Schwarz/SIMCOSII de
              la carpeta CDROM-NS5150-BASE respectivamente en la carpeta raíz
              del nuevo portador de datos.
            </Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Luego puede realizar la instalación como se describe en el manual de
            instalación.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            👤 5.2 Inicio de Sesión como Installer
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            La instalación y configuración del software R&S Postman III debe
            realizarse usando la cuenta{' '}
            <Text style={styles.bold}>Installer</Text> creada durante la
            instalación del sistema operativo. Por favor, cierre sesión e inicie
            sesión como usuario <Text style={styles.bold}>Installer</Text> si
            aún no lo ha hecho.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🚀 5.3 Lanzamiento del Asistente de Configuración R&S Postman III
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Lance el Asistente de Configuración R&S Postman III ejecutando el
            archivo <Text style={styles.bold}>setup.exe</Text> en la carpeta de
            instalación.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            ⚙️ 5.4 Selección del Tipo de Instalación y Opciones
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Después de que se ha lanzado el Asistente de Configuración R&S
            Postman III, se muestra la página{' '}
            <Text style={styles.bold}>Welcome</Text>. Seleccione:
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              • Tipo de integración (standalone o integrated with the R&S Navy o
              R&S MMHS system)
            </Text>
            <Text style={styles.step}>
              • Tipo de instalación (server and/or client)
            </Text>
            <Text style={styles.step}>• Opciones adicionales</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-1.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-1: Página Welcome
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔑 5.5 Ingreso de Claves de Producto
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Para instalaciones standalone de Postman III e instalaciones
            integradas con sistema Navy y para cada opción seleccionada, se debe
            ingresar una clave de producto válida. La clave de producto se
            imprime en los papeles de licencia que vienen con los medios de
            instalación del software.
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Ingrese las claves de producto apropiadas en los campos respectivos
            hasta que se muestre una marca de verificación verde junto a cada
            clave de producto.
          </Text>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-2.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-2: Ingreso de claves de producto
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🌐 5.6 Planificación de la Red
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Haga clic en la pestaña "Planning" para mostrar el editor de
            planificación de red.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              Pestaña Planning no disponible para R&S Postman III router for
              MMHS: La pestaña "Planning" solo está disponible para los tipos de
              integración "Postman III" standalone y "Postman III integrated
              (navy system)".
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-3.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-3: Planning
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📍 5.6.1 Agregar Sitios
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Presione la tecla "Insert" o haga clic derecho en la lista de
              sitios y seleccione "Add site" del menú contextual para agregar un
              nuevo sitio.
            </Text>

            <Text style={styles.step}>
              2. Complete los siguientes parámetros del sitio desde el plan de
              configuración del sistema. Ver Capítulo 3, "Planificación de la
              Configuración del Sistema R&S Postman III", para más información:
            </Text>
          </View>

          <View style={styles.checkList}>
            <Text style={styles.checkItem}> • Site ID</Text>
            <Text style={styles.checkItem}> • Site Name</Text>
            <Text style={styles.checkItem}> • Mail Domain</Text>
            <Text style={styles.checkItem}> • Server Name (FCN)</Text>
            <Text style={styles.checkItem}> • IP Address</Text>
            <Text style={styles.checkItem}>
              {' '}
              • Check RSIRP and enter network and station ID.
            </Text>
            <Text style={styles.substep}>
              {' '}
              Este paso solo es necesario si la opción "R&S VHF/UHF Radio
              Protocol" ha sido seleccionada en la página Welcome.
            </Text>
            <Text style={styles.checkItem}>
              {' '}
              • Check S5066 and enter node id and ALE address.
            </Text>
            <Text style={styles.substep}>
              {' '}
              Este paso solo es necesario si la opción "R&S HF Radio Protocol"
              ha sido seleccionada en la página Welcome.
            </Text>
            <Text style={styles.checkItem}> • User (opcional)</Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              3. Repita los pasos anteriores para cada sitio R&S Postman III.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📂 5.6.2 Carga de Sitios
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            La configuración creada por el Asistente de Configuración R&S
            Postman III puede cargarse desde un archivo. Esta configuración
            puede ser útil para instalar múltiples estaciones.
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Haga clic en el botón "Open" para importar sitios y usuarios.
            </Text>
            <Text style={styles.step}>
              2. Seleccione un archivo XML que haya sido guardado previamente
              por un Asistente de Configuración R&S Postman III existente.
            </Text>
            <Text style={styles.step}>
              3. Haga clic en "Open" para sobrescribir su plan de red actual con
              la configuración cargada.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🖨️ 5.6.3 Impresión del Plan de Red
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            El plan de red puede imprimirse para fines de documentación. La
            funcionalidad de impresión se realiza exportando el plan de red a un
            archivo HTML, que luego se abre en el navegador predeterminado.
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Haga clic en el botón "Print" para exportar el plan de red
              actual a un archivo HTML y abrir el archivo en el navegador
              predeterminado.
            </Text>
            <Text style={styles.step}>
              2. Use la funcionalidad de su navegador para formatear la salida
              de impresión (orientación, márgenes, encabezados, pies de página,
              etc.) e imprimir el plan de red.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            ✅ 5.6.4 Selección del Sitio Local
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Haga clic derecho en uno de los sitios en la lista de planificación
            de red y seleccione "Select site" del menú contextual o presione
            [Ctrl+Enter].
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Este paso copia los parámetros del sitio seleccionado a los campos
            de entrada de la pestaña "Settings" descrita en la siguiente
            sección.
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            El sitio seleccionado se marca con una marca de verificación verde.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              Uno de los sitios planificados debe ser seleccionado como sitio
              local. Para cada instalación de servidor R&S Postman III,
              exactamente uno de los sitios planificados debe ser seleccionado
              como sitio local. Los otros sitios se configuran como sitios
              remotos (desde el punto de vista del sitio local que se está
              instalando y configurando actualmente).
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-4.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-4: Plan de red completo
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            💾 5.6.5 Guardado de Sitios
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            El plan de red actual puede guardarse en un archivo XML, que puede
            ser cargado por el Asistente de Configuración R&S Postman III. Este
            paso facilita la instalación de múltiples estaciones.
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            La función solo está habilitada si se ha seleccionado un sitio
            local.
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Haga clic en el botón "Save As" para abrir el diálogo "Save
              As".
            </Text>
            <Text style={styles.step}>
              2. Seleccione una carpeta e ingrese un nombre de archivo de
              exportación (ej. sites.xml).
            </Text>
            <Text style={styles.step}>
              3. Haga clic en "Save" para exportar el plan de red actual a un
              formato intercambiable.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📋 5.6.6 Gestión de Múltiples Planes de Red
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            La configuración de sitios y usuarios de la pestaña "Planning" puede
            guardarse en un archivo y cargarse desde un archivo. Ver capítulos
            5.6.2, "Loading Sites", y 5.6.5, "Saving Sites", para detalles.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            ⚙️ 5.7 Edición de Parámetros de Instalación
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Haga clic en la pestaña "Settings" para mostrar y editar los
            parámetros de instalación.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="alert" size={18} color="#FF9800" />
            <Text variant="bodySmall" style={styles.infoText}>
              Pestaña "Settings" deshabilitada si la clave de producto es
              inválida: Todas las pestañas excepto la pestaña "Welcome" están
              deshabilitadas mientras no haya ingresado claves de producto
              válidas para cada opción seleccionada.
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-5.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-5: Página Settings
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="refresh" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
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

          <Text variant="bodyMedium" style={styles.subtitle}>
            Los valores predeterminados para las configuraciones se derivan de
            la configuración actual de su sistema. Una vez que se ha editado un
            valor, el valor modificado se guarda en el registro y se restaura en
            el próximo inicio del Asistente de Configuración R&S Postman III.
            También es posible especificar cada configuración a través de
            parámetros de línea de comandos.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            ✅ 5.8 Completar Tareas de Prerequisitos
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en la pestaña "Prerequisites" para mostrar todas las
              tareas de prerequisitos que deben completarse para una instalación
              exitosa del software.
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-6.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-6: Página Prerequisites
            </Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            El distintivo de color en la pestaña "Prerequisites" muestra el
            número de tareas incompletas (rojo) si hay o el número de tareas
            completadas (verde).
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Cada una de las tareas tiene uno o más enlaces de comando que le
            ayudan a completar la tarea. Dependiendo del tipo de tarea, hay
            enlaces de comando que abren las respectivas ventanas de
            configuración de Windows donde puede realizar la configuración
            requerida, o si hay enlaces de comando que completan directamente la
            tarea de configuración del sistema.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              La lista de tareas de prerequisitos varía ligeramente dependiendo
              del tipo de instalación seleccionado (servidor y/o cliente) y la
              plataforma de destino (Windows 10 o Windows Server 2016). Las
              siguientes secciones describen cada una de las tareas de
              configuración en detalle.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            👨‍💼 5.8.1 Prerequisito de Administrador
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica si el usuario actual es miembro del grupo{' '}
            <Text style={styles.bold}>Administrators</Text>.
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Si esta tarea falla, usted no ha iniciado sesión como un usuario que
            es miembro del grupo <Text style={styles.bold}>Administrators</Text>
            , o el Control de Cuentas de Usuario de Windows (UAC) no está
            desactivado.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🛡️ 5.8.2 Data Execution Prevention
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica si las configuraciones de DEP ("Data Execution Prevention")
            están configuradas según se requiere.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🌐 5.8.3 Adaptadores de Red
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica si todos los adaptadores de red están configurados según se
            requiere.
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en "Enable Weak Host Sends" para habilitar weak host
              sends.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🌍 5.8.4 Nombre de Dominio
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica si se ha configurado un sufijo de nombre de dominio DNS y
            si coincide con el valor configurado en la página "Settings".
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🖥️ 5.8.5 Nombre de Host
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica si el nombre de host coincide con el valor configurado en
            la página "Settings".
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔍 5.8.6 Resolución de Nombre del Servidor
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica si el nombre del servidor puede resolverse a la dirección
            IP configurada en la página "Settings".
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Requerido solo para instalaciones de cliente.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📡 5.8.7 Ping Server
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica si se puede hacer ping a la dirección IP del servidor.
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Requerido solo para instalaciones de cliente.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            👥 5.8.8 Grupo PMIII-User
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica si el grupo local de Windows{' '}
            <Text style={styles.bold}>PMIII-User</Text> existe.
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en "Create group" para crear un grupo local de
              usuarios de Windows.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            👤 5.8.9 Cuenta de Usuario Installer
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica si existe una cuenta de usuario de Windows llamada{' '}
            <Text style={styles.bold}>Installer</Text> y es miembro del grupo
            "Administrators".
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            👤 5.8.10 Cuenta de Usuario [Pm3UserName]
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica si existe una cuenta de usuario de Windows nombrada según
            se configuró en la página "Settings" y es miembro del grupo{' '}
            <Text style={styles.bold}>PMIII-User</Text>.
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Haga clic en "Create user" para crear la cuenta local de
              usuario de Windows.
            </Text>
            <Text style={styles.step}>
              2. Haga clic en "Add user to group(s)" para agregar la cuenta de
              usuario al grupo "PMIII-User".
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🪟 5.8.11 Características de Windows
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica si todas las características de Windows requeridas están
            habilitadas.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              La característica ".NET Framework 3.5" debe instalarse desde
              Windows Server 2016 o medio de instalación de Windows 10 u online.
            </Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Para instalar ".NET Framework 3.5" en Windows Server 2016 online,
            proceda de la siguiente manera:
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>1. Abra "Server Manager".</Text>
            <Text style={styles.step}>
              2. En "Server Manager", haga clic en Manage {'>'} Add Roles and
              Features {'>'} Features.
            </Text>
            <Text style={styles.step}>
              3. Seleccione ".NET Framework 3.5 Features".
            </Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Para instalar ".NET Framework 3.5" en Windows 10 online, proceda de
            la siguiente manera:
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Haga clic en "Programs and Features" en la ventana de
              configuración de Windows 10.
            </Text>
            <Text style={styles.step}>
              2. Haga clic en "Turn Windows Feature on or off".
            </Text>
            <Text style={styles.step}>
              3. Seleccione ".NET Framework 3.5 Features".
            </Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Para instalar ".NET Framework 3.5" desde medio de instalación de
            Windows Server 2016 o Windows 10, proceda de la siguiente manera:
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Haga clic en "Locate and Enable .NET Framework 3.5" para abrir
              una ventana de selección de archivo.
            </Text>
            <Text style={styles.step}>
              2. Seleccione el archivo
              microsoft-windows-netfx3-ondemand-package.cab.
            </Text>
            <Text style={styles.substep}>
              {' '}
              El archivo está en el medio de instalación de Windows Server 2016
              o Windows 10 en la subcarpeta "sources\sxs".
            </Text>
            <Text style={styles.substep}>
              {' '}
              El medio de instalación debe ser compatible con la versión de
              Windows instalada.
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-7.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-7: Instalación desde medio de instalación de Windows
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en "Enable Windows features" para habilitar todas las
              características faltantes.
            </Text>
          </View>

          <View style={styles.warningBox}>
            <Icon name="clock-alert" size={18} color="#FF9800" />
            <Text variant="bodySmall" style={styles.warningText}>
              La instalación de características de Windows faltantes puede
              tardar hasta varios minutos. Durante este tiempo, la GUI del
              Asistente de Configuración R&S Postman III no responde. Por favor,
              sea paciente y espere a que se complete la tarea.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📦 5.9 Instalación de Paquetes de Software
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Después de que todas las tareas de prerequisitos hayan sido
            completadas, se puede iniciar la instalación del software.
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en la pestaña "Installation" para mostrar la página
              "Installation".
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-8.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-8: Página Installation
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            ▶️ 5.9.1 Inicio de la Instalación
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en "Apply" para iniciar la instalación del paquete de
              software.
            </Text>
          </View>

          <View style={styles.warningBox}>
            <Icon name="alert" size={18} color="#FF9800" />
            <Text variant="bodySmall" style={styles.warningText}>
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

          <Text variant="bodyMedium" style={styles.subtitle}>
            Un ícono de estado para cada paquete indica si el paquete respectivo
            será instalado dependiendo del tipo de instalación seleccionado,
            plataforma y otras condiciones. Use el enlace "Toggle Legend" en la
            parte inferior izquierda de la página "Installation" para mostrar
            una explicación de los diferentes íconos de estado.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              La colección de paquetes de software que se instalan varía según
              el tipo de instalación seleccionado (servidor y/o cliente) y la
              plataforma de destino (Windows 10 o Windows Server 2016).
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="clock-alert" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              La instalación de los paquetes de software tarda aprox. 20
              minutos. Sea paciente y no cierre el Asistente de Configuración
              R&S Postman III durante este tiempo.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔄 5.9.2 Reinicio de la Máquina
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Dependiendo del tipo de instalación (servidor y/o cliente), se
            muestra el diálogo "Reboot" después de que todos los paquetes de
            software han sido instalados.
          </Text>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-9.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-9: Diálogo Reboot
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en "Reboot and restart" para iniciar un reinicio del
              sistema y reiniciar el Asistente de Configuración R&S Postman III.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            ⚙️ 5.10 Configuración de Paquetes de Software
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Después de que todos los paquetes de software requeridos han sido
            instalados y la máquina ha sido reiniciada, los paquetes de software
            deben ser configurados.
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Haga clic en la pestaña "Configuration" para mostrar las tareas
              de configuración.
            </Text>
            <Text style={styles.step}>
              2. Complete cada tarea hasta que muestre una marca de verificación
              verde.
            </Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Los enlaces de comando en la parte inferior de cada tarea
            proporcionan asistencia para completar cada tarea.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              La lista de tareas de configuración varía dependiendo del tipo de
              instalación seleccionado (servidor y/o cliente). Para
              instalaciones solo de cliente, solo se debe realizar un pequeño
              subconjunto de las tareas de configuración.
            </Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Las siguientes secciones describen cada una de las tareas de
            configuración en detalle.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🗄️ 5.10.1 Configuración de SQL Server
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Haga clic en "Configure TCP port 1433" para configurar el
              número de puerto TCP estático 1433.
            </Text>
            <Text style={styles.step}>
              2. Haga clic en "(Re-)start SQL Server" para reiniciar el servicio
              SQL Server.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔧 5.10.2 SQL Server BUILTIN\Administrators Sysadmin Role
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica que el grupo Administrators sea miembro del rol "sysadmin"
            de SQL Server. Si SQL Server fue preinstalado por algún otro
            programa de configuración, puede ser necesaria una corrección.
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en "Add 'BUILTIN\Administrators' to 'sysadmin' role"
              si este comando está habilitado.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📧 5.10.3 Configuración de hMailServer
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en "Configure hMailServer" para configurar
              hMailServer.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📍 5.10.4 Dirección de Origen TMR
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica si la dirección IP pública del TMR ("Tactical Management
            Router") está configurada a la dirección IP configurada. La
            dirección IP pública se usa como la dirección IP de origen para
            paquetes IP salientes.
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en "Adjust address and restart TMR service" si se
              detecta un desajuste.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            ☕ 5.10.5 Actualizaciones de Java
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en "Disable updates" para deshabilitar el actualizador
              automático de Java.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🖥️ 5.10.6 Ícono de Bandeja del Sistema Java
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en "Hide system tray icon" para deshabilitar el ícono
              de bandeja del sistema Java.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📦 5.10.7 Despliegue de Java
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en "Adjust" para ajustar la configuración de
              despliegue de Java.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            💾 5.10.8 Caché de Java
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica que el caché de Java esté vacío.
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en "Clear cache" para limpiar el caché (si es
              necesario).
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔧 5.10.9 Variable de Entorno SIMCOS_ROOT
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica que la variable de entorno SIMCOS_ROOT ha sido establecida.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📄 5.10.10 Archivos de Catálogo EVL
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en "Copy files" para instalar los archivos de catálogo
              EVL.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            👥 5.10.11 Base de Datos UMAN
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en "Update database" para aplicar todas las
              modificaciones requeridas a la base de datos UMAN.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📡 5.10.12 Base de Datos DEVCON
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en "Update database" para aplicar todas las
              modificaciones requeridas a la base de datos DEVCON.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📶 5.10.13 Configuración de S5066 Stack
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica si las configuraciones relevantes del archivo de
            configuración s5066.xml son correctas.
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Esta tarea solo está presente si la opción "R&S HF Radio Protocol"
            ha sido seleccionada en la página "Welcome".
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en "Fix config" para ajustar la configuración del
              stack S5066.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📧 5.10.14 Configuración de Correo S5066
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica si las configuraciones relevantes del archivo de
            configuración "s5066_mail.xml" son correctas.
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Esta tarea solo está presente si la opción "R&S HF Radio Protocol"
            ha sido seleccionada en la página "Welcome".
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en "Fix config" para ajustar la configuración de
              correo S5066.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔧 5.10.15 Servicios SIMCOS II
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Haga clic en "Configure services" para establecer el tipo de
              inicio de todos los servicios a "Automatic".
            </Text>
            <Text style={styles.step}>
              2. Haga clic en "Start services" para iniciar los servicios R&S
              Device Control (SIMCOS II fue renombrado a Device Control).
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🌐 5.10.16 Interfaz Web SIMCOS II
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica que la interfaz web R&S Device Control (SIMCOS II fue
            renombrado a Device Control) sea accesible.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔐 5.10.17 Instancia ADAM (AD LDS)
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Haga clic en "Install instance (unattended)" para instalar la
              instancia ADAM de postman3.
            </Text>
            <Text style={styles.step}>
              2. Haga clic en "Add<Text style={styles.substep}>hostname</Text>
              \PMIII-User to Readers role" para otorgar derechos de lectura a
              los miembros del grupo PMIII User.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            👨‍💼 5.10.18 Rol de Administradores del Instalador ADAM
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica que el usuario actual (
            <Text style={styles.bold}>Installer</Text>) sea miembro del rol
            "Administrators" de ADAM.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🧙 5.10.19 Asistente de Configuración R&S Postman III
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Haga clic en "Launch setup wizard" para lanzar el Asistente de
              Configuración R&S Postman III.
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-10.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-10: Pantalla de bienvenida del asistente de configuración
              de Postman III
            </Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            <Text style={styles.bold}>
              Nota: Entendiendo el Asistente de Configuración de Postman III
            </Text>
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            El Asistente de Configuración de Postman III es un instalador
            adicional que instala y configura una parte adicional de los
            paquetes de software R&S Postman III.
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              2. Haga clic en "Next" en la pantalla de bienvenida del asistente
              de configuración R&S Postman III.
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-11.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-11: Pantalla de licencia
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              3. Marque la casilla "I accept the terms in the License Agreement"
              y haga clic en "Next" para continuar.
            </Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Se muestra la pantalla "Site Configuration". Todos los parámetros
            requeridos ya están completados.
          </Text>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-12.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-12: Pantalla de configuración de sitio completada
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              4. Haga clic en "Next" para continuar.
            </Text>
            <Text style={styles.substep}> Se abre la página "Install".</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-13.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-13: Página Install
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              5. Haga clic en "Install" para iniciar la instalación del
              subsistema R&S Postman III.
            </Text>
            <Text style={styles.substep}>
              {' '}
              <Text style={styles.bold}>Nota:</Text> La instalación del
              subsistema R&S Postman III tarda unos minutos. Por favor, sea
              paciente mientras se instala y configura el subsistema R&S Postman
              III.
            </Text>

            <Text style={styles.step}>
              6. Después de que el subsistema R&S Postman III ha sido instalado,
              haga clic en "Finish" para cerrar el Asistente de Configuración
              R&S Postman III y volver al Asistente de Configuración R&S Postman
              III.
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-14.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-14: Instalación completa
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔥 5.10.20 Reglas de Firewall del Servicio R&S Postman III
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Instala o actualiza las Reglas de Firewall del Servicio Postman III.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔐 5.10.21 Cuenta de Servicios del Sistema R&S Postman III
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica la configuración de la cuenta de Servicios del Sistema R&S
            Postman III.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📁 5.10.22 Ruta y Registro de R&S Postman III
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica que el software R&S Postman III ha sido instalado en el
            directorio correcto y que las configuraciones del registro son
            correctas.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            ⚙️ 5.10.23 Configuración de R&S Postman III
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            La tarea de Configuración de R&S Postman III asegura que la
            configuración de los sitios R&S Postman III coincida con el plan de
            red, que ha sido configurado en la página "Planning". Cuando se
            detecta una desviación, se muestra una advertencia y se proporcionan
            comandos para ajustar la configuración.
          </Text>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-15.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-15: Tarea de configuración de R&S Postman III
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Haga clic en "Stop Services" para detener todos los servicios
              que dependen de la configuración de sitios y usuarios.
            </Text>

            <Text style={styles.step}>
              2. Haga clic en "Remove orphaned sites" (si está habilitado) para
              eliminar todos los sitios que son parte de la configuración actual
              de MU1, MU2, MU3, pero ya no son (más) parte del plan de red.
            </Text>
            <Text style={styles.substep}>
              {' '}
              Este paso puede ser necesario si R&S Postman III es actualizado o
              la configuración de red ha cambiado.
            </Text>

            <Text style={styles.step}>
              3. Haga clic en "Update modified sites" (si está habilitado) para
              actualizar todos los sitios existentes de la configuración actual
              con los parámetros definidos en el plan de red.
            </Text>
            <Text style={styles.substep}>
              {' '}
              Este paso puede ser necesario si R&S Postman III es actualizado o
              la configuración de red ha cambiado.
            </Text>

            <Text style={styles.step}>
              4. Haga clic en "Add missing sites" para agregar todos los sitios
              faltantes.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📄 5.10.24 Archivos de Configuración de R&S Postman III
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Verifica que las configuraciones en los archivos de configuración de
            R&S Postman III (.config, .jnlp) sean consistentes con los
            parámetros de la página "Settings".
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🌐 5.10.25 Interfaz Web de R&S Postman III
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            La tarea Interfaz Web de Postman III proporciona un conjunto de
            enlaces de comando que ayudan a lanzar las respectivas aplicaciones
            GUI de Java.
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Usualmente, no se requiere acción para esta tarea de configuración.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔗 5.10.26 Accesos Directos de R&S Postman III
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en "Create shortcuts" para crear accesos directos
              ("iconos") en el escritorio y en el menú de inicio de R&S Postman
              III para lanzar las siguientes aplicaciones R&S Postman III:
            </Text>
          </View>

          <View style={styles.checkList}>
            <Text style={styles.checkItem}>
              {' '}
              • R&S Postman III Management Console
            </Text>
            <Text style={styles.checkItem}>
              {' '}
              • R&S Postman III Tactical Console
            </Text>
            <Text style={styles.checkItem}>
              {' '}
              • R&S Postman III Chat Console
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🚀 5.10.27 Servicios de R&S Postman III
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en "Start services" para iniciar los servicios R&S
              Postman III.
            </Text>
          </View>

          <View style={styles.warningBox}>
            <Icon name="alert" size={18} color="#FF9800" />
            <Text variant="bodySmall" style={styles.warningText}>
              Nota: El inicio del servicio GwTact falla si el sitio local no
              está configurado. El servicio GwTact no puede iniciarse si la
              configuración del sitio es errónea y no coincide con los
              parámetros ingresados en el Asistente de Configuración R&S Postman
              III. El inicio también puede fallar si la configuración del sitio
              es errónea y no coincide con los parámetros ingresados en el
              Asistente de Configuración R&S Postman III.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📡 5.10.28 Configuración del Administrador PLDA
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Para sistemas navales, es posible configurar la conexión al servicio
            que administra las líneas de comunicación (un servicio que
            proporciona la Interfaz de Aplicación de Datos).
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📤 5.10.29 Accesos Directos SendTo
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            La tarea de accesos directos SendTo asegura que se agregue una
            entrada para cada sitio remoto R&S Postman III al menú contextual
            "Send To" del Explorador de Windows. Debe ejecutarse solo después de
            que todos los sitios remotos hayan sido ingresados o importados a la
            Consola de Administración R&S Postman III.
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en "Create 'SendTo' shortcuts" para agregar accesos
              directos SendTo para cada sitio remoto.
            </Text>
            <Text style={styles.substep}>
              {' '}
              Este paso debe hacerse una vez por usuario.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            💿 5.10.30 Deshabilitar AutoRun para Unidades Extraíbles
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
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
            <Text style={styles.step}>
              1. Haga clic en "Disable AutoRun" para deshabilitar la
              característica auto-run.
            </Text>
            <Text style={styles.step}>
              2. Haga clic en "Restart Explorer" para aplicar la nueva
              configuración inmediatamente sin reiniciar el sistema.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🗄️ 5.10.31 Modelo de Recuperación de Bases de Datos de SQL Server
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            La tarea Modelo de Recuperación de Bases de Datos de SQL Server
            verifica si las bases de datos para R&S Postman III están en "simple
            recovery mode".
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              ► Haga clic en "Adjust recovery models" para establecer el modelo
              de recuperación a "Simple" para todas las bases de datos SQL
              Server existentes.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📧 5.10.32 Autoconfiguración de Thunderbird
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            La Autoconfiguración de Thunderbird crea un archivo con los
            parámetros para crear una cuenta de correo electrónico en
            thunderbird (ej. dominio de correo, servidor de correo).
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔌 5.10.33 Complementos de Thunderbird
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Copia los complementos de Thunderbird suministrados a la instalación
            de Thunderbird.
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Observe la configuración de idioma en la página "Settings".
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🛣️ 5.11 Configuración del Enrutamiento
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Inicie la Consola de Administración R&S Postman III haciendo
              doble clic en su icono en el escritorio.
            </Text>

            <Text style={styles.step}>
              2. En la página "Routing Info – Edit" (clic derecho "Routing
              Info"), vaya a la pestaña "Routing Configuration".
            </Text>

            <Text style={styles.step}>
              3. Configure el enrutamiento a las otras unidades móviles a
              "Direct".
            </Text>

            <Text style={styles.step}>
              4. Seleccione el nombre de su "Access Gateway" y el "Tactical
              Circuit" a usar según su entorno del sistema.
            </Text>

            <Text style={styles.step}>5. Finalmente haga clic en "OK".</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-16.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-16: Consola de administración - configuración de
              enrutamiento
            </Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Después de que la ventana se cierra, el enrutamiento actualizado se
            puede encontrar en la tabla del "Global Routing Map". Esta tabla
            muestra qué circuito de destino se puede alcanzar usando qué
            circuito.
          </Text>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-17.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-17: Consola de administración - mapa de enrutamiento
              global
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              6. Para actualizar la configuración del gateway táctico local,
              haga clic en el botón parpadeante en la barra de herramientas de
              la consola de administración:
            </Text>
            <Text style={styles.substep}>
              {' '}
              📡🔄 (Update Gateway Configuration)
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            👥 5.12 Configuración de Usuario
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Inicie sesión en el servidor R&S NS5150 como usuario Installer
              con la contraseña asignada en la cuenta.
            </Text>

            <Text style={styles.step}>
              2. Abra Internet Explorer y navegue a la Interfaz Web NS5150 en la
              URL http://localhost:8080/simcos2.
            </Text>

            <Text style={styles.step}>
              3. Abra el administrador de usuarios R&S Postman III "UMAN" y haga
              clic en el botón "Add...".
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-18.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-18: UMAN - agregando un usuario
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              4. Ingrese los valores para "User Name" y "Login". Confirme con
              "Ok".
            </Text>
            <Text style={styles.substep}>
              {' '}
              En este ejemplo, ambos son iguales para mantenerlo simple.
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="account-multiple" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              Consejo: Usuarios Adicionales - Repita este paso para todos los
              usuarios que planean trabajar en este servidor y a través de las
              estaciones de trabajo conectadas más tarde.
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              5. Seleccione la pestaña "Groups" y seleccione el grupo Operators.
            </Text>
            <Text style={styles.step}>
              6. Haga clic en "Edit" para abrir el diálogo UMAN "Add/Edit
              Group".
            </Text>
            <Text style={styles.step}>7. Seleccione la pestaña "Members".</Text>
            <Text style={styles.step}>
              8. Haga clic en "Add ..." para abrir el diálogo UMAN "Add/Edit
              Group" {'>'} "Add Members".
            </Text>
            <Text style={styles.step}>
              9. Seleccione el nombre de la nueva cuenta de usuario y haga clic
              en "Ok" para agregar el usuario al grupo Operators.
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-19.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-19: UMAN - add/edit group: members
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>10. Cierre UMAN.</Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📻 5.13 Detección de Radios y Actualización de Base de Datos
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Antes de que el sistema pueda trabajar con los radios, Device
            Discovery debe detectar y escribir los radios en la base de datos
            DEVCON.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              Precondiciones para la detección de radios:
            </Text>
          </View>

          <View style={styles.checkList}>
            <Text style={styles.checkItem}>
              {' '}
              • Un firmware de radio ya está programado que soporta IPoA.
            </Text>
            <Text style={styles.checkItem}>
              {' '}
              • Los nombres de radio correctos y las direcciones IP están
              configurados según la hoja de entorno del sistema.
            </Text>
            <Text style={styles.checkItem}>
              {' '}
              • Los radios deben cargarse con misiones válidas usando R&S
              RNMS3000 y/o una fillgun.
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Inicie sesión en el servidor como usuario Installer.
            </Text>
            <Text style={styles.step}>
              2. Abra R&S Device Discovery haciendo clic en el icono del
              escritorio:
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              3. Si se usan radios VHF/UHF del tipo Xx4400x en el sistema, el
              rango de direcciones IP debe ingresarse primero. Abra la ventana
              de configuración haciendo clic en el botón "Settings" en la
              esquina superior derecha (enmarcado en rojo en la captura de
              pantalla).
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-20.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-20: Botón de configuración de detección de dispositivos
            </Text>
          </View>

          <View style={styles.warningBox}>
            <Icon name="alert" size={18} color="#FF9800" />
            <Text variant="bodySmall" style={styles.warningText}>
              Nota: TMR, R&S M3TR y R&S XK4100 radios deben detectarse con la
              configuración predeterminada de la herramienta.
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              4. En la ventana de configuración, ingrese el {'<'}first IP
              address{'>'}
              {'<'}last IP address{'>'} (separado por un guion) de los radios
              R&S 4400 en PortSweepAddresses y haga clic en "Save".
            </Text>
            <Text style={styles.substep}>
              {' '}
              También puede ingresar distintos rangos R&S 4/P (separados por una
              coma).
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-21.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-21: Device discovery - ventana de configuración
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              5. De vuelta en la ventana principal de Device Discovery, haga
              clic en el botón "Discover".
            </Text>
            <Text style={styles.step}>
              6. Cuando todos los dispositivos estén listados aquí, haga clic en
              "Update DEVCON".
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-22.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-22: Device discovery - actualizando DEVCON
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-23.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-23: Device discovery - proceso de actualización de base
              de datos
            </Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            En la siguiente captura de pantalla, la base de datos ya está
            actualizada. En consecuencia, el botón "Update DEVCON" está en gris
            y un símbolo de verificación verde dice: "No se requiere
            actualización de base de datos DEVCON".
          </Text>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-24.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-24: Device discovery - vista general de dispositivos
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              7. Cierre la herramienta después de una actualización exitosa.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📧 5.14 Configuración del Cliente de Correo Electrónico
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            ✉️ 5.14.1 Configuración de la Cuenta de Correo Electrónico
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Lance la aplicación Mozilla Thunderbird.
            </Text>

            <Text style={styles.step}>
              2. Tome los valores de la pestaña "Settings" en el Asistente de
              Configuración R&S Postman III. La dirección de correo electrónico
              debe construirse a partir de la configuración de "User name"
              (propiedad Pm3UserName) y "Email domain name" (propiedad
              Pm3EmailDomainName), ej. OpMu2@pm-mu2.com.
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-25.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-25: Configuración de Thunderbird (1)
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-26.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-26: Configuración de Thunderbird (2)
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              3. En la ventana de advertencia, haga clic en "Done" para
              finalizar la configuración.
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-27.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-27: Configuración de Thunderbird (3)
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🌍 5.14.2 Cambio del Idioma
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              1. Lance la aplicación Mozilla Thunderbird.
            </Text>
            <Text style={styles.step}>2. Haga clic en ☰ {'>'} "Options".</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-28.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 5-28: Configuración de idioma (1)
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>
              3. En la sección "Language", puede cambiar el idioma.
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura5-29.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
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
          <Text variant="bodyMedium" style={styles.subtitle}>
            Este capítulo describe la instalación de R&S Postman III con el tipo de integración "Postman III router for MMHS". Para este tipo de integración, el producto R&S Device Control (SIMCOS II fue renombrado a Device Control) debe estar instalado antes del proceso de instalación de R&S Postman III.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔧 6.1 Prerequisitos
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📦 6.1.1 Otros Productos Rohde & Schwarz
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Para la instalación de R&S Postman III con el tipo de integración "Postman III router for MMHS", el producto R&S Device Control (SIMCOS II fue renombrado a Device Control) debe estar instalado antes del proceso de instalación de R&S Postman III.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            👤 6.1.2 Configuración de Usuario
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            El proceso de instalación de R&S Postman III requiere que cree una cuenta de usuario local de Windows, que debe ser miembro del grupo local de Windows <Text style={styles.bold}>Administrators</Text>.
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Este usuario debe usarse para el proceso de instalación.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            💿 6.2 Instalación
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🚀 6.2.1 Lanzamiento del Asistente de Configuración R&S Postman III
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Lance el Asistente de Configuración R&S Postman III ejecutando el archivo <Text style={styles.bold}>setup.exe</Text> en la carpeta de instalación.
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              Instalación implícita del framework .NET: El Asistente de Configuración R&S Postman III depende del Microsoft .NET Framework Versión 4.0 (o posterior). Si esta versión no está instalada, se instala automáticamente cuando se lanza el asistente de configuración por primera vez.
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            ⚙️ 6.2.2 Selección del Tipo de Instalación y Opciones
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Después de que se ha lanzado el Asistente de Configuración R&S Postman III, se muestra la página "Welcome".
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>1. Seleccione lo siguiente:</Text>
          </View>

          <View style={styles.checkList}>
            <Text style={styles.checkItem}> • Integration type: Postman III for MMHS</Text>
            <Text style={styles.checkItem}> • Installation type: Server only</Text>
            <Text style={styles.checkItem}> • Additional options: RS-IRP (if this option is valid in the target environment)</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura6-1.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 6-1: Opciones de bienvenida
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>2. Cambie a la pestaña "Settings" para continuar.</Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📋 6.2.3 Verificación de la Pestaña Settings
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Cuando las opciones de la pantalla "Welcome" están seleccionadas, la pestaña "Settings" debe abrirse. Para el tipo de integración "Postman III router for MMHS", solo tres elementos de configuración son de importancia. La pestaña "Settings" muestra el estado actual de la máquina. Aquí puede asegurarse de que las configuraciones sean requeridas una vez.
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Tenga en cuenta que las configuraciones en esta captura de pantalla son un ejemplo.
          </Text>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura6-2.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 6-2: Configuración para MMHS
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              Prerequisitos de instalación: R&S TMR se basa en la versión correcta de la biblioteca WinPcap instalada. A menudo esta biblioteca ya está instalada en una versión incorrecta, por ejemplo después del uso de la aplicación Wireshark.
            </Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Antes de continuar, asegúrese de lo siguiente:
          </Text>

          <View style={styles.checkList}>
            <Text style={styles.checkItem}> • No se abre ninguna aplicación Wireshark (verifique también las sesiones de escritorio remoto abiertas)</Text>
            <Text style={styles.checkItem}> • WinPcap no está instalado – asegúrese de desinstalarlo si aplica</Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Cierre y reinicie <Text style={styles.bold}>setup.exe</Text> después.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            ✅ 6.2.4 Pestaña Prerequisites
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Cuando la pestaña "Settings" muestra todos los valores requeridos de la máquina actual, cambie a la pestaña "Prerequisites". La pestaña puede mostrar configuraciones que no permiten la operación de TMR. Las configuraciones pueden ajustarse haciendo clic en los botones apropiados.
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            El firewall puede deshabilitarse haciendo clic en "Disable firewall".
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            El weak host routing necesario para TMR puede habilitarse haciendo clic en "Enable weak host send".
          </Text>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura6-3.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 6-3: Prerequisitos para MMHS (1)
            </Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            El resultado debería verse así:
          </Text>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura6-4.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 6-4: Prerequisitos para MMHS (2)
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            💾 6.2.5 Pestaña Installation
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Los paquetes necesarios para el tipo de integración elegido se muestran aquí. Para el tipo de integración "Postman III router for MMHS", los siguientes paquetes deben instalarse:
          </Text>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura6-5.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 6-5: Pestaña de instalación del asistente de configuración MMHS
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>► Haga clic en "Apply" para iniciar la instalación.</Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            ⚙️ 6.2.6 Pestaña Configuration
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Después de que todos los paquetes de software requeridos han sido instalados, los paquetes de software deben configurarse.
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>1. Haga clic en la pestaña "Configuration" para mostrar las tareas de configuración.</Text>
            <Text style={styles.step}>2. Complete cada tarea hasta que muestre una marca de verificación verde.</Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Los enlaces de comando en la parte inferior de cada tarea proporcionan asistencia para completar cada tarea. La siguiente tarea se muestra:
          </Text>

          <View style={styles.checkList}>
            <Text style={styles.checkItem}> • Chapter 5.10.4, "TMR Source Address", on page 41</Text>
            <Text style={styles.checkItem}> • Chapter 5.10.28, "PLDA Manager Configuration", on page 49</Text>
            <Text style={styles.checkItem}> • Chapter 5.10.30, "Disabling AutoRun for Removable Drives", on page 49</Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔧 6.3 Pasos Post-Instalación
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔌 6.3.1 Adaptación del Servicio PLDA Manager
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Si se instaló R&S Postman III con el tipo de integración 'Postman III router for MMHS' en un servidor miembro R&S MMHS, entonces el Servicio PLDA Manager debe adaptarse manualmente para ejecutarse bajo la cuenta "MMHHSServices".
          </Text>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              Si el Servicio PLDA Manager se ejecuta como local\System, no tiene privilegios suficientes para acceder al directorio MMHS AD-LDS.
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura6-6.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 6-6: Adaptación del servicio PLDA manager
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📡 6.3.2 Instalación de Dispositivos TAP
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Durante la instalación de R&S TMR, se creó un acceso directo en el escritorio.
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>1. Inicie el Administrador de Dispositivos TAP de R&S a través de este acceso directo.</Text>
            <Text style={styles.substep}>  Debería aparecer una ventana como la que se muestra a continuación.</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura6-7.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 6-7: Dispositivo TAP
            </Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Dependiendo de los dispositivos TAP ya instalados, la lista de dispositivos TAP mostrada por el Administrador de Dispositivos TAP de R&S podría estar vacía o no.
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            La lista de dispositivos TAP se muestra con un fondo gris y el servicio R&S TMR está indicado como en ejecución. En este estado, solo es posible monitorear la configuración actual, no se permiten cambios.
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>2. Para poner el Administrador de Dispositivos TAP de R&S en el modo de edición, haga clic en el botón "Stop".</Text>
            <Text style={styles.substep}>  Esto detiene el servicio TMR y le permite realizar cambios.</Text>

            <Text style={styles.step}>3. Elimine todas las entradas existentes (si las hay) a través del botón "Remove".</Text>

            <Text style={styles.step}>4. Haga clic en "Add" para crear el primer dispositivo TAP.</Text>

            <Text style={styles.step}>5. Ingrese el nombre "TAP-TMR", marque la casilla para "Bind TCP/IP" y asigne la dirección IP como se indica en su manual de información del sistema.</Text>

            <Text style={styles.step}>6. Asegúrese de que las otras configuraciones estén configuradas como se muestra en la figura a continuación.</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura6-8.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 6-8: Crear dispositivo TAP
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>7. Haga clic en "OK" para confirmar.</Text>
            <Text style={styles.substep}>  Después de presionar "OK", aparece una advertencia de seguridad de que Windows no puede verificar el editor del software del controlador.</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura6-9.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 6-9: Instalar dispositivo TAP
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>8. Haga clic en "Install" para instalar el controlador.</Text>

            <Text style={styles.step}>9. Después de que TAP-TMR ha sido creado, haga clic en "Add" nuevamente para agregar el primer dispositivo TAP para una instancia de protocolo. La convención de nomenclatura se explica en detalle en el paso 12.</Text>

            <Text style={styles.step}>10. Para el primer dispositivo RSIRP, asigne el nombre "TAP-RSIRP-1" sin asignar ninguna dirección IP.</Text>

            <Text style={styles.step}>11. Haga clic en "OK" para confirmar.</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura6-10.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 6-10: Dispositivo TAP para una instancia de protocolo
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>12. Repita este paso para crear los siguientes dispositivos TAP adicionales:</Text>
          </View>

          <View style={styles.checkList}>
            <Text style={styles.checkItem}> • TAP-RSIRP-2</Text>
            <Text style={styles.checkItem}> • TAP-S5066Device1</Text>
            <Text style={styles.checkItem}> • TAP-S5066Device2</Text>
            <Text style={styles.checkItem}> • TAP-S5066Device3</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura6-11.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 6-11: Nombre de instancia de protocolo en DEVCON GUI
            </Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Después de la creación de todos los dispositivos TAP, el Administrador de Dispositivos TAP de R&S debería verse como se muestra a continuación:
          </Text>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura6-12.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 6-12: Lista completa de todos los dispositivos TAP
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              Nota: Convención de nomenclatura para crear dispositivos TAP - El servicio R&S TMR reconoce los dispositivos TAP por su nombre. Por lo tanto, el primer dispositivo TAP creado debe nombrarse "TAP-TMR" y este dispositivo es el único dispositivo TAP que tiene una dirección IP. Los otros dispositivos TAP deben nombrarse según los nombres de todas las instancias de protocolo disponibles. Estas instancias pueden encontrarse en la GUI de DEVCON o en la base de datos de R&S Device Control. La convención de nomenclatura es "TAP-" más el nombre de la instancia del protocolo. Por ejemplo, para la captura de pantalla (RSIRP-2), el nombre correcto del dispositivo TAP a crear es "TAP-RSIRP-2".
            </Text>
          </View>

          <View style={styles.stepsList}>
            <Text style={styles.step}>13. Haga clic en "Start" para activar el servicio TMR nuevamente.</Text>
            <Text style={styles.substep}>  El TMR está en ejecución (indicado por el LED de estado verde) y el fondo de la lista de dispositivos TAP cambia su color a gris.</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura6-13.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 6-13: Configuración completa y activa
            </Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            El Router de Gestión Táctica R&S está ahora configurado y listo para usar.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔀 6.3.3 Activación de Flexible Ack Routing (FAR)
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Después de la instalación de TMR, el FAR debe activarse.
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>► Abra el TMRGUI (C:\programfiles\Rohde-Schwarz\PostmanIII\TMR\TmrGui.exe) y asegúrese de que el botón "FAR" esté activado.</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../Images/postman/figura6-14.png')}
              style={styles.documentImage}
              resizeMode="contain"
            />
            <Text variant="bodySmall" style={styles.imageCaption}>
              Figura 6-14: TMR management GUI
            </Text>
          </View>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Con un fondo gris como se muestra en la Figura 6-14, el botón está activado.
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            <Text style={styles.bold}>Relación entre el servicio TMR, el controlador TMR y los servicios R&S Device Control</Text>
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            El R&S TMR consiste de un servicio TMR que se configura como automático durante la instalación y que siempre está en ejecución. Además, el controlador TMR de R&S instala un controlador TMR, que se instala en el directorio R&S Device Control (SIMCOS II fue renombrado a Device Control). Se inicia y detiene junto con los servicios R&S Device Control.
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Por lo tanto, reiniciar los servicios R&S Device Control solo desencadena un reinicio del controlador TMR. El servicio TMR debe reiniciarse manualmente a través de la consola de servicios de Microsoft Windows, en caso de que este paso sea necesario.
          </Text>

          <View style={styles.successBox}>
            <Icon name="check-circle" size={20} color="#4CAF50" />
            <Text variant="bodyMedium" style={styles.successText}>
              ✅ Sección 6 Completada - Instalación de R&S Postman III para R&S MMHS finalizada exitosamente
            </Text>
          </View>
        </Accordion>

        {/* SECTION 7 */}
        <Accordion
          number="SECCIÓN 7"
          title="Apéndice: Configuración Avanzada y Mantenimiento"
          icon="tools"
          delay={180}
        >
          <Text variant="bodyMedium" style={styles.subtitle}>
            <Text style={styles.bold}>Propósito:</Text> Configuración avanzada,
            mantenimiento y personalización del sistema.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔧 Temas Cubiertos:
          </Text>

          <View style={styles.optionGroup}>
            <Text variant="bodyMedium" style={styles.bold}>
              Integración de Servicios DTS
            </Text>
            <Text style={styles.option}>
              {' '}
              • Instrucciones para integrar servicios externos de transferencia
              de datos
            </Text>
          </View>

          <View style={styles.optionGroup}>
            <Text variant="bodyMedium" style={styles.bold}>
              Agregar Nuevos Usuarios
            </Text>
            <Text style={styles.option}>
              {' '}
              • Pasos para crear usuarios de Windows, UMAN y Postman III
            </Text>
            <Text style={styles.option}> • Gestión de grupos y permisos</Text>
          </View>

          <View style={styles.optionGroup}>
            <Text variant="bodyMedium" style={styles.bold}>
              Configuración del Firewall
            </Text>
            <Text style={styles.option}>
              {' '}
              • Reglas y configuración del firewall de servicios Postman III
            </Text>
            <Text style={styles.option}>
              {' '}
              • Puertos necesarios y excepciones
            </Text>
          </View>

          <View style={styles.optionGroup}>
            <Text variant="bodyMedium" style={styles.bold}>
              Resolución de Problemas
            </Text>
            <Text style={styles.option}>
              {' '}
              • Problemas comunes y soluciones recomendadas
            </Text>
            <Text style={styles.option}>
              {' '}
              • Logs del sistema y diagnósticos
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="lightbulb-on" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              Consulte esta sección para configuraciones avanzadas y resolución
              de problemas específicos
            </Text>
          </View>
        </Accordion>

        {/* Footer */}
        <ScreenEntrance delay={200}>
          <Surface style={styles.footerCard} elevation={1}>
            <Icon name="information-outline" size={24} color="#1976D2" />
            <Text variant="bodySmall" style={styles.footerText}>
              Manual de instalación basado en: R&S NS5150 / Postman III
              Installation Manual (Version 01, 2020) - Documento oficial: 08
              PIII_Installation Manual_en_2020-02-18.pdf
            </Text>
          </Surface>
        </ScreenEntrance>

        <ScreenEntrance delay={220}>
          <Surface style={styles.publisherCard} elevation={1}>
            <View style={styles.publisherContent}>
              <Text variant="bodySmall" style={styles.publisherText}>
                <Text style={styles.bold}>Publicado por:</Text> Rohde & Schwarz
                GmbH & Co. KG
              </Text>
              <Text variant="bodySmall" style={styles.publisherText}>
                <Text style={styles.bold}>Año:</Text> 2020
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
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: 'rgba(25, 118, 210, 0.95)',
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
    backgroundColor: 'white',
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
    backgroundColor: 'white',
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
