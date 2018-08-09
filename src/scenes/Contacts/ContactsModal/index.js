import React from 'react'

import Modal from '../../../components/Modal'
import {
  ContactsModalWrapper,
  ContactsModalCard,
  Divider,
  Action,
  Title
} from './elements'

const ContactsModal = ({
  visible,
  closeModal,
  animationType,
  onPressEdit,
  onPressSend
}) => (
  <Modal
    modalOpened={visible}
    closeModal={closeModal}
    animationType={animationType}
    transparent
  >
    <ContactsModalWrapper onPress={closeModal}>
      <ContactsModalCard>
        <Title>Would you like to</Title>
        <Action>EDIT</Action>
        <Divider />
        <Action>SEND</Action>
      </ContactsModalCard>
    </ContactsModalWrapper>
  </Modal>
)

export default ContactsModal
