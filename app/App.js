import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import { ListInput } from "./components/ListInput";
import { ListOutput } from "./components/ListOutput";
import { ContainerDivider } from "./components/ContainerDivider";
import { SliderVolume } from "./components/SliderVolume";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(MaterialIcons.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.containerList}>
        <ListInput />
      </ View>

      <ContainerDivider />

      <View style={styles.containerSlider}>
          <SliderVolume />
      </View>

      <ContainerDivider />

      <View style={styles.containerList}> 
        <ListOutput /> 
      </ View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: "5%",
  },
  containerList: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerSlider: {
    flex: 1, 
    width: "80%",
    alignItems: 'center',
    justifyContent: 'center',
  }
});
