import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { Appbar, Text, Surface, Card, Button } from 'react-native-paper';
import ScreenEntrance from '../components/ScreenEntrance';

export default function FallasScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Appbar.Header mode="center-aligned" style={styles.header}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Fallas" />
      </Appbar.Header>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <ScreenEntrance>
          <Surface style={styles.card} elevation={2}>
            <Card.Content>
              <Text variant="headlineSmall" style={styles.title}>
                Diagnóstico de Fallas
              </Text>
              <Text variant="bodyMedium" style={styles.paragraph}>
                El diagnóstico sistemático de fallas es crucial para mantener la
                operatividad de los equipos HF y minimizar el tiempo de
                inactividad.
              </Text>
            </Card.Content>
          </Surface>
        </ScreenEntrance>

        <ScreenEntrance delay={60}>
          <Surface style={styles.card} elevation={2}>
            <Card.Content>
              <Text variant="headlineSmall" style={styles.title}>
                Introducción
              </Text>
              <Text style={styles.paragraph}>
                En este manual se podrán encontrar las soluciones a varios de
                los errores que puede presentar el software del sistema Rhode &
                schwarz, ya sea por incompatibilidad del Windows con las
                aplicaciones del radio, desprogramación del Java o por
                diferentes aspectos que pueden surgir al momento de estar
                operando el equipo.
              </Text>
              <Text style={styles.paragraph}>
                Estas soluciones han sido recopiladas por el personal que
                actualmente hace parte de la división de comunicaciones a través
                de la experiencia y pericia de los mismos.
              </Text>
              <Text style={styles.paragraph}>
                Con la intención de dejar un registro el cual sea utilizado para
                garantizar la trazabilidad de los conocimientos adquiridos, que
                en un futuro puedan ser de utilidad para los próximos operarios
                del equipo. Se dejará plasmado en este manual el paso a paso que
                deben de seguir para solventar los diferentes casos que en el
                presente documento se plantean y de esta forma contribuir
                positivamente para ampliar el conocimiento del personal de
                suboficiales de comunicaciones e impedir posibles contratiempos
                que se puedan presentar por culpa de estos errores del equipo al
                momento de estar en el área de operaciones.
              </Text>
            </Card.Content>
          </Surface>
        </ScreenEntrance>

        <ScreenEntrance delay={120}>
          <Surface style={styles.card} elevation={2}>
            <Card.Content>
              <Text variant="headlineSmall" style={styles.title}>
                EL SISTEMA NO LLAMA AL INTENTAR HACER UNA TRANSFERENCIA DE DATOS
              </Text>
              <Text style={styles.paragraph}>
                Este problema surgió cuando se actualizo el sistema de Windows 7
                al Windows 10 y se presenta cada vez que se enciende el equipo.
                Para solucionar este problema debe seguir los siguientes pasos:
              </Text>
              <Text style={styles.stepTitle}>PASO N°1 ingresar al DEVCON.</Text>
              <Image
                source={require('../../Images/fallas/ingresar_devcon.png')}
                style={styles.stepImage}
                resizeMode="contain"
              />

              <Text style={styles.stepTitle}>
                PASO N°2 desenlazar todas las unidades.
              </Text>
              <Image
                source={require('../../Images/fallas/desenlazar_unidades.png')}
                style={styles.stepImage}
                resizeMode="contain"
              />

              <Text style={styles.stepTitle}>
                PASO N°3 esperamos a que se desenlacen una por una las unidades.
              </Text>
              <Image
                source={require('../../Images/fallas/esperar_desenlace.png')}
                style={styles.stepImage}
                resizeMode="contain"
              />

              <Text style={styles.stepTitle}>
                PASO N°4 enlazamos todas las unidades desde el DEVCON.
              </Text>
              <Image
                source={require('../../Images/fallas/enlazamos_todas_unidades.png')}
                style={styles.stepImage}
                resizeMode="contain"
              />

              <Text style={styles.stepTitle}>
                PASO N°5 Esperamos que se vuelvan a enlazar todas las unidades.
              </Text>
              <Image
                source={require('../../Images/fallas/esperar_volver_enlazar.png')}
                style={styles.stepImage}
                resizeMode="contain"
              />

              <Text style={styles.stepTitle}>
                PASO N°6 Cerramos todas las ventanas y reiniciamos el servidor.
              </Text>
              <Image
                source={require('../../Images/fallas/cerrar_todas_ventanas.png')}
                style={styles.stepImage}
                resizeMode="contain"
              />

              <Text style={styles.stepTitle}>
                PASO N°7 Una vez que se reinicie el servidor comprobamos que el
                sistema ya llame al hacer una transferencia de datos.
              </Text>
              <Image
                source={require('../../Images/fallas/comprobar.png')}
                style={styles.stepImage}
                resizeMode="contain"
              />
            </Card.Content>
          </Surface>
        </ScreenEntrance>

        <ScreenEntrance delay={140}>
          <Surface style={styles.card} elevation={2}>
            <Card.Content>
              <Text variant="headlineSmall" style={styles.title}>
                Procedimiento de Reparación
              </Text>
              <Text variant="bodyMedium" style={styles.paragraph}>
                1. Identificar el síntoma{'\n'}
                2. Realizar diagnóstico inicial{'\n'}
                3. Aislar el componente defectuoso{'\n'}
                4. Reemplazar o reparar{'\n'}
                5. Verificar funcionamiento{'\n'}
                6. Documentar la intervención
              </Text>
            </Card.Content>
          </Surface>
        </ScreenEntrance>

        <ScreenEntrance delay={180}>
          <Surface style={styles.card} elevation={2}>
            <Card.Content>
              <Text variant="headlineSmall" style={styles.title}>
                JAVA IMPIDE QUE SE EJECUTEN LAS APLICACIONES DE R&S
              </Text>
              <Image
                source={require('../../Images/fallas/java_impide.png')}
                style={[styles.stepImage, { height: 220 }]}
                resizeMode="contain"
              />
              <Text style={styles.paragraph}>
                En caso de que al intentar ejecutar alguna aplicación de sistema
                R&S le aparece esta ventana (más adelante tendremos que tener en
                cuenta el código subrayado), debe seguir los siguientes pasos:
              </Text>
              <Text style={styles.stepTitle}>
                PASO N°1 buscamos las configuraciones de Java y abrimos.
              </Text>
              <Image
                source={require('../../Images/fallas/buscar_configuraciones.png')}
                style={styles.stepImage}
                resizeMode="contain"
              />

              <Text style={styles.stepTitle}>
                PASO N°2 En la pestaña de seguridad ingresamos a editar lista de
                sitios.
              </Text>
              <Image
                source={require('../../Images/fallas/pestana_seguridad.png')}
                style={styles.stepImage}
                resizeMode="contain"
              />

              <Text style={styles.stepTitle}>
                PASO N°3 De clic en agregar, luego introducimos el código del
                error (Http://KMY-SRV en este caso) y posteriormente damos
                aceptar.
              </Text>
              <Image
                source={require('../../Images/fallas/introducir_codigo_error.png')}
                style={styles.stepImage}
                resizeMode="contain"
              />
              <Image
                source={require('../../Images/fallas/click_aceptar.png')}
                style={styles.stepImage}
                resizeMode="contain"
              />

              <Text style={styles.stepTitle}>
                PASO N°4 De clic en continuar.
              </Text>
              <Image
                source={require('../../Images/fallas/click_continuar.png')}
                style={styles.stepImage}
                resizeMode="contain"
              />

              <Text style={styles.stepTitle}>PASO N°5 De clic en aceptar.</Text>
              <Image
                source={require('../../Images/fallas/click_aceptar.png')}
                style={styles.stepImage}
                resizeMode="contain"
              />

              <Text style={styles.stepTitle}>
                PASO N°6 Comprobamos que ya se ejecuten correctamente las
                aplicaciones del sistema R&S.
              </Text>
              <Image
                source={require('../../Images/fallas/comprobar.png')}
                style={styles.stepImage}
                resizeMode="contain"
              />
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
  paragraph: {
    marginTop: 8,
    lineHeight: 20,
  },
  stepTitle: {
    marginTop: 10,
    fontWeight: '600',
    color: '#0b4aa2',
  },
  stepImage: {
    width: '100%',
    height: 200,
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: '#f3f4f6',
  },
  button: {
    marginTop: 20,
  },
});
