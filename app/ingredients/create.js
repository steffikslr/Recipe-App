import { useState } from 'react'
import { Keyboard, Pressable, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

import AdditionalNutrition from '../../Components/ingredients/AdditionalNutrition'
import CreateHeader from '../../Components/ingredients/CreateHeader'
import NutritionCard from '../../Components/ingredients/NutritionCard'
import Spacer from '../../Components/Spacer'
import ThemedView from '../../Components/ThemedView'
import { Colors } from '../../Constants/Colors'

const Create = () => {
  const [name, setName] = useState(null)
  const [nutrition, setNutrition] = useState({
    protein: null,
    sugar: null,
    calories: null,
    fat: null,
    saturatedFat: null,
    carbohydrates: null,
    nutrient1Label: null,
    nutrient1Value: null,
    nutrient2Label: null,
    nutrient2Value: null,
    nutrient3Label: null,
    nutrient3Value: null,
  })
  const [activeTab, setActiveTab] = useState('tab1')

  const createIngredient = async () => {

  }


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
      <ScrollView style={{ flex: 1 }}>

        <ThemedView safe={false} style={styles.container}>
          
          <CreateHeader name={name} setName={setName} />
          
          <Spacer height={30} />

         <View style={styles.tabContainer}>
            <Pressable style={styles.tab} onPress={() => setActiveTab('tab1')}>
              <Text>Nährstoffe</Text>
            </Pressable>
            <Pressable style={styles.tab} onPress={() => setActiveTab('tab2')}>
              <Text>Weitere Nährstoffe</Text>
            </Pressable>

         </View>





          <View style={styles.containerNutrition}>
            <NutritionCard label={"Kalorien"} value={nutrition.calories} onChangeText={(value) => setNutrition({...nutrition, calories: value})}></NutritionCard>
            <NutritionCard label={"Protein"} value={nutrition.protein} onChangeText={(value) => setNutrition({...nutrition, protein: value})}></NutritionCard>
            <NutritionCard label={"Kohlenhydrate"} value={nutrition.carbohydrates} onChangeText={(value) => setNutrition({...nutrition, carbohydrates: value})}></NutritionCard>
            <NutritionCard label={"Zucker"} value={nutrition.sugar} onChangeText={(value) => setNutrition({...nutrition, sugar: value})}></NutritionCard>
            <NutritionCard label={"ges. Fettsäuren"} value={nutrition.saturatedFat} onChangeText={(value) => setNutrition({...nutrition, saturatedFat: value})}></NutritionCard>
            <NutritionCard label={"unges. Fettsäuren"} value={nutrition.fat} onChangeText={(value) => setNutrition({...nutrition, fat: value})}></NutritionCard>
          </View>
          <Spacer />
          <Text>Zusätzliche Nährstoffe</Text>
          <Spacer height={20} />
          <AdditionalNutrition valueLabel={nutrition.nutrient1Label} onChangeTextLabel={(value) => setNutrition({...nutrition, nutrient1Label: value})} value={nutrition.nutrient1Value} onChangeText={(value) => setNutrition({...nutrition, nutrient1Value: value})}></AdditionalNutrition>
          <AdditionalNutrition valueLabel={nutrition.nutrient2Label} onChangeTextLabel={(value) => setNutrition({...nutrition, nutrient2Label: value})} value={nutrition.nutrient2Value} onChangeText={(value) => setNutrition({...nutrition, nutrient2Value: value})}></AdditionalNutrition>
          <AdditionalNutrition valueLabel={nutrition.nutrient3Label} onChangeTextLabel={(value) => setNutrition({...nutrition, nutrient3Label: value})} value={nutrition.nutrient3Value} onChangeText={(value) => setNutrition({...nutrition, nutrient3Value: value})}></AdditionalNutrition>

          <Spacer height={30} />

          <Pressable style={({ pressed }) => [styles.button, { backgroundColor: pressed ? Colors.buttonBGPressed : Colors.buttonBG }]} onPress={createIngredient}>
            <Text>Erstellen</Text>
          </Pressable>

        </ThemedView>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}

export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },

  containerNutrition: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    rowGap: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
 

  button: {
    width: '40%',
    height: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

  },

 

    
})