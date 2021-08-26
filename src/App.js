import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Quiz from './pages/quiz';
import Hypotenuse from './pages/hypotenuse';
import Area from './pages/area';
import Angles from './pages/angles';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Quiz} />
        <Route path="/hypotenuse" component={Hypotenuse} />
        <Route path="/area" component={Area} />
        <Route path="/angles" component={Angles} />
      </Switch>
    </Router>
  );
}

export default App;
