import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Index from "../pages/Index";
import StudentEvaluation from "../pages/StudentEvaluation";
import Blog from "../components/Blog";

export default function Routes() {


  
 




  return (
  
      <Router>
        
        <Switch>
          <Route exact path="/" > 
          <Index/>
          </Route>
          <Route path="/studentevaluation" >
            <StudentEvaluation/>
          </Route>
          <Route path="/blog" >
          <Blog/>
          </Route>
         
        </Switch>

      </Router>

  );
}