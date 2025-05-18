import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NeonButton from './../components/NeonButton';

const SecondScreen = () => {
  const navigation = useNavigation();
  const [digits, setDigits] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDigits(prevDigits => {
        let newCount = parseInt(prevDigits.join('')) + 1;
        if (newCount >= 100000) newCount = 0;
        return newCount.toString().padStart(5, '0').split('').map(Number);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.odometer}>
        {digits.map((digit, index) => (
          <View key={index} style={styles.digitContainer}>
            <AnimatedDigit digit={digit} />
          </View>
        ))}
      </View>

      <NeonButton 
        title="Voltar ao Sistema Solar" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
};

const AnimatedDigit = ({ digit }: { digit: number }) => {
  const animation = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: -digit * 50,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [digit]);

  return (
    <View style={styles.digitStripContainer}>
      <Animated.View 
        style={[styles.digitStrip, { transform: [{ translateY: animation }] }]}
      >
        {[...Array(10)].map((_, i) => (
          <Text key={i} style={styles.digit}>
            {i}
          </Text>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  odometer: {
    flexDirection: 'row',
    backgroundColor: '#111',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#0f0',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 20,
    elevation: 10,
    marginBottom: 40,
  },
  digitContainer: {
    width: 40,
    height: 50,
    overflow: 'hidden',
    marginHorizontal: 2,
    borderWidth: 2,
    borderColor: '#0f0',
    backgroundColor: '#000',
    borderRadius: 6,
  },
  digitStripContainer: {
    height: 500,
  },
  digitStrip: {
    alignItems: 'center',
  },
  digit: {
    height: 50,
    lineHeight: 50,
    textAlign: 'center',
    fontSize: 24,
    color: '#0f0',
    fontFamily: 'monospace',
  },
});

export default SecondScreen;