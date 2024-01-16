import { IRecipe } from "../interfaces/IRecipe";

function Recipe(recipe: IRecipe) {
  return (
    <div>
      <img src={recipe.img} alt="" />
      <div>
        <button>Save</button>
        <button>Add to grocery list</button>
        <button>Add to week planner</button>
      </div>
      <div>
        <h1>{recipe.title}</h1>
        <h2>{recipe.mealType}</h2>
        <h2>Portion: {recipe.portion}</h2>
        <h2>Instructions</h2>
        {recipe.instructions.map((instruction) => (
          <p>{instruction}</p>
        ))}
        <h3>{recipe.tips}</h3>
      </div>
      <div>
        <h2>Ingredients</h2>
        {recipe.ingredients.map((ingredient) => (
          <p>
            {ingredient.title}: {ingredient.quantity} {ingredient.measurement}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Recipe;
