import Home from '../views/Home'
import { RouteConfig } from 'react-router-config'
import { RoutesSell } from './routesSell'
import { RoutesDashboard } from './routesDashboard'
import { RouteCobraCreate, RouteCobraEdit, RoutesCobra } from './routesCobra'
import { RoutesIntegraciones } from './routesIntegraciones'
import { RoutesCreateTicket, RoutesSoporte } from './routesSoporte'
import { RoutesSeguridad } from './routesSeguridad'
import { RoutesPasswordChange, RoutesSendEmail } from './routesAuth'

const routes: RouteConfig[] = [
  RoutesDashboard,
  RoutesCobra,
  RoutesIntegraciones,
  RoutesSeguridad,
  RouteCobraCreate,
  RoutesSoporte,
  RouteCobraEdit,
  RoutesSendEmail,
  RoutesCreateTicket,
  RoutesPasswordChange,
  {
    path: '/test/route',
    exact: false,
    component: Home,
  },
  RoutesSell,
]

export default routes
