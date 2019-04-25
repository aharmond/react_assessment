import React from 'react';
import { Route, Switch, }  from 'react-router-dom';
import Helmet from 'react-helmet';
import Navbar from './components/Navbar';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import NoMatch from './components/NoMatch';
import { Container, } from 'semantic-ui-react';

const App = () => (
  <>
    <Helmet bodyAttributes={{style: 'background-color : #2e333a'}} />
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/people/' component={People} />
        <Route exact path='/planets/' component={Planets} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);

export default App;