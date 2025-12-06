import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../Constants/Colors'

const ThemedView = ({safe = false, style, children, ...props}) => {

    if (safe) {
        return (
            <SafeAreaView style={[styles.container, style]} {...props}>
                {children}
            </SafeAreaView>

        )
    }
  return (
    <View style={[styles.container, style]} {...props}>
        {children}
    </View>
  )
}

export default ThemedView

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1,
    }
})