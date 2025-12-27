import { StatusBar, View } from 'react-native'
import React from 'react'
import { COLOR } from './helpers/colors'
import { NavigationContainer } from '@react-navigation/native'
import { HospitalStack } from './navigation/NavigationHandler'
import { iOS_Device, useBottomSafeArea } from './helpers/responsive'

const App = () => {
  const bottomSpace = useBottomSafeArea();

  return (
    <View style={[{ flex: 1, backgroundColor: COLOR.WHITE, }, !iOS_Device && { paddingBottom: bottomSpace, }]}>
      <StatusBar
        translucent
        backgroundColor={COLOR.TRANSPARANT}
        barStyle={'dark-content'}
      />
      <NavigationContainer>
        <HospitalStack />
      </NavigationContainer>
    </View>
  )
}

export default App