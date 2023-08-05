import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableHighlight, Image, Animated } from 'react-native';
import { Fab } from '../components/Fab';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['ViewPropTypes']);

export const ContadorScreen = () => {
    const [contador, setContador] = useState(10);
    const [isImageBackground, setIsImageBackground] = useState(false);
    const [jumpValue] = useState(new Animated.Value(0));

    useEffect(() => {
        if (contador > 0) {
            jump(); // Salta cuando el contador es mayor que 10
        }
    }, [contador]);

    const jump = () => {
        Animated.sequence([
            Animated.timing(jumpValue, { toValue: -70, duration: 300, useNativeDriver: false }),
            Animated.timing(jumpValue, { toValue: 0, duration: 300, useNativeDriver: false }),
        ]).start();
    };
    

    const resetearContador = () => {
        setContador(0);
    };

    const toggleBackground = () => {
        setIsImageBackground(!isImageBackground);
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.background}
                source={isImageBackground ? require('../../assets/gifs/background.gif') : null} //fondo
                resizeMode="cover" //cover para cortar la imgen
            >
                <Text style={styles.title}>
                    Contador: {contador}
                </Text>
                <Animated.Image
                    source={require('../../assets/gifs/Trex.gif')} // dino
                    style={[styles.image, { transform: [{ translateY: jumpValue }] }]}
                />

                <View style={styles.buttonContainer1}>
                    <Fab //botones contador
                        title="+1"
                        onPress={() => setContador(contador + 1)}
                    />
                </View>

                <View style={styles.buttonContainer2}>
                    <Fab
                        title="-1"
                        position="bl"
                        onPress={() => setContador(contador - 1)}
                    />
                </View>

                <View style={styles.botonReset}>
                    <Fab
                        title="R"
                        onPress={resetearContador}
                    />
                </View>

                <TouchableHighlight
                    style={styles.changeBackgroundButton}
                    onPress={toggleBackground}
                >
                    <Text style={styles.changeBackgroundButtonText}>
                        Cambiar Fondo
                    </Text>
                </TouchableHighlight>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    title: {
        fontSize: 40,
        top: '-40%',
        textAlign: 'center',
        color: '#5f84fc',
    },
    background: {
        top:'35%',
        width: '100%', // Ancho al 100% de la pantalla
        height: '48%', // Altura al 100% de la pantalla
        left: '0%',
        position: 'absolute',
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        top: '9.7%',
        left: '-23%',
    },
    botonReset: {
        position: 'absolute',
        bottom: '0%',
        right: 0,
        top:'27%',
    },
    changeBackgroundButton: {
        position: 'absolute',
        bottom: '-27%',
        right: '36%',
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 8,
    },
    changeBackgroundButtonText: {
        color: 'white',
        fontSize: 16,
    },
    buttonContainer1: {
        position: 'absolute',
        bottom: '-37%', // Ajusta esta posición para mover el botón hacia arriba
        left:'100%',
    },
    buttonContainer2: {
        position: 'absolute',
        bottom: '-37%', // Ajusta esta posición para mover el botón hacia arriba
        left:'0%',
    },
}); 

export default ContadorScreen;
