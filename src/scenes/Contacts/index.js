import React, { Component } from 'react'

import AddressBook from '../../components/AddressBook'
import FloatingButton from '../../components/FloatingButton'

// Mock state
const contacts = [{
  name: 'Fabiana',
  address: '4a1746f2f2842a8526185cf6f9f91b3217af564daa3c'
}, {
  name: 'Fabio',
  address: '4a1746f2f2842a8526185cf6f9f91b3217af564daa3c'
}, {
  name: 'Fernando',
  address: '4a1746f2f2842a8526185cf6f9f91b3217af564daa3c'
}, {
  name: 'Guilherme',
  address: '4a1746f2f2842a8526185cf6f9f91b3217af564daa3c'
}, {
  name: 'Heliporto Guarulhos',
  address: '4a1746f2f2842a8526185cf6f9f91b3217af564daa3c'
}]

export default class Contacts extends Component {
  state = {
    contacts: contacts
  }

  _onAddPress = () => {
    const { navigation } = this.props

    navigation.navigate('AddContact')
  }

  render () {
    const { contacts } = this.state
    const { navigation } = this.props

    return (
      <AddressBook items={contacts} navigation={navigation}>
        <FloatingButton text='ADD CONTACT' onPress={this._onAddPress} />
      </AddressBook>
    )
  }
}
