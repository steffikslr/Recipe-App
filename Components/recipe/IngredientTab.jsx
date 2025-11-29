import { Pressable, StyleSheet, Text, TextInput } from 'react-native'
import { Colors } from '../../Constants/Colors'

const IngredientTab = ({placeholder, valueFreeText, setValueFreeText, valueIngredients, setValueIngredients}) => {
  return (
    <>
    <Pressable>
        <Text></Text>

    </Pressable>


      <TextInput
          style={[styles.freeTextInput, { height: 150 }]}
          placeholder={placeholder}
          placeholderTextColor='grey'
          value={valueFreeText}
          onChangeText={setValueFreeText}
          multiline={true}
      />
      </>
  )
}

export default IngredientTab

const styles = StyleSheet.create({
    freeTextInput: {
          width: "80%",
                height: 50,
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 10,
                paddingHorizontal: 12,
                color: Colors.fontColor,
                backgroundColor: "white",
    }
})