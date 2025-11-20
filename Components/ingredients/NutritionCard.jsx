import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../../Constants/Colors'


const NutritionCard = ({label, value, onChangeText}) => {
  return (
      <View style={styles.card}>
          <Text style={styles.cardLabel}>{label}</Text>
          <TextInput
              style={[styles.cardInput]}
              placeholder='0'
              placeholderTextColor='grey'
              value={value}
              onChangeText={onChangeText}
          />
      </View>
  )
}

export default NutritionCard

const styles = StyleSheet.create({
     card: {
      backgroundColor: Colors.cardBackground,
      height: 90,
      width: 140,
      borderTopStartRadius: 30,
      borderBottomRightRadius: 30,
      position: 'relative'
    },
    cardInput: {
      backgroundColor: "white",
      color: Colors.fontColor,
      width: '100%',
      position: 'absolute',
      bottom: 0,
      height: '50%',
      borderBottomEndRadius: 30,
      textAlign: 'center'
    },

    cardLabel: {
      textAlign: 'center',
      color: Colors.fontColor,
      position: 'absolute',
      width: '100%',
      height: '50%',
      top: 15,
      
    },
})