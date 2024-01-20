import { useState } from "react";
import { IRecipe } from "../interfaces/IRecipe";
import { CiHeart } from "react-icons/ci";
import { Box, Button } from "@mui/material";
import StyledBox from "./StyledBox";

function Recipe(recipe: IRecipe) {
  const [save, setSave] = useState(false);

  const handleSave = () => {
    setSave(!save);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        justifyItems: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img width="70%" src={recipe.img} alt="" />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "70vh",
          width: "100%",
          gap: "5%",
          marginTop: "10%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <StyledBox>
            <Button variant="contained" color="primary" onClick={handleSave}>
              <CiHeart></CiHeart>
              Save
            </Button>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Add to week planner
            </Button>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Add to favorite
            </Button>
          </StyledBox>
          <StyledBox style={{ marginTop: "10%" }}>
            <h2>Ingredients</h2>
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index}>
                {ingredient.title}: {ingredient.quantity}{" "}
                {ingredient.measurement}
              </div>
            ))}
          </StyledBox>
        </div>
        <StyledBox>
          <h1>{recipe.title}</h1>
          <h2>{recipe.mealType}</h2>
          <h2>Portion: {recipe.portion}</h2>
          <h2>Instructions</h2>
          {recipe.instructions.map((instruction, index) => (
            <div key={index}>{instruction}</div>
          ))}
          <h3>{recipe.tips}</h3>
        </StyledBox>
      </Box>
    </Box>
  );
}

export default Recipe;
