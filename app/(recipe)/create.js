import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import CategoryPicker from '../../Components/CategoryPicker';
import IngredientTab from '../../Components/recipe/IngredientTab';
import PictureSelect from '../../Components/recipe/PictureSelect';
import Spacer from '../../Components/Spacer';
import TabBar from '../../Components/TabBar';
import ThemedView from '../../Components/ThemedView';
import { Colors } from "../../Constants/Colors";
import useDB from '../../hooks/useDB';

export default function CreateRecipe() {
    const [name, setName] = useState(null);
    const [shortDesc, setShortDesc] = useState(null);
    const [category, setCategory] = useState(null)
    const [freeTextIngredients, setFreeTextIngredients] = useState(null)
    const [description, setDescription] = useState(null)
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState(null)
    const [image, setImage] = useState(null);
    const [activeTab, setActiveTab] = useState('tab1')
    const initialIngredients = {
        amount: null,
        recipeID: null,
        ingredientID: null,
        ingredientName: null
    }
    const [ingredients, setIngredients] = useState([initialIngredients])


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
        catch (error) {
            console.log(error)
        }

    }
    return (

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
            <ScrollView>

                <ThemedView safe={false} style={{ flex: 1 }}>

                    <PictureSelect image={image} setImage={setImage} />

                    <View style={styles.container}>
                        <Spacer height={20} />
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            placeholderTextColor='grey'
                            value={name}
                            onChangeText={setName}
                        />
                        <Spacer height={5} />
                        <TextInput
                            style={styles.input}
                            placeholder="Kurzbeschreibung"
                            placeholderTextColor='grey'
                            value={shortDesc}
                            onChangeText={setShortDesc}
                            multiline={true}

                        />
                        <CategoryPicker category={category} setCategory={setCategory} />
                        <Spacer />
                        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} tabLabel1='Zutaten' tabLabel2='Beschreibung'/>
                        <Spacer />
                        {activeTab == 'tab2' ?
                        <TextInput
                            style={[styles.input, { height: 200 }]}
                            placeholder="Beschreibung"
                            placeholderTextColor='grey'
                            value={description}
                            onChangeText={setDescription}
                            multiline={true}
                        /> : 

                        <IngredientTab 
                        placeholder='Zutaten'
                         valueFreeText={freeTextIngredients} 
                         setValueFreeText={setFreeTextIngredients} 
                         valueIngredients={ingredients}
                         setValueIngredients = {setIngredients} />
                         
                    }
 
                        <Spacer height={20} />

                        <Pressable onPress={handleSubmit} style={({ pressed }) =>
                            [styles.button, {
                                backgroundColor: (pressed) ? Colors.buttonBGPressed : Colors.buttonBG

                            }]
                        }>
                            <Text>Rezept erstellen</Text>
                        </Pressable>

                    </View>

                </ThemedView>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        top: -40,
    },

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