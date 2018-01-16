import * as Pages from './dynamic-containers'
import NotFoundRouter from './views/no-router'

export const routes = [
  {
    exact: true,
    path: '/',
    component: Pages.PageIndex
  },
  {
    path: '*',
    component: NotFoundRouter
  }
]
