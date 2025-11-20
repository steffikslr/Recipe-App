import { StyleSheet, TextInput, View } from 'react-native'
import { Colors } from '../../Constants/Colors'

const AdditionalNutrition = ({valueLabel, onChangeTextLabel, value, onChangeText}) => {
  return (
    <View style={styles.container}>
        <TextInput
                      style={styles.input}
                      placeholder='Name'
                      placeholderTextColor='grey'
                      value={valueLabel}
                      onChangeText={onChangeTextLabel}
                  />
        <TextInput
                      style={[styles.input, {borderLeftWidth: 1}]}
                      placeholder='0'
                      placeholderTextColor='grey'
                      value={value}
                      onChangeText={onChangeText}
                  />
      
    </View>
  )
}

export default AdditionalNutrition

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'
    },
    input: {
        width: "40%",
        height: 50,
        borderBottomWidth: 1,
        borderColor: "#9bc9a4ff",
        
        paddingHorizontal: 12,
        color: Colors.fontColor,
        backgroundColor: "white",

    }
})