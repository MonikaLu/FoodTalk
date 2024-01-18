import { useState } from "react";
import { IRecipe } from "../interfaces/IRecipe";

function Recipe(recipe: IRecipe) {
  const [save, setSave] = useState(false);

  const handleSave = () => {
    setSave(!save);
  };

  return (
    <div className="bg-emerald-400 h-20 rounded-md border-4 p-6 ">
      <img src={recipe.img} alt="" />
      <div>
        <button onClick={handleSave}>Save</button>
        <button>Add to grocery list</button>
        <button>Add to week planner</button>
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
      <div>
        <h2>Ingredients</h2>
        {recipe.ingredients.map((ingredient, index) => (
          <div key={index}>
            {ingredient.title}: {ingredient.quantity} {ingredient.measurement}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipe;
