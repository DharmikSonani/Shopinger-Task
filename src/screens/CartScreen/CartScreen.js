import {
    Image,
    Text,
    View,
} from 'react-native'
import React from 'react'
import useScreenHooks from './CartScreen.Hooks';
import { styles } from './styles';
import { BOTTOM_TAB_CART_ICON } from '../../assets/assets';

const CartScreen = () => {

    const {
        topSpace,
    } = useScreenHooks();

    return (
        <View style={[styles.container, { paddingTop: topSpace }]}>
            <Image
                source={BOTTOM_TAB_CART_ICON}
                style={styles.iconStyle}
                resizeMode='contain'
            />

            <Text style={styles.nameText}>
                Cart
            </Text>
        </View>
    )
}

export default CartScreen