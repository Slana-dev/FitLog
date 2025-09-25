import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, TextInput, View } from "react-native";

const height = Dimensions.get('window').height

const darkBlue = "rgba(39, 50, 90, 1)"
const lightblueColor = "rgb(44, 57,103)"



const SeparatorContainer = ({ typeStyle = "separatorContainer" }: { typeStyle?: string }) => {
  return (
    <View style={(styles as any)[typeStyle]}></View>
  );
};


export default function dietSettings() {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <View style={[styles.topContainer, { backgroundColor: darkBlue, }]}>
        <View style={[styles.searchContainer, {}]}>
          <Ionicons
            name={"search-sharp"}
            size={20}
            color={"grey"}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor="grey"
            placeholder="Search for food"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
          >
          </TextInput>

        </View>
      </View>
      <SeparatorContainer typeStyle="seperator" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightblueColor,
  },
  titleText: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    position: "relative",
  },
  titleContainer: {
    height: height * 0.12,
    backgroundColor: lightblueColor,
    flexDirection: "row",           // lay out children horizontally
    justifyContent: "space-between", // push title left, icon right
    alignItems: "flex-end",           // vertically center the content
    paddingHorizontal: 30,
    paddingBottom: 10,
    paddingTop: height * 0.03,
  },
  topContainer: {
    height: height * 0.2,
    backgroundColor: lightblueColor,
    alignItems: "center",
    alignContent: "space-around",
    paddingRight: 15,
    flexDirection: "row",
    justifyContent: "center"
  },
  searchContainer: {
    height: 45,
    width: "80%",
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 15,
    borderWidth: 4,
    borderColor: lightblueColor,
    paddingLeft: 10

  },
  input: {
    color: "white",
    height: 45,
    width: 160,
    margin: 10,
    fontSize: 15
  },
  seperatorSubtitle: {
    height: 7,
    width: "100%",
    backgroundColor: darkBlue,
  },
  seperator: {
    height: 10,
    width: "100%",
    backgroundColor: darkBlue,
  },
})