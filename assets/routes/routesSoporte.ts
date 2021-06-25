import Soporte from '../views/Soporte'
import CreateTicket from '../views/Soporte/CreateTicket'

export const RoutesSoporte = {
  path: '/soporte',
  exact: true,
  component: Soporte,
}
export const RoutesCreateTicket = {
  path: '/soporte/crear-ticket',
  exact: true,
  component: CreateTicket,
}
