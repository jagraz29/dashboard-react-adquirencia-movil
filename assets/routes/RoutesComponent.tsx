import React from 'react'
import { Switch, Route } from 'react-router'
import { ContainerRoute, Layout } from '../styles/globalStyle'
import routes from './routes'
import Footer from '../components/Footer'
import Header from "../components/Header"

const RoutesComponent = ({sidebar, setSidebar}:any) => {

 
  return (
    <Layout >

      <Header sidebar={sidebar} setSidebar={setSidebar}  />

      {routes.map((route, index) => (
        <Route
          key={index.toString()}
          exact={route.exact}
          path={route.path}
          render={(props) => {
            if (route.component) {
              const Component: React.ElementType = route.component
              return (
                <ContainerRoute>
                  <Component {...props} routes={route.routes} />
                </ContainerRoute>
              )
            }
          }}
        />
      ))}

      <Footer/>

    </Layout>
  )
}

export default RoutesComponent
