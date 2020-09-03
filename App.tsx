import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import { useFonts, Aleo_400Regular_Italic, Aleo_700Bold } from '@expo-google-fonts/aleo';

import AppStack from './src/routes/AppStack';

export default function App() {

  const [fontsLoaded] = useFonts({
    Aleo_400Regular_Italic,
    Aleo_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <AppStack />
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}