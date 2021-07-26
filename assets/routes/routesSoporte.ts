import Soporte from '../views/Soporte'
import CreateTicket from '../views/Soporte/CreateTicket'
import DetailTicket from '../views/Soporte/DetailTicket'

export const RoutesSoporte = {
  path: '/soporte',
  exact: true,
  component: Soporte,
}
export const RoutesCreateTicket = {
  path: '/soporte/nuevo',
  exact: true,
  component: CreateTicket,
}
export const RoutesDetailTicket = {
  path: '/soporte/detalle/:id',
  exact: true,
  component: DetailTicket,
}
