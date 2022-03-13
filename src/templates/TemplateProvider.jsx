import React, {  useState } from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const TemplateContext = React.createContext(null);

export const TemplateProvider = ({ children }) => {
  const theme = createTheme({
    components: {
      MuiDialog: {
        styleOverrides: {
          paperWidthSm: {
            maxWidth: "unset",
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            padding: 0,
            // "&:first-child": {
            //   paddingTop: 0,
            // },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: 0,
          },
        },
      },
    },
  });
  
  const [ThemeUI, setThemeUI] = useState("");
  return (
    <TemplateContext.Provider value={{ ThemeUI, setThemeUI }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </TemplateContext.Provider>
  );
};

export default TemplateProvider;
