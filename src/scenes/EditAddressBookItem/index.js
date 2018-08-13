import React, { Component } from 'react'
import { Text } from 'react-native'

import NavigationHeader from '../../components/Navigation/Header'
import AddressForm from '../../components/AddressBook/AddressForm'
import ClearButton from '../../components/ClearButton'
import { Container, Content } from '../../components/Utils'

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
      <Container>
        <Content>
          {contact.address ? (
            <AddressForm contact={contact} navigation={navigation} />
          ) : (
            <Text>There was a problem with this contact! WOOOOOO WOOO AMBULANCE!!!</Text>
          )}
        </Content>
      </Container>
    )
  }
}
