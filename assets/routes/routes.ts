import Home from '../views/Home'
import { RouteConfig } from 'react-router-config'
import { RoutesSell } from './routesSell'
import { RoutesDashboard } from './routesDashboard'
import { RouteCobraCreate, RouteCobraEdit, RouteCobraShow, RoutesCobra } from './routesCobra'
import { RoutesIntegraciones } from './routesIntegraciones'
import { RoutesCreateTicket, RoutesDetailTicket, RoutesSoporte } from './routesSoporte'
import { RoutesSeguridad } from './routesSeguridad'
import { RoutesTransacciones, RoutesTransaccionesDetalles } from './routesTransacciones'

const routes: RouteConfig[] = [
  RoutesDashboard,
  RoutesCobra,
  RoutesIntegraciones,
  RoutesSeguridad,
  RouteCobraCreate,
  RoutesSoporte,
  RouteCobraEdit,
  RoutesCreateTicket,
  RoutesDetailTicket,
  RoutesTransacciones,
  RoutesTransaccionesDetalles,
  RouteCobraShow,
  {
    path: '/test/route',
    exact: false,
    component: Home,
  },
  RoutesSell,
]

export default routes
