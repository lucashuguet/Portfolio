import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './langingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
    </Switch>
)

export default Main;