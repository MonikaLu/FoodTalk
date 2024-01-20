import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.primary.contrastText,
  borderRadius: "1%",
}));

export default StyledBox;
