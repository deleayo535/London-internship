import { MouseEventHandler } from "react";

export type buttonProps = {
  className?: string;
  containerStyle?: any;
  bodyClassName?: string;

  text: string;
  style?: any;
  onclick?: () => void;
};
