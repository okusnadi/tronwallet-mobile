import { Component } from 'react'

import NavigationHeader from '../../components/Navigation/Header'

export default class Contacts extends Component {
  static navigationOptions = () => ({
    header: <NavigationHeader title='ADDRESS BOOK' />
  })

  render () {
    return null
  }
}
