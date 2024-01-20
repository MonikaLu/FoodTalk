import theme from "../theme";

const StyledDivider = () => {
  return (
    <hr
      style={{
        width: "90%",
        marginTop: "1%",
        borderStyle: "solid",
        color: theme.palette.primary.light,
        borderTop: "1px",
      }}
    />
  );
};

export default StyledDivider;
