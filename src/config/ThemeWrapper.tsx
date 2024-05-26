import { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import createTheme from "@mui/material/styles/createTheme";
import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes";

type ThemeWrapperProps = {
  children: ReactNode;
};

let theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#7165F8" },
    error: { main: "#eb6178" },
    success: { main: "#20B970" },
    warning: { main: "#ff9900" },
    background: {
      paper: "#ffffff",
      default: "#F2F3F7",
    },
  },
});

theme = responsiveFontSizes(theme);

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeWrapper;
