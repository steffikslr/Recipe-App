import * as ImagePicker from 'expo-image-picker';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../Constants/Colors';

export default function PictureSelect({image, setImage}) {

  const pickImage = async () => {
    // Permission
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      alert("Zugriff auf Fotos benötigt");
      return;
    }

    // Select image
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

   const handleImagePress = () => {
    if (image) {
      // If picture already exists ask if you want to delete
      Alert.alert(
        "Bild entfernen",
        "Möchtest du das Bild löschen?",
        [
          { text: "Abbrechen", style: "cancel" },
          { text: "Löschen", style: "destructive", onPress: () => setImage(null) }
        ]
      );
    } else {
      // Wenn kein Bild existiert, öffne Picker
      pickImage();
    }
  };

  return (
    <View style={{width: '100%'}}>

      <TouchableOpacity
        onPress={handleImagePress}
        style={styles.container}
      >
        {image ? (
            <>
          <Image
            source={{ uri: image }}
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
          />
           </>
          
        ) : (
          <Text>Foto hinzufügen</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
          width: '100%',
          height: 350,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.headerIngredientBG,
    }
})
