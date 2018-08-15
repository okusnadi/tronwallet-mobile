import React, { Component } from 'react'

import NavigationHeader from '../../../components/Navigation/Header'
import AddressForm from '../../../components/AddressBook/AddressForm'

import { ADD } from '../../../utils/constants'

export default class EditContact extends Component {
  static navigationOptions = ({navigation}) => ({
    header: <NavigationHeader title='ADD CONTACT' onBack={() => navigation.goBack()} />
  })

  render () {
    const { navigation } = this.props

    return (
      <AddressForm
        navigation={navigation}
        type={ADD}
      />
    )
  }
}
