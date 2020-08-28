import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/navigation/NavigationBar';
import Sidebar from './components/navigation/Sidebar';
import {Footer} from './components/navigation/Footer';
import { Register } from './components/register/Register';
import Notice from "./components/notice/Notice";
import Leavetable from "./components/leavecomplaint/Leavetable";
import Complaint from "./components/leavecomplaint/Complainttable";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar /> 
        
        <div className="container">
        <Switch>
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Complaint" component={Complaint} />
          <Route exact path="/Leave" component={Leavetable} />
          <Route exact path="/NoticeBoard" component={Notice} />
          <Route path="/Nomatch" component={Leavetable} />
          {/* <Route component={} /> */}
        </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
