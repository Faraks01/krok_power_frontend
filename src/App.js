import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainTheme from "./MuiThemes/MainTheme";
import Header from "./Components/Header";

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Router>
        <div>
          <Header/>

          <Switch>
            <Route path="/about">
              {/*<About />*/}
            </Route>
            <Route path="/users">
              {/*<Users />*/}
            </Route>
            <Route path="/">
              {/*<Home />*/}
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
