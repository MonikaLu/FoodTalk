import { Mealtype } from "../enums/Mealtype";
import { Ingredient } from "./Ingredient";
import { IReview } from "./IReview";

export interface IRecipe {
  id: string;
  title: string;
  mealType: Mealtype;
  portion: number;
  instructions: string[];
  ingredients: Ingredient[];
  tips: string;
  img: string;
  review: IReview[];
}
