import logo from './logo.svg';
import {Link, BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";

import './App.css';
import Login from './Login.js';
import Home from './Home.js';
import Dashboard from './Dashboard.js';

function App() {
  
  return (
    <div className="App">
      <Router>
        <div>
          <div>
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
          </div>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
    // <Router>
    //   <div>
    //     <ul>
    //     <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/dashboard">Dashboard</Link>
    //       </li>
    //     </ul>
    //     <hr />
    //     <Switch>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/dashboard">
    //         <Dashboard />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }
export default App;
