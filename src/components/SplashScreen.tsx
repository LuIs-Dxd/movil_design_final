import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/gifs/splash.gif')} style={styles.gif} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Personaliza el color de fondo según tus necesidades
  },
  gif: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
