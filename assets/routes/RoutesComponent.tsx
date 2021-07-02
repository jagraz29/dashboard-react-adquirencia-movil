import React from 'react'
import { Switch, Route } from 'react-router'
import { Layout } from '../styles/globalStyle'
import routes from './routes'

const RoutesComponent = () => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index.toString()}
          exact={route.exact}
          path={route.path}
          render={(props) => {
            if (route.component) {
              const Component: React.ElementType = route.component
              return (
                <Layout>
                  <Component {...props} routes={route.routes} />
                </Layout>
              )
            }
          }}
        />
      ))}
    </Switch>
  )
}

export default RoutesComponent
