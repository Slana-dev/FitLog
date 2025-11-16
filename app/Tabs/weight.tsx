import moment from 'moment';
import React, { useEffect, useRef, useState } from "react";

import { Animated, Dimensions, Keyboard, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
const darkBlue = "rgb(30,38,68)"
const lightblueColor = "rgb(44, 57,103)"
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const gainColor = "lightgreen"

export default function Index() {

  const today = moment();
  const [selectedDate, setSelectedDate] = useState(today.format('YYYY-MM-DD'));
  const [selectedDateDay, setSelectedDateDay] = useState(today.format('DD'));
  const [selectedDateLabel, setSelectedDateLabel] = useState(today.format('ddd'));
  const [weightPopup, setWeightPopupVisible] = useState(false);
  const [WeightInput, setWeightInput] = useState("");
  const startOfWeek = today.clone().startOf('isoWeek');
  const slideAnim = useRef(new Animated.Value(1300)).current;
  const inputRef = useRef<TextInput>(null);
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = startOfWeek.clone().add(i, 'days');
    return {
      label: d.format('ddd'),
      date: d.format('YYYY-MM-DD'),
      dayNumber: d.format('D'),
    };
  });

  const changeWeight = (date: string, dateLabel: string, dateDay: string) => {
    setSelectedDate(date);
    setSelectedDateDay(dateDay);
    setSelectedDateLabel(dateLabel);
    setWeightPopupVisible(true);
    slideIn();
  };
  const slideIn = () => {
    Animated.timing(slideAnim, {
      toValue: 230,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setWeightPopupVisible(true));
  };

  const slideOut = () => {
    Keyboard.dismiss()
    Animated.timing(slideAnim, {
      toValue: 3000,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setWeightPopupVisible(false));
  };
  const submitWeight = () => {
    slideOut()
    return
  };
  useEffect(() => {
    if (weightPopup) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [weightPopup]);

  return (
    <View style={styles.container}>
      <Modal
        visible={weightPopup}
        transparent={true}
        animationType="none"

        onRequestClose={() => {
          slideOut();
        }}>
        {weightPopup && (
          <Animated.View style={[styles.popup, { transform: [{ translateY: slideAnim }] }]}>
            <View style={{ backgroundColor: "darkgrey", width: 140, alignItems: "center" }}>
              <Text style={[styles.subtitle, { fontSize: 20 }]}>{selectedDateLabel} {selectedDateDay}th </Text>
            </View>
            <View style={{ backgroundColor: "grey", width: 140, alignItems: "center" }}>
              <TextInput
                ref={inputRef}
                style={styles.input}
                placeholderTextColor="grey"
                keyboardType="number-pad"
                returnKeyType="next"
                onChangeText={value => {
                  if (value.length > 5) return;
                  const cleaned = value.replace(/[^0-9.,]/g, "");
                  const firstDot = cleaned.indexOf(".");
                  const firstComma = cleaned.indexOf(",");

                  if (firstDot !== -1 && cleaned.slice(firstDot + 1).includes(".")) return;
                  if (firstComma !== -1 && cleaned.slice(firstComma + 1).includes(",")) return;
                  if (firstDot !== -1 && firstComma !== -1) {
                    if (firstDot < firstComma) {
                      setWeightInput(cleaned.replace(",", ""));
                    } else {
                      setWeightInput(cleaned.replace(".", ""));
                    }
                    return;
                  }
                  setWeightInput(cleaned);
                }}
              />

            </View>
            <View style={{ backgroundColor: "grey", width: 150, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 13 }}>
              <View style={{ backgroundColor: "grey", width: 70, alignItems: "center" }}>
                <Pressable onPress={slideOut}>
                  <Text style={[styles.subtitle, { fontSize: 17 }]}>Cancel</Text>
                </Pressable>
              </View>
              <View style={{ backgroundColor: "grey" }}>
                <Pressable onPress={submitWeight}>
                  <Text style={[styles.subtitle, { fontSize: 17, color: gainColor }]}>Save</Text>
                </Pressable>
              </View>
            </View>
          </Animated.View>)}


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
              d.date === selectedDate && styles.selectedDay,
              d.date === today.format('YYYY-MM-DD') && styles.todayDay,
            ]}
            onPress={() => changeWeight(d.date, d.label, d.dayNumber)}
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
  input: {
    color: "white",
    height: 45,
    width: 80,
    fontSize: 20,
    margin: 0
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
    height: 110,
    width: 190,
    alignSelf: "center",
    backgroundColor: "grey",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    paddingBottom: 30,
    borderWidth: 2,
    borderColor: "grey",
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

