import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import Layout from '@/layout'
import dynamic from 'dva/dynamic'

const menus = [
  {
    path: '/',
    name: '首页',
    component: () => import('./pages/Home')
  }
]
function RouterConfig ({ history, app }) {
  return (
      <Router history={history}>
       
        <Layout>
        <Switch>
          {
            menus.map(({ path, ...others }, index) => {
              return (
                <Route
                  key={index}
                  path={path}
                  component={dynamic({
                    app,
                    ...others
                  })}
                />
              )
            })
          }
        </Switch>
        </Layout>
      </Router>
    <

  )
}

export default RouterConfig