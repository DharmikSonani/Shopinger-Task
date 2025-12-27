import {
    Image,
    Text,
    View,
} from 'react-native'
import React from 'react'
import useScreenHooks from './PatientScreen.Hooks';
import { styles } from './styles';
import { BOTTOM_TAB_PATIENT_ICON } from '../../assets/assets';

const PatientScreen = () => {

    const {
        topSpace,
    } = useScreenHooks();

    return (
        <View style={[styles.container, { paddingTop: topSpace }]}>
            <Image
                source={BOTTOM_TAB_PATIENT_ICON}
                style={styles.iconStyle}
                resizeMode='contain'
            />

            <Text style={styles.nameText}>
                Patient
            </Text>
        </View>
    )
}

export default PatientScreen