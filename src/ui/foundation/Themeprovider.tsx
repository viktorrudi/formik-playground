import { createTheme } from "@mui/material";
import { ThemeProvider as MUIThemeProvider } from "@mui/system";

const theme = createTheme();

type ThemeproviderProps = { children: React.ReactNode };
export function ThemeProvider(props: ThemeproviderProps) {
  return <MUIThemeProvider theme={theme} {...props} />;
}
