import React, { useState, createContext } from "react";

const RecipeContext = createContext();

const RecipeProvider = (props) => {
  const [recipes, setRecipes] = useState([]);

  return (
    <RecipeContext.Provider value={[recipes, setRecipes]}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export { RecipeContext, RecipeProvider };
