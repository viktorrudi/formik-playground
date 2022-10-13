import { Typography, TypographyProps } from "@mui/material";

export type TextProps = TypographyProps;
export function Text(props: TypographyProps) {
  return <Typography {...props} />;
}
