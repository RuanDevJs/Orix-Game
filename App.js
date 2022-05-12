import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold,
  useFonts } from '@expo-google-fonts/poppins';

import Header from './src/Components/Header';
import Games from './src/Components/Games';

import Lottie from "lottie-react-native";
import Icon from "./src/assets/53943-gamer.json";

export default function App() {
  const [fontsLoaded] = useFonts({Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold})

  if(!fontsLoaded){
    return null;
  }
  
  return (
    <View style={styles.container}>
      <Header />
      <Games />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
  },
});
