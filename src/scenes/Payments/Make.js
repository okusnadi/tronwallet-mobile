import React, { PureComponent } from 'react'
import { Alert, ActivityIndicator } from 'react-native'
import { Answers } from 'react-native-fabric'
import OneSignal from 'react-native-onesignal'

// Design
import * as Utils from '../../components/Utils'
import NavigationHeader from '../../components/Navigation/Header'
import Badge from '../../components/Badge'
import ButtonGradient from '../../components/ButtonGradient'
import { Divider } from './elements'

// Service
import WalletClient from '../../services/client'

// Utils
import { signTransaction } from '../../utils/transactionUtils'
import withContext from '../../utils/hocs/withContext'
import getBalanceStore from '../../store/balance'
import { formatNumber } from '../../utils/numberUtils'
import { translateError } from '../../scenes/SubmitTransaction/detailMap'
import getTransactionStore from '../../store/transactions'
import { Colors } from '../../components/DesignSystem'

const NOTIFICATION_TRANSACTIONS = ['Transfer', 'Transfer Asset']

class DataError extends Error {
  constructor (message) {
    super(message)
    this.name = 'DataError'
    this.message = message
  }
}

class MakePayment extends PureComponent {
    static navigationOptions = { header: null }

    state = {
      loading: false,
      balances: []
    }

    componentDidMount () {
      this._loadData()
    }

    _loadData = async () => {
      const store = await getBalanceStore()
      const balances = store.objects('Balance').map(item => Object.assign({}, item))
      this.setState({ balances })
    }

    _getTransactionObject = (transactionData) => {
      const { hash, contracts } = transactionData
      const type = WalletClient.getContractType(contracts[0].contractTypeId)
      const transaction = {
        id: hash,
        type,
        contractData: {
          transferFromAddress: contracts[0].from || contracts[0].ownerAddress,
          transferToAddress: contracts[0].to,
          tokenName: type === 'Transfer' ? 'TRX' : contracts[0].token,
          amount: contracts[0].amount
        },
        ownerAddress: contracts[0].from || contracts[0].ownerAddress,
        timestamp: Date.now(),
        confirmed: false
      }
      return transaction
    }

    _updateBalancesStore = async balances => {
      try {
        const balances = await WalletClient.getBalances(this.props.context.pin)
        const store = await getBalanceStore()
        store.write(() => balances.map(item => store.create('Balance', item, true)))
      } catch (error) {
        Alert.alert('Error checking balances, please refresh this tab')
      }
    }

    _navigateNext = () => {
      const { navigation } = this.props
      navigation.navigate('TransactionSuccess', {stackToReset: 'BalanceScene', navigation})
    }

    _checkToken = token => !!this.state.balances.find(b => b.name === token)

    _checkAmount = (amount, token) => this.state.balances.find(b => b.name === token).balance > amount

    _checkPayment = () => {
      const { context, navigation } = this.props
      const from = context.publicKey.value
      this.setState({loading: true})
      try {
        const { address, amount, token } = navigation.getParam('payment')
        if (from === address) throw new DataError('Receiver is equal to requester')
        if (!this._checkToken(token)) throw new DataError('This account doesn\'t have the token for this transaction')
        if (!this._checkAmount(amount, token)) throw new DataError('This account doesn\'t have enough balance.')

        navigation.navigate('Pin', {
          shouldGoBack: true,
          testInput: pin => pin === context.pin,
          onSuccess: () => this._buildTransaction({from, to: address, amount, token})
        })
      } catch (error) {
        if (error.name === 'DataError') Alert.alert('Warning', error.message)
        else Alert.alert('Warning', 'Payment code invalid. Please, scan a valid one')
        this.setState({loading: false})
      }
    }

    _buildTransaction = async ({to, amount, token, from}) => {
      try {
        // Build Transaction
        const data = await WalletClient.getTransferTransaction({from, to, amount, token})
        // Sign Transaction
        const transactionSigned = await signTransaction(this.props.context.pin, data)
        // Get Transaction Signed Data
        const transactionData = await WalletClient.getTransactionDetails(transactionSigned)
        // Proceed to broadcast
        this._submitTransaction(transactionData, transactionSigned)
      } catch (error) {
        Alert.alert('Warning', 'Woops something went wrong. Try again or if the error persist try another QRCode payment.')
        this.setState({ loading: false })
      }
    }

    _submitTransaction = async (transactionData, transactionSigned) => {
      const { hash } = transactionData
      const store = await getTransactionStore()
      try {
        const transaction = this._getTransactionObject(transactionData)
        store.write(() => { store.create('Transaction', transaction, true) })
        const { code } = await WalletClient.broadcastTransaction(transactionSigned)
        if (code === 'SUCCESS') {
          if (NOTIFICATION_TRANSACTIONS.includes(transaction.type)) {
            Answers.logCustom('Payment Operation', { type: transaction.type })
            // if the receiver is a tronwallet user we'll find his devices here
            const response = await WalletClient.getDevicesFromPublicKey(transaction.contractData.transferToAddress)
            if (response.data.users.length) {
              const content = {
                'en': `You have received a payment from ${transaction.contractData.transferFromAddress}`
              }
              response.data.users.map(device => {
                OneSignal.postNotification(content, transaction, device.deviceid)
              })
            }
          }
          await this._updateBalancesStore()
        }
        this.setState({ loading: false }, this._navigateNext)
      } catch (error) {
        // This needs to be adapted better from serverless api
        const errorMessage = error.response && error.response.data ? translateError(error.response.data.error)
          : 'Woops something went wrong. Try again or if the error persist try another QRCode payment.'
        Alert.alert('Warning', errorMessage)
        store.write(() => {
          const lastTransaction = store.objectForPrimaryKey('Transaction', hash)
          store.delete(lastTransaction)
        })
        this.setState({loading: false})
      }
    }

    render () {
      const { navigation } = this.props
      const { loading } = this.state
      const { address, amount, token, description } = this.props.navigation.getParam('payment')

      return (
        <Utils.Container>
          <NavigationHeader
            title='PAY'
            onBack={() => { navigation.goBack() }}
            noBorder
          />
          <Utils.VerticalSpacer size='large' />
          <Utils.View align='center' justify='center'>
            <Utils.Text marginBottom={5} numberOfLines={2} size='xsmall' secondary>AMOUNT</Utils.Text>
            <Utils.Row justify='space-between' align='center'>
              <Utils.Text size='large'>{formatNumber(amount, true)}</Utils.Text>
              <Utils.HorizontalSpacer />
              <Badge>{token}</Badge>
            </Utils.Row>
          </Utils.View>
          <Divider size='medium' marginBottom={10} />
          <Utils.View paddingX='medium'>
            <Utils.Text marginBottom={15} size='xsmall' secondary>TO</Utils.Text>
            <Utils.Text font='regular' size='xsmall'>{address}</Utils.Text>
          </Utils.View>
          <Divider size='medium' marginBottom={10} />
          <Utils.View paddingX='medium'>
            <Utils.Text marginBottom={15} size='xsmall' secondary>DESCRIPTION</Utils.Text>
            <Utils.Text font='regular' size='xsmall'>{description || 'No description available'}</Utils.Text>
          </Utils.View>
          <Utils.VerticalSpacer size='large' />
          <Utils.View paddingX='medium'>
            {loading
              ? <ActivityIndicator size='small' color={Colors.primaryText} />
              : <ButtonGradient
                text='CONFIRM PAYMENT'
                onPress={this._checkPayment}
              />}
          </Utils.View>
        </Utils.Container>
      )
    }
}

export default withContext(MakePayment)
