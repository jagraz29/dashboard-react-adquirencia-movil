import Home from '../views/Home'
import { RouteConfig } from 'react-router-config'
import { RoutesSell } from './routesSell'
import { RoutesDashboard } from './routesDashboard'
import { RouteCobraCreate, RouteCobraEdit, RoutesCobra } from './routesCobra'
import { RoutesIntegraciones } from './routesIntegraciones'
import { RoutesCreateTicket, RoutesDetailTicket, RoutesSoporte } from './routesSoporte'
import { RoutesSeguridad } from './routesSeguridad'
import { RoutesPasswordChange, RoutesSendEmail } from './routesAuth'
import { RoutesTransacciones, RoutesTransaccionesDetalles } from './routesTransacciones'

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
  RoutesDetailTicket,
  RoutesPasswordChange,
  RoutesTransacciones,
  RoutesTransaccionesDetalles,
  {
    path: '/test/route',
    exact: false,
    component: Home,
  },
  RoutesSell,
]

export default routes
