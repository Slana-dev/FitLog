import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, TextInput, View } from "react-native";

const height = Dimensions.get('window').height
const darkBlue = "rgb(30,38,68)"







export default function dietSettings() {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <View style={[styles.macroContainer, {backgroundColor: "red", }]}>
        <View style={[styles.searchContainer, { flexDirection: "row", alignItems:"center", justifyContent:"flex-start"}]}>
          <Ionicons 
            name={"search-sharp"}
            size= {20} 
            color={"grey"}
            
            />
        
          <TextInput
            style={{height: 40, padding: 5, color: "white", textDecorationColor: "green"}}
            placeholderTextColor="grey"
            placeholder="Search for food"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            >
            
          </TextInput>
        </View>
      </View>
     
    </View>
  );
}









const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkBlue ,
  },
  titleText: {
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
  macroContainer: {
    height: height * 0.3,
    backgroundColor: darkBlue,
    alignItems: "center",
    alignContent: "space-around",
    paddingRight: 15,
    flexDirection: "row",
    justifyContent: "center"
  },
  searchContainer:{
    height: 40,
    width: "100%",
    backgroundColor: "black"
  },
})