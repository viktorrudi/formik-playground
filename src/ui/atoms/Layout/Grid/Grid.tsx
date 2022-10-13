import { Grid as MUIGrid, GridProps as MUIGridProps } from "@mui/material";

function Grid(props: MUIGridProps) {
  return <MUIGrid container {...props} />;
}

function GridItem(props: MUIGridProps) {
  return <MUIGrid item {...props} />;
}

Grid.Item = GridItem;

export { Grid };
