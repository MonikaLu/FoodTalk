import { Button } from "@mui/material";
import theme from "../theme";
import StyledTypography from "./StyledTypography";

interface RoundedButtonProps {
  btnText: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const RoundedButton = ({ btnText, icon, onClick }: RoundedButtonProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <Button
        variant="contained"
        sx={{
          borderRadius: "100%",
          height: "100px",
          width: "80px",
          boxShadow: 0,
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.primary.light,
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        {icon}
      </Button>
      <StyledTypography variant="body2" content={btnText} />
    </div>
  );
};

export default RoundedButton;
