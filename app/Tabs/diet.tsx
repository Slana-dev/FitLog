import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from 'react';
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import PieChart from 'react-native-pie-chart';
const seperateColor = "rgba(39, 50, 90, 1)"
const lightblueColor = "rgb(44, 57,103)"
const height = Dimensions.get('window').height

import DietData from "../Data/dietData";

const totalMacroGram = DietData.carb + DietData.protein + DietData.fat
const totalCal = 2700
const consumedCal = DietData.carb * 4 + DietData.fat * 9 + DietData.protein * 4
const carbProc = Math.round(100 * (DietData.carb) / (totalMacroGram))
const fatProc = Math.round(100 * (DietData.fat) / (totalMacroGram))
const proteinProc = Math.round(100 * (DietData.protein) / (totalMacroGram))

const pieChartRad = 150
const series = [
  { value: DietData.fat, color: "lightblue", label: { text: fatProc + "%", fontSize: 11 }, },
  { value: DietData.protein, color: "lightgreen", label: { text: proteinProc + "%", fontSize: 11 } },
  { value: DietData.carb, color: "dodgerblue", label: { text: carbProc + "%", fontSize: 11 } },
]


type Food = {
  id: number;
  weight: number;
  name: string
};
type Meal = {
  id: number;
  numFoods: number;
  foods: Food[]
};


const SeparatorContainer = ({ typeStyle = "separatorContainer" }: { typeStyle?: string }) => {
  return (
    <View style={(styles as any)[typeStyle]}></View>
  );
};

const SubtitleContainer = ({ name = "", }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{name}</Text>
    </View>
  )
}

