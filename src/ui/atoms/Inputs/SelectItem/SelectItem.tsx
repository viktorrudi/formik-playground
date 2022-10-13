import { MenuItem, MenuItemProps } from "@mui/material";

export type SelectItemProps = MenuItemProps;
export function SelectItem(props: SelectItemProps) {
  return <MenuItem {...props} />;
}
