import React from "react";
import { View, StyleSheet } from "react-native";
import ParticleBackground from "react-native-particle-background";

const ParticleScreen = () => {
  return (
    <View style={styles.container}>
      <ParticleBackground
        particleColor="#rgba(0, 255, 34, 0.2)"
        particleSize={8}
        particleDispersion={32}
        backgroundColor="black"
        numParticles={100} // Número de partículas
        direction="up" // Dirección de movimiento de las partículas
        speed={1} // Velocidad de movimiento
        spread={2} // Ángulo de dispersión de las partículas
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ParticleScreen;
