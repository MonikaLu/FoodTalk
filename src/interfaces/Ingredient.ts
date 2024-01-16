import { Measurement } from "../enums/Measurement";

export interface Ingredient {
  title: string;
  quantity: number;
  measurement: Measurement;
}
