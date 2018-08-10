import React, { Component } from 'react'
import { FlatList } from 'react-native'

import ContactsModal from './ContactsModal'
import FloatingButton from '../../components/FloatingButton'
import { Container } from '../../components/Utils'
import FadeIn from '../../components/Animations/FadeIn'
import AddressCard from '../../components/AddressCard'

// Mock state
const contacts = [{
  name: 'Fabiana',
  username: 'fabiana',
  address: '4a1746f2f2842a8526185cf6f9f91b3217af564daa3c'
}, {
  name: 'Fabio',
  username: 'fabio',
  address: '4a1746f2f2842a8526185cf6f9f91b3217af564daa3c'
}, {
  name: 'Fernando',
  username: 'fernando',
  address: '4a1746f2f2842a8526185cf6f9f91b3217af564daa3c'
}, {
  name: 'Guilherme',
  username: 'guilherme',
  address: '4a1746f2f2842a8526185cf6f9f91b3217af564daa3c'
}, {
  name: 'Heliporto Guarulhos',
  username: 'heliporto_guarulhos',
  address: '4a1746f2f2842a8526185cf6f9f91b3217af564daa3c'
}]

export default class Contacts extends Component {
  state = {
    contacts: contacts,
    modalVisible: false,
    currentContact: null
  }

  _closeContactsModal = () => {
    this.setState({
      modalVisible: false,
      currentContact: null
    })
  }

  _onCardPress = (item) => {
    this.setState({
      modalVisible: true,
      currentContact: item
    })
  }

  _onEditPress = () => {
    const { navigation } = this.props
    const { currentContact } = this.state

    this._closeContactsModal()
    navigation.navigate('EditContact', { contact: currentContact })
  }

  _onAddPress = () => {
    const { navigation } = this.props

    navigation.navigate('AddContact')
  }

  _renderCard = ({ item }) => (
    <AddressCard
      item={item}
      onCardPress={() => { this._onCardPress(item) }}
    />
  )

  render () {
    const { contacts, modalVisible } = this.state

    return (
      <Container style={{position: 'relative'}}>
        <ContactsModal
          visible={modalVisible}
          closeModal={this._closeContactsModal}
          animationType='fade'
          onPressEdit={this._onEditPress}
          onPressSend={() => {}}
        />
        <FadeIn name='contacts'>
          <FlatList
            keyExtractor={item => item.address}
            data={contacts}
            renderItem={this._renderCard}
          />
        </FadeIn>
        <FloatingButton text='ADD CONTACT' onPress={this._onAddPress} />
      </Container>
    )
  }
}
