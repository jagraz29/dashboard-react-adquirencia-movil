import './styles/app.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Routes from './routes/RoutesComponent'
import Sidebar from './components/Sidebar/'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Sidebar></Sidebar>
      <Switch>
        <Routes />
      </Switch>
      <Footer></Footer>
    </Router>
  )
}

export default App
