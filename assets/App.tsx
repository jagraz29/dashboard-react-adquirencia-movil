import './styles/app.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Routes from './routes/RoutesComponent'
import Sidebar from './components/Sidebar/'
import Footer from './components/Footer'
import {configureStore} from './redux/store'
import { Provider } from 'react-redux'

function App() {
  const store = configureStore()
  return (
    <Provider store={store}>
      <Router>
        <Sidebar></Sidebar>
        <Switch>
          <Routes />
        </Switch>
        <Footer></Footer>
      </Router>
    </Provider>
  )
}

export default App
