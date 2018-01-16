import React, { Component } from 'react'
import PropTypes from 'prop-types'
import immutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { addLocaleData, IntlProvider } from 'react-intl'
import ru from 'react-intl/locale-data/ru'
import { withRouter } from 'react-router'
import { routes } from 'app/routes'
import { MatchMediaRegister } from 'dal/match-media/actions'
import * as Actions from './actions'
import mapStateToProps from './selectors'
import translations from '../locales'
import {
  ContentWrapper,
  IndexLayout
} from './style.js'

addLocaleData(ru)

class Application extends Component {
  static propTypes = {
    isGlobalLoading: PropTypes.bool,
    userName: PropTypes.string,
    applicationLocale: PropTypes.string,
    routingError: immutablePropTypes.map,
    menu: immutablePropTypes.list
  }

  constructor () {
    super()
    MatchMediaRegister()
  }

  render () {
    const { applicationLocale } = this.props

    return (
      <IntlProvider
        locale={applicationLocale}
        defaultLocale='ru'
        messages={translations[applicationLocale]}
      >
        <IndexLayout>
          <ContentWrapper>
            <Switch>
              {routes.map((route, i) =>
                <Route {...route} key={i}/>
              )}
            </Switch>
          </ContentWrapper>
        </IndexLayout>
      </IntlProvider>
    )
  }
}

export default withRouter(connect(
  mapStateToProps,
  Actions
)(Application))
