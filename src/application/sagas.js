import { all } from 'redux-saga/effects'
import dalSagas from 'dal/sagas'
import indexContainerSagas from 'views/index/sagas'

export default function* rootSaga () {
  yield all([
    dalSagas(),
    indexContainerSagas()
  ])
}
