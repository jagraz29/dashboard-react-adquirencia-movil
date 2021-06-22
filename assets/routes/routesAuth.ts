import AuthComponent from '../views/Auth'

export const RoutesSendEmail = {
  path: '/password/reset',
  exact: true,
  component: AuthComponent,
}

export const RoutesPasswordChange = {
  path: '/password/change',
  exact: true,
  component: AuthComponent,
}
