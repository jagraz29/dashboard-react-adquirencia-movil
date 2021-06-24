import Cobra from '../views/Cobra'
import CobraCreate from '../views/Cobra/Create'
import CobraEdit from '../views/Cobra/Edit'

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

export const RouteCobraEdit = {
  path: '/cobra/edit/:id',
  exact: true,
  component: CobraEdit,
}
