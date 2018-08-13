import React, { Component } from 'react'
import { Text } from 'react-native'

import NavigationHeader from '../../../components/Navigation/Header'
import ContactsForm from '../ContactsForm'
import ClearButton from '../../../components/ClearButton'
import { Container, Content } from '../../../components/Utils'

export default class EditContact extends Component {
  static navigationOptions = ({navigation}) => {
    const { address } = navigation.getParam('contact', {})
    return ({
      header: <NavigationHeader title='EDIT' onBack={() => navigation.goBack()} rightButton={(
        <ClearButton onPress={() => {
          console.log(address)
        }} />
      )} />
    })
  }

  state = {
    contact: this.props.navigation.getParam('contact', {})
  }

  render () {
    const { contact } = this.state
    const { navigation } = this.props

    return (
      <Container>
        <Content>
          {contact.address ? (
            <ContactsForm contact={contact} navigation={navigation} />
          ) : (
            <Text>There was a problem with this contact! WOOOOOO WOOO AMBULANCE!!!</Text>
          )}
        </Content>
      </Container>
    )
  }
}
