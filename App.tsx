import React,  { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { TareaScreen } from './src/screens/TareaScreen';
import { HomeScreen } from './src/screens/Home';
import SplashScreen from './src/components/SplashScreen';
import { Animated } from 'react-native';
import { Image } from 'react-native-svg';
import Particulas from './src/screens/Particulas';
import CarrouselImagenes from './src/screens/CarrouselImagenes';


const Drawer = createDrawerNavigator();

export default function App() {
  //Fake Loading screen
  const [isLoading, setIsLoading] = useState(true);
  const fadeSplash = new Animated.Value(1);

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(fadeSplash, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setIsLoading(false);
      });
    }, 6000);//tiempo
  }, []);

  if (isLoading) {
    return (
      <Animated.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', opacity: fadeSplash }}>
        <SplashScreen />
      </Animated.View>
    );
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Bienvenido" component={HomeScreen} />
        <Drawer.Screen name="Contador" component={ContadorScreen} />
        <Drawer.Screen name="Hola Mundo" component={HolaMundoScreen} />
        <Drawer.Screen name="BoxObjectModelScreen" component={BoxObjectModelScreen} />
        <Drawer.Screen name="Tienda" component={CarrouselImagenes} />
        <Drawer.Screen name="Tarea" component={TareaScreen} />
        <Drawer.Screen name="Particulas" component={Particulas} />
        <Drawer.Screen name="DimensionesScreen" component={DimensionesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



//import React from 'react';
//import { SafeAreaView } from 'react-native';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import { FlexScreen } from './src/screens/FlexScreen';
//import { TareaScreen } from './src/screens/TareaScreen';

//export const App = () => {
/* 

  //return (
   <SafeAreaView style={{ 
      flex: 1,
      backgroundColor: '#28425B'
    }}>
      { <HolaMundoScreen /> }
      {<ContadorScreen /> }
      { <BoxObjectModelScreen /> }
      {<DimensionesScreen /> }
      {<PositionScreen /> }
      {<FlexScreen /> }
      //<TareaScreen />

    //</SafeAreaView>
  //)
}
*/