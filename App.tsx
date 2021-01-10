import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';

import Routes from './src/routes';
import { useFonts } from 'expo-font';

const App:React.FC = () =>{
  
  let[fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
    <>
      <StatusBar/>
      <Routes/>
    </>
  )
}

export default App;