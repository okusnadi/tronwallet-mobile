import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Motion, spring, presets } from 'react-motion'
import { Context } from '../../store/context'

import tl from '../../utils/i18n'
import FadeIn from '../../components/Animations/FadeIn'
import * as Utils from '../../components/Utils'
import { getPrice } from '../../utils/balanceUtils'
import { formatNumber } from '../../utils/numberUtils'

class TrxInfo extends PureComponent {
  state = {
    currencyPrice: null
  }

  async componentDidUpdate (prevProps) {
    const { currency: currentCurrency } = this.props
    const { currency: prevCurreny } = prevProps

    if (prevCurreny !== currentCurrency) {
      const price = await getPrice(currentCurrency)
      this.setState({ currencyPrice: price })
    }
  }

  render () {
    const { currency } = this.props
    const { currencyPrice } = this.state

    return (
      <Context.Consumer>
        {({ freeze }) =>
          currencyPrice &&
          freeze.value && (
            <FadeIn name='tronprice'>
              <Utils.VerticalSpacer size='medium' />
              <Utils.Row justify='space-between'>
                <Utils.View align='center'>
                  <Utils.Text size='xsmall' secondary>{tl.t('tronPower')}</Utils.Text>
                  <Motion
                    defaultStyle={{ power: 0 }}
                    style={{
                      power: spring(freeze.value.total, presets.gentle)
                    }}
                  >
                    {value => (
                      <Utils.Text padding={4}>{`${value.power.toFixed(0)}`}</Utils.Text>
                    )}
                  </Motion>
                </Utils.View>
                <Utils.View align='center'>
                  <Utils.Text size='xsmall' secondary>{tl.t('trxPrice')}</Utils.Text>
                  <Motion
                    defaultStyle={{ price: 0 }}
                    style={{ price: spring(currencyPrice, presets.gentle) }}
                  >
                    {value => (
                      <Utils.Text padding={4}>
                        {`${formatNumber(value.price)} ${currency}`}
                      </Utils.Text>
                    )}
                  </Motion>
                </Utils.View>
                <Utils.View align='center'>
                  <Utils.Text size='xsmall' secondary>{tl.t('balance.bandwidth')}</Utils.Text>
                  <Motion
                    defaultStyle={{ bandwidth: 0 }}
                    style={{
                      bandwidth: spring(
                        freeze.value.bandwidth.netRemaining,
                        presets.gentle
                      )
                    }}
                  >
                    {value => (
                      <Utils.Text padding={4}>
                        {`${value.bandwidth.toFixed(0)}`}
                      </Utils.Text>
                    )}
                  </Motion>
                </Utils.View>
              </Utils.Row>
              <Utils.VerticalSpacer size='medium' />
            </FadeIn>
          )
        }
      </Context.Consumer>
    )
  }
}

TrxInfo.propTypes = {
  currency: PropTypes.string.isRequired
}

export default props => (
  <Context.Consumer>
    {context => <TrxInfo context={context} {...props} />}
  </Context.Consumer>
)
