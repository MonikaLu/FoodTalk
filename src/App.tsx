import "./App.css";
import Recipe from "./components/Recipe";
import { Difficulty } from "./enums/Difficulty";
import { Mealtype } from "./enums/Mealtype";
import { Measurement } from "./enums/Measurement";
import { IRecipe } from "./interfaces/IRecipe";
import { Ingredient } from "./interfaces/Ingredient";

function App() {
  const mockIngredient: Ingredient = {
    title: "Cucumber",
    quantity: 1,
    measurement: Measurement.slice,
  };

  const mockData: IRecipe = {
    id: "1",
    title: "Taco!",
    mealType: Mealtype.dinner,
    portion: 1,
    instructions: ["Step 1", "Step 2"],
    ingredients: [mockIngredient, mockIngredient, mockIngredient],
    tips: "Should not heat the tortilla longer than 15 seconds in the microwave",
    img: "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/HF210603_R13_W29_SE_R12344157-1_KB_Main_low-413ba4c1.jpg",
    review: [],
    difficulty: Difficulty.medium,
    timeEstimation: 70,
  };

  return (
    <>
      <div className="bg-background ">
        <Recipe {...mockData} />
      </div>
    </>
  );
}

export default App;
