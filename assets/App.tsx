import './styles/app.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/RoutesComponent'

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  )
}

export default App
