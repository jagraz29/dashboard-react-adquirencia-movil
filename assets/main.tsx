import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore } from './redux/store/'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/app.css'
import App from './components/App'

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
