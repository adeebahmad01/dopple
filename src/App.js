import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";
import { useEffect } from "react";
function App() {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
      background: {
        default: `#2c3038`,
        paper: `#40444f`,
      },
      text: {
        primary: `#fff`,
        secondary: `#808285`,
      },
      action: {
        disabledBackground: `#606571`,
        disabled: `#40444f`,
      },
      primary: {
        main: `#3ab2e6`,
        light: `rgba(56,189,248,0.3)`,
        contrastText: `#fff`,
      },
      secondary: {
        main: `#86efac`,
      },
      success: {
        main: `rgba(34,197,94)`,
      },
      error: {
        main: `rgb(239,68,68)`,
        light: `rgba(252,165,165)`,
        dark: `rgba(248,113,113)`,
      },
    },
    shape: {
      borderRadius: `0.5rem`,
    },
    typography: {
      fontFamily: ["Poppins", "Arial", "sans-serif"],
      fontSize: `1.125rem`,
      lineHeight: `1.5rem`,
      h1: {
        fontSize: `3rem`,
        fontWeight: `bold`,
      },
      h2: {
        fontWeight: 700,
        fontSize: `2.25rem`,
        lineHeight: `2.5rem`,
      },
      h3: {
        fontSize: `1.875rem`,
        lineHeight: `2.25rem`,
      },
      h4: {
        fontSize: `1.5rem`,
        lineHeight: `2rem`,
      },
      h5: {
        fontSize: `1.4rem`,
        lineHeight: `1.75rem`,
        fontWeight: 600,
      },
      h6: {
        fontSize: `1.25rem`,
        lineHeight: `1.75rem`,
        fontWeight: 700,
      },
      body1: {
        fontSize: `1.125rem`,
        lineHeight: `1.5rem`,
      },
      body2: {
        fontSize: `0.9rem`,
        lineHeight: `1.5rem`,
      },
      button: {
        lineHeight: `1.5rem`,
        textTransform: `capitalize`,
      },
      subtitle1: {
        fontSize: `.875rem`,
        lineHeight: `1.25rem`,
        fontWeight: 600,
      },
      subtitle2: {
        fontSize: `0.75rem`,
        lineHeight: `1rem`,
      },
    },
    breakpoints: {
      values: {
        lg: 1024,
        md: 950,
        sm: 640,
      },
    },
    props: {
      MuiContainer: {
        style: {
          paddingLeft: `1rem`,
          paddingRight: `1rem`,
        },
      },
    },
  });
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
