import React, { useEffect, useState } from 'react'
import './styles/app.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Routes from './routes/RoutesComponent'
import Sidebar from './components/Sidebar/'
import Footer from './components/Footer'
import { configureStore } from './redux/store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { getDataUser } from './redux/actions'

const App = () => {
  const store = configureStore()

  return (
    <Provider store={store}>
      <Router>
        {
          <div>
            {location.pathname !== '/password/reset' &&
              location.pathname !== '/password/change' && <Sidebar></Sidebar>}
            <Switch>
              <Routes />
            </Switch>
            {location.pathname !== '/password/reset' &&
              location.pathname !== '/password/change' && <Footer></Footer>}
          </div>
        }
      </Router>
    </Provider>
  )
}

export default App
