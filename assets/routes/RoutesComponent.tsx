import React from 'react'
import { Switch, Route } from 'react-router'
import routes from './routes'

const RoutesComponent = () => {
  console.log(routes)
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
              return <Component {...props} routes={route.routes} />
            }
          }}
        />
      ))}
    </Switch>
  )
}

export default RoutesComponent
