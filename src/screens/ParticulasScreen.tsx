import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Particulas from './Particulas'; 
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['ViewPropTypes']);

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Particulas" component={Particulas} />
    </Tab.Navigator>
  );
}

const ParticulasScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MyTabs />
    </View>
  );
};

export default ParticulasScreen;
