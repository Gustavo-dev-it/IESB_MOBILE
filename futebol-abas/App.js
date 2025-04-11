import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EscudoScreen from './Screen/EscudoScreen';
import JogadoresScreen from './Screen/JogadoresScreen';
import TitulosScreen from './Screen/TitulosScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Escudo') {
              iconName = 'shield';
            } else if (route.name === 'Jogadores') {
              iconName = 'account-group';
            } else if (route.name === 'Títulos') {
              iconName = 'trophy';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#e50914',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Escudo" component={EscudoScreen} />
        <Tab.Screen name="Jogadores" component={JogadoresScreen} />
        <Tab.Screen name="Títulos" component={TitulosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
