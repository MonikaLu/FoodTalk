import { Box, Typography, TypographyProps } from "@mui/material";

interface StyledTypographyProps {
  variant: TypographyProps["variant"];
  content: string;
}

const StyledTypography = ({ variant, content }: StyledTypographyProps) => {
  return (
    <Box sx={{ margin: "20px" }}>
      <Typography variant={variant}>{content}</Typography>
    </Box>
  );
};

export default StyledTypography;
