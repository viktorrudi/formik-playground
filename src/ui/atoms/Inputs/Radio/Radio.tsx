import { Radio as MUIRadio, RadioProps as MUIRadioProps } from "@mui/material";

export type RadioProps = MUIRadioProps;
export function Radio(props: RadioProps) {
  return <MUIRadio {...props} />;
}
