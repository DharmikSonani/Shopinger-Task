import {
    View,
} from 'react-native'
import React from 'react'
import useScreenHooks from './TempScreen.Hooks';
import { styles } from './styles';

const TempScreen = () => {

    const {
        topSpace,
    } = useScreenHooks();

    return (
        <View style={[styles.container, { paddingTop: topSpace }]}>

        </View>
    )
}

export default TempScreen