import React, { useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NeonButton from '../components/NeonButton';

export default function HomeScreen() {
  const navigation = useNavigation();
  const earthSpin = new Animated.Value(0);
  const moonSpin = new Animated.Value(0);

  useEffect(() => {
    const earthAnim = Animated.loop(
      Animated.timing(earthSpin, {
        toValue: 1,
        duration: 36500,
        useNativeDriver: true,
      })
    );

    const moonAnim = Animated.loop(
      Animated.timing(moonSpin, {
        toValue: 1,
        duration: 2700,
        useNativeDriver: true,
      })
    );

    earthAnim.start();
    moonAnim.start();

    return () => {
      earthAnim.stop();
      moonAnim.stop();
    };
  }, []);

  const earthRotation = earthSpin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const moonRotation = moonSpin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.systemContainer}>
        {/* Sol */}
        <View style={styles.sun} />

        {/* Órbita da Terra */}
        <Animated.View style={[styles.earthOrbit, { transform: [{ rotate: earthRotation }] }]}>
          <View style={styles.earthPosition}>
            {/* Terra */}
            <View style={styles.earth} />
            
            {/* Órbita da Lua */}
            <Animated.View style={[styles.moonOrbit, { transform: [{ rotate: moonRotation }] }]}>
              <View style={styles.moon} />
            </Animated.View>
          </View>
        </Animated.View>
      </View>

      <NeonButton 
        title="Ir para Odômetro Digital" 
        onPress={() => navigation.navigate('Second' as never)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  systemContainer: {
    width: 300,
    height: 300,
    position: 'relative',
    marginBottom: 40,
  },
  sun: {
    position: 'absolute',
    top: 115,
    left: 115,
    width: 70,
    height: 70,
    backgroundColor: 'yellow',
    borderRadius: 35,
    shadowColor: 'yellow',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 20,
  },
  earthOrbit: {
    position: 'absolute',
    top: 40,
    left: 40,
    width: 220,
    height: 220,
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.3)',
    borderRadius: 110,
  },
  earthPosition: {
    position: 'absolute',
    top: 85,
    left: -12,
  },
  earth: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: 'aqua',
    shadowColor: 'aqua',
    shadowRadius: 5,
    shadowOpacity: 0.8,
    elevation: 5,
  },
  moonOrbit: {
    position: 'absolute',
    top: -10,
    left: -10,
    width: 60,
    height: 60,
    borderWidth: 0.3,
    borderColor: 'rgba(255,255,255,0.2)',
    borderRadius: 30,
  },
  moon: {
    position: 'absolute',
    top: 2,
    left: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'silver',
    shadowColor: 'silver',
    shadowRadius: 3,
    shadowOpacity: 0.6,
    elevation: 3,
  },
});