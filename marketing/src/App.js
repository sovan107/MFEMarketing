import React from 'react';
import {Switch,  Route, BrowserRouter} from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
  return (
    <div>
        <StylesProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/pricing' component={Pricing}></Route>
                    <Route path='/' component={Landing}></Route>
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
  )
};