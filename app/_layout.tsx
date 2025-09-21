import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="Tabs" options={{ headerShown: false }} /> 
      <Stack.Screen name="Settings/dietsettings" options={{ headerShown: false, }} />
      <Stack.Screen name="AddFood/addFood" options={{ headerShown: false, }} />
    </Stack>
  );
}