import React, { PureComponent } from 'react'
import { FlatList } from 'react-native'

import AddressModal from './AddressModal'
import AddressCard from './AddressCard'
import { Container } from '../../components/Utils'
import FadeIn from '../../components/Animations/FadeIn'

export default class Contacts extends PureComponent {
  state = {
    modalVisible: false,
    currentItem: null
  }

  _closeModal = () => {
    this.setState({
      modalVisible: false,
      currentItem: null
    })
  }

  _onCardPress = (item) => {
    this.setState({
      modalVisible: true,
      currentItem: item
    })
  }

  _navigate = (to, itemObj) => {
    const { navigation } = this.props

    this._closeModal()
    navigation.navigate(to, itemObj)
  }

  _onEditPress = () => {
    const { currentItem } = this.state

    this._navigate('EditAddressBookItem', { item: currentItem })
  }

  _onSendPress = () => {
    const { currentItem } = this.state

    this._navigate('SendScene', { address: currentItem.address })
  }

  _renderCard = ({ item }) => (
    <AddressCard
      item={item}
      onCardPress={() => { this._onCardPress(item) }}
    />
  )

  render () {
    const { modalVisible } = this.state
    const { items, children } = this.props

    return (
      <Container style={{position: 'relative'}}>
        <AddressModal
          visible={modalVisible}
          closeModal={this._closeModal}
          animationType='fade'
          onPressEdit={this._onEditPress}
          onPressSend={this._onSendPress}
        />
        <FadeIn name='items'>
          <FlatList
            keyExtractor={item => item.address}
            data={items}
            renderItem={this._renderCard}
          />
        </FadeIn>
        {children}
      </Container>
    )
  }
}
