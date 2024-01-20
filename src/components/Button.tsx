import { Button } from "@mui/material";

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
        height: "30%",
        display: "flex",
        justifyContent: "space-evenly",
        textAlign: "left",
      }}
      startIcon={icon}
      onClick={onClick}
    >
      <p>{btnText}</p>
    </Button>
  );
};

export default ContainedButton;
