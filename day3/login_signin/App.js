/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import Signup from './src/Signup';
import Forget from './src/Forget';
import Main from './src/Main';
import Terms from './src/Terms';
const Stack=createStackNavigator();
export default function(){

  return(
    <NavigationContainer >
      <Stack.Navigator  initialRouteName='Main' headerMode={false}>
        
        <Stack.Screen component={Login} name='Login' />
        <Stack.Screen component={Terms} name='Terms' />
        <Stack.Screen component={Signup} name='Signup' />
        <Stack.Screen component={Forget} name='Forget' />
        <Stack.Screen component={Main} name='Main' />
        
      </Stack.Navigator>
    </NavigationContainer>
    );
}
