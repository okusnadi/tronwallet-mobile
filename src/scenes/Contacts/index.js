import React, { Component } from 'react'
import { FlatList } from 'react-native'

import ContactsModal from './ContactsModal'
import FloatingButton from '../../components/FloatingButton'
import { Container } from '../../components/Utils'
import FadeIn from '../../components/Animations/FadeIn'
import {
  Card,
  Name,
  Alias,
  Address
} from './elements'

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

  _renderCard = ({ item }) => (
    <Card onPress={() => { this._onCardPress(item) }}>
      <Name>{item.name}</Name>
      <Alias>@{item.username}</Alias>
      <Address>{item.address}</Address>
    </Card>
  )

  render () {
    const { contacts, currentContact, modalVisible } = this.state

    return (
      <Container style={{position: 'relative'}}>
        <ContactsModal
          contact={currentContact}
          visible={modalVisible}
          closeModal={this._closeContactsModal}
          animationType='fade'
        />
        <FadeIn name='contacts'>
          <FlatList
            keyExtractor={item => item.address}
            data={contacts}
            renderItem={this._renderCard}
          />
        </FadeIn>
        <FloatingButton text='ADD CONTACT' onPress={() => {}} />
      </Container>
    )
  }
}
