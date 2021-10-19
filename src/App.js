import './Styles/App.css';
import Header from './Components/Header.js';
import Landing from './Components/LandingMain.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>

          <Route path = "/meal">

          </Route>

          <Route path = "/"> 
            <Landing/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
