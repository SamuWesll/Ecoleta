import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import { useFonts, Aleo_400Regular_Italic, Aleo_700Bold } from '@expo-google-fonts/aleo';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import { registerRootComponent } from 'expo';

import AppStack from './src/routes/AppStack';

export default function App() {

  const [fontsLoaded] = useFonts({
    Aleo_400Regular_Italic,
    Aleo_700Bold,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
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