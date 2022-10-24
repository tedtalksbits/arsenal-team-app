import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import Player from './pages/Player';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/team" exact component={Table}></Route>
          <Route path="/team/:id :name" component={Player}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
