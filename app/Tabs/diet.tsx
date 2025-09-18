   
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PieChart from 'react-native-pie-chart';
const lightblueColor = "rgb(44, 57,103)"
const height = Dimensions.get('window').height

const carb = 120
const fat = 15
const protein = 60

const totalMacroGram = carb+protein+fat
const totalCal = 2500
const consumedCal = carb * 4 + fat * 9 + protein * 4
const carbProc = Math.round(100*(carb)/(totalMacroGram))
const fatProc = Math.round(100*(fat)/(totalMacroGram))
const proteinProc = Math.round(100*(protein)/(totalMacroGram))

const pieChartRad = 150
const series = [
  {value: fat, color: "lightblue", label: {text: fatProc+"%", fontSize:11 },},
  {value: protein, color: "lightgreen", label: {text: proteinProc+"%",fontSize:11  }},
  {value: carb, color: "dodgerblue", label: {text: carbProc+"%",fontSize:11 }},
]

export default function Diet() {
  const router = useRouter();
  return (

    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>DietLog</Text>
        <TouchableOpacity onPress={() => router.push("/Settings/dietsettings")}>
          <Ionicons 
            name={"settings-outline"}
            size= {30} 
            color={"white"}
            />
        </TouchableOpacity>
      </View>

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Calories</Text>
      </View>
        
      <View style={styles.caloriesContainer}>
        <View style={styles.singleBoxContainer}>
          <View style={{backgroundColor: lightblueColor, height: 20, width: 70, alignSelf:"center" }}>
            <Text style={styles.caloriesText}>Total</Text>
          </View>
          <View style={{backgroundColor: lightblueColor, height: 25, width: 55, alignSelf:"center"}}>
            <Text style={[styles.caloriesText, {fontWeight: "bold"}]}> {totalCal} </Text>
          </View>
        </View>

        <View style={styles.singleIcon}>
          <Text style = {{color: "white"}}>=</Text>
        </View>

        <View style={[styles.singleBoxContainer]}>
          <View style={{backgroundColor: lightblueColor, height: 20, width: 50, alignSelf:"center"}}>
            <Text style={styles.caloriesText}>Food</Text>
          </View>
          <View style={{backgroundColor: lightblueColor, height: 25, width: 55, alignSelf:"center"}}>
            <Text style={[styles.caloriesText, {fontWeight: "bold"}]}>{consumedCal}</Text>
          </View>
        </View>

        <View style={[styles.singleIcon,{width:30, justifyContent:"flex-start"}]}>
          <Text style = {{color: "white"}}>+</Text>
        </View>

        <View style={styles.singleBoxContainer}>
          <View style={{backgroundColor: lightblueColor, height: 25, width: 90, alignSelf:"center"}}>
            <Text style={[styles.caloriesText, {fontWeight: "bold"}]}>Remaining</Text>
          </View>
          <View style={{backgroundColor: lightblueColor, height: 23.5, width: 55, alignSelf:"center"}}>
            <Text style={{fontSize: 20, fontWeight: "bold", color: "white"}}>{totalCal- consumedCal}</Text>
          </View>
        </View>
        </View>
      
      <ScrollView >
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Macros</Text>
        </View>
        <View style={{backgroundColor:lightblueColor, flex: 1,flexDirection:"row"}}>
          <View style={styles.pieContainer}>
            <PieChart widthAndHeight={pieChartRad} series={series}></PieChart>
          </View>

          <View style={[styles.pieContainer, {flexDirection: "column", justifyContent: "space-between", paddingVertical: 60, alignItems: "flex-start", backgroundColor:"lightblueColor", width:30, }, ]}>
            <View style = {[styles.singleIcon,{ backgroundColor: "lightblue",width:20, justifyContent:"flex-start"}]}></View>
            <View style = {[styles.singleIcon,{ backgroundColor: "lightgreen",width:20, justifyContent:"flex-start"}]}></View>
            <View style = {[styles.singleIcon,{ backgroundColor: "dodgerblue",width:20, justifyContent:"flex-start"}]}></View>
          </View>
          <View style={[styles.pieContainer, {flexDirection: "column", justifyContent: "space-between", paddingVertical: 60, alignItems: "flex-start", backgroundColor:"lightblueColor", width:40, }, ]}>
            <View style = {[styles.singleIcon,{ backgroundColor: lightblueColor,width:120, justifyContent:"flex-start"}]}>
              <Text style={[styles.caloriesText, {fontSize:12}]}>Fat: {fat}g</Text>
            </View>
            <View style = {[styles.singleIcon,{ backgroundColor: lightblueColor,width:120, justifyContent:"flex-start"}]}>
              <Text style={[styles.caloriesText, {fontSize:12}]}>Protein: {protein}g</Text>
            </View>
            <View style = {[styles.singleIcon,{ backgroundColor: lightblueColor,width:120, justifyContent:"flex-start"}]}>
              <Text style={[styles.caloriesText, {fontSize:12}]}>Carb: {carb}g</Text>
            </View>
          </View>
          
        </View>
        
        
      
      
      </ScrollView>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(30,38,68)",
  },
  titleText: {
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
  macroContainer: {
    height: height * 0.3,
    backgroundColor: "rgb(44, 57,103)",
    alignItems: "flex-end",
    alignContent: "space-around",
    paddingRight: 15
    
  },
  caloriesContainer:{
    height: height * 0.08,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    backgroundColor: "rgb(44, 57,103)",
  },
  caloriesText: {
    color: "white",
    fontSize: 16,
    alignSelf: "center",
  },
  singleBoxContainer:{
    height: 60,
    width: "25%",
    flexDirection: "column",
    backgroundColor: "rgb(44, 57,103)",
    alignItems: "center",
    justifyContent: "center",
    
  },
  singleIcon: {
    height: 20,
    width:20,
    backgroundColor: "rgb(44, 57,103)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pieContainer:{
    backgroundColor: "rgb(44, 57,103)",
    flexDirection: "row",
    width: "50%",
    height: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  subtitle:{
    fontWeight:"bold",
    fontSize: 20,
    color: "white"
  },
  subtitleContainer:{
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    width: "100%",
    height: height * 0.05,
    backgroundColor: "rgb(44, 57,103)"
  },
})