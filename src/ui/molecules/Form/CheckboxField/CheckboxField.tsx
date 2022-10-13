import {
  FormControlLabel,
  FormControlLabelProps,
} from "../../../atoms/Inputs/FormControlLabel/FormControlLabel";
import { Checkbox, CheckboxProps } from "../../../atoms/Inputs/Checkbox";

export type CheckboxFieldProps = {
  label: FormControlLabelProps["label"];
  name: FormControlLabelProps["name"];
  value: CheckboxProps["checked"];
  disabled?: FormControlLabelProps["disabled"];
  onChange: CheckboxProps["onChange"];
};
export function CheckboxField({
  label,
  value,
  name,
  disabled = false,
  onChange,
}: CheckboxFieldProps) {
  return (
    <FormControlLabel
      label={label}
      name={name}
      value={value}
      disabled={disabled}
      control={<Checkbox onChange={onChange} checked={value} />}
    />
  );
}
