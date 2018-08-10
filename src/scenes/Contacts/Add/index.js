import React, { PureComponent } from 'react'

import NavigationHeader from '../../../components/Navigation/Header'
import ContactsForm from '../ContactsForm'
import { Container, Content } from '../../../components/Utils'

export default class EditContact extends PureComponent {
  static navigationOptions = ({navigation}) => ({
    header: <NavigationHeader title='ADD CONTACT' onBack={() => navigation.goBack()} />
  })

  _onSubmit = () => {

  }

  render () {
    const { navigation } = this.props
    const contact = {
      name: '',
      address: ''
    }

    return (
      <Container>
        <Content>
          <ContactsForm
            navigation={navigation}
            contact={contact}
            submit={this._onSubmit}
          />
        </Content>
      </Container>
    )
  }
}
