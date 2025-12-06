import { useState } from 'react'
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../../Constants/Colors'
import IngredientPicker from './IngredientPicker'

const IngredientTab = ({ placeholder, valueFreeText, setValueFreeText, valueIngredients, setValueIngredients }) => {

    const [isFreeTextIngredients, setIsFreeTextIngredients] = useState(false)
    const [showIngredientPicker, setShowIngredientPicker] = useState(false)

    const addIngredient = () => {
        setShowIngredientPicker(true);
    }

    return (
        <>
            <Modal visible={showIngredientPicker} animationType="slide">
                <IngredientPicker
                    setValueIngredients={setValueIngredients}
                    onClose={() => setShowIngredientPicker(false)}
                />
            </Modal>

            {valueIngredients.length > 0 &&
                valueIngredients.map((ingredient, index) => (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }} key={ingredient.ingredientID || index}>
                        <View style={styles.ingredientContainer}>
                            <TextInput
                                placeholder="0g"
                                placeholderTextColor="grey"
                                value={ingredient.amount || ''}
                                keyboardType="numeric"
                                onChangeText={(text) => {
                                    const updated = [...valueIngredients];
                                    updated[index] = { ...updated[index], amount: text };
                                    setValueIngredients(updated);
                                }}
                                style={styles.amountInput}
                            />
                            <Text>{ingredient.ingredientName}</Text>

                        </View>

                        <Pressable style={({ pressed }) => (pressed ? [styles.deleteContainer, { backgroundColor: 'rgba(206, 202, 202, 0.88)' }] : [styles.deleteContainer])}
                            onPress={() => setValueIngredients(prev => prev.filter(value => value.ingredientID != ingredient.ingredientID))}>
                            <Text style={styles.deleteText}>X</Text>
                        </Pressable>
                    </View>

                ))
            }

            {isFreeTextIngredients &&
                <TextInput
                    style={[styles.freeTextInput, { height: 150 }]}
                    placeholder={placeholder}
                    placeholderTextColor='grey'
                    value={valueFreeText}
                    onChangeText={setValueFreeText}
                    multiline={true}
                />}



            <View style={{ flexDirection: 'row', gap: 20 }}>
                <Pressable style={({ pressed }) => [styles.button, { backgroundColor: pressed ? Colors.buttonBGPressed : Colors.buttonBG }]} onPress={addIngredient}>
                    <Text>Zutat auswählen</Text>
                </Pressable>

                {!isFreeTextIngredients &&
                    <Pressable style={({ pressed }) => [styles.button, { backgroundColor: pressed ? Colors.buttonBGPressed : Colors.buttonBG }]} onPress={() => setIsFreeTextIngredients(true)}>
                        <Text>Zutat als Freitext</Text>
                    </Pressable>
                }
            </View>
        </>
    )
}

export default IngredientTab

const styles = StyleSheet.create({
    freeTextInput: {
        width: "80%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 12,
        color: Colors.fontColor,
        backgroundColor: "white",
        alignSelf: 'flex-start',
        marginLeft: 30,

    },

    button: {
        width: '40%',
        height: 50,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,

    },

    ingredientContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 30,
        marginBottom: 5,
    },

    amountInput: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 12,
        color: Colors.fontColor,
        backgroundColor: "white",
        marginRight: 15,

    },

    deleteContainer: {
        backgroundColor: 'rgba(222, 219, 219, 0.88)',
        width: 40,
        height: 40,
        padding: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },

    deleteText: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})