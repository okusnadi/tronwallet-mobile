import React, { Component } from 'react'

import AddressBook from '../../components/AddressBook'

// Mock state
const accounts = [{
  name: 'Investimento1',
  address: '4a1746f2f2842a8526185cf6f9f91b3217af564daa3c'
}, {
  name: 'Investimento2',
  address: '4a1746f2f2842a8526185cf6f9f91b3217af564daa3c'
}, {
  name: 'Fernando',
  address: '4a1746f2f2842a8526185cf6f9f91b3217af564daa3c'
}]

export default class Contacts extends Component {
  state = {
    accounts
  }

  render () {
    const { accounts } = this.state
    const { navigation } = this.props

    return (
      <AddressBook items={accounts} navigation={navigation} />
    )
  }
}
