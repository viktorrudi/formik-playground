import {
  Checkbox as MUICheckbox,
  CheckboxProps as MUICheckboxProps,
} from "@mui/material";

export type CheckboxProps = MUICheckboxProps;
export function Checkbox(props: CheckboxProps) {
  return <MUICheckbox {...props} />;
}
