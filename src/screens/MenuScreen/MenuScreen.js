import {
    Image,
    Text,
    View,
} from 'react-native'
import React from 'react'
import useScreenHooks from './MenuScreen.Hooks';
import { styles } from './styles';
import { BOTTOM_TAB_MENU_ICON } from '../../assets/assets';

const MenuScreen = () => {

    const {
        topSpace,
    } = useScreenHooks();

    return (
        <View style={[styles.container, { paddingTop: topSpace }]}>
            <Image
                source={BOTTOM_TAB_MENU_ICON}
                style={styles.iconStyle}
                resizeMode='contain'
            />

            <Text style={styles.nameText}>
                Menu
            </Text>
        </View>
    )
}

export default MenuScreen