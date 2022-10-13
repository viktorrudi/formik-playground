import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import { Block } from "../../atoms/Layout/Block";

export type ShellProps = {
  children: JSX.Element | JSX.Element[];
};
export function Shell({ children }: ShellProps) {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={(theme) => ({ marginTop: theme.spacing(2) })}
      >
        <Block sx={{ height: "100vh" }}>{children}</Block>
      </Container>
    </>
  );
}
