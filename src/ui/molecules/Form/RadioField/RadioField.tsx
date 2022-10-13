import {
  FormControlLabel,
  FormControlLabelProps,
} from "../../../atoms/Inputs/FormControlLabel";
import { Radio, RadioProps } from "../../../atoms/Inputs/Radio";

export type RadioFieldProps = {
  label: FormControlLabelProps["label"];
  value: FormControlLabelProps["value"];
  disabled?: FormControlLabelProps["disabled"];
  onChange?: RadioProps["onChange"];
};
export function RadioField({
  label,
  value,
  disabled = false,
  onChange,
}: RadioFieldProps) {
  return (
    <FormControlLabel
      label={label}
      value={value}
      disabled={disabled}
      control={<Radio onChange={onChange} />}
    />
  );
}
