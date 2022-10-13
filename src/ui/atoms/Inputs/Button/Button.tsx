import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from "@mui/material";

export type ButtonProps = MUIButtonProps;
function Button(props: ButtonProps) {
  return <MUIButton {...props} />;
}

export { Button };
