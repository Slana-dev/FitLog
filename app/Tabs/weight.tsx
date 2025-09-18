import { Dimensions, StyleSheet, Text, View } from "react-native";

const height = Dimensions.get('window').height
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Weight</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(30,38,68)",
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    position: "relative",
    
  },
  titleContainer: {
    height: height * 0.12,
    backgroundColor: "rgb(30,38,68)",
    flexDirection: "row",           // lay out children horizontally
    justifyContent: "space-between", // push title left, icon right
    alignItems: "flex-end",           // vertically center the content
    paddingHorizontal: 30,
    paddingBottom: 10,
    paddingTop: height * 0.03,
  },
})