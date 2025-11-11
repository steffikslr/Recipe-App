import { useState } from 'react';
import { Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import CategoryDropDownPicker from '../Components/CategoryDropDownPicker';
import Spacer from '../Components/Spacer';
import ThemedView from '../Components/ThemedView';
import { Colors } from "../Constants/Colors";

export default function createRecipe() {
    const [name, setName] = useState('');
    const [shortDesc, setShortDesc] = useState('');
    const [category, setCategory] = useState('Mittagessen')
    const [freeTextIngredients, setFreeTextIngredients] = useState('')
    const [description, setDescription] = useState('')
    const [visible, setVisible] = useState(false);
    const [rating, setRating] = useState(0);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const handleSubmit = async () => {

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