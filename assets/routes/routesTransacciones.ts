import Transacciones from '../views/Transacciones'
import TransaccionesDetalles from '../views/Transacciones/Detalles/'

export const RoutesTransacciones = {
  path: '/transacciones',
  exact: true,
  component: Transacciones,
}

export const RoutesTransaccionesDetalles = {
  path: '/transacciones/detalles/:id',
  exact: true,
  component: TransaccionesDetalles,
}
