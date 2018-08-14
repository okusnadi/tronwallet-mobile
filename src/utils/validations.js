import { getAddressesFromStore } from './contactUtils'

export const isNameValid = (name) => name.match(/^[A-Za-z][ A-Za-z1-9]{0,32}$/)

export const isAddressUnique = async (address) => {
  const addresses = await getAddressesFromStore()
  return !addresses.includes(address)
}
