import React from 'react';
import './App.css';
import {ThemeProvider} from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainTheme from "./MuiThemes/MainTheme";
import Header from "./Sections/Header";
import Carousel from "./Sections/Carousel";
import {Grid} from "@material-ui/core";
import PrimaryPowerSupplyPage from "./Pages/PrimaryPowerSupplyPage/PrimaryPowerSupplyPage";
import Footer from "./Sections/Footer/Footer";
import PartnersSection from "./Sections/PartnersSection";
import BillingSection from "./Sections/BillingScetion/BillingSection";
import KrokodilePowerSection from "./Sections/KrokodilePowerSection/KrokodilePowerSection";
import FloatFeedbackBtn from "./Components/FloatFeedbackBtn";
import TransformersSection from "./Sections/TransformersSection";

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Router>
        <Grid style={{position: 'relative'}} container direction={"column"}>
          <FloatFeedbackBtn/>

          <Header/>

          <Carousel/>

          <Switch>
            <Route path={PrimaryPowerSupplyPage.routeName}>
              <PrimaryPowerSupplyPage/>
              <KrokodilePowerSection/>
              <TransformersSection/>
            </Route>
          </Switch>

          <BillingSection/>
          <PartnersSection/>
          <Footer/>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
