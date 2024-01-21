import { Button } from "@mui/material";
import StyledTypography from "./StyledTypography";

interface ContainedButtonProps {
  btnText: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const ContainedButton = ({ btnText, icon, onClick }: ContainedButtonProps) => {
  return (
    <Button
      sx={{
        width: "50%",
        height: "60px",
        display: "flex",
        justifyContent: "flex-start",
        textAlign: "left",
        color: "primary.main",
        gap: "3%",
        "&:hover": {
          backgroundColor: "primary.main",
          color: "primary.contrastText",
        },
        "& > *:first-child": {
          color: "primary.contrastText",
          backgroundColor: "primary.main",
          padding: "2%",
          borderRadius: "3px",
        },
      }}
      variant="outlined"
      onClick={onClick}
    >
      {icon}
      <StyledTypography variant="body2" content={btnText} />
    </Button>
  );
};

export default ContainedButton;
