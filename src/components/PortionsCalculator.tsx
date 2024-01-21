import theme from "../theme";
import StyledTypography from "./StyledTypography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const PortionsCalculator = () => {
  return (
    <div
      style={{
        width: "30%",
        height: "40px",
        padding: "1%",
        borderRadius: "36px",
        backgroundColor: theme.palette.primary.light,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        fontSize: "25px",
        lineHeight: "bold",
        gap: "5px",
        marginBottom: "3%",
      }}
    >
      <RemoveIcon
        sx={{
          fontSize: "3rem",
          borderRadius: "100%",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        }}
      />
      <div
        style={{
          width: "100px",
          height: "100%",
          borderRadius: "10px",
          backgroundColor: theme.palette.primary.contrastText,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <StyledTypography variant="h4" content="1" />
      </div>

      <AddIcon
        sx={{
          fontSize: "3rem",
          borderRadius: "100%",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        }}
      />
    </div>
  );
};

export default PortionsCalculator;
