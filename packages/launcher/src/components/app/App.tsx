import React, { ReactElement } from "react";
import AppRoutes from "./AppRoutes";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import Footer from "../footer";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, useMediaQuery } from "@material-ui/core";

const browserHistory = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

function App(): ReactElement {
  const classes = useStyles();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light"
        }
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Router history={browserHistory}>
          <main className={classes.content}>
            <AppRoutes />
            <Footer />
          </main>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
