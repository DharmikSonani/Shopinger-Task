import {
    Image,
    Text,
    View,
} from 'react-native'
import React from 'react'
import useScreenHooks from './HospitalScreen.Hooks';
import { styles } from './styles';
import { BOTTOM_TAB_HOME_ICON } from '../../assets/assets';

const HospitalScreen = () => {

    const {
        topSpace,
    } = useScreenHooks();

    return (
        <View style={[styles.container, { paddingTop: topSpace }]}>
            <Image
                source={BOTTOM_TAB_HOME_ICON}
                style={styles.iconStyle}
                resizeMode='contain'
            />

            <Text style={styles.nameText}>
                Hospital
            </Text>
        </View>
    )
}

export default HospitalScreen