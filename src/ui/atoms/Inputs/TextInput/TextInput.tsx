import { TextFieldProps, TextField } from "@mui/material";

export type TextInputProps = TextFieldProps;
export function TextInput(props: TextInputProps): JSX.Element {
  return <TextField {...props} />;
}