export default function Diet() {
  const [CURR_NUM_MEALS, setCurrNumMeals] = useState(4);
  const [meals, setMeals] = useState<Meal[]>([]);
  const router = useRouter();

  useEffect(() => {
    setMeals((prevMeals: Meal[]) => {
      const newMeals = Array.from({ length: CURR_NUM_MEALS }, (_, i) => {
        const existingMeal = prevMeals[i];
        return existingMeal
          ? { ...existingMeal, numFoods: existingMeal.foods.length, foods: existingMeal.foods || [], } // update numFoods
          : { id: i + 1, foods: [], numFoods: 0 }; // new meal
      });
      return newMeals;
    });
  }, [CURR_NUM_MEALS]);

  const addFoodToMeal = (
    mealId: number,
    foodWeight: number,
    foodName: string
  ) => {
    setMeals((prevMeals: Meal[]) =>
      prevMeals.map((meal) => {
        if (meal.id !== mealId) return meal;

        const newFood: Food = {
          id: meal.foods.length + 1,
          name: foodName,
          weight: foodWeight,
        };
        return {
          ...meal,
          foods: [...meal.foods, newFood],
          numFoods: meal.foods.length + 1
        };
      })
    );
  };

  return (

    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>DietLog</Text>
        <TouchableOpacity onPress={() => router.push("/Settings/dietsettings")}>
          <Ionicons
            name={"settings-outline"}
            size={30}
            color={"white"}
          />
        </TouchableOpacity>
      </View>

      <SubtitleContainer name="Calories" />

      <View style={styles.caloriesContainer}>
        <View style={styles.singleBoxContainer}>
          <View style={{ backgroundColor: lightblueColor, height: 20, width: 70, alignSelf: "center" }}>
            <Text style={styles.caloriesText}>Total</Text>
          </View>
          <View style={{ backgroundColor: lightblueColor, height: 25, width: 55, alignSelf: "center" }}>
            <Text style={[styles.caloriesText, { fontWeight: "bold" }]}> {totalCal} </Text>
          </View>
        </View>

        <View style={styles.singleIcon}>
          <Text style={{ color: "white" }}>=</Text>
        </View>

        <View style={[styles.singleBoxContainer]}>
          <View style={{ backgroundColor: lightblueColor, height: 20, width: 50, alignSelf: "center" }}>
            <Text style={styles.caloriesText}>Food</Text>
          </View>
          <View style={{ backgroundColor: lightblueColor, height: 25, width: 55, alignSelf: "center" }}>
            <Text style={[styles.caloriesText, { fontWeight: "bold" }]}>{consumedCal}</Text>
          </View>
        </View>

        <View style={[styles.singleIcon, { width: 30, justifyContent: "flex-start" }]}>
          <Text style={{ color: "white" }}>+</Text>
        </View>

        <View style={styles.singleBoxContainer}>
          <View style={{ backgroundColor: lightblueColor, height: 25, width: 90, alignSelf: "center" }}>
            <Text style={[styles.caloriesText, { fontWeight: "bold" }]}>Remaining</Text>
          </View>
          <View style={{ backgroundColor: lightblueColor, height: 23.5, width: 55, alignSelf: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>{totalCal - consumedCal}</Text>
          </View>
        </View>
      </View>

      <ScrollView >
        <SeparatorContainer typeStyle="seperatorSubtitle" />
        <SubtitleContainer name="Macros" />


        <View style={{ backgroundColor: lightblueColor, flex: 1, flexDirection: "row", flexShrink: 0 }}>
          <View style={styles.pieContainer}>
            <PieChart widthAndHeight={pieChartRad} series={series}></PieChart>
          </View>
          <View style={[styles.pieContainer, { flexDirection: "column", justifyContent: "space-between", paddingVertical: 60, alignItems: "flex-start", backgroundColor: "lightblueColor", width: 30, },]}>
            <View style={[styles.singleIcon, { backgroundColor: "lightblue", width: 20, justifyContent: "flex-start" }]}></View>
            <View style={[styles.singleIcon, { backgroundColor: "lightgreen", width: 20, justifyContent: "flex-start" }]}></View>
            <View style={[styles.singleIcon, { backgroundColor: "dodgerblue", width: 20, justifyContent: "flex-start" }]}></View>
          </View>
          <View style={[styles.pieContainer, { flexDirection: "column", justifyContent: "space-between", paddingVertical: 60, alignItems: "flex-start", backgroundColor: "lightblueColor", width: 40, },]}>
            <View style={[styles.singleIcon, { backgroundColor: lightblueColor, width: 120, justifyContent: "flex-start" }]}>
              <Text style={[styles.caloriesText, { fontSize: 12 }]}>Fat: {DietData.fat}g</Text>
            </View>
            <View style={[styles.singleIcon, { backgroundColor: lightblueColor, width: 120, justifyContent: "flex-start" }]}>
              <Text style={[styles.caloriesText, { fontSize: 12 }]}>Protein: {DietData.protein}g</Text>
            </View>
            <View style={[styles.singleIcon, { backgroundColor: lightblueColor, width: 120, justifyContent: "flex-start" }]}>
              <Text style={[styles.caloriesText, { fontSize: 12 }]}>Carb: {DietData.carb}g</Text>
            </View>
          </View>
        </View>

        <SeparatorContainer typeStyle="seperatorSubtitle" />
        {meals.map((meal =>
          <View key={meal.id} style={styles.mealContainer}>
            <View style={[styles.subtitleContainer, { height: 50, justifyContent: "center" }]}>
              <Text style={styles.subtitle}>Meal {meal.id}</Text>
            </View>

            {meal.foods.map((food, index) => (
              <View key={index} style={styles.foodContainer}>
              </View>
            ))}
            <SeparatorContainer typeStyle="seperatorFood" />

            <View style={[styles.subtitleContainer, { paddingLeft: 17, justifyContent: "flex-start", flexDirection: "row", height: 50, alignItems: "center" }]}>
              <Pressable
                onPress={() => router.push("/AddFood/addFood")}
              >
                {({ pressed }) => (
                  <Text style={{ color: !pressed ? "white" : "grey", fontSize: 15 }}> ADD FOOD </Text>)}
              </Pressable>
            </View>
            <SeparatorContainer typeStyle="seperatorSubtitle" />

            {meal.id === meals.length && (
              <View style={styles.footContainer}></View>
            )}
          </View>

        ))}
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
    backgroundColor: lightblueColor,
    alignItems: "flex-end",
    alignContent: "space-around",
    paddingRight: 15
  },
  caloriesContainer: {
    height: height * 0.08,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    backgroundColor: lightblueColor,
  },
  caloriesText: {
    color: "white",
    fontSize: 16,
    alignSelf: "center",
  },
  singleBoxContainer: {
    height: 60,
    width: "25%",
    flexDirection: "column",
    backgroundColor: lightblueColor,
    alignItems: "center",
    justifyContent: "center",

  },
  singleIcon: {
    height: 20,
    width: 20,
    backgroundColor: lightblueColor,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pieContainer: {
    backgroundColor: lightblueColor,
    flexDirection: "row",
    width: "50%",
    height: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white"
  },
  subtitleContainer: {
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    width: "100%",
    height: height * 0.05,
    backgroundColor: lightblueColor
  },

  mealContainer: {
    backgroundColor: "red",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  foodContainer: {
    width: 40,
    height: 40,
    backgroundColor: "black",
  },
  footContainer: {
    height: 150,
    width: "100%",
    backgroundColor: lightblueColor,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  seperatorSubtitle: {
    height: 7,
    width: "100%",
    backgroundColor: seperateColor,
  },
  seperatorFood: {
    height: 1,
    width: "100%",
    backgroundColor: "grey",
  },

})