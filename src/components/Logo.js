import React from 'react'
import { Image } from 'react-native'
import { isTablet } from 'react-native-device-detection'

import * as Utils from './Utils'

const logoDimensions = {
  height: isTablet ? 96 : 48,
  width: isTablet ? 160 : 80
}

const Logo = () => (
  <Utils.Content justify='center' align='center'>
    <Utils.VerticalSpacer size='small' />
    <Image source={require('../assets/login-circle.png')} style={{
      height: logoDimensions.height,
      width: logoDimensions.width
    }} />
    <Utils.VerticalSpacer size='small' />
    <Utils.Text size='medium'>TRONWALLET</Utils.Text>
  </Utils.Content>
)

export default Logo
