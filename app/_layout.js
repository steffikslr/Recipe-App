import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { Colors } from "../Constants/Colors";
import { DBProvider } from "../context/DBContext";


export default function Layout() {
  return (
    <DBProvider>
    <Tabs screenOptions={
      {
        headerShown: false,
        tabBarStyle: {...styles.tab},
         tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
        
        
        
      }
    }>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Rezepte',
          tabBarIcon: ({focused}) => (
            <Ionicons name="restaurant" size={24} color={focused ? "#f1e499ff" : "grey"} />
          ),  
        }}
      />

       <Tabs.Screen
        name="createRecipe"
        options={{
          title:'Neues Rezept',
          tabBarIcon: ({focused}) => (
            <Ionicons name={focused ? 'create' : 'create-outline'} size={24} color={focused ? 'white' : "grey"}/>
          ), 
        }} />

      <Tabs.Screen
        name="ingredients"
        options={{
          title: 'Zutaten',
          tabBarIcon: ({focused}) => (
            <FontAwesome6 name="carrot" size={24} color={focused ? "orange" : "grey"} />
          ), 
        }}
      />
      


    </Tabs>
    </DBProvider>
  )
}
const styles = StyleSheet.create({
  tab: {
    backgroundColor: Colors.tabBG,
    height: 80,
     paddingTop: 10,
    
   
  },
  

})
  