import { PaperProvider } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>

        <Tab.Navigator>

          <Tab.Screen 
          name='HomeScreen' 
          component={HomeScreen} 
          options={{
             title:'Inicio',
             tabBarIcon: {{Color, size}} => <Ionicons name='home' color={color} size={size} />          
          }}
          />

          <Tab.Screen 
          name='ProfileScreen' 
          component={ProfileScreen} />

          <Tab.Screen 
          name='SettingsScreen' 
          component={SettingsScreen} />

        </Tab.Navigator>

      </NavigationContainer>

    </PaperProvider>
    
  );
}


