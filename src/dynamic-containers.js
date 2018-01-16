import asyncComponent from './application/async-bundle'

function errorLoading (error) {
  console.warn(`Dynamic page loading failed: ${error}`) // eslint-disable-line no-console
}

const loadRoute = mod => mod.default

export const PageIndex = asyncComponent(() => (
  import('./views/index')
    .then(component => loadRoute(component))
    .catch(errorLoading)
))
