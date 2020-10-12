import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Home } from './src/screens/homeScreens/homescreen';

import { NotificationScreen } from './src/screens/notificationScreen/notificationScreen'
import { About } from './src/screens/aboutScreen/about';
import { createStackNavigator } from '@react-navigation/stack'



const Stack = createStackNavigator();

export default function App() {

 

  return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen
          name= 'Notifications'
          component={}
         />
         <Stack.Screen
         name= 'About'
         component={}
         />
       </Stack.Navigator>
    </NavigationContainer>
  );
}


