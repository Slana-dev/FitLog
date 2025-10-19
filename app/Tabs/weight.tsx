import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import weightData from "../Data/weightData";
const darkBlue = "rgb(30,38,68)"
const lightblueColor = "rgb(44, 57,103)"
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const gainColor = "lightgreen"


export default function Index() {
  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Weight</Text>
      </View>

      <View style={styles.avgContainer}>
        <View style={[styles.singleTextContainer, { paddingTop: 10 }]}>
          <Pressable>
            {({ pressed }) => (
              <Text style={[styles.subtitle, { color: !pressed ? "white" : "grey" }]}>See All</Text>)}
          </Pressable>
        </View>

        <View style={styles.singleTextContainer}>
          <Text style={styles.subtitle}>Week Avg.</Text>
          <View style={[styles.singleTextContainer, { height: 30, backgroundColor: lightblueColor, flexDirection: "row", justifyContent: "center" }]}>
            <Text style={[styles.subtitle, { color: "lightgrey", fontSize: 17 }]}>{weightData.weekAvg} </Text>
            <Text style={[styles.subtitle, { fontSize: 15, color: gainColor }]}>(0.01)</Text>
          </View>
        </View>
      </View>

      <View style={[styles.avgContainer, { justifyContent: "center", borderRadius: 10, backgroundColor: "white", }]}>
        <View style={[styles.weightContainer, { backgroundColor: "white", width: width * 0.13, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }]}>
          <Text style={styles.weightFont}>{weightData.monW} kg</Text>
          <View style={[styles.singleTextContainer, { backgroundColor: gainColor, width: width * 0.1, height: 30 }]}>

          </View>
        </View>
        <View style={[styles.weightContainer, { backgroundColor: "white", width: width * 0.13 }]}>
          <Text style={styles.weightFont}>{weightData.tueW} kg</Text>
          <View style={[styles.singleTextContainer, { backgroundColor: gainColor, width: width * 0.1, height: 30 }]}></View>
        </View>
        <View style={[styles.weightContainer, { backgroundColor: "white", width: width * 0.13 }]}>
          <Text style={styles.weightFont}>{weightData.wedW} kg</Text>
          <View style={[styles.singleTextContainer, { backgroundColor: gainColor, width: width * 0.1, height: 30 }]}></View>
        </View>
        <View style={[styles.weightContainer, { backgroundColor: "white", width: width * 0.13 }]}>
          <Text style={styles.weightFont}>{weightData.thuW} kg</Text>
          <View style={[styles.singleTextContainer, { backgroundColor: gainColor, width: width * 0.1, height: 30 }]}></View>
        </View>
        <View style={[styles.weightContainer, { backgroundColor: "white", width: width * 0.13 }]}>
          <Text style={styles.weightFont}>{weightData.friW} kg</Text>
          <View style={[styles.singleTextContainer, { backgroundColor: gainColor, width: width * 0.1, height: 30 }]}></View>
        </View>
        <View style={[styles.weightContainer, { backgroundColor: "white", width: width * 0.13 }]}>
          <Text style={styles.weightFont}>{weightData.satW} kg</Text>
          <View style={[styles.singleTextContainer, { backgroundColor: gainColor, width: width * 0.1, height: 30 }]}></View>
        </View>
        <View style={[styles.weightContainer, { backgroundColor: "white", width: width * 0.13, borderRightWidth: 2.5, borderTopRightRadius: 10, borderBottomRightRadius: 10 }]}>
          <Text style={styles.weightFont}>{weightData.sunW} kg</Text>
          <View style={[styles.singleTextContainer, { backgroundColor: gainColor, width: width * 0.1, height: 30 }]}>
            <Text></Text>
          </View>
        </View>

      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>select menu</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>graph</Text>
      </View>

    </View >
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
    // push title left, icon right
    alignItems: "center",           // vertically center the content
    paddingHorizontal: 10,
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
    fontSize: 20,
    color: "white"
  },
  weightFont: {
    fontSize: 12,
    color: "grey",
    fontWeight: "500"
  },
  weightContainer: {
    height: 55,
    backgroundColor: lightblueColor,
    width: 150,
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 2.5,
    borderColor: "grey",
    borderRightWidth: 0,
  },
})