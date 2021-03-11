import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Home from './layouts/Home/Home';
import About from './layouts/About/About';
import ProjectOne from './layouts/ProjectOne/ProjectOne';
import { CustomTheme } from './styles/Theme';

const CustomRouting = () => (
  <BrowserRouter>
    <CustomTheme>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/ProjectOne">
          <ProjectOne />
        </Route>
      </Switch>
    </CustomTheme>
  </BrowserRouter>
);

export default CustomRouting;
