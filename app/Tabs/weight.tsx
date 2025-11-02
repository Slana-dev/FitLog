import moment from 'moment';
import React, { useRef, useState } from "react";
import { Animated, Dimensions, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const darkBlue = "rgb(30,38,68)"
const lightblueColor = "rgb(44, 57,103)"
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const gainColor = "lightgreen"




export default function Index() {

  const today = moment();
  const [selected, setSelected] = useState(today.format('YYYY-MM-DD'));
  const [weightPopup, setWeightPopupVisible] = useState(false);
  const startOfWeek = today.clone().startOf('isoWeek');
  const slideAnim = useRef(new Animated.Value(1000)).current;
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = startOfWeek.clone().add(i, 'days');
    return {
      label: d.format('ddd'),
      date: d.format('YYYY-MM-DD'),
      dayNumber: d.format('D'),
    };
  });

  const changeWeight = (date: string) => {
    setSelected(date);
    setWeightPopupVisible(true);
    slideIn();
  };
  const slideIn = () => {
    Animated.timing(slideAnim, {
      toValue: 300,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setWeightPopupVisible(true));
  };

  const slideOut = () => {
    Animated.timing(slideAnim, {
      toValue: 1000,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setWeightPopupVisible(false));
  };
  return (
    <View style={styles.container}>
      <Modal
        visible={weightPopup}
        transparent={true}
        animationType="none"
        allowSwipeDismissal={true}

        onRequestClose={() => {
          slideOut();
          setWeightPopupVisible(!weightPopup);
        }}>
        <Animated.View style={[styles.popup, { backgroundColor: "white", transform: [{ translateY: slideAnim }] }]}>
          <Text>hello</Text>
        </Animated.View>
        <Pressable onPress={slideOut}>
          <Text style={{ color: 'white' }}>Close</Text>
        </Pressable>
      </Modal>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Weight</Text>
      </View>

      <View style={[styles.avgContainer, { height: 60, alignItems: "center" }]}>
        <View style={[styles.singleTextContainer, { width: 150, backgroundColor: lightblueColor, justifyContent: "flex-end", alignItems: "flex-end" }]}>
          <Pressable style={{ alignSelf: "flex-start", justifyContent: "center" }}>
            {({ pressed }) => (
              <Text style={[styles.subtitle, { color: !pressed ? "white" : "grey" }]}>See All</Text>)}
          </Pressable>
        </View>

        <View style={[styles.singleTextContainer, { backgroundColor: lightblueColor, paddingRight: 15, flexDirection: "row", width: 200, justifyContent: "space-between", alignItems: "flex-end" }]}>
          <View >
            <Text style={styles.subtitle}>Week Avg</Text>
          </View>

          <Text style={[styles.subtitle, { color: "lightgrey", fontSize: 17 }]}>{20} </Text>
          <Text style={[styles.subtitle, { fontSize: 15, color: gainColor }]}>(0.01)</Text>
        </View>
      </View>
      <View style={styles.weekRow}>
        {days.map((d) => (
          <TouchableOpacity
            key={d.date}
            style={[
              styles.day,
              d.date === selected && styles.selectedDay,
              d.date === today.format('YYYY-MM-DD') && styles.todayDay,
            ]}
            onPress={() => changeWeight(d.date)}
          >
            <Text style={styles.weightFont}>{d.label}</Text>
            <Text style={styles.number}>{d.dayNumber}</Text>
          </TouchableOpacity>
        ))}
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
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: lightblueColor,
  },
  day: {
    alignItems: 'center',
    width: 45,
    height: 80,
    borderRadius: 8,
    paddingTop: 5,
    backgroundColor: "white",

  },
  selectedDay: {
    backgroundColor: 'white',
  },
  todayDay: {
    backgroundColor: gainColor,
  },

  number: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    position: "relative",
  },
  popup: {
    height: height * 0.12,
    width: 200,
    alignSelf: "center",
    backgroundColor: lightblueColor,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: height * 0.01,
    borderRadius: 10,



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
    fontSize: 13,
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