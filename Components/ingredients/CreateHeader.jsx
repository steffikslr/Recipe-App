import { StyleSheet, Text, TextInput, View } from 'react-native'
import ArcBottom from '../../assets/ArcBottom'
import Burger from '../../assets/images/hamburger.svg'
import { Colors } from '../../Constants/Colors'
import Spacer from '../Spacer'

const CreateHeader = ({name, setName}) => {
  return (
      <View style={{ height: 250 }}>
          <View style={styles.containerHeader}>
              <View style={styles.containerText}>
                  <Text style={styles.title}>Neue Zutat</Text>
                  <Spacer height={18} />
                  <TextInput
                      style={[styles.nameInput]}
                      placeholder="Name"
                      placeholderTextColor='grey'
                      value={name}
                      onChangeText={setName}
                  />
                  <Spacer height={20} />
                  <Text>Alle Angaben für 1 Gramm</Text>
              </View>

              <Burger height={200} width={200} style={styles.image} />

          </View >
          
          <View style={{ top: -55, zIndex: 1 }}>
              <ArcBottom color={Colors.headerIngredientBG} />
          </View>

      </View>
      
  )
}

export default CreateHeader

const styles = StyleSheet.create({
    nameInput: {
        width: "100%",
        height: 40,
        borderBottomWidth: 1,
        borderColor: Colors.buttonBG,
        borderRadius: 5,
        paddingHorizontal: 12,
        color: Colors.fontColor,
        backgroundColor: "white",
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },

   containerHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.headerIngredientBG,
    top: 0,
    
    
  },

  containerText: {
     width: '60%', 
     paddingTop: 40, 
     paddingLeft: 25,
     zIndex: 3, 
     
  },
  image:{
    right: 20,                    
    zIndex: 2,
    
  }
})