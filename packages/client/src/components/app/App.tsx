import React, { ReactElement } from "react";
import AppRoutes from "./AppRoutes";
import Header from "../header";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import NavigationDrawer from "../navigationDrawer";
import TrainerStatus from "../trainerStatus";
import Footer from "../footer";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, useMediaQuery } from "@material-ui/core";
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from "@apollo/client";

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
  },
  appBarSpacer: theme.mixins.toolbar
}));

interface Props {
  client: ApolloClient<NormalizedCacheObject>;
}

function App({ client }: Props): ReactElement {
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
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <Router history={browserHistory}>
            <Header />
            <NavigationDrawer />
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <AppRoutes />
              <TrainerStatus />
              <Footer />
            </main>
          </Router>
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
