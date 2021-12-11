import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Index from "../pages/Index";
import StudentEvaluation from "../components/StudentEvaluation";
import Blog from "../components/Blog";


export default function Routes() {


  
 




  return (
  
      <Router>
        
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route path="/studentEvaluation" component={StudentEvaluation}/>
          <Route path="/blog" component={Blog}/>
        </Switch>

      </Router>

  );
}