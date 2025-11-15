import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import CategoryDropDownPicker from '../Components/CategoryDropDownPicker';
import Spacer from '../Components/Spacer';
import ThemedView from '../Components/ThemedView';
import { Colors } from "../Constants/Colors";
import useDB from '../hooks/useDB';

export default function createRecipe() {
    const [name, setName] = useState(null);
    const [shortDesc, setShortDesc] = useState(null);
    const [category, setCategory] = useState(null)
    const [freeTextIngredients, setFreeTextIngredients] = useState(null)
    const [description, setDescription] = useState(null)
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState(null)



    // DB Context
     const { createRecipe } = useDB();

     // routing
     const route = useRouter()

    const handleSubmit = async () => {
        try {
            const result = await createRecipe({
                name: name,
                shortDescription: shortDesc,
                description: description,
                category: category,
                rating: rating,
                additionalIngredients: freeTextIngredients,
                comment: comment,
               
            });
            route.replace("/")
            // set states back to initial state
            setName(null),
            setShortDesc(null),
            setCategory(null)
            setComment(null)
            setRating(0)
            setFreeTextIngredients(null)
            setDescription(null)

        }
        catch(error){
            console.log(error)
        }

    }
  return (

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>


          <ThemedView safe={true} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: '18' }}>Neues Rezept erstellen</Text>
              <Spacer />
              <TextInput
                  style={styles.input}
                  placeholder="Name"
                  placeholderTextColor='grey'
                  value={name}
                  onChangeText={setName}
              />
              <TextInput
              style={styles.input}
                  placeholder="Kurzbeschreibung"
                  placeholderTextColor='grey'
                  value={shortDesc}
                  onChangeText={setShortDesc}
                  multiline = {true}
                
              />
             <CategoryDropDownPicker/>
             <TextInput
             style={[styles.input, {height: 150}]}
                  placeholder="Zutaten"
                  placeholderTextColor='grey'
                  value={freeTextIngredients}
                  onChangeText={setFreeTextIngredients}
                  multiline = {true}
              />

              <TextInput
             style={[styles.input, {height: 200}]}
                  placeholder="Beschreibung"
                  placeholderTextColor='grey'
                  value={description}
                  onChangeText={setDescription}
                  multiline = {true}
              />
              
              <Spacer height={20} />

              <Pressable onPress={handleSubmit} style={({pressed}) => 
                [styles.button, {backgroundColor: (pressed) ? Colors.buttonBGPressed : Colors.buttonBG

                }]
              }>
                <Text>Rezept erstellen</Text>
              </Pressable>

          </ThemedView>
      </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    input: {
        width: "80%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 12,
        color: Colors.fontColor,
        backgroundColor: "white",
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