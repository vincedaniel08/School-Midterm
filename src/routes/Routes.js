import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Index from "../pages/Index";
import StudentEvaluation from "../pages/StudentEvaluation";
import Blog from "../components/Blog";
import NotFound from "../components/404";
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
          <Route  component={NotFound}>
            <NotFound/>
          </Route>
        </Switch>

      </Router>

  );
}