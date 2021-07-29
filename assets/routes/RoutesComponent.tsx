import React, { useState } from 'react'
import { Switch, Route } from 'react-router'
import { ContainerLayout, ContainerRoute, Layout } from '../styles/globalStyle'
import routes from './routes'
import Footer from '../components/Footer'
import Header from "../components/Header"
import Sidebar from '../components/Sidebar/'

const RoutesComponent = () => {

  const [sidebar, setSidebar] = useState(false)
  const [breadcrumb, setBreadcrumb] = useState([])

  return (
    <ContainerLayout>
      
      <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>

      <Layout >
        <Header sidebar={sidebar} setSidebar={setSidebar} breadcrumb={breadcrumb} />
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
                    <Component {...props} routes={route.routes} breadcrumb={breadcrumb} setBreadcrumb={setBreadcrumb}/>
                  </ContainerRoute>
                )
              }
            }}
          />
        ))}
        <Footer/>
      </Layout>

    </ContainerLayout>
  )
}

export default RoutesComponent
