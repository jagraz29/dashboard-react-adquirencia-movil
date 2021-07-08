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

  const [sidebar, setSidebar] = useState(false)

  return (
    <Provider store={store}>
      <Router>
        {
          <Layout >
            {location.pathname !== '/password/reset' &&
              location.pathname.indexOf('password/change') == -1 && 
              <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
              }
            <Routes sidebar={sidebar} setSidebar={setSidebar}/>
          </Layout>
        }
      </Router>
    </Provider>
  )
}

export default App

import styled from 'styled-components'
import { TABLET, MOBILE } from './styles/breakpoints'


export const Layout = styled.div`
  display: grid; 
  grid-template-columns: 16rem auto;
  @media (max-width: ${TABLET}) {
    grid-template-columns: 100%;
  }

`