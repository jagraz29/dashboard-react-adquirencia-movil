import Home from '../views/Home'
import { RouteConfig } from 'react-router-config'
import { RoutesSell } from './routesSell'
import { RoutesDashboard } from './routesDashboard'
import { RouteCobraCreate, RouteCobraEdit, RoutesCobra } from './routesCobra'
import { RoutesIntegraciones } from './routesIntegraciones'
import { RoutesSeguridad } from './routesSeguridad'

const routes: RouteConfig[] = [
  RoutesDashboard,
  RoutesCobra,
  RoutesIntegraciones,
  RoutesSeguridad,
  RouteCobraCreate,
  RouteCobraEdit,
  {
    path: '/test/route',
    exact: false,
    component: Home,
  },
  RoutesSell,
]

export default routes
