import { Box } from "@mui/material";
import StyledTypography from "./StyledTypography";

interface InstructionStepProps {
  content: string;
}

const InstructionStep = ({ content }: InstructionStepProps) => {
  return (
    <Box
      sx={{
        margin: "2%",
        textAlign: "left",
      }}
    >
      <StyledTypography variant="body1" content={content} />
    </Box>
  );
};

export default InstructionStep;
