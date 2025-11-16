import { StyleSheet, Text } from 'react-native'
import ThemedView from '../../Components/ThemedView'

const create = () => {
  return (
    <ThemedView safe={true} style={styles.container}>
      <Text style={styles.title}>Neue Zutat</Text>
    </ThemedView>
  )
}

export default create

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})