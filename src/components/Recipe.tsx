import { useState } from "react";
import { IRecipe } from "../interfaces/IRecipe";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import OutdoorGrillOutlinedIcon from "@mui/icons-material/OutdoorGrillOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import StyledBox from "./StyledBox";
import ContainedButton from "./ContainedButton";
import theme from "../theme";
import StyledDivider from "./StyledDivider";
import RoundedButton from "./RoundedButton";
import IconBox from "./IconBox";
import InstructionStep from "./InstructionStep";
import InformationBox from "./InformationBox";
import StyledTypography from "./StyledTypography";
import PortionsCalculator from "./PortionsCalculator";

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
        <img width="70%" height="90%" src={recipe.img} alt="" />
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
            sx={{
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
              btnText="Add to Groceries"
              icon={<AddShoppingCartIcon />}
              onClick={handleSave}
            ></ContainedButton>
            <ContainedButton
              btnText="Add to Planner"
              icon={<DriveFileRenameOutlineIcon />}
              onClick={handleSave}
            ></ContainedButton>
          </StyledBox>
          <StyledBox
            sx={{
              marginTop: "10%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StyledTypography variant="h4" content="INGREDIENTS" />
            <PortionsCalculator />
            <StyledDivider />
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index}>
                <StyledTypography
                  variant="body1"
                  content={
                    ingredient.quantity +
                    " " +
                    ingredient.measurement +
                    " " +
                    ingredient.title
                  }
                />
              </div>
            ))}
            <StyledDivider />
            <StyledTypography variant="h4" content="DEL" />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                lineHeight: "bold",
                width: "100%",
                height: "150px",
                marginTop: "3%",
              }}
            >
              <RoundedButton
                btnText="Kopier Lenke"
                onClick={handleSave}
                icon={<AddIcon />}
              />
              <RoundedButton
                btnText="Send e-post"
                onClick={handleSave}
                icon={<AddIcon />}
              />
              <RoundedButton
                btnText="Send SMS"
                onClick={handleSave}
                icon={<AddIcon />}
              />
            </div>
          </StyledBox>
        </div>
        <StyledBox
          sx={{
            textAlign: "center",
            width: "40%",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                marginTop: "5%",
                borderRadius: "36px",
                minWidth: "10%",
                height: "35px",
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.main,
                },
              }}
            >
              <StyledTypography variant="body1" content={recipe.mealType} />
            </Button>
          </div>
          <StyledTypography variant="h1" content={recipe.title} />
          <StyledTypography
            variant="h4"
            content={recipe.portion + " Portions"}
          />
          <StyledDivider />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <IconBox
              text={recipe.timeEstimation.toString() + " MIN"}
              icon={<AccessTimeOutlinedIcon />}
            />
            <IconBox
              text={recipe.difficulty}
              icon={<OutdoorGrillOutlinedIcon />}
            />
          </div>
          <StyledDivider />
          <StyledTypography variant="h4" content="INSTRUCTIONS" />
          {recipe.instructions.map((instruction, index) => (
            <InstructionStep
              key={index}
              content={instruction}
            ></InstructionStep>
          ))}
          <StyledBox
            sx={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <InformationBox content={recipe.tips} />
          </StyledBox>
        </StyledBox>
      </Box>
    </Box>
  );
}

export default Recipe;
