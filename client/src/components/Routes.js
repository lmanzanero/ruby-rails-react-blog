import React from 'react';
import { Switch, Route } from 'react-router-dom';  
import Articles from './Articles';
import About from './About';
import AddArticle from './AddArticle';

const Routes = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Articles}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/articles/add' component={AddArticle}/>
        </Switch>
    </main>
);

export default Routes;