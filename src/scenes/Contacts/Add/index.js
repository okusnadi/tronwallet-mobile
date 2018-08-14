import React, { Component } from 'react'

import NavigationHeader from '../../../components/Navigation/Header'
import AddressForm from '../../../components/AddressBook/AddressForm'
import { Container, Content } from '../../../components/Utils'
import getContactStore from '../../../store/contacts'
import { ADD } from '../../../utils/constants'

export default class EditContact extends Component {
  static navigationOptions = ({navigation}) => ({
    header: <NavigationHeader title='ADD CONTACT' onBack={() => navigation.goBack()} />
  })

  _onSubmit = async (contact, generalErrorHandlerFn) => {
    const store = await getContactStore()
    try {
      await store.write(() => { store.create('Contact', contact, true) })
      this.props.navigation.goBack()
    } catch (e) {
      generalErrorHandlerFn(e)
    }
  }

  render () {
    const { navigation } = this.props

    return (
      <Container>
        <Content>
          <AddressForm
            navigation={navigation}
            onSubmit={this._onSubmit}
            type={ADD}
          />
        </Content>
      </Container>
    )
  }
}
