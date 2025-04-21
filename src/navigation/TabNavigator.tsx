import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import DenunciaScreen from '../screens/DenunciaScreen';
import DadosScreen from '../screens/DadosScreen';
import InfoScreen from '../screens/InfoScreen';
import ApoioScreen from '../screens/ApoioScreen';
import DesenvolvedoresScreen from '../screens/DesenvolvedoresScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string;

            switch (route.name) {
              case 'Início':
                iconName = 'home';
                break;
              case 'Denúncia':
                iconName = 'alert-circle';
                break;
              case 'Status':
                iconName = 'checkmark-circle';
                break;
              case 'Informações':
                iconName = 'information-circle';
                break;
              case 'Apoio':
                iconName = 'heart';
                break;
              case 'Desenvolvedores':
                iconName = 'people';
                break;
              default:
                iconName = 'ellipse';
            }

            return <Ionicons name={iconName as any} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4E9F3D',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Denúncia" component={DenunciaScreen} />
        <Tab.Screen name="Dados" component={DadosScreen} />
        <Tab.Screen name="Informações" component={InfoScreen} />
        <Tab.Screen name="Apoio" component={ApoioScreen} />
        <Tab.Screen name="Desenvolvedores" component={DesenvolvedoresScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
