import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/landingPage">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
