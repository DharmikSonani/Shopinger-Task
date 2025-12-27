import {
    Image,
    Text,
    View,
} from 'react-native'
import React from 'react'
import useScreenHooks from './BarsatiScreen.Hooks';
import { styles } from './styles';
import { BOTTOM_TAB_BARSATI_ICON } from '../../assets/assets';

const BarsatiScreen = () => {

    const {
        topSpace,
    } = useScreenHooks();

    return (
        <View style={[styles.container, { paddingTop: topSpace }]}>
            <Image
                source={BOTTOM_TAB_BARSATI_ICON}
                style={styles.iconStyle}
                resizeMode='contain'
            />

            <Text style={styles.nameText}>
                Barsati
            </Text>
        </View>
    )
}

export default BarsatiScreen