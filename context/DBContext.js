import { createContext, useState } from "react";

const DBContext = createContext()

export const DBProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  

return (
    <DBContext.Provider value={{ recipes, ingredients }}>
      {children}
    </DBContext.Provider>
  );

}