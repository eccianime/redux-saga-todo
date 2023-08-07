import "./src/config/dayjs";

import { NativeBaseProvider, StatusBar, View } from "native-base";
import React, { useCallback, useEffect, useState } from "react";
import { Provider } from "react-redux";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import theme from "./src/config/theme";
import store from "./src/redux/store";
import AppRoutes from "./src/routes";
import { LogBox } from "react-native";

SplashScreen.preventAutoHideAsync();
LogBox.ignoreLogs(["In React 18, SSRProvider is not"]);

const App = () => {
  const [isAppReady, setAppReady] = useState(false);

  async function _loadAssetsAsync() {
    await Font.loadAsync({
      "Ubanist-Medium": require("./src/assets/fonts/Urbanist-Medium.ttf"),
      "Ubanist-Bold": require("./src/assets/fonts/Urbanist-Bold.ttf"),
    });
    setAppReady(true);
  }

  useEffect(() => {
    _loadAssetsAsync();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return null;
  }
  return (
    <NativeBaseProvider theme={theme}>
      <View onLayout={onLayoutRootView} flex={1}>
        <Provider store={store}>
          <StatusBar translucent={false} />
          <AppRoutes />
        </Provider>
      </View>
    </NativeBaseProvider>
  );
};

export default App;
