import React, { Component } from 'react'
import { Keyboard, TouchableWithoutFeedback, Clipboard } from 'react-native'
import PropTypes from 'prop-types'

import { FormGroup, CancelWrapper, ErrorText } from './elements'
import IconButton from '../../../components/IconButton'
import { VerticalSpacer, Container, Content } from '../../../components/Utils'
import Input from '../../../components/Input'
import ButtonGradient from '../../../components/ButtonGradient'
import CancelButton from '../../../components/CancelButton'

import { isAddressValid } from '../../../services/address'
import { ADD } from '../../../utils/constants'
import { isNameValid, isAddressUnique } from '../../../utils/validations'
import getContactStore from '../../../store/contacts'

export default class ContactsForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    address: PropTypes.string,
    navigation: PropTypes.object.isRequired
  }

  state = {
    name: this.props.name || '',
    address: this.props.address || '',
    nameError: null,
    addressError: null,
    generalError: null
  }

  _nextInput = input => {
    if (input === 'address') {
      this.address.focus()
      return
    }

    if (input === 'submit') {
      Keyboard.dismiss()
    }
  }

  _generalError = (generalError) => {
    this.setState({
      generalError
    })
  }

  _onSubmit = async (contact) => {
    const store = await getContactStore()
    try {
      await store.write(() => { store.create('Contact', contact, true) })
      this.props.navigation.goBack()
    } catch (e) {
      // this._generalError(e)
      console.log(e)
    }
  }

  _changeName = (name) => {
    this._changeState(name, 'name', isNameValid, 'The name field must start with a letter and it will accept only letters, numbers and white spaces.')
  }

  _changeAddress = (address) => {
    this._changeState(address.trim(), 'address', isAddressValid, 'Something isn\'t right with the address. Please double check for typos.')
  }

  _changeState = async (prop, type, validation, error) => {
    let valid = validation(prop)

    if (this.props.type === ADD && type === 'address') {
      const addressIsUnique = await isAddressUnique(prop)

      if (!addressIsUnique) {
        valid = false
        error = 'The key must be unique. Please choose a different address.'
      }
    }

    const stateObj = { [type]: prop }

    if (!valid) {
      this.setState({
        ...stateObj,
        [`${type}Error`]: error
      })
      return
    }

    this.setState({
      ...stateObj,
      [`${type}Error`]: null
    })
  }

  _submitDisabled = () => {
    const { name, address, generalError, nameError, addressError } = this.state

    if (!name.length || !address.length) {
      return true
    } else if (!!generalError || !!nameError || !!addressError) {
      return true
    }

    return false
  }

  _onPaste = async () => {
    const address = await Clipboard.getString()
    if (address) {
      this._changeAddress(address)
      this._nextInput('submit')
    }
  }

  _rightContentTo = () => <IconButton onPress={this._onPaste} icon='md-clipboard' />

  render () {
    const { name, address, nameError, addressError } = this.state
    const { type } = this.props

    return (
      <Container>
        <Content>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <FormGroup>
              <Input
                innerRef={(input) => { this.name = input }}
                label='NAME'
                value={name}
                onChangeText={name => this._changeName(name)}
                onSubmitEditing={() => this._nextInput('address')}
              />
              {nameError && (
                <React.Fragment>
                  <ErrorText>
                    {nameError}
                  </ErrorText>
                </React.Fragment>
              )}
              <Input
                innerRef={(input) => { this.address = input }}
                label='ADDRESS'
                value={address}
                rightContent={this._rightContentTo}
                onChangeText={address => this._changeAddress(address)}
                onSubmitEditing={() => this._nextInput('submit')}
                style={{fontSize: 14}}
              />
              {addressError && (
                <React.Fragment>
                  <ErrorText>
                    {addressError}
                  </ErrorText>
                </React.Fragment>
              )}
              <VerticalSpacer size='medium' />
              <ButtonGradient
                text={type}
                onPress={() => this._onSubmit({
                  name: name.trim(),
                  alias: `@${name.trim().toLowerCase().replace(' ', '_')}`,
                  address
                })}
                disabled={this._submitDisabled()}
              />
              <CancelWrapper>
                <CancelButton navigation={this.props.navigation} />
              </CancelWrapper>
            </FormGroup>
          </TouchableWithoutFeedback>
        </Content>
      </Container>
    )
  }
}
