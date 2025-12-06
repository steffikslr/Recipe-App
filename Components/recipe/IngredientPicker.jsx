import { useEffect, useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { Colors } from '../../Constants/Colors'
import { DBContext } from '../../context/DBContext'
import useDB from '../../hooks/useDB'
import Spacer from '../Spacer'

const IngredientPicker = ({ setValueIngredients, onClose }) => {
    const { fetchAllIngredients, fetchIngredientsByName } = useDB(DBContext)
    const [ingredients, setIngredients] = useState([])
    const [query, setQuery] = useState('');

    const loadIngredients = async () => {
        try {
            const items = await fetchAllIngredients();
            setIngredients(items);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSelection = (item) => {
        setValueIngredients(prev => [...prev, {ingredientName: item.name, ingredientID: item.$id}] );
        onClose();
    }

    const searchList = async (query) => {

        try {
            const searchResult = await fetchIngredientsByName(query);
            setIngredients(searchResult);
        
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadIngredients();
    }, []);

    useEffect(() => {searchList(query)}, [query] );


    return (
        <View style={{ flex: 1 }}>
            <Spacer />
            <Pressable onPress={onClose} style={styles.closeContainer}>
                <Text style={styles.closeText}>X</Text>
            </Pressable>
            <Spacer height={20} />
            <Searchbar
                placeholder="Suche …"
                value={query}
                onChangeText={setQuery}
                iconColor="#333"
                inputStyle={{ color: '#000' }}
                style={styles.searchBar} />

            <Spacer height={20}/>
            <FlatList
            data={ingredients} 
            keyExtractor={(item) => item.$id
            }
            renderItem={({item}) => (
                <Pressable style={({pressed}) =>  
                [styles.ingredient, {backgroundColor: pressed ? Colors.buttonBGPressed : Colors.cardBackground }]}
                onPress={() => handleSelection(item)}>
                    <Text>{item.name}</Text>
                </Pressable>
                
            )}/>
        </View>
    )
}

export default IngredientPicker

const styles = StyleSheet.create({
    ingredient:{
        width: '95%',
        padding: 20,
        marginBottom: 10,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    closeContainer: {
        backgroundColor: '#f0f0f0',
        width: 40,
        height: 40,
        padding: 10,
        borderRadius: 50,
        alignSelf: 'flex-end',
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems:'center',
        
    },
    closeText:{
        fontSize: 18,
        fontWeight: 'bold',
    },

    searchBar: {
        borderRadius: 20, 
        backgroundColor: '#f0f0f0', 
        width: '95%', 
        alignSelf:'center',
    }


})