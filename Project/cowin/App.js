/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react'; 
 import 'react-native-gesture-handler';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 
 import Home from './src/home';
 import Inter from './src/inter';
 import Final from './src/final';

 const Stack=createStackNavigator();

 export default function(){
 
   return(
     <NavigationContainer >
       <Stack.Navigator  initialRouteName='home' headerMode={false}>
         <Stack.Screen component={Home} name='home' />
         <Stack.Screen component={Inter} name='inter' />
         <Stack.Screen component={Final} name='final' />
       </Stack.Navigator>
     </NavigationContainer>
     );
 }
 