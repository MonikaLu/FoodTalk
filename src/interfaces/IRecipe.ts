import { Mealtype } from "../enums/Mealtype";
import { IIngredient } from "./IIngredient";
import { IReview } from "./IReview";

export interface IRecipe {
  id: string;
  mealType: Mealtype;
  portion: number;
  instructions: string[];
  ingredients: IIngredient[];
  tips: string;
  picture: string;
  review: IReview[];
}
