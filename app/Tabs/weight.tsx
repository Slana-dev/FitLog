import { useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
const darkBlue = "rgb(30,38,68)"
const lightblueColor = "rgb(44, 57,103)"
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const gainColor = "lightgreen"



export default function Index() {
  const [weights, setWeights] = useState({
    monW: 0,
    tueW: 0,
    wedW: 0,
    thuW: 0,
    friW: 0,
    satW: 10,
    sunW: 10,
  });
  const weightAvg = () => {
    const weightValues = Object.values(weights).map(w => Number(w));
    const nonzeroCount = weightValues.filter(w => w !== 0).length;
    return nonzeroCount === 0
      ? 0
      : weightValues.reduce((sum, w) => sum + w, 0) / nonzeroCount;
  }
  const handleWeightChange = (day: any, value: string) => {
    const cleaned = value.replace(/[^0-9.]/g, "");
    setWeights(prev => ({ ...prev, [day]: cleaned }));
  };

  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Weight</Text>
      </View>

      <View style={[styles.avgContainer, { height: 60 }]}>
        <View style={[styles.singleTextContainer, { width: 150, backgroundColor: lightblueColor, justifyContent: "flex-end" }]}>
          <Pressable style={{ alignSelf: "center", justifyContent: "center" }}>
            {({ pressed }) => (
              <Text style={[styles.subtitle, { color: !pressed ? "white" : "grey" }]}>See All</Text>)}
          </Pressable>
        </View>

        <View style={[styles.singleTextContainer, { alignSelf: "center", width: 200 }]}>
          <Text style={styles.subtitle}>Week Avg.</Text>
          <View style={[styles.singleTextContainer, { height: 40, backgroundColor: lightblueColor, flexDirection: "row", justifyContent: "center" }]}>
            <Text style={[styles.subtitle, { color: "lightgrey", fontSize: 17 }]}>{weightAvg()} </Text>
            <Text style={[styles.subtitle, { fontSize: 15, color: gainColor }]}>(0.01)</Text>
          </View>
        </View>
      </View>

      <View style={[styles.avgContainer, { alignItems: "flex-start", justifyContent: "center", backgroundColor: lightblueColor, }]}>
        <View style={[styles.weightContainer, { backgroundColor: "white", width: width * 0.15, borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }]}>
          <View style={[styles.singleTextContainer, { borderRadius: 7, backgroundColor: gainColor, width: width * 0.11, height: 25 }]}>
            <Text style={styles.weightFont}>MON </Text>
          </View>
          <Text style={styles.weightFont}>{weights.monW || 0} kg</Text>
        </View>
        <View style={[styles.weightContainer, { backgroundColor: "white", width: width * 0.14 }]}>
          <View style={[styles.singleTextContainer, { borderRadius: 7, backgroundColor: gainColor, width: width * 0.1, height: 25 }]}>
            <Text style={styles.weightFont}>TUE </Text>
          </View>
          <Text style={styles.weightFont}>{weights.tueW || "0"} kg</Text>
        </View>
        <View style={[styles.weightContainer, { backgroundColor: "white", width: width * 0.14 }]}>
          <View style={[styles.singleTextContainer, { borderRadius: 7, backgroundColor: gainColor, width: width * 0.1, height: 25 }]}>
            <Text style={styles.weightFont}>WED </Text>
          </View>
          <Text style={styles.weightFont}>{weights.wedW || "0"} kg</Text>
        </View>
        <View style={[styles.weightContainer, { backgroundColor: "white", width: width * 0.14 }]}>
          <View style={[styles.singleTextContainer, { borderRadius: 7, backgroundColor: gainColor, width: width * 0.1, height: 25 }]}>
            <Text style={styles.weightFont}>THU </Text>
          </View>
          <Text style={styles.weightFont}>{weights.thuW || "0"} kg</Text>

        </View>
        <View style={[styles.weightContainer, { backgroundColor: "white", width: width * 0.14 }]}>
          <View style={[styles.singleTextContainer, { borderRadius: 7, backgroundColor: gainColor, width: width * 0.1, height: 25 }]}>
            <Text style={styles.weightFont}>FRI</Text>
          </View>
          <Text style={styles.weightFont}>{weights.friW || "0"} kg</Text>

        </View>
        <View style={[styles.weightContainer, { backgroundColor: "white", width: width * 0.14 }]}>
          <View style={[styles.singleTextContainer, { borderRadius: 7, backgroundColor: gainColor, width: width * 0.1, height: 25 }]}>
            <Text style={styles.weightFont}>SAT </Text>
          </View>
          <Text style={styles.weightFont}>{weights.satW || "0"} kg</Text>

        </View>
        <View style={[styles.weightContainer, { backgroundColor: "white", width: width * 0.15, borderRightWidth: 2.5, borderTopRightRadius: 8, borderBottomRightRadius: 8 }]}>
          <View style={[styles.singleTextContainer, { borderRadius: 7, backgroundColor: gainColor, width: width * 0.1, height: 25 }]}>
            <Text style={styles.weightFont}>SUN </Text>
          </View>
          <Text style={styles.weightFont}>{weights.sunW || "0"} kg</Text>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 30,
    paddingBottom: 10,
    paddingTop: height * 0.03,
  },
  avgContainer: {
    height: height * 0.12,
    backgroundColor: lightblueColor,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    paddingTop: height * 0.01,
  },
  singleTextContainer: {
    height: 55,
    backgroundColor: lightblueColor,
    width: 150,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

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
    height: 60,
    backgroundColor: lightblueColor,
    width: 150,
    paddingTop: 8,
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 2.5,
    borderColor: darkBlue,
    borderRightWidth: 0,
  },
})