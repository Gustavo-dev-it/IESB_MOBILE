import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MegaSena from "./screen/MegaSena";
import JogoDoBicho from "./screen/JogoDoBicho";
import { MaterialCommunityIcons } from "react-native-vector-icons"; // Para os ícones das abas

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Mega Sena"
          component={MegaSena}
          options={{
            tabBarIcon: () => <MaterialCommunityIcons name="numeric" size={24} />,
          }}
        />
        <Tab.Screen
          name="Jogo do Bicho"
          component={JogoDoBicho}
          options={{
            tabBarIcon: () => <MaterialCommunityIcons name="paw" size={24} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
