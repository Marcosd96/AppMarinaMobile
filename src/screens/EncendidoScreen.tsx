import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Text, Surface, Card } from 'react-native-paper';

export default function EncendidoScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Appbar.Header mode="center-aligned" style={styles.header}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Encendido" />
      </Appbar.Header>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Surface style={styles.card} elevation={2}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>Procedimiento de Encendido</Text>
            <Text>
              1. Verifique conexiones y alimentación.
              {'\n'}2. Active el interruptor principal.
              {'\n'}3. Espere autodiagnóstico inicial.
              {'\n'}4. Confirme indicadores de estado.
            </Text>
          </Card.Content>
        </Surface>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { backgroundColor: 'rgba(25, 118, 210, 0.9)' },
  scrollView: { flex: 1 },
  content: { padding: 20, paddingBottom: 40 },
  card: { marginBottom: 16, borderRadius: 12, backgroundColor: 'white' },
  title: { marginBottom: 8, fontWeight: 'bold' },
});


