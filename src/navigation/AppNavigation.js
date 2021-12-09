import React from 'react';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {enableScreens} from 'react-native-screens';

import Login from '../screens/Auth/Login';
import PublicDiscussion from '../screens/Public Discussion/publicDiscussion';
import Discussion from '../screens/Discussion/discussion';
import Profile from '../screens/Profile/profile';

import CustomIcon from '../components/CustomIcon'
import { ACTIVE, INACTIVE } from '../utils/colors';

const ICON_SIZE = 28;

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

enableScreens();

const AppNavigation = () => {
  const {loggedIn} = useSelector(state => state);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        {loggedIn ? <Stack.Screen name="BottomTab" component={BottomTabNavigation} /> : <Stack.Screen name="Login" component={AuthNavigation} />}
    </Stack.Navigator>
  );
};

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

const BottomTabNavigation = ({}) => {
  return (
    <BottomTab.Navigator
      initialRouteName="Public Discussion"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarInactiveTintColor: INACTIVE,
        tabBarActiveTintColor: ACTIVE,
        tabBarStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <BottomTab.Screen
        name="Public Discussion"
        component={PublicDiscussion}
        options={{
          tabBarIcon: ({color, focused}) => (
            <CustomIcon
              name={focused ? 'group-filled' : 'group-outline'}
              color={color}
              size={ICON_SIZE}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Discussion"
        component={Discussion}
        options={{
          tabBarIcon: ({color, focused}) => (
            <CustomIcon
              name={focused ? 'discuss-filled' : 'discuss-outline'}
              color={color}
              size={ICON_SIZE - 8}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, focused}) => (
            <CustomIcon
              name={focused ? 'profile-filled' : 'profile-outline'}
              color={color}
              size={ICON_SIZE - 8}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default AppNavigation;
