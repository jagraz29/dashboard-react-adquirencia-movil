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
  const [tamaño, setTamaño] = useState<any>(
    navigator.userAgent.match(/Android/i) ? window.screen.width : window.innerWidth
  )

  const handleResize = () => {
    setTamaño(window.innerWidth)
  }

  const handleResizes = () => {
    if (navigator.userAgent.match(/Android/i)) {
      setTamaño(window.screen.width)
    } else {
      setTamaño(window.innerWidth)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResizes)
    return () => {
      window.removeEventListener('resize', handleResizes)
    }
  }, [])

  return (
    <Provider store={store}>
      <Router>
        {
          <div>
            {location.pathname !== '/password/reset' &&
              location.pathname.indexOf('password/change') == -1 && <Sidebar></Sidebar>}
            <Routes />
            {location.pathname !== '/password/reset' &&
              location.pathname.indexOf('password/change') == -1 && <Footer></Footer>}
          </div>
        }
      </Router>
    </Provider>
  )
}

export default App
