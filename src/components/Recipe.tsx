import { IRecipe } from "../interfaces/IRecipe";

function Recipe(recipe: IRecipe) {
  return (
    <div>
      <img src={recipe.img} alt="" />
      <h1>{recipe.title}</h1>
    </div>
  );
}

export default Recipe;
