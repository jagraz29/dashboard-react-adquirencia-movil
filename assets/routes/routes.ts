import Home from '../views/Home'
import { RouteConfig } from 'react-router-config'

const routes: RouteConfig[] = [
  {
    path: '/test/route',
    exact: false,
    component: Home,
  },
]

export default routes
