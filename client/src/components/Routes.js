import React from 'react';
import { Switch, Route } from 'react-router-dom';  
import Articles from './Articles';
import About from './About';
import AddArticle from './AddArticle';
import ArticleDetails from './ArticleDetails';
import UpdateArticles from './UpdateArticle';

const Routes = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Articles}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/articles/add' component={AddArticle}/>
            <Route exact path='/articles/:id' component={ArticleDetails}/>
            <Route exact path='/articles/update/:id' component={UpdateArticles}/>
        </Switch>
    </main>
);

export default Routes;