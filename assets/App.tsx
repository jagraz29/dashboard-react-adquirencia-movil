import React from 'react'
import './styles/app.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Routes from './routes/RoutesComponent'
import Sidebar from './components/Sidebar/'
import Footer from './components/Footer'
import { configureStore } from './redux/store'
import { Provider } from 'react-redux'

const App = () => {
  const store = configureStore()

  return (
    <Provider store={store}>
      <Router>
        {
          <div>
            {location.pathname !== '/password/reset' &&
              location.pathname.indexOf('password/change') == -1 && <Sidebar></Sidebar>}
            <Switch>
              <Routes />
            </Switch>
            {location.pathname !== '/password/reset' &&
              location.pathname.indexOf('password/change') == -1 && <Footer></Footer>}
          </div>
        }
      </Router>
    </Provider>
  )
}

export default App
