
import {BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
        <Route path="/search">
              <h2>this is the search page </h2>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
         
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
