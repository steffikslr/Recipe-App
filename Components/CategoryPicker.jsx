import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { Colors } from '../Constants/Colors';

export default function CategoryPicker({category, setCategory}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const categories = ['Abendessen', 'Mittagessen', 'Aufstrich', 'Kuchen', 'Salat']

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
      {categories.map((value, index) => (
        <Pressable key={index} onPress={() => setCategory(value)} >
          {category == value ?
          <Text style={styles.categoryContainerSelected} >{value}</Text>
          :
          <Text style={styles.categoryContainer} >{value}</Text>}
        </Pressable>))}
    </ScrollView>
    

  );
  
}

const styles = StyleSheet.create({

  container:{
    margin: 20

  },

  categoryContainer: {
    backgroundColor: Colors.headerIngredientBG,
    padding: 15,
    borderRadius: 20,
    textAlign: 'center',
    margin: 5,
  },

  categoryContainerSelected: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 20,
    textAlign: 'center',
    margin: 5,
}})
