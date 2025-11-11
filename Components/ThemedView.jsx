import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../Constants/Colors'

const ThemedView = ({safe = false, style, ...props}) => {

    if (safe) {
        return (
            <SafeAreaView style={[styles.container, style]} {...props} />

        )
    }
  return (
    <View style={[styles.container, style]} {...props} />
  )
}

export default ThemedView

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background
    }
})