import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material";
import NotFound from "../pages/404";
import Index from "../pages/Index";
import StudentEvaluation from "../pages/StudentEvaluation"

import theme from "../utils/theme";
import Loading from "../components/Loading";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { getTheme ,getLang } from "../redux/actions/uiAction";
//import Footer from "../components/Footer";
export default function Routes() {
  // Darkmode
  const ui = useSelector((state) => state.ui);
  const THEME = createTheme(theme(ui.isDarkMode));
  const dispatch = useDispatch();

  const [state, setstate] = useState({
    isAuth: false,
    isLoading: true,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
  
   
      if (user) {
        // ...
        console.log(auth);
        setstate({ isAuth: true, isLoading: false });
      } else {
        setstate({ isAuth: false, isLoading: false });
      }
    });
    dispatch(getLang(),getTheme());

   
  }, [dispatch]);

  if (state.isLoading) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <Switch>
        <Route exact path='/' component={() => <Index user={this.state.user} />} />
        <Route path="/evaluation" component={() => <StudentEvaluation user={this.state.user} />} />
      
           
          <Route component={NotFound} />
         
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
