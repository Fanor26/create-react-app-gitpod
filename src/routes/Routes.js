
 import React from "react";
 import { Switch, Route } from "react-router-dom";
 import SignIn from ".././components/SignIn";
 import SignUp from ".././components/SignUp";
 import Dashboard from ".././components/Dashboard";
 function Routes () {
     return (
         <Switch>
         <Route path="/signin" component={SignIn} />
         <Route path="/signup" component={SignUp} />
         <Route path="/dashboard" component={Dashboard} />
         </Switch>
     );
 }
 export default Routes;