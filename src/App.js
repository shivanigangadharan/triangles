import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Quiz from './pages/quiz/quiz';
import Hypotenuse from './pages/hypotenuse/hypotenuse';
import Area from './pages/area/area';
import Angles from './pages/angles/angles';
import Homepage from './pages/homepage/homepage';


function App() {
  return (
    <Router className="router">
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/hypotenuse" component={Hypotenuse} />
        <Route path="/area" component={Area} />
        <Route path="/angles" component={Angles} />
      </Switch>
    </Router>
  );
}

export default App;
