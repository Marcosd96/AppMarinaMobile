import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
  Image,
  Animated,
} from 'react-native';
import { useWindowDimensions } from 'react-native';
import { Appbar, Text, Surface } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Replaced SVG icon components with static images from Images/iconos_landing

// Background image
const backgroundImage = require('../fondo.jpg');

// Image assets
const ICONS = {
  introduccion: require('../Images/iconos_landing/introduccion512.jpg'),
  conceptos: require('../Images/iconos_landing/conceptostecnicos512.jpg'),
  operatividad: require('../Images/iconos_landing/operatividad512.jpg'),
  postman: require('../Images/iconos_landing/postman512.jpg'),
  fillgun: require('../Images/iconos_landing/fillgun512.jpg'),
  fallas: require('../Images/iconos_landing/fallas512.jpg'),
} as const;

export default function AppContent({ navigation }: any) {
  const { width } = useWindowDimensions();
  const isSmallPhone = width < 400;
  const insets = useSafeAreaInsets();

  // Breakpoints and responsive layout config
  const BP = { xs: 360, sm: 400, md: 480, lg: 600 } as const;
  const size =
    width < BP.xs ? 'xs' : width < BP.sm ? 'sm' : width < BP.md ? 'md' : 'lg';

  // Compact layout for high-DPI small widths (e.g., 1080x2400 ~ 360dp width)
  const iconHeight =
    size === 'xs' ? 68 : size === 'sm' ? 84 : size === 'md' ? 96 : 108;
  const contentHeight =
    size === 'xs' ? 40 : size === 'sm' ? 48 : size === 'md' ? 56 : 64;
  const cardHeight = iconHeight + contentHeight;

  const layout = {
    gridJustify: size === 'xs' ? 'flex-start' : 'space-between',
    cardWidthPercent: size === 'xs' ? '96%' : '48%',
    cardHeight,
    iconHeight,
    contentHeight,
    titleFontSize: size === 'xs' ? 10 : size === 'sm' ? 11 : size === 'md' ? 11 : 12,
    titleLineHeight: size === 'xs' ? 12 : size === 'sm' ? 13 : size === 'md' ? 14 : 15,
    headerTitleSize: size === 'xs' ? 18 : size === 'sm' ? 20 : size === 'md' ? 22 : 24,
    horizontalPadding: size === 'xs' ? 10 : 20,
  } as const;

  // Per-card animated scale values
  const scaleValuesRef = React.useRef<Record<number, Animated.Value>>({});
  const getScale = (id: number) => {
    if (!scaleValuesRef.current[id]) {
      scaleValuesRef.current[id] = new Animated.Value(1);
    }
    return scaleValuesRef.current[id];
  };
  const animateScale = (id: number, toValue: number) => {
    Animated.spring(getScale(id), {
      toValue,
      useNativeDriver: true,
      friction: 6,
      tension: 200,
    }).start();
  };

  const menuItems = [
    {
      id: 1,
      title: 'INTRODUCCIÓN HF',
      image: ICONS.introduccion,
      onPress: () => navigation.navigate('IntroduccionHF'),
    },
    {
      id: 2,
      title: 'CONCEPTOS TÉCNICOS DE HARDWARE',
      image: ICONS.conceptos,
      onPress: () => navigation.navigate('ConceptosTecnicos'),
    },
    {
      id: 3,
      title: 'OPERATIVIDAD DEL EQUIPO',
      image: ICONS.operatividad,
      onPress: () => navigation.navigate('Operatividad'),
    },
    {
      id: 4,
      title: 'USO E INSTALACIÓN DE POSTMAN',
      image: ICONS.postman,
      onPress: () => navigation.navigate('Postman'),
    },
    {
      id: 5,
      title: 'USO DEL FILLGUN',
      image: ICONS.fillgun,
      onPress: () => navigation.navigate('Fillgun'),
    },
    {
      id: 6,
      title: 'FALLAS',
      image: ICONS.fallas,
      onPress: () => navigation.navigate('Fallas'),
    },
  ];

  return (
    <View style={styles.container}>
      <Appbar.Header mode="center-aligned" style={styles.header}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content
          title="HF ROHDE & SCHWARZ"
          titleStyle={{ fontSize: layout.headerTitleSize }}
        />
      </Appbar.Header>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="stretch"
        imageStyle={{ opacity: 0.4 }}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={[
            styles.content,
            {
              padding: layout.horizontalPadding,
              paddingBottom: Math.max(layout.horizontalPadding, insets.bottom + 24),
            },
          ]}
        >
          <View
            style={[
              styles.grid,
              { justifyContent: layout.gridJustify as any },
            ]}
          >
            {menuItems.map(item => (
              <Pressable
                key={item.id}
                style={[
                  styles.cardContainer,
                  {
                    width: layout.cardWidthPercent,
                    height: layout.cardHeight + (item.id === 3 ? 8 : 0),
                    alignSelf: size === 'xs' ? 'center' : 'auto',
                    marginBottom: size === 'xs' || size === 'sm' ? 20 : 16,
                  },
                ]}
                onPress={item.onPress}
                onPressIn={() => animateScale(item.id, 0.97)}
                onPressOut={() => animateScale(item.id, 1)}
              >
                <Animated.View
                  style={{
                    transform: [{ scale: getScale(item.id) }],
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <Surface style={[styles.menuCard, styles.shadow]} elevation={3}>
                  <View
                    style={[
                      styles.cardIconContainer,
                        { height: layout.iconHeight },
                    ]}
                  >
                    <Image
                      source={item.image}
                        style={styles.cardImage}
                      resizeMode="contain"
                    />
                  </View>
                  <View
                    style={[
                      styles.cardContent,
                        { height: layout.contentHeight },
                    ]}
                  >
                    <Text
                      variant="labelMedium"
                      style={[
                        styles.cardTitle,
                        {
                            fontSize: layout.titleFontSize,
                            lineHeight: layout.titleLineHeight,
                        },
                      ]}
                    >
                      {item.title}
                    </Text>
                  </View>
                  </Surface>
                </Animated.View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 124, 248, 0.5)',
  },
  header: {
    backgroundColor: 'rgba(25, 118, 210)',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    paddingBottom: 20,
    justifyContent: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContainer: {
    width: '48%',
    marginBottom: 16,
    height: 140,
  },
  menuCard: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'rgb(0, 124, 248)',
  },
  cardIconContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 12,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardIcon: {
    fontSize: 32,
    color: 'white',
  },
  cardContent: {
    backgroundColor: 'rgb(0, 124, 248)',
    paddingVertical: 6,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#fff',
    fontSize: 10,
    lineHeight: 12,
    textAlignVertical: 'center',
  },
});
