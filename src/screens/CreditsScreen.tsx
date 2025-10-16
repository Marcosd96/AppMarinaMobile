import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Text, Surface, Card, useTheme, Divider, Icon } from 'react-native-paper';
import ScreenEntrance from '../components/ScreenEntrance';

export default function CreditsScreen({ navigation }: any) {
  const theme = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Appbar.Header mode="center-aligned" style={{ backgroundColor: theme.colors.primaryContainer }}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Créditos" />
      </Appbar.Header>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps="handled"
      >
        <ScreenEntrance>
          {/* Header Hero Section */}
          <Surface style={[styles.heroCard, { backgroundColor: theme.colors.primaryContainer }]} elevation={4}>
            <Card.Content style={styles.heroContent}>
              <View style={styles.heroIconContainer}>
                <Icon source="radio-tower" size={56} color={theme.colors.primary} />
              </View>
              <Text variant="headlineMedium" style={[styles.heroTitle, { color: theme.colors.onPrimaryContainer }]}>
                AppMarinaMobile
              </Text>
              <Text variant="bodyMedium" style={[styles.heroSubtitle, { color: theme.colors.onPrimaryContainer }]}>
                Sistema de Gestión HF
              </Text>
              <Text variant="bodyMedium" style={[styles.heroDescription, { color: theme.colors.onPrimaryContainer }]}>
                Aplicación desarrollada con el propósito de optimizar la supervisión, 
                configuración y gestión de equipos de Radio HF, integrando funciones de 
                control, monitoreo y diagnóstico para entornos profesionales de radiocomunicación.
              </Text>
            </Card.Content>
          </Surface>

          {/* Equipo de Desarrollo */}
          <Surface style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={2}>
            <Card.Content>
              <View style={styles.sectionHeader}>
                <Icon source="account-group" size={28} color={theme.colors.primary} />
                <Text variant="titleLarge" style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>
                  Equipo de Desarrollo
                </Text>
              </View>
              <Divider style={[styles.divider, { backgroundColor: theme.colors.primary }]} />
              
              <View style={[styles.personCard, { backgroundColor: theme.colors.surfaceVariant }]}>
                <View style={styles.personHeader}>
                  <View style={[styles.avatarCircle, { backgroundColor: theme.colors.primary }]}>
                    <Text variant="titleMedium" style={[styles.avatarText, { color: theme.colors.onPrimary }]}>
                      CM
                    </Text>
                  </View>
                  <View style={styles.personInfo}>
                    <Text variant="bodyLarge" style={[styles.personName, { color: theme.colors.onSurface }]}>
                      Cristian Camilo Moya Arévalo
                    </Text>
                    <View style={styles.roleContainer}>
                      <Icon source="code-braces" size={16} color={theme.colors.secondary} />
                      <Text variant="bodyMedium" style={[styles.personRole, { color: theme.colors.onSurfaceVariant }]}>
                        Desarrollador
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={[styles.personCard, { backgroundColor: theme.colors.surfaceVariant }]}>
                <View style={styles.personHeader}>
                  <View style={[styles.avatarCircle, { backgroundColor: theme.colors.tertiary }]}>
                    <Text variant="titleMedium" style={[styles.avatarText, { color: theme.colors.onTertiary }]}>
                      JL
                    </Text>
                  </View>
                  <View style={styles.personInfo}>
                    <Text variant="bodyLarge" style={[styles.personName, { color: theme.colors.onSurface }]}>
                      Jhan Paul Londoño Castillo
                    </Text>
                    <View style={styles.roleContainer}>
                      <Icon source="code-braces" size={16} color={theme.colors.secondary} />
                      <Text variant="bodyMedium" style={[styles.personRole, { color: theme.colors.onSurfaceVariant }]}>
                        Desarrollador
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </Card.Content>
          </Surface>

          {/* Diagnóstico de Fallas */}
          <Surface style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={2}>
            <Card.Content>
              <View style={styles.sectionHeader}>
                <Icon source="alert-circle-check" size={28} color={theme.colors.secondary} />
                <Text variant="titleLarge" style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>
                  Diagnóstico de Fallas
                </Text>
              </View>
              <Divider style={[styles.divider, { backgroundColor: theme.colors.secondary }]} />
              
              <View style={[styles.personCard, { backgroundColor: theme.colors.secondaryContainer }]}>
                <View style={styles.personHeader}>
                  <View style={[styles.avatarCircle, { backgroundColor: theme.colors.secondary }]}>
                    <Text variant="titleMedium" style={[styles.avatarText, { color: theme.colors.onSecondary }]}>
                      DT
                    </Text>
                  </View>
                  <View style={styles.personInfo}>
                    <Text variant="bodyLarge" style={[styles.personName, { color: theme.colors.onSurface }]}>
                      Deiby Giovanny Torres Agudelo
                    </Text>
                    <View style={styles.roleContainer}>
                      <Icon source="toolbox" size={16} color={theme.colors.secondary} />
                      <Text variant="bodyMedium" style={[styles.personRole, { color: theme.colors.onSurfaceVariant }]}>
                        Especialista en Diagnóstico
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </Card.Content>
          </Surface>

          {/* Fuentes Técnicas y Referencias */}
          <Surface style={[styles.card, { backgroundColor: theme.colors.surface }]} elevation={2}>
            <Card.Content>
              <View style={styles.sectionHeader}>
                <Icon source="book-open-variant" size={28} color={theme.colors.tertiary} />
                <Text variant="titleLarge" style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>
                  Fuentes Técnicas y Referencias
                </Text>
              </View>
              <Divider style={[styles.divider, { backgroundColor: theme.colors.tertiary }]} />
              
              <View style={[styles.referenceCard, { backgroundColor: theme.colors.tertiaryContainer }]}>
                <Icon source="file-document" size={24} color={theme.colors.tertiary} />
                <Text variant="bodyMedium" style={[styles.referenceText, { color: theme.colors.onTertiaryContainer }]}>
                  Basado en información y lineamientos técnicos tomados de los <Text style={styles.boldText}>manuales de Radio HF de Rohde & Schwarz</Text>, empleados como referencia para la correcta implementación y configuración de los sistemas de comunicación.
                </Text>
              </View>
            </Card.Content>
          </Surface>

          {/* Lema */}
          <Surface style={[styles.quoteCard, { backgroundColor: theme.colors.primary }]} elevation={4}>
            <Card.Content style={styles.quoteContent}>
              <Icon source="format-quote-open" size={40} color={theme.colors.onPrimary} />
              <Text variant="titleLarge" style={[styles.quote, { color: theme.colors.onPrimary }]}>
                Las operaciones navales llegan hasta donde las comunicaciones lo permitan
              </Text>
              <Icon source="format-quote-close" size={40} color={theme.colors.onPrimary} />
            </Card.Content>
          </Surface>

          {/* Footer con versión */}
          <View style={styles.footer}>
            <Icon source="information" size={20} color={theme.colors.onSurfaceVariant} />
            <Text variant="bodySmall" style={[styles.footerText, { color: theme.colors.onSurfaceVariant }]}>
              Versión 0.0.1 • Octubre 2025
            </Text>
          </View>
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
  // Hero Section
  heroCard: {
    marginBottom: 24,
    borderRadius: 20,
    overflow: 'hidden',
  },
  heroContent: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  heroIconContainer: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  heroTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSubtitle: {
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '600',
    opacity: 0.9,
  },
  heroDescription: {
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 8,
    opacity: 0.85,
  },
  // Cards
  card: {
    marginBottom: 20,
    borderRadius: 16,
    overflow: 'hidden',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  sectionTitle: {
    fontWeight: 'bold',
    flex: 1,
  },
  divider: {
    marginVertical: 12,
    height: 2,
    borderRadius: 1,
  },
  // Person Cards
  personCard: {
    marginTop: 12,
    marginBottom: 8,
    padding: 16,
    borderRadius: 12,
  },
  personHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatarCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  avatarText: {
    fontWeight: 'bold',
  },
  personInfo: {
    flex: 1,
  },
  personName: {
    fontWeight: '700',
    marginBottom: 6,
    fontSize: 16,
  },
  roleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  personRole: {
    fontStyle: 'italic',
    fontSize: 14,
  },
  // Reference Card
  referenceCard: {
    marginTop: 12,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  referenceText: {
    flex: 1,
    lineHeight: 22,
    textAlign: 'justify',
  },
  boldText: {
    fontWeight: 'bold',
  },
  // Quote Card
  quoteCard: {
    marginTop: 8,
    marginBottom: 24,
    borderRadius: 20,
    overflow: 'hidden',
  },
  quoteContent: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
    gap: 16,
  },
  quote: {
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 32,
    letterSpacing: 0.5,
  },
  // Footer
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
    gap: 8,
    opacity: 0.7,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
  },
});

