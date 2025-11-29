export default function useValidationIngredient() {

  const validateForm = (fields) => {
    const errors = {};   

    if (!fields.name || fields.name.trim() === "") {
      errors.name = "Name ist ein Pflichtfeld";
    }

   
    const numberFields = {
      calories: "Kalorien",
      fat: "unges. Fettsäuren",
      protein: "Protein",
      sugar: "Zucker",
      carbohydrates: "Kohlenhydrate",
      saturatedFat: "ges. Fettsäuren",
      nutrient1Value: "Wert für 1. weiteren Nährstoff",
      nutrient2Value: "Wert für 2. weiteren Nährstoff",
      nutrient3Value: "Wert für 3. weiteren Nährstoff",
    };

    
    Object.keys(numberFields).forEach((key) => {
      const value = fields[key];

      if (value !== null && value !== "" && isNaN(value)) {
        errors[key] = `${numberFields[key]} muss eine Zahl sein`;
      }
    });

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  };

  return { validateForm };
}
