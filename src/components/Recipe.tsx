import { useState } from "react";
import { IRecipe } from "../interfaces/IRecipe";
import { CiHeart } from "react-icons/ci";
import { Button } from "@mui/material";

// import Button from "./Button";

function Recipe(recipe: IRecipe) {
  const [save, setSave] = useState(false);

  const handleSave = () => {
    setSave(!save);
  };

  return (
    <div>
      <div>
        <img src={recipe.img} alt="" />
      </div>

      <div>
        <div>
          <div>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Add to week planner
            </Button>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Add to favorite
            </Button>
          </div>
          <div>
            <h2>Ingredients</h2>
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index}>
                {ingredient.title}: {ingredient.quantity}{" "}
                {ingredient.measurement}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1>{recipe.title}</h1>
          <h2>{recipe.mealType}</h2>
          <h2>Portion: {recipe.portion}</h2>
          <h2>Instructions</h2>
          {recipe.instructions.map((instruction, index) => (
            <div key={index}>{instruction}</div>
          ))}
          <h3>{recipe.tips}</h3>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
