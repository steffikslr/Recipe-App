import { Stack } from "expo-router";


export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: 'Zutaten', headerShown: false}} />
      <Stack.Screen name="create" options={{title: ''}}  />
    </Stack>
  )
}