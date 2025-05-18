import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, Animated, StyleSheet, Dimensions } from 'react-native';

const NeonButton = ({ title, onPress }: { title: string; onPress: () => void }) => {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number; size: number }[]>([]);
  const pulseAnim = new Animated.Value(1);
  const scaleAnim = new Animated.Value(0);
  const opacityAnim = new Animated.Value(1);

  useEffect(() => {
    // Animação de pulsação contínua
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const handlePress = (event: any) => {
    const { locationX, locationY } = event.nativeEvent;
    const buttonWidth = Dimensions.get('window').width * 0.6;
    const size = Math.max(buttonWidth, 50);

    const newRipple = {
      id: Date.now(),
      x: locationX - size / 2,
      y: locationY - size / 2,
      size: size,
    };

    setRipples([...ripples, newRipple]);

    // Animação do ripple
    scaleAnim.setValue(0);
    opacityAnim.setValue(1);
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 4,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    });

    onPress();
  };

  return (
    <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
      <TouchableOpacity
        style={styles.neonButton}
        activeOpacity={0.8}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>{title}</Text>
        
        {ripples.map(ripple => (
          <Animated.View
            key={ripple.id}
            style={[
              styles.ripple,
              {
                left: ripple.x,
                top: ripple.y,
                width: ripple.size,
                height: ripple.size,
                transform: [{ scale: scaleAnim }],
                opacity: opacityAnim,
              },
            ]}
          />
        ))}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  neonButton: {
    position: 'relative',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#0aff9d',
    backgroundColor: 'rgba(10, 255, 157, 0.1)',
    overflow: 'hidden',
    shadowColor: '#0aff9d',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 15,
    elevation: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(10, 255, 157, 0.8)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  ripple: {
    position: 'absolute',
    borderRadius: 100,
    backgroundColor: 'rgba(0, 255, 157, 0.5)',
  },
});

export default NeonButton;