import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import MovieScreen from '../screens/MovieScreen';
import Cast from '../component/Cast';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator()
const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen} />
            <Stack.Screen name='Movie' options={{headerShown: false}} component={MovieScreen} />
            <Stack.Screen name='Person' options={{headerShown: false}} component={PersonScreen} />
            <Stack.Screen name='Search' options={{headerShown: false}} component={SearchScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation