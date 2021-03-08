import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Home from './layouts/Home/Home';
import About from './layouts/About/About';
import { CustomTheme } from './styles/theme';

const CustomRouting = () => (
  <BrowserRouter>
    <CustomTheme>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
      </Switch>
    </CustomTheme>
  </BrowserRouter>
);

export default CustomRouting;
