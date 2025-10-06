import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
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

function Accordion({ title, number, icon, children, delay = 0 }: AccordionProps) {
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
                R&S Postman III Setup Assistant
            </Text>
              <Chip icon="file-document" style={styles.chip}>
                11 Pasos de Configuración
              </Chip>
            </View>
        </Surface>
        </ScreenEntrance>

        {/* SCREEN 1 */}
        <Accordion
          number="PASO 1"
          title="Welcome / Selección de Tipo de Instalación"
          icon="monitor-star"
          delay={60}
        >
          <Text variant="bodyMedium" style={styles.subtitle}>
            <Text style={styles.bold}>Propósito:</Text> Inicio del asistente de instalación del R&S Postman III.
          </Text>
          
          <Text variant="titleSmall" style={styles.sectionTitle}>
            📋 Elementos principales:
          </Text>
          
          <View style={styles.field}>
            <Text variant="bodyMedium" style={styles.fieldLabel}>
              • Título: <Text style={styles.fieldValue}>Welcome – R&S Postman III Setup Assistant</Text>
            </Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            ⚙️ Campos de selección:
          </Text>
          
          <View style={styles.optionGroup}>
            <Text variant="bodyMedium" style={styles.bold}>Integration Type:</Text>
            <Text style={styles.option}>  → Postman III Standalone</Text>
            <Text style={styles.option}>  → Postman III Integrated (Navy System)</Text>
            <Text style={styles.option}>  → Postman III Router for MMHS Systems</Text>
          </View>

          <View style={styles.optionGroup}>
            <Text variant="bodyMedium" style={styles.bold}>Installation Type:</Text>
            <Text style={styles.option}>  → Server</Text>
            <Text style={styles.option}>  → Client</Text>
            <Text style={styles.option}>  → Server and Client</Text>
          </View>

          <View style={styles.optionGroup}>
            <Text variant="bodyMedium" style={styles.bold}>Additional Options:</Text>
            <Text style={styles.option}>  → R&S VHF/UHF Radio Protocol</Text>
            <Text style={styles.option}>  → R&S HF Radio Protocol</Text>
          </View>

          <View style={styles.buttonInfo}>
            <Text variant="bodyMedium">
              🔘 Botones: <Text style={styles.bold}>Next</Text> | <Text style={styles.bold}>Cancel</Text>
            </Text>
          </View>
        </Accordion>

        {/* SCREEN 2 */}
        <Accordion
          number="PASO 2"
          title="Product Keys"
          icon="key-variant"
          delay={80}
        >
          <Text variant="bodyMedium" style={styles.subtitle}>
            <Text style={styles.bold}>Propósito:</Text> Registrar licencias del software y sus componentes.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔑 Campos de entrada:
          </Text>

          <View style={styles.field}>
            <Text style={styles.option}>  • Product Key 1</Text>
            <Text style={styles.option}>  • Product Key 2</Text>
            <Text style={styles.option}>  • Product Key 3 ...</Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="check-circle" size={18} color="#4CAF50" />
            <Text variant="bodySmall" style={styles.infoText}>
              Indicador de validación: Check verde cuando la clave es válida
            </Text>
          </View>

          <View style={styles.buttonInfo}>
            <Text variant="bodyMedium">
              🔘 Botones: <Text style={styles.bold}>Next</Text> | <Text style={styles.bold}>Back</Text>
            </Text>
          </View>
        </Accordion>

        {/* SCREEN 3 */}
        <Accordion
          number="PASO 3"
          title="Network Planning"
          icon="network"
          delay={100}
        >
          <Text variant="bodyMedium" style={styles.subtitle}>
            <Text style={styles.bold}>Propósito:</Text> Definir y documentar los sitios de red donde se instalará el sistema.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🌐 Lista editable de sitios:
          </Text>

          <View style={styles.table}>
            <Text style={styles.tableHeader}>Columnas de la tabla:</Text>
            <Text style={styles.tableRow}>  • Site ID</Text>
            <Text style={styles.tableRow}>  • Site Name</Text>
            <Text style={styles.tableRow}>  • Mail Domain</Text>
            <Text style={styles.tableRow}>  • Server Name (FCN)</Text>
            <Text style={styles.tableRow}>  • IP Address</Text>
            <Text style={styles.tableRow}>  • Network / Station ID (si aplica)</Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔧 Acciones disponibles:
          </Text>

          <View style={styles.field}>
            <Text style={styles.option}>  • Insert / Add Site</Text>
            <Text style={styles.option}>  • Load Sites (XML)</Text>
            <Text style={styles.option}>  • Save Sites (XML)</Text>
            <Text style={styles.option}>  • Print Network Plan (HTML)</Text>
            <Text style={styles.option}>  • Select Local Site</Text>
          </View>

          <View style={styles.warningBox}>
            <Icon name="alert-circle" size={18} color="#FF9800" />
            <Text variant="bodySmall" style={styles.warningText}>
              Nota: Uno de los sitios debe ser marcado como local (check verde)
            </Text>
          </View>
        </Accordion>

        {/* SCREEN 4 */}
        <Accordion
          number="PASO 4"
          title="Settings"
          icon="cog"
          delay={120}
        >
          <Text variant="bodyMedium" style={styles.subtitle}>
            <Text style={styles.bold}>Propósito:</Text> Configurar los parámetros de instalación antes de ejecutar el setup.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            ⚙️ Campos principales:
          </Text>

          <View style={styles.settingsList}>
            <Text style={styles.settingItem}>  • Site ID</Text>
            <Text style={styles.settingItem}>  • Server Host Name</Text>
            <Text style={styles.settingItem}>  • Domain Name</Text>
            <Text style={styles.settingItem}>  • Email Domain</Text>
            <Text style={styles.settingItem}>  • IP Address</Text>
            <Text style={styles.settingItem}>  • User Name</Text>
            <Text style={styles.settingItem}>  • Password</Text>
            <Text style={styles.settingItem}>  • Language (en / es)</Text>
            <Text style={styles.settingItem}>  • Country Code (e.g. CO, US)</Text>
            <Text style={styles.settingItem}>  • ADAM Instance Name</Text>
            <Text style={styles.settingItem}>  • SQL Instance Name</Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="information" size={18} color="#2196F3" />
            <Text variant="bodySmall" style={styles.infoText}>
              Los valores se derivan automáticamente del sistema y pueden modificarse manualmente
            </Text>
          </View>
        </Accordion>

        {/* SCREEN 5 */}
        <Accordion
          number="PASO 5"
          title="Prerequisites"
          icon="check-all"
          delay={140}
        >
          <Text variant="bodyMedium" style={styles.subtitle}>
            <Text style={styles.bold}>Propósito:</Text> Verificar que el sistema cumple con todos los requisitos antes de la instalación.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            ✅ Lista de chequeo:
          </Text>

          <View style={styles.checkList}>
            <Text style={styles.checkItem}>  ✓ Administrator privilege</Text>
            <Text style={styles.checkItem}>  ✓ Data Execution Prevention (DEP) configurado</Text>
            <Text style={styles.checkItem}>  ✓ Adaptadores de red activos</Text>
            <Text style={styles.checkItem}>  ✓ Nombre de dominio y host configurados</Text>
            <Text style={styles.checkItem}>  ✓ Grupo PMIII-User creado</Text>
            <Text style={styles.checkItem}>  ✓ Cuenta Installer existente</Text>
            <Text style={styles.checkItem}>  ✓ Usuario pertenece al grupo PMIII-User</Text>
            <Text style={styles.checkItem}>  ✓ .NET Framework 3.5 habilitado</Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🔧 Acciones:
          </Text>

          <View style={styles.field}>
            <Text style={styles.option}>  • Crear grupo o usuario</Text>
            <Text style={styles.option}>  • Habilitar características</Text>
            <Text style={styles.option}>  • Refrescar verificación</Text>
          </View>

          <View style={styles.statusIndicators}>
            <Text style={styles.statusItem}>🔴 Incompleto</Text>
            <Text style={styles.statusItem}>🟢 Completado</Text>
          </View>
        </Accordion>

        {/* SCREEN 6 */}
        <Accordion
          number="PASO 6"
          title="Installation"
          icon="package-variant"
          delay={160}
        >
          <Text variant="bodyMedium" style={styles.subtitle}>
            <Text style={styles.bold}>Propósito:</Text> Instalar los paquetes del software R&S Postman III.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📦 Proceso de instalación:
          </Text>

          <View style={styles.field}>
            <Text style={styles.option}>  • Lista de paquetes con iconos de estado</Text>
            <Text style={styles.option}>  • Indicadores: pendiente / instalado / no aplicable</Text>
          </View>

          <View style={styles.buttonInfo}>
            <Text variant="bodyMedium">
              🔘 Botones: <Text style={styles.bold}>Apply</Text> (iniciar) | <Text style={styles.bold}>Reboot and Restart</Text>
            </Text>
          </View>

          <View style={styles.warningBox}>
            <Icon name="clock-alert" size={18} color="#FF9800" />
            <Text variant="bodySmall" style={styles.warningText}>
              La instalación tarda ~20 minutos. No cerrar el asistente durante el proceso.
            </Text>
          </View>
        </Accordion>

        {/* SCREEN 7 */}
        <Accordion
          number="PASO 7"
          title="Configuration"
          icon="tune"
          delay={180}
        >
          <Text variant="bodyMedium" style={styles.subtitle}>
            <Text style={styles.bold}>Propósito:</Text> Configurar los servicios y componentes instalados.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🧩 Subtareas principales:
          </Text>

          <View style={styles.configList}>
            <Text style={styles.configItem}>  ✓ SQL Server Configuration</Text>
            <Text style={styles.configItem}>  ✓ hMailServer Configuration</Text>
            <Text style={styles.configItem}>  ✓ Java Settings (desactivar actualizaciones, cache)</Text>
            <Text style={styles.configItem}>  ✓ ADAM (Active Directory Lightweight Directory Services)</Text>
            <Text style={styles.configItem}>  ✓ SIMCOS II / Device Control Services</Text>
            <Text style={styles.configItem}>  ✓ Firewall Rules</Text>
            <Text style={styles.configItem}>  ✓ R&S Postman III Path & Registry</Text>
            <Text style={styles.configItem}>  ✓ R&S Postman III Config Files</Text>
            <Text style={styles.configItem}>  ✓ Crear accesos directos</Text>
            <Text style={styles.configItem}>  ✓ Iniciar servicios Postman III</Text>
            <Text style={styles.configItem}>  ✓ Deshabilitar AutoRun en dispositivos extraíbles</Text>
            <Text style={styles.configItem}>  ✓ Configurar Thunderbird autoconfiguración</Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="check-circle" size={18} color="#4CAF50" />
            <Text variant="bodySmall" style={styles.infoText}>
              Cada tarea se marca con check verde al completarse
            </Text>
          </View>
        </Accordion>

        {/* SCREEN 8 */}
        <Accordion
          number="PASO 8"
          title="Routing Configuration"
          icon="routes"
          delay={200}
        >
          <Text variant="bodyMedium" style={styles.subtitle}>
            <Text style={styles.bold}>Propósito:</Text> Configurar las rutas entre las unidades de comunicación.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📡 Pasos de configuración:
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>1. Abrir Management Console</Text>
            <Text style={styles.step}>2. Navegar a Routing Info → Edit → Routing Configuration</Text>
            <Text style={styles.step}>3. Ajustar rutas entre unidades (Direct / Indirect)</Text>
            <Text style={styles.step}>4. Configurar Access Gateway y Tactical Circuit</Text>
            <Text style={styles.step}>5. Guardar y actualizar</Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            🗺️ Elementos visuales:
          </Text>

          <View style={styles.field}>
            <Text style={styles.option}>  • Tabla de Global Routing Map</Text>
            <Text style={styles.option}>  • Botón "Update Gateway Configuration"</Text>
          </View>
        </Accordion>

        {/* SCREEN 9 */}
        <Accordion
          number="PASO 9"
          title="User Configuration (UMAN)"
          icon="account-settings"
          delay={220}
        >
          <Text variant="bodyMedium" style={styles.subtitle}>
            <Text style={styles.bold}>Propósito:</Text> Crear y gestionar usuarios dentro de la plataforma Postman III.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            👤 Pasos de configuración:
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>1. Acceder al sistema como Installer</Text>
            <Text style={styles.step}>2. Abrir UMAN (User Manager)</Text>
            <Text style={styles.step}>3. Crear nuevo usuario con User Name y Login</Text>
            <Text style={styles.step}>4. Asignar el usuario al grupo Operators</Text>
            <Text style={styles.step}>5. Guardar y cerrar</Text>
          </View>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📋 Campos visuales:
          </Text>

          <View style={styles.field}>
            <Text style={styles.option}>  • User List</Text>
            <Text style={styles.option}>  • Groups Tab</Text>
            <Text style={styles.option}>  • Add/Edit Group → Add Members</Text>
          </View>
        </Accordion>

        {/* SCREEN 10 */}
        <Accordion
          number="PASO 10"
          title="Device Discovery"
          icon="radar"
          delay={240}
        >
          <Text variant="bodyMedium" style={styles.subtitle}>
            <Text style={styles.bold}>Propósito:</Text> Detectar y registrar radios en la base de datos DEVCON.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📻 Pasos de configuración:
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>1. Abrir R&S Device Discovery</Text>
            <Text style={styles.step}>2. Configurar rango de IPs (PortSweepAddresses)</Text>
            <Text style={styles.step}>3. Presionar Discover</Text>
            <Text style={styles.step}>4. Verificar lista de dispositivos detectados</Text>
            <Text style={styles.step}>5. Presionar Update DEVCON</Text>
          </View>

          <View style={styles.infoBox}>
            <Icon name="check-decagram" size={18} color="#4CAF50" />
            <Text variant="bodySmall" style={styles.infoText}>
              Check verde si la base de datos está actualizada
            </Text>
          </View>
        </Accordion>

        {/* SCREEN 11 */}
        <Accordion
          number="PASO 11"
          title="Email Client Configuration"
          icon="email-settings"
          delay={260}
        >
          <Text variant="bodyMedium" style={styles.subtitle}>
            <Text style={styles.bold}>Propósito:</Text> Configurar el cliente de correo Thunderbird para Postman III.
          </Text>

          <Text variant="titleSmall" style={styles.sectionTitle}>
            📧 Pasos de configuración:
          </Text>

          <View style={styles.stepsList}>
            <Text style={styles.step}>1. Abrir Mozilla Thunderbird</Text>
            <Text style={styles.step}>2. Crear cuenta con Email: OpUser@pm-domain.com</Text>
            <Text style={styles.step}>3. Configurar servidor según instalación local</Text>
            <Text style={styles.step}>4. Finalizar con Done</Text>
            <Text style={styles.step}>5. (Opcional) Cambiar idioma en Options → Language</Text>
          </View>

          <View style={styles.successBox}>
            <Icon name="check-circle" size={20} color="#4CAF50" />
            <Text variant="bodyMedium" style={styles.successText}>
              Cuenta de correo configurada y lista para operar dentro de Postman III
            </Text>
          </View>
        </Accordion>

        {/* Footer */}
        <ScreenEntrance delay={280}>
          <Surface style={styles.footerCard} elevation={1}>
            <Icon name="information-outline" size={24} color="#1976D2" />
            <Text variant="bodySmall" style={styles.footerText}>
              Manual de instalación R&S Postman III basado en el documento oficial 08 PIII_Installation Manual_en_2020-02-18
            </Text>
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
});
