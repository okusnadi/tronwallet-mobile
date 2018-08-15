import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import tl from '../../utils/i18n'
import { formatNumber } from '../../utils/numberUtils'
import { orderBalances } from '../../utils/balanceUtils'
import { Colors } from '../../components/DesignSystem'
import Badge from '../../components/Badge'
import * as Utils from '../../components/Utils'
import { orderAssets } from '../../utils/assetsUtils'
import { AsyncStorage } from '../../../node_modules/aws-amplify/lib/Common'
import { USER_FILTERED_TOKENS } from '../../utils/constants'

class WalletBalances extends PureComponent {
  state = {
    userTokens: []
  }

  async componentDidUpdate () {
    try {
      const { userTokens: currentUserTokens } = this.state
      const userTokens = await AsyncStorage.getItem(USER_FILTERED_TOKENS)

      if (currentUserTokens.length === 0 || JSON.stringify(currentUserTokens) !== userTokens) {
        this.setState({ userTokens: JSON.parse(userTokens) })
      }
    } catch (error) {
      console.log(error)
    }
  }

  render () {
    const { userTokens } = this.state
    const { balances } = this.props

    const filtered = balances.filter(asset => userTokens.findIndex(name => name === asset.name) !== -1)
    const balancesToDisplay = orderAssets(filtered)

    if (balancesToDisplay.length) {
      return (
        <React.Fragment>
          <Utils.VerticalSpacer size='large' />
          <Utils.Row justify='space-between'>
            <Utils.Text size='xsmall' secondary>
              {tl.t('balance.tokens')}
            </Utils.Text>
            <Utils.Text size='xsmall' secondary>
              {tl.t('balance.holdings')}
            </Utils.Text>
          </Utils.Row>
          <Utils.VerticalSpacer size='big' />
          {balancesToDisplay && orderBalances(balancesToDisplay).map((item) => (
            <Utils.Content key={item.name} paddingHorizontal='none' paddingVertical='medium'>
              <Utils.Row justify='space-between'>
                <Badge bg={Colors.lightestBackground} guarantee={item.verified}>{item.name}</Badge>
                <Utils.Text>{formatNumber(item.balance)}</Utils.Text>
              </Utils.Row>
            </Utils.Content>
          ))}
        </React.Fragment>
      )
    }

    return null
  }
}

WalletBalances.propTypes = {
  balances: PropTypes.array.isRequired
}

export default WalletBalances
