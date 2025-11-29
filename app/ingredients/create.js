import { useRef, useState } from 'react'
import { Keyboard, Pressable, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import AdditionalNutrition from '../../Components/ingredients/AdditionalNutrition'
import CreateHeader from '../../Components/ingredients/CreateHeader'
import NutritionCard from '../../Components/ingredients/NutritionCard'
import Spacer from '../../Components/Spacer'
import TabBar from '../../Components/TabBar'
import ThemedView from '../../Components/ThemedView'
import { Colors } from '../../Constants/Colors'
import useDB from '../../hooks/useDB'
import useValidationIngredient from '../../hooks/useValidationIngredient'

const Create = () => {
  const [name, setName] = useState(null)
  const initialNutrition = {
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
  }

  const [nutrition, setNutrition] = useState(initialNutrition)
  const [activeTab, setActiveTab] = useState('tab1')
  const [errors, setErrors] = useState({});
  const scrollRef = useRef(null);
  const [errorY, setErrorY] = useState(0);

  // DB Context
  const { createIngredient } = useDB()

  // Route
  const route = useRouter()

  // Validation
  const {validateForm} = useValidationIngredient()


  const handleSubmit = async () => {

    try {

      const {isValid, errors} = validateForm({name, ...nutrition })
      setErrors(errors)
      if (!isValid) return
       
      const result = await createIngredient({
        name: name,
        protein: nutrition.protein,
        calories: nutrition.calories,
        fat: nutrition.fat,
        saturated_fat: nutrition.saturatedFat,
        carbohydrates: nutrition.carbohydrates,
        nutrient1_text: nutrition.nutrient1Label,
        nutrient1_value: nutrition.nutrient1Value,
        nutrient2_text: nutrition.nutrient2Label,
        nutrient2_value: nutrition.nutrient2Value,
        nutrient3_text: nutrition.nutrient3Label,
        nutrient3_value: nutrition.nutrient3Value,

      })

      route.replace("/ingredients")
      // set states back to initial state
      setName(null)
      setNutrition(initialNutrition)


    }
    catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setTimeout(() => {
        scrollRef.current?.scrollTo({ y: errorY, animated: true });
      }, 0);
    }
  }, [errors, errorY]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} ref={scrollRef}>

        <ThemedView safe={false} style={styles.container}>

          <CreateHeader name={name} setName={setName} />

          <TabBar activeTab={activeTab} setActiveTab={setActiveTab} tabLabel1='Nährstoffe' tabLabel2='Weitere Nährstoffe' />


          {activeTab == 'tab1' ? (
            <View>
              <Spacer height={30} />
              <View style={styles.containerNutrition}>
                <NutritionCard label={"Kalorien"} value={nutrition.calories} onChangeText={(value) => setNutrition({ ...nutrition, calories: value })}></NutritionCard>
                <NutritionCard label={"Protein"} value={nutrition.protein} onChangeText={(value) => setNutrition({ ...nutrition, protein: value })}></NutritionCard>
                <NutritionCard label={"Kohlenhydrate"} value={nutrition.carbohydrates} onChangeText={(value) => setNutrition({ ...nutrition, carbohydrates: value })}></NutritionCard>
                <NutritionCard label={"Zucker"} value={nutrition.sugar} onChangeText={(value) => setNutrition({ ...nutrition, sugar: value })}></NutritionCard>
                <NutritionCard label={"ges. Fettsäuren"} value={nutrition.saturatedFat} onChangeText={(value) => setNutrition({ ...nutrition, saturatedFat: value })}></NutritionCard>
                <NutritionCard label={"unges. Fettsäuren"} value={nutrition.fat} onChangeText={(value) => setNutrition({ ...nutrition, fat: value })}></NutritionCard>
              </View>
            </View>
          ) :

            (
              <View style={styles.containerAdditionalNutrition}>
                <Spacer />
                <Text>Zusätzliche Nährstoffe (z.B. Eisen) </Text>
                <Spacer height={20} />
                <AdditionalNutrition valueLabel={nutrition.nutrient1Label} onChangeTextLabel={(value) => setNutrition({ ...nutrition, nutrient1Label: value })} value={nutrition.nutrient1Value} onChangeText={(value) => setNutrition({ ...nutrition, nutrient1Value: value })}></AdditionalNutrition>
                <AdditionalNutrition valueLabel={nutrition.nutrient2Label} onChangeTextLabel={(value) => setNutrition({ ...nutrition, nutrient2Label: value })} value={nutrition.nutrient2Value} onChangeText={(value) => setNutrition({ ...nutrition, nutrient2Value: value })}></AdditionalNutrition>
                <AdditionalNutrition valueLabel={nutrition.nutrient3Label} onChangeTextLabel={(value) => setNutrition({ ...nutrition, nutrient3Label: value })} value={nutrition.nutrient3Value} onChangeText={(value) => setNutrition({ ...nutrition, nutrient3Value: value })}></AdditionalNutrition>


              </View>

            )}

          <Spacer height={30} />
          <View
            onLayout={event => {
              const { y } = event.nativeEvent.layout;
              setErrorY(y);
            }}
          >
            {Object.keys(errors).map((key) => (
              <Text key={key} style={styles.error}>{errors[key]}</Text>
            ))}
          </View>

          <Pressable style={({ pressed }) => [styles.button, { backgroundColor: pressed ? Colors.buttonBGPressed : Colors.buttonBG }]} onPress={handleSubmit}>
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

  button: {
    width: '40%',
    height: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

  },

  containerAdditionalNutrition: {
    alignItems: 'center'

  },

  error: {
    color: 'red',
    marginLeft: 20
  }

})