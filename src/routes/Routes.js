import React, {  useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import { db, } from "../utils/firebase";
import { collection, onSnapshot, query, orderBy,  } from '@firebase/firestore';

import { useDispatch } from 'react-redux'
import { studentInfo,commentInfo } from '../redux/actions/userAction'
import Index from "../pages/Index";
import StudentEvaluation from "../components/StudentEvaluation";



export default function Routes() {


  const dispatch = useDispatch();
 

  useEffect(() => {

      try {
      const commentRef = collection(db,"comments")
      const collectionRef = collection(db, "students");
      const q = query(collectionRef, orderBy("Name"));
      const c = query(commentRef, orderBy("Created_at"));

      onSnapshot(q, (snapshot) =>
      dispatch(studentInfo(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
      );
      onSnapshot(c, (snapshot) =>
      dispatch(commentInfo(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
      );
     

  } catch (error) {
      console.log("error", error);
    }
     

      
  }, [dispatch])



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