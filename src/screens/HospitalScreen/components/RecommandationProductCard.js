import { Image, StyleSheet, Text, TouchableOpacity, } from 'react-native'
import React, { memo, useCallback } from 'react'
import { ResponsiveSizeWp, screenWidth } from '../../../helpers/responsive'
import { COLOR } from '../../../helpers/colors'
import { fontFamily } from '../../../helpers/fonts'
import { CURRENCY_SYMBOL } from '../../../helpers/helper'
import { showToast } from '../../../helpers/helper-functions'

const CARD_WIDTH = (screenWidth - ResponsiveSizeWp(15 * 2 + 13 * 2 + 10)) / 2;

const RecommandationProductCard = ({
    data,
}) => {

    const handleOnPress = useCallback(() => {
        showToast(data?.name);
    }, [data?.name])

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={handleOnPress}
            activeOpacity={0.9}
        >
            <Image
                source={data?.image}
                style={styles.productImage}
                resizeMode='cover'
            />

            <Text style={styles.productName} numberOfLines={2}>
                {data?.name}
            </Text>

            <Text style={styles.priceText}>
                {CURRENCY_SYMBOL}{data?.price}
            </Text>
        </TouchableOpacity>
    )
}

export default memo(RecommandationProductCard)

const styles = StyleSheet.create({
    container: {
        width: CARD_WIDTH,
        backgroundColor: COLOR.WHITE,
        borderRadius: ResponsiveSizeWp(10),
        marginHorizontal: ResponsiveSizeWp(5),
        padding: ResponsiveSizeWp(10),
        paddingBottom: ResponsiveSizeWp(5),
    },
    productImage: {
        height: CARD_WIDTH - ResponsiveSizeWp(20),
        aspectRatio: 1,
        alignSelf: 'center',
    },
    productName: {
        fontFamily: fontFamily.Medium,
        fontSize: ResponsiveSizeWp(13),
        color: COLOR.BLACK,
        marginTop: ResponsiveSizeWp(7),
    },
    priceText: {
        fontFamily: fontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(13),
        color: `rgba(255,116,10,1)`,
    },
})