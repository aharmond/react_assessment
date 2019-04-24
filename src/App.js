import React from 'react';
import { Route, Switch, }  from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import People from './components/People';
import Person from './components/Person';
import Planets from './components/Planets';
import Planet from './components/Planet';
import NoMatch from './components/NoMatch';
import { Container, } from 'semantic-ui-react';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/people/' component={People} />
        <Route exact path='/people/:id' component={Person} />
        <Route exact path='/planets/' component={Planets} />
        <Route exact path='/planets/:id' component={Planet} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);

export default App;