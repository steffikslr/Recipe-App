import { useRouter } from 'expo-router'
import { Pressable, StyleSheet, Text } from 'react-native'
import Spacer from '../../Components/Spacer'
import ThemedView from '../../Components/ThemedView'
import { Colors } from '../../Constants/Colors'

const Ingredients = () => {
  const route = useRouter()

  const createIngredient = async () => {
    route.push('ingredients/create')
  
  }

  return (
    <ThemedView safe={true} style={styles.container}>
      <Text style={styles.title}>Zutaten</Text>
      <Spacer height={20}/>
      <Pressable style={({pressed}) => [styles.button, {backgroundColor: pressed ? Colors.buttonBGPressed : Colors.buttonBG}]} onPress={createIngredient}>
        <Text>Neue Zutat erstellen</Text>
      </Pressable>
    </ThemedView>
  )
}

export default Ingredients

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    width: '40%',
    height: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

  }
})