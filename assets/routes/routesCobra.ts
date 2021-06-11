import Cobra from '../views/Cobra'
import CobraCreate from '../views/Cobra/Create'

export const RoutesCobra = {
  path: '/cobra',
  exact: true,
  component: Cobra,
}

export const RouteCobraCreate = {
  path: '/cobra/create',
  exact: true,
  component: CobraCreate,
}
