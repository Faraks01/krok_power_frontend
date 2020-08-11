import React from 'react';
import './App.css';
import {ThemeProvider} from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainTheme from "./MuiThemes/MainTheme";
import Header from "./Sections/Header";
import Carousel from "./Sections/Carousel";
import {Grid} from "@material-ui/core";
import PrimaryPowerSupplyPage from "./Pages/PrimaryPowerSupplyPage/PrimaryPowerSupplyPage";

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Router>
        <Grid container direction={"column"}>
          <Header/>

          <Carousel/>

          <Switch>
            {/*<Route path="/about">*/}
            {/*  /!*<About />*!/*/}
            {/*</Route>*/}
            {/*<Route path="/users">*/}
            {/*  /!*<Users />*!/*/}
            {/*</Route>*/}
            <Route path={PrimaryPowerSupplyPage.routeName}>
              <PrimaryPowerSupplyPage/>
            </Route>
          </Switch>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
