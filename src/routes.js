import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignUp from './pages/SignUp';
import SignUpProfile from './pages/SignUpProfile';
import SignIn from './pages/SignIn';


const AppStack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode="none" 
        screenOptions={{
          cardStyle:{
            backgroundColor: '#fff',
          }
        }}
      >
        <AppStack.Screen name="SignUp" component={SignUp}/>
        <AppStack.Screen name="SignUpProfile" component={SignUpProfile}/>
        <AppStack.Screen name="SignIn" component={SignIn}/>
       
      </AppStack.Navigator>
    </NavigationContainer>
  )
}