import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { FormGroup, CancelWrapper } from './elements'
import { VerticalSpacer } from '../../../components/Utils'
import Input from '../../../components/Input'
import ButtonGradient from '../../../components/ButtonGradient'
import CancelButton from '../../../components/CancelButton'

export default class ContactsForm extends Component {
  static propTypes = {
    contact: PropTypes.shape({
      name: PropTypes.string,
      address: PropTypes.string
    }).isRequired
  }

  render () {
    const contact = this.props.contact || {
      name: '',
      address: ''
    }
    const { name, address } = contact

    return (
      <FormGroup>
        <Input
          innerRef={(input) => { this.name = input }}
          label='NAME'
          value={name}
          onChangeText={name => this._changeAddress(name)}
          // onSubmitEditing={() => this._nextInput('to')}
        />
        <Input
          innerRef={(input) => { this.address = input }}
          label='ADDRESS'
          value={address}
          onChangeText={address => this._changeAddress(address)}
          // onSubmitEditing={() => this._nextInput('to')}
        />
        <VerticalSpacer size='medium' />
        <ButtonGradient
          text='EDIT'
          onPress={this._submit}
          // disabled={Number(amount) <= 0 || Number(balanceSelected.balance) < Number(amount) || !isAddressValid(to)}
        />
        <CancelWrapper>
          <CancelButton navigation={this.props.navigation} />
        </CancelWrapper>
      </FormGroup>
    )
  }
}
