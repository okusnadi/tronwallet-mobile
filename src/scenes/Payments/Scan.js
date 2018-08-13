import React, { Component } from 'react'
import { Alert, ActivityIndicator } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'

// Design
import * as Utils from '../../components/Utils'
import NavigationHeader from '../../components/Navigation/Header'

// Service
import { ONE_TRX } from '../../services/client'

// Utils
import { isAddressValid } from '../../services/address'
import withContext from '../../utils/hocs/withContext'
import { Colors } from '../../components/DesignSystem'

class DataError extends Error {
  constructor (message) {
    super(message)
    this.name = 'DataError'
    this.message = message
  }
}

class ScanPayment extends Component {
    static navigationOptions = () => {
      return { header: null }
    }

    state = {
      loading: false,
      scanned: false
    }

    componentDidMount () {
      this._navListener = this.props.navigation.addListener('didFocus', () => this.scanner.reactivate())
    }

    componentWillUnmount () {
      this._navListener.remove()
    }
    _checkAmount = (amount, token) => amount && (amount >= 1 / ONE_TRX)

    _checkDescription = description => description.length <= 500

    _onRead = event => {
      const { data } = event
      const { navigation } = this.props
      this.setState({loading: true})
      try {
        const parseData = JSON.parse(data)
        const { address, amount, token, description } = parseData
        if (!isAddressValid(address)) throw new DataError('Receiver address invalid')
        if (!token) throw new DataError('Token not valid')
        if (!this._checkAmount(amount)) throw new DataError('Amount not valid')
        if (description && !this._checkDescription(description)) throw new DataError('Description too long')

        this.setState({loading: false})
        navigation.navigate('MakePayScene', {payment: {address, amount, token, description}})
      } catch (error) {
        if (error.name === 'DataError') Alert.alert('Warning', error.message)
        else Alert.alert('Warning', 'Payment code invalid. Please, scan a valid one')
        this.setState({loading: false})
        this.scanner.reactivate()
      }
    }

    render () {
      const { navigation, loading } = this.props
      return (
        <Utils.Container>
          <NavigationHeader
            title='SCAN'
            onBack={() => { navigation.goBack() }}
            rightButton={loading ? <ActivityIndicator size='small' color={Colors.primaryText} /> : null}
            noBorder
          />
          <QRCodeScanner
            showMarker
            fadeIn
            ref={node => { this.scanner = node }}
            customMarker={
              <Utils.View
                flex={1}
                background='transparent'
                justify='center'
                align='center'
              >
                <Utils.View
                  width={250}
                  height={250}
                  borderWidth={2}
                  borderColor={'white'}
                />
                <Utils.Text marginTop='medium' align='center'>
            Scan the transaction QRCode
                </Utils.Text>
              </Utils.View>
            }
            cameraStyle={{
              height: '100%',
              width: '100%',
              justifyContent: 'flex-start'
            }}
            permissionDialogMessage='To scan the transaction the app needs your permission to access the camera.'
            onRead={this._onRead}
          />
        </Utils.Container>
      )
    }
}

export default withContext(ScanPayment)
