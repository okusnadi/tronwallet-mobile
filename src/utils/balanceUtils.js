import Config from 'react-native-config'
import axios from 'axios'

import { formatNumber } from './numberUtils'

const CRYPTO = ['BTC', 'ETH']

export const orderBalances = (balances) => {
  let orderedBalances = []
  balances.forEach((balance) => {
    if (balance.name === 'TRX') {
      orderedBalances[0] = balance
    } else if (balance.name === 'TWX') {
      orderedBalances[1] = balance
    }
  })
  return [
    ...orderedBalances.filter((balance) => !!balance),
    ...balances.filter((balance) => balance.name !== 'TRX' && balance.name !== 'TWX')
  ]
}

export const getPrice = async (currency) => {
  try {
    const { data: { data } } = await axios.get(`${Config.TRX_PRICE_API}/?convert=${currency}`)
    return data.quotes[currency].price
  } catch (err) {
    console.log(err)
  }
}

export const formatPrice = (value, currency) => {
  if (Number.isInteger(value) || CRYPTO.indexOf(currency) >= 0) {
    return formatNumber(value)
  } else {
    return value.toFixed(2)
  }
}
