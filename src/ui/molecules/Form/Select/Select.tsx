import {
  Select as MUISelect,
  SelectProps as MUISelectProps,
} from "@mui/material";
import { SelectItem } from "../../../atoms/Inputs/SelectItem";

export type SelectProps = MUISelectProps;
function Select(props: SelectProps) {
  return <MUISelect {...props} />;
}

Select.Item = SelectItem;

export { Select };
