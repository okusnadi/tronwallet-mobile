import React, { Component } from 'react'
import { FlatList } from 'react-native'

import { Container } from '../../components/Utils'
import FadeIn from '../../components/Animations/FadeIn'
import AddressCard from '../../components/AddressCard'

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

  _onCardPress = (item) => {

  }

  _renderCard = ({ item }) => (
    <AddressCard
      item={item}
      onCardPress={() => { this._onCardPress(item) }}
    />
  )

  render () {
    const { accounts } = this.state

    return (
      <Container>
        <FadeIn name='accounts'>
          <FlatList
            keyExtractor={item => item.address}
            data={accounts}
            renderItem={this._renderCard}
          />
        </FadeIn>
      </Container>
    )
  }
}
