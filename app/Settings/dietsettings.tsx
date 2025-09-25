import { Text, View } from "react-native";


const darkBlue = "rgba(39, 50, 90, 1)"
export default function dietSettings() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: darkBlue }}>
      <Text>Settings Screen</Text>
    </View>
  );
}