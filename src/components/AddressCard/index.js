import React from 'react'
import PropTypes from 'prop-types'

import {
  Card,
  Name,
  Alias,
  Address
} from './elements'

const AddressCard = ({item, onCardPress}) => {
  const formatName = (name) => name.replace(' ', '_').trim().toLowerCase()
  return (
    <Card onPress={onCardPress}>
      <Name>{item.name}</Name>
      <Alias>@{formatName(item.name)}</Alias>
      <Address>{item.address}</Address>
    </Card>
  )
}

AddressCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string
  }).isRequired,
  onCardPress: PropTypes.func.isRequired
}

export default AddressCard
