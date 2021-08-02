import React from 'react'
import './styles/app.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Routes from './routes/RoutesComponent'
import { configureStore } from './redux/store'
import { Provider } from 'react-redux'
import AuthComponent from './views/Auth'


const App = () => {
  const store = configureStore()

  return (
    <Provider store={store}>
      <Router>
        {
          location.pathname == '/password/reset' ||  location.pathname.indexOf('password/change') == 1?
          <AuthComponent/>
          :
          <Routes/>
        }
      </Router>
    </Provider>
  )
}

export default App