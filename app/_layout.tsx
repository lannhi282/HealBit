import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import {
  useFonts,
  BalsamiqSans_400Regular,
  BalsamiqSans_700Bold,
} from "@expo-google-fonts/balsamiq-sans";

// Ngăn Splash Screen ẩn đi cho đến khi font load xong
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Cấu hình các màn hình */}
      <Stack.Screen name="onboarding/welcome" />
      <Stack.Screen name="onboarding/index" />

      {/* 5 màn hình khảo sát mới */}
      <Stack.Screen name="onboarding/user-welcome" />
      <Stack.Screen name="onboarding/gender" />
      <Stack.Screen name="onboarding/age" />
      <Stack.Screen name="onboarding/height" />
      <Stack.Screen name="onboarding/weight" />
      <Stack.Screen name="onboarding/goal-height" />
      <Stack.Screen name="onboarding/goal-weight" />
      <Stack.Screen name="onboarding/goal-selection" />
      <Stack.Screen name="onboarding/fitness-level" />
      <Stack.Screen name="onboarding/body-type" />
      <Stack.Screen name="onboarding/recommended-plan" />
      <Stack.Screen name="onboarding/get-started" />

      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
