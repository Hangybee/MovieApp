import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import AppNavigation from './navigation/appNavigation';
import UserContextProvider from './context/UserContextProvider';
const App = () => {
  return (
    <UserContextProvider>
      <AppNavigation />
    </UserContextProvider>
  )
}

export default App