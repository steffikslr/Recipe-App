import { Stack } from "expo-router";
import { KeyboardProvider } from 'react-native-keyboard-controller';


export default function Layout() {
  return (
    <KeyboardProvider>
    <Stack>
      <Stack.Screen name="index" options={{title: 'Zutaten', headerShown: false}} />
      <Stack.Screen name="create" options={{title: ''}}  />
    </Stack>
    </KeyboardProvider>
  )
}