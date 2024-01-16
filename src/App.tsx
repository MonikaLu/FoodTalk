import "./App.css";
import Recipe from "./components/Recipe";
import { Mealtype } from "./enums/Mealtype";
import { IRecipe } from "./interfaces/IRecipe";

function App() {
  const mockData: IRecipe = {
    id: "1",
    title: "Taco!",
    mealType: Mealtype.dinner,
    portion: 1,
    instructions: [],
    ingredients: [],
    tips: "",
    img: "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/HF210603_R13_W29_SE_R12344157-1_KB_Main_low-413ba4c1.jpg",
    review: [],
  };

  return (
    <>
      <div>
        <Recipe {...mockData} />
      </div>
    </>
  );
}

export default App;
