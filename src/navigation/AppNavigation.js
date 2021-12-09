import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';

import Login from '../screens/Auth/Login';

const Stack = createStackNavigator();
enableScreens();

const AppNavigation = () => {
    return(
        <AuthNavigation />
    )
}

const AuthNavigation = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
