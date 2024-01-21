import { Box } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import theme from "../theme";
import StyledTypography from "./StyledTypography";

interface InformationBoxProps {
  content: string;
}

const InformationBox = ({ content }: InformationBoxProps) => {
  return (
    <Box
      sx={{
        border: "solid 1px",
        borderColor: theme.palette.primary.light,
        height: "90%",
        width: "90%",
        margin: "3%",
        padding: "3%",
      }}
    >
      <InfoOutlinedIcon />
      <StyledTypography variant="body1" content={content} />
    </Box>
  );
};

export default InformationBox;
