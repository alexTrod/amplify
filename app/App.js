import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { View } from 'react-native';
import { BluetoothPlayground } from "./components/BluetoothPlayground";
import { NavigationContainer } from "@react-navigation/native";
import { ControlCenter } from "./screens/ControlCenter";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [checked, setChecked] = useState(false);

 SplashScreen.hideAsync();
  useEffect(() => {
    async function prepare() {
      try {      
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(MaterialIcons.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ControlCenter}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="BluetoothControl"
          component={BluetoothPlayground}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
