import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { RecipeContext } from "../../RecipeContext";

import styled from "styled-components";

const RecipeDetailStyled = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  padding: 1rem;
  ul {
    border: 16px;
    border-color: black;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

function RecipeDetails() {
  const { recipeId } = useParams();
  const [recipes, setRecipes] = useContext(RecipeContext);
  const [selectedRecipe] = recipes.filter(
    (recipe) => recipe.recipe.label === recipeId
  );
  const { recipe } = selectedRecipe;

  return (
    <RecipeDetailStyled>
      <div className="img-title">
        <img src={recipe.image} />
        <h1>{recipe.label}</h1>
      </div>

      <ul>
        {recipe.ingredientLines.map((line, index) => {
          return <li key={index}>{line}</li>;
        })}
      </ul>
      <Link to="/">Back</Link>
    </RecipeDetailStyled>
  );
}

export default RecipeDetails;
