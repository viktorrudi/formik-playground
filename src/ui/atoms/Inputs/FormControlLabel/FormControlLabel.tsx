import {
  FormControlLabel as MUIFormControlLabel,
  FormControlLabelProps as MUIFormControlLabelProps,
} from "@mui/material";

export type FormControlLabelProps = MUIFormControlLabelProps;
export function FormControlLabel(props: FormControlLabelProps) {
  return <MUIFormControlLabel {...props} />;
}
