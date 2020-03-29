import { range } from "lodash-es";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Lobby } from "./lobby/Lobby";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Table } from "./Table";

function App() {
  return (<Router>
    <Lobby />

      <hr />
      <Switch>
        <Route exact path="/">
          <Lobby />
        </Route>
        {/* {range(10).map(i => {
          return (<Route path={`/table-${i}`}>
            <Table id={i} />
          </Route>);
        })} */}
        
      </Switch>
  </Router>);

  // return (

  //   <div className="App">
  //     <Lobby />
  //   </div>
  // );
}

export default App;
