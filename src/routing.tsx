import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Home from './layouts/Home/Home';
import { CustomTheme } from './styles/theme';

const CustomRouting = () => (
  <BrowserRouter>
    <CustomTheme>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </CustomTheme>
  </BrowserRouter>
);

export default CustomRouting;
