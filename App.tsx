import { View, Text, Platform } from 'react-native'
import React, { useEffect } from 'react'
import 'react-native-gesture-handler';
import AppNavigation from './navigation/appNavigation';
import UserContextProvider from './context/UserContextProvider';
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  useEffect(()=>{
    if(Platform.OS==='android')
    SplashScreen.hide()
  },[])
  return (
    <UserContextProvider>
      <AppNavigation />
    </UserContextProvider>
  )
}

export default App