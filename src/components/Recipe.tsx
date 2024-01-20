import { useState } from "react";
import { IRecipe } from "../interfaces/IRecipe";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import StyledBox from "./StyledBox";
import ContainedButton from "./Button";
import theme from "../theme";
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
        height: "100vh",
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
          marginTop: "5%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "30%",
          }}
        >
          <StyledBox
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              gap: "10px",
              padding: "5% 0 5% 0",
            }}
          >
            <ContainedButton
              btnText="Save"
              icon={<AddIcon />}
              onClick={handleSave}
            ></ContainedButton>
            <ContainedButton
              btnText="Add to Grocery List"
              icon={<AddShoppingCartIcon />}
              onClick={handleSave}
            ></ContainedButton>
            <ContainedButton
              btnText="Add to Weekly Planner"
              icon={<DriveFileRenameOutlineIcon />}
              onClick={handleSave}
            ></ContainedButton>
          </StyledBox>
          <StyledBox style={{ marginTop: "10%", textAlign: "center" }}>
            <h2>INGREDIENTS</h2>
            <div>
              <RemoveIcon
                sx={{
                  borderRadius: "100%",
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                }}
              />
              1
              <AddIcon
                sx={{
                  borderRadius: "100%",
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                }}
              />
            </div>
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index}>
                {ingredient.title}: {ingredient.quantity}{" "}
                {ingredient.measurement}
              </div>
            ))}
          </StyledBox>
        </div>
        <StyledBox style={{ textAlign: "center", width: "40%" }}>
          <h2>{recipe.mealType}</h2>
          <h1>{recipe.title}</h1>

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
