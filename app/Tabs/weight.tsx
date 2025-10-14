import { Dimensions, StyleSheet, Text, View } from "react-native";
const darkBlue = "rgb(30,38,68)"
const lightblueColor = "rgb(44, 57,103)"
const height = Dimensions.get('window').height
const gainColor = "lightgreen"
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Weight</Text>
      </View>
      <View style={styles.avgContainer}>
        <View style={styles.singleTextContainer}>
          <Text style={styles.subtitle}>Week Avg.</Text>
          <View style={[styles.singleTextContainer, { height: 30, backgroundColor: lightblueColor, flexDirection: "row", justifyContent: "center" }]}>
            <Text style={[styles.subtitle, { color: "lightgrey", fontSize: 20 }]}>50kg </Text>
            <Text style={[styles.subtitle, { fontSize: 15, color: gainColor }]}>(0.01)</Text>
          </View>
        </View>

      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>mon tue ...</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>select menu</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>graph</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightblueColor,
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    position: "relative",

  },
  titleContainer: {
    height: height * 0.12,
    backgroundColor: darkBlue,
    flexDirection: "row",           // lay out children horizontally
    justifyContent: "space-between", // push title left, icon right
    alignItems: "flex-end",           // vertically center the content
    paddingHorizontal: 30,
    paddingBottom: 10,
    paddingTop: height * 0.03,
  },
  avgContainer: {
    height: height * 0.12,
    backgroundColor: lightblueColor,
    flexDirection: "row",           // lay out children horizontally
    justifyContent: "flex-end", // push title left, icon right
    alignItems: "flex-start",           // vertically center the content
    paddingHorizontal: 30,

    paddingTop: height * 0.01,
  },
  singleTextContainer: {
    height: 55,
    backgroundColor: lightblueColor,
    width: 150,
    flexDirection: "column",
    alignItems: "center",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white"
  },

})