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
        height: "100%",
        width: "100%",
      }}
    >
      {icon}
      <StyledTypography variant="h5" content={text} />
    </div>
  );
};

export default IconBox;
