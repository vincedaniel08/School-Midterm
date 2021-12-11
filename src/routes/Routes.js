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
          <Route exact path="/" component={Index}/>
          <Route path="/studentevaluation" component={StudentEvaluation}/>
          <Route path="/blog" component={Blog}/>
          <Route component={NotFound}/>
        </Switch>

      </Router>

  );
}