import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";
import Layout from "@/layout";
import dynamic from "dva/dynamic";
// import { Redirect } from 'react-router'

const routes = [
  {
    path: "/",
    exact: true,
    name: "首页",
    requireAuth: false,
    component: () => import("@/pages/Home"),
  },
  {
    path: "/404",
    name: "not-found",
    requireAuth: false,
    component: () => import("@/pages/404"),
  },
];
function RouterConfig({ history, app }) {
  return (
    <Layout>
      <Router history={history}>
        <Switch>
          {routes.map(({ path, requireAuth, exact, ...others }, index) => {
            if (requireAuth) {
              return <Redirect to={{ pathname: "/404" }} />;
            }
            return (
              <Route
                exact={exact}
                key={index}
                path={path}
                component={dynamic({
                  app,
                  ...others,
                })}
              />
            );
          })}
        </Switch>
      </Router>
    </Layout>
  );
}

export default RouterConfig;
