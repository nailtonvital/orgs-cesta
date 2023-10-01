import { StyleSheet, StatusBar, SafeAreaView, View, ActivityIndicator } from "react-native";
import Cesta from "./src/screens/Cesta";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import cesta from "./src/mocks/cesta";

export default function App() {
  const [fontsLoaded] = useFonts({
    "MontserratRegular":Montserrat_400Regular,
    "MontserratBold":Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#00ff00"/>;
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar />
      <Cesta {...cesta} />
    </SafeAreaView>
  );
}
