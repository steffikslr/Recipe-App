import { createContext, useState } from "react";
import { databases, ID } from "../lib/appwrite";

export const DBContext = createContext()

export const DBProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  
  const DATABASE_ID = '6910c4f20013c6d65e39';
  const TABLE_ID_RECIPES = 'recipes'
  const TABLE_ID_INGREDIENTS = 'ingredients'

  

    const createRecipe = async (data) => {
        try {
            const promise = databases.createDocument({
                databaseId: DATABASE_ID,
                collectionId: TABLE_ID_RECIPES,
                documentId : ID.unique(),
                data: data 
            })

        }
        catch (error) {
            throw new Error(error)
        }

    }

return (
    <DBContext.Provider value={{ recipes, ingredients, createRecipe }}>
      {children}
    </DBContext.Provider>
  );

}