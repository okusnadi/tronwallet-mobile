import React, { Component } from 'react'

import NavigationHeader from '../../components/Navigation/Header'
import AddressForm from '../../components/AddressBook/AddressForm'
import ClearButton from '../../components/ClearButton'

import { EDIT } from '../../utils/constants'

export default class EditContact extends Component {
  static navigationOptions = ({navigation}) => {
    const { address } = navigation.getParam('item', {})
    return ({
      header: <NavigationHeader title='EDIT' onBack={() => navigation.goBack()} rightButton={(
        <ClearButton onPress={() => {
          console.log(address)
        }} />
      )} />
    })
  }

  state = {
    contact: this.props.navigation.getParam('item', {})
  }

  render () {
    const { contact } = this.state
    const { navigation } = this.props

    return (
      contact.address ? (
        <AddressForm
          name={contact.name}
          address={contact.address}
          navigation={navigation}
          type={EDIT}
        />
      ) : null
    )
  }
}
