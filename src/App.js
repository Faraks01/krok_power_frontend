import React, {useEffect, useState} from 'react';
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
import CableAndConductorSection from "./Sections/CableAndConductorSection";
import PowerDistributorConstructor from "./Sections/PowerDistributorConstructor";
import NewsAndStories from "./Sections/NewsAndStories";
import BodyShapeReducer from "./store/reducers/BodyShape";
import ManufacturerReducer from "./store/reducers/Manufacturer";
import WireTypeReducer from "./store/reducers/WireType";
import ColorReducer from "./store/reducers/Color";
import {useDispatch} from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import WireLengthReducer from "./store/reducers/WireLength";
import BearingStructuresPage from "./Pages/BearingStructuresPage";
import HiEndPage from "./Pages/HiEndPage";
import DocumentationPage from "./Pages/DocumentationPage";
import AboutPage from "./Pages/AboutPage";
import NewsReducer from "./store/reducers/News";

const bodyShapeReducer = new BodyShapeReducer();
const manufacturerReducer = new ManufacturerReducer();
const wireTypeReducer = new WireTypeReducer();
const colorReducer = new ColorReducer();
const wireLengthReducer = new WireLengthReducer();
const newsReducer = new NewsReducer();


function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  async function fetchInitData() {
    setLoading(true);

    await Promise.all([
      dispatch(wireLengthReducer.fetchList()),
      dispatch(colorReducer.fetchList()),
      dispatch(bodyShapeReducer.fetchList()),
      dispatch(manufacturerReducer.fetchList()),
      dispatch(wireTypeReducer.fetchList()),
      dispatch(newsReducer.fetchList()),
    ]);

    setLoading(false);
  }

  useEffect(() => {
    fetchInitData();
  }, []);

  if (loading) {
    return <ThemeProvider theme={MainTheme}>
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <CircularProgress/>
      </div>
    </ThemeProvider>
  } else {
    return (
      <ThemeProvider theme={MainTheme}>
        <Router>
          <Grid style={{position: 'relative'}} container direction={"column"}>
            <FloatFeedbackBtn/>

            <Header/>

            <Carousel/>

            <Switch>
              <Route path={PrimaryPowerSupplyPage.type.routeName} exact>
                <PrimaryPowerSupplyPage/>
                <KrokodilePowerSection/>
                <PowerDistributorConstructor/>
                <CableAndConductorSection/>
                <TransformersSection/>
              </Route>

              <Route path={BearingStructuresPage.type.routeName} exact>
                <BearingStructuresPage/>
              </Route>

              <Route path={HiEndPage.type.routeName} exact>
                <HiEndPage/>
              </Route>

              <Route path={AboutPage.type.routeName} exact>
                <AboutPage/>
              </Route>

              <Route path={DocumentationPage.type.routeName} exact>
                <DocumentationPage/>
              </Route>
            </Switch>

            <BillingSection/>
            <NewsAndStories/>
            <PartnersSection/>
            <Footer/>
          </Grid>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
