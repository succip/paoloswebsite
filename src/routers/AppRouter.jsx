import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header/Header";
import Homepage from "../components/Homepage/Homepage";
import Projects from "../components/Projects/Projects";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Homepage} exact={true} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
