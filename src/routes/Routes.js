import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Index from "../pages/Index";
import StudentEvaluation from "../components/StudentEvaluation";



export default function Routes() {


  
 




  return (
  
      <Router>
        
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/studentEvaluation">
            <StudentEvaluation />
          </Route>
        
        </Switch>

      </Router>

  );
}