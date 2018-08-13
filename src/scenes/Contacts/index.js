import React, { Component } from 'react'

import AddressBook from '../../components/AddressBook'
import FloatingButton from '../../components/FloatingButton'

import getContactsFromStore from '../../store/contacts'

// Mock state
// const contacts = [{
//   name: 'Fabiana',
//   address: '4a1746f2f2842a8526185cf6f9f91b3217af564daa3c'
// }, {
//   name: 'Fabio',
//   address: '4a1746f2f2842a8526185cf6f9f91b3217af564daa3c'
// }, {
//   name: 'Fernando',
//   address: '4a1746f2f2842a8526185cf6f9f91b3217af564daa3c'
// }, {
//   name: 'Guilherme',
//   address: '4a1746f2f2842a8526185cf6f9f91b3217af564daa3c'
// }, {
//   name: 'Heliporto Guarulhos',
//   address: '4a1746f2f2842a8526185cf6f9f91b3217af564daa3c'
// }]

export default class Contacts extends Component {
  state = {
    contacts: null,
    refreshing: false
  }

  componentDidMount () {
    this._loadContacts()
  }

  _loadContacts = async () => {
    const contacts = await this._getContactsFomStore()

    this.setState({
      contacts
    })
  }

  _getContactsFomStore = async () => {
    try {
      const store = await getContactsFromStore()

      return store
        .objects('Contact')
        .map(item => Object.assign({}, item))
    } catch (e) {
      this.setState({
        error: 'There was a problem loading the contacts. Please try again.'
      })
    }
  }

  // _getVoteListFromStore = async (store = null) => {
  //   let voteStore
  //   if (store) voteStore = store
  //   else voteStore = await getCandidateStore()
  //   return voteStore
  //     .objects('Candidate')
  //     .sorted([['votes', true], ['rank', false]])
  //     .slice(
  //       this.state.offset,
  //       clamp(
  //         this.state.offset + LIST_STEP_SIZE,
  //         voteStore.objects('Candidate').length
  //       )
  //     )
  //     .map(item => Object.assign({}, item))
  // }

  _onAddPress = () => {
    const { navigation } = this.props

    navigation.navigate('AddContact')
  }

  render () {
    const { contacts } = this.state
    const { navigation } = this.props

    return (
      <AddressBook
        items={contacts}
        navigation={navigation}
        reloadData={this._loadContacts}
      >
        <FloatingButton text='ADD CONTACT' onPress={this._onAddPress} />
      </AddressBook>
    )
  }
}
