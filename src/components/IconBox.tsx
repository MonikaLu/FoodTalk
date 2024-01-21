import StyledTypography from "./StyledTypography";

interface IconBoxProps {
  text: string;
  icon: React.ReactNode;
}

const IconBox = ({ text, icon }: IconBoxProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "1%",
        height: "30px",
        width: "100%",
      }}
    >
      {icon}
      <StyledTypography variant="body2" content={text} />
    </div>
  );
};

export default IconBox;
