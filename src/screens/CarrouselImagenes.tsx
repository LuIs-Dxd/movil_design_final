import React from 'react';
import { View, StyleSheet, Dimensions, Image,Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['ViewPropTypes']);

const CarrouselImagenes = () => {
  const carouselData = [
    { id: 1, image: require('../../assets/images/pan1.jpg') },
    { id: 2, image: require('../../assets/images/pan2.jpg') },
    { id: 3, image: require('../../assets/images/cesped.jpg') },
    // Agrega más imágenes según sea necesario
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width - 40} // Ancho de cada elemento del carrusel
      />
      <Text style={styles.texto}>
                        Comprar
                    </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '98%',
    height: 200, // Altura de cada imagen en el carrusel
    top: '7%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  texto:{
    position: 'absolute',
    bottom:'64%',
    right: '41%',
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 100,
  }
});

export default CarrouselImagenes;
