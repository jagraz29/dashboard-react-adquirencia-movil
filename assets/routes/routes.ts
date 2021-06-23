import Home from '../views/Home'
import { RouteConfig } from 'react-router-config'
import { RoutesSell } from './routesSell'
import { RoutesDashboard } from './routesDashboard'
import { RouteCobraCreate, RoutesCobra } from './routesCobra'
import { RoutesIntegraciones } from './routesIntegraciones'
import { RoutesSoporte } from './routesSoporte'

const routes: RouteConfig[] = [
  RoutesDashboard,
  RoutesCobra,
  RoutesIntegraciones,
  RouteCobraCreate,
  RoutesSoporte,
  {
    path: '/test/route',
    exact: false,
    component: Home,
  },
  RoutesSell,
]

export default routes
