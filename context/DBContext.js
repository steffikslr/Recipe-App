import { Query } from "appwrite";
import { createContext, useState } from "react";
import { databases, ID } from "../lib/appwrite";

export const DBContext = createContext()

export const DBProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  
  const DATABASE_ID = '6910c4f20013c6d65e39';
  const TABLE_ID_RECIPES = 'recipes'
  const TABLE_ID_INGREDIENTS = 'ingredients'
  const TABLE_ID_RECIPE_INGREDIENTS = 'recipe_ingredients'

  

    const createRecipe = async (data) => {
        try {
            const promise = await databases.createDocument({
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

    const createIngredient = async (data) => {
      try{
        const promise = await databases.createDocument({
          databaseId: DATABASE_ID,
          collectionId: TABLE_ID_INGREDIENTS,
          documentId: ID.unique(),
          data: data
        })
      }
      catch(error){
        throw new Error(error)
      }
    }

    const fetchAllIngredients = async () => {
      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          TABLE_ID_INGREDIENTS
        )
        return response.documents;

      }
      catch(error){
        throw new Error(error);
      }

    }

    const fetchIngredientsByName = async (name) => {
      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          TABLE_ID_INGREDIENTS,
          [
            Query.search("name", name)
          ]

        )
        if (!name) return fetchAllIngredients();
        return response.documents;

      }
      catch(error){
        throw new Error(error);
      }

    }

return (
    <DBContext.Provider value={{ recipes, ingredients, createRecipe, createIngredient, fetchAllIngredients, fetchIngredientsByName }}>
      {children}
    </DBContext.Provider>
  );

}