import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "rgb(30,38,68)" }}>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: "rgb(30,38,68)" },
        }}>

        <Stack.Screen name="Tabs" options={{ headerShown: false }} />
        <Stack.Screen name="Settings/dietsettings" options={{ headerShown: false, }} />
        <Stack.Screen name="AddFood/addFood" options={{ headerShown: false, }} />
      </Stack>
    </View>

  );
}