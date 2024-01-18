const Button = (props: {
  btnText: string;
  icon?: React.ComponentType;
  onClick?: () => void;
}) => {
  const Icon = props.icon;

  return (
    <div
      className="flex flex-row space-x-2 items-center justify-around bg-btbBg text-fontColor w-3/4 py-2 px-4 rounded cursor-pointer"
      onClick={props.onClick}
    >
      {Icon && <Icon />}
      <p>{props.btnText}</p>
    </div>
  );
};

export default Button;
