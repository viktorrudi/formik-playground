import {
  FormControl,
  FormGroup,
  FormGroupProps,
  FormLabel,
  FormLabelProps,
  InputLabel,
  RadioGroup as MUIRadioGroup,
  RadioGroupProps as MUIRadioGroupProps,
} from "@mui/material";

type CheckboxGroupProps = Pick<FormGroupProps, "row" | "children"> & {
  title?: FormLabelProps["children"];
};
function CheckboxGroup({ title, row, children }: CheckboxGroupProps) {
  return (
    <FormControl>
      {title && <FormLabel component="legend">{title}</FormLabel>}
      <FormGroup row={row}>{children}</FormGroup>
    </FormControl>
  );
}

type SelectGroupProps = Pick<FormGroupProps, "row" | "children"> & {
  title?: FormLabelProps["children"];
};
function SelectGroup({ title, row, children }: SelectGroupProps) {
  return (
    <FormControl fullWidth>
      {title && <InputLabel>{title}</InputLabel>}
      <FormGroup row={row}>{children}</FormGroup>
    </FormControl>
  );
}

type RadioGroupProps = Pick<
  MUIRadioGroupProps,
  "onChange" | "row" | "children" | "value" | "name"
> & {
  title: FormLabelProps["children"];
};
function RadioGroup({
  title,
  row,
  value,
  name,
  onChange,
  children,
}: RadioGroupProps) {
  return (
    <FormControl>
      {title && <FormLabel component="legend">{title}</FormLabel>}
      <MUIRadioGroup row={row} value={value} name={name} onChange={onChange}>
        {children}
      </MUIRadioGroup>
    </FormControl>
  );
}

export { CheckboxGroup, RadioGroup, SelectGroup };
