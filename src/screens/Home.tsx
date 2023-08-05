import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView, Image, TouchableOpacity, Animated } from 'react-native';

const logo = require('../../assets/logo.png');
const logo2 = require('../../assets/images/abinader.jpg');
const logo3 = require('../../assets/images/Elonmus.png');

const logos = [logo, logo2, logo3]; 

const noticias = [
  "¡Bienvenido a mi primera app!",
  "Si pulsas el icono del navegador (Drawer-navigator) en la esquina superior izquierda,",
  "podrás explorar todas las pantallas y características de esta aplicación.",
  "🚀",
];

export const HomeScreen = () => {
  const [noticiaIndex, setNoticiaIndex] = useState(0);
  const [logoIndex, setLogoIndex] = useState(0); 
  const fadeValue = new Animated.Value(0); 

  useEffect(() => {
   //contador
    const interval = setInterval(() => {
      setLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const cambiarNoticia = () => {
    setNoticiaIndex((prevIndex) => (prevIndex + 1) % noticias.length);
  };

  // animacion fade para la fusion de las imagenes
  Animated.timing(fadeValue, {
    toValue: 1, // Op total
    duration: 1000, 
    useNativeDriver: true,
  }).start();

  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: 'linear-gradient()',
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Luis Caba 20210799</Text>
        <ScrollView>
          <Text style={styles.noticia}>{noticias[noticiaIndex]}</Text>
          <TouchableOpacity onPress={cambiarNoticia} style={styles.botonSiguiente}>
            <Text style={styles.botonSiguienteTexto}>Siguiente</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.logoContainer}>
          <View style={styles.cuadroP} />
          <Animated.Image
            style={[styles.logo, { opacity: fadeValue }]}
            source={logos[logoIndex]}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a505b'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'relative',
    marginTop: 90,
    alignItems: 'center',
  },
  cuadroP: {
    width: 470, 
    height: 320, 
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
  },

  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'white',
    marginTop: 10, 
  },
  noticia: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    marginTop: 10,
  },
  botonSiguiente: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  botonSiguienteTexto: {//si lo pongo separado no funciona
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  logo: {
    width: 420, // Ancho fijo para la imagen
    height: 250, // Altura fija para la imagen
    alignSelf: 'center',
    top: '00%',
  },
  
});

export default HomeScreen;
