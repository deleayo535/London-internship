import { Image } from "../Image";
import { buttonProps } from "./button.types";
import classes from "./button.module.css";
export const Button = ({
  className,
  style,
  containerStyle,
  text,
  onclick,
}: buttonProps) => {
  return (
    <button
      className={`${classes.button || className || ""}`}
      onClick={onclick}
      style={style}
    >
      <span className="text-smx font-normal">{text}</span>
    </button>
  );
};
