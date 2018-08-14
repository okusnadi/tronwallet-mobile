import getContactsStore from '../store/contacts'

export const getContactsFromStore = async () => {
  const store = await getContactsStore()

  return store
    .objects('Contact')
    .map(item => Object.assign({}, item))
}

export const getAddressesFromStore = async () => {
  const contacts = await getContactsFromStore()
  return contacts.map(contact => contact.address)
}

export const ADD = 'ADD'
export const EDIT = 'EDIT'
