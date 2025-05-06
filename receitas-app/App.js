import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ReceitaScreen from './screens/ReceitaScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: '#6200EE', // Cor de fundo do cabeçalho
        },
        headerTitleStyle: {
          fontWeight: 'bold', // Estilo da fonte do título
          color: '#fff', // Cor do título
        },
        headerTintColor: '#fff', // Cor dos ícones do cabeçalho (como a seta de voltar)
      }}>
        {/* Tela Home */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Receitas Deliciosas',  // Título personalizado da tela Home
          }}
        />
        
        {/* Tela de Detalhes da Receita */}
        <Stack.Screen
          name="Receita"
          component={ReceitaScreen}
          options={{
            title: 'Detalhes da Receita', // Título personalizado da tela Receita
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
